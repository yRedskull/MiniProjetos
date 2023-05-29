const mongoose = require('mongoose')
const validator = require('validator')
const { dataAgora } = require('../static/static')

const ContatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default:''},
    email: {type: String, required: false, default:''},
    telefone: {type: String, required: false, default:''},
    criadoEm: {type: String, default: dataAgora()
    },
})

const ContatoModel = mongoose.model('Contato', ContatoSchema)

class Contato {
    constructor(body) {
        this.body = body
        this.errors = []
        this.user = null
    }

    async register() {
        this.valida()

        if(this.errors.length > 0) return 

        this.contato = await ContatoModel.create(this.body)

    }

    valida() {
        this.cleanUp()

        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')
        if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.')
        if(!this.body.email && !this.body.telefone) this.errors.push('Preencha um desses campos pelo menos para continuar: E-mail | Telefone')
    }

    cleanUp() {
        for (let key in this.body) {
            if(typeof this.body[key] !== 'string') this.body[key] = '' 
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone,
        }
    }
}

module.exports = Contato