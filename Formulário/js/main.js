class ValidateForm {
    constructor() {
        this.form = document.querySelector(".form")
        this.symbolsnum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Backspace']
        this.classList = ["name", "surname", "cpf", "user", "password", "repeat-password"]
        this.eyesShow = false
        this.events()
    }

    events() {
        this.beginListener()

        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })

        this.form.addEventListener("click", e => {
            const el = e.target

            for (let cl of this.classList) {
                if (el.classList.contains(cl)) this.campValid()
            }
            
            if (el.classList.contains("lnr-eye")) {
                const passwordInput = document.querySelector(".password")
                const repeatPassword = document.querySelector(".repeat-password")

                if (!this.eyesShow) {
                    passwordInput.setAttribute("type", "text")
                    repeatPassword.setAttribute("type", "text")

                    el.classList.add("lnr-eye-clicked")
                    this.eyesShow = true
                } else if (this.eyesShow) {
                    passwordInput.setAttribute("type", "password")
                    repeatPassword.setAttribute("type", "password")

                    el.classList.remove("lnr-eye-clicked")
                    this.eyesShow = false
                }
                
                
            }
        })
    }

    beginListener() {
        const elcpf = this.form.querySelector(".cpf")
        elcpf.addEventListener("keydown", (e) => {  
            if (e.key === "Backspace" || e.ctrlKey) return 
            if (!e.key.match("[0-9]")) return e.preventDefault() 
            if (elcpf.value.length == 3 
                || elcpf.value.length == 7) elcpf.value += '.'
            else if (elcpf.value.length == 11) elcpf.value += "-"
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.campValid()) {
            alert("Formulário enviado!")
        }
    }

    campValid() {
        let valid = true

        const errorTexts = document.querySelectorAll(".error-text")
        for (let error of errorTexts) {
            error.remove()
        }

        for (let camp of this.form.querySelectorAll(".valid")){
            if (!camp.value) {
                this.createError(camp, "*Campo Obrigatório", "b")
                valid = false
            }

            if (camp.classList.contains("cpf"))
                if (!this.validaCPF(camp)) valid = false

            if (camp.classList.contains("user"))
                if (!this.validaUser(camp)) valid = false

            if (camp.classList.contains("password"))
                if (!this.validaPassword(camp)) valid = false
            
            if (camp.classList.contains("repeat-password"))
                if (!this.validaRepeatpassword(camp)) valid = false
        }

        return valid
    }

    validaCPF(camp) {
        const cpf = new CpfV(camp.value)
        const valid = cpf.validate() 
        if (!valid && camp.value) {
            this.createError(camp, "CPF Inválido!", "a")
            return false
        }
        return true
        
    }

    validaUser(camp) {
        const user = camp.value
        if (user.length < 3 || user.length > 12 ) {
            this.createError(camp, "Usuário deve conter de 3 a 12 caracteres!", "a")
            return false
        }

        if (!(user.match(/^[a-zA-Z0-9]+$/g))) {
            this.createError(camp, "Usuário não pode ter caracteres especiais!", "a")
        }
        return true
    }

    validaPassword(camp) {
        const password = camp.value
        if (password.length < 6 || password.length > 12) {
            this.createError(camp, "Sua senha deve conter de 6 a 12 caracteres!", "a")
            return false
        }

        return true
    }

    validaRepeatpassword(camp) {
        const password = this.form.querySelector(".password").value
        const rpassword = camp.value
        if (password !== rpassword && rpassword) {
            this.createError(camp, "Senha incorreta!", "a")
            return false
        }

        return true

    }

    createError(camp, msg, bORa) {
        const div = document.createElement("div")
        div.innerHTML = msg
        div.classList.add("error-text")
        if (bORa.toLowerCase() === "b") return camp.insertAdjacentElement("beforebegin", div)
        if (bORa.toLowerCase() === "a") return camp.insertAdjacentElement("afterend", div)
    }

    
}

const validateF = new ValidateForm()