import validator from "validator"

export default class Register {
    constructor(classForm) {
        this.form = document.querySelector(classForm)
        this.email = this.form.querySelector('input[name="email"]')
        this.password = this.form.querySelector('input[name="password"]')
        this.errors = false
    }

    init(){
        this.events()
    }

    events() {
        this.form.addEventListener('submit', e => {
            e.preventDefault()

            this.checkOnVal()

            if(!this.errors) e.target.submit()
        })

        this.email.addEventListener('keydown', e => this.checkOnVal())

        this.password.addEventListener('keydown', e => this.checkOnVal())
        this.password.addEventListener('keydown', e => this.checkOnVal())
    }

    checkOnVal() {
        const elError = document.querySelectorAll('.error')

        if(elError.length !== 0){
            elError.forEach(el => {
                el.remove()
            })
            this.errors = false
        }
        
        this.validate()
    }

    validate() {
        if(!validator.isEmail(this.email.value)) this.createError(this.email, '*E-mail inválido.', 'a', 'error-email-register')

        if(this.password.value.length < 3 || this.password.value.length > 50) this.createError(this.password, '*A senha precisa ter entre 3 e 50 caracteres.', 'a', 'error-password-register')
    }

    createError(camp, msg, bORa, cls=null) {
        const div = document.createElement("div")
        div.innerHTML = msg
        div.classList.add("text-danger", 'error')

        this.errors = true

        if (bORa.toLowerCase() === "b") return camp.insertAdjacentElement("beforebegin", div)
        if (bORa.toLowerCase() === "a") return camp.insertAdjacentElement("afterend", div)
    }
}