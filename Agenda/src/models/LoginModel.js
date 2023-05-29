const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
    constructor(body) {
        this.body = body
        this.errors = []
        this.user = null
    }

    async login() {
        const userFind = await this.userFind()

        if(!userFind) return this.errors.push('Usuário não existe.')

        if (!bcryptjs.compareSync(this.body.password, userFind.password)){
            return this.errors.push('Senha inválida.')
        }

        this.user = userFind
    }

    async register() {
        await this.valida()

        if(await this.userFind()) this.errors.push('Usuário já existe.')

        if(this.errors.length > 0) return
        const salt = bcryptjs.genSaltSync()
        this.body.password = bcryptjs.hashSync(this.body.password, salt)
        this.user = await LoginModel.create(this.body)
    }

    async userFind() {
        const user = await LoginModel.findOne({email: this.body.email})
        return user
    }

    valida() {
        this.cleanUp()

        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')

        if(this.body.password.length < 3 || this.body.password.length > 50) this.errors.push('A senha precisa ter entre 3 e 50 caracteres.')
    }

    cleanUp() {
        for (let key in this.body) {
            if(typeof this.body[key] !== 'string') this.body[key] = '' 
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login