function CpfV() {
    this.display = document.getElementById("cpf-txt")
    this.button = document.getElementById("validate")
    this.result = document.getElementById("result")

    this.init = () => {
            this.listenerKey()
            this.computeClick()
    }

    this.listenerKey = () => {
        document.addEventListener('keydown', (e) => {
            const el = e.target
            this.display.focus()
            if (el.id == "cpf-txt") {
                if (e.keyCode == 8 || e.ctrlKey) return
                if (!e.key.match(/[0-9]/)) return e.preventDefault()
                else this.typing()
            }
            
        })
    }

    this.computeClick = () => {
        document.addEventListener('click', (e) => {
            const el = e.target
            if (el.id === "validate") this.validate()
            if (el.id === "cpf-txt") this.result.innerText = ''
        })
    }

    this.typing = () => {
        this.result.innerText = ''
        if (this.display.value.length == 3 
            || this.display.value.length == 7) this.display.value += '.'
        else if (this.display.value.length == 11) this.display.value += "-"
        
    }


    this.validate = () => {
        if (this.display.value.length === 14){
        this.cpflimpo = this.display.value.replace(/\D+/g, '')
        this.cpfArray = this.cpflimpo.split('')
        this.finalsnum = this.cpfArray.splice(-2)

        let repeat = 0
        let lpast
        for (let l of this.cpflimpo) {
            if (l == lpast) {
                repeat += 1
            }
            lpast = l
        }
        if (repeat >= 10) {
            this.display.value = ""
            return alert("Valor inválido")
        }
        const valNumber1 = this.validateNumber1()
        const valNumber2 = this.validateNumber2()
        
        if (valNumber1 && valNumber2) {
            this.result.innerText = "CPF Válido!"
            return true
        }else{ 
            this.result.innerText = "CPF Inválido!" 
            return false
        } 
    } else {
        this.result.innerText = ""
        alert('Valor Inválido!!!')

    }
}

    this.validateNumber1 = () => {
        let cont = 10
        
        if (this.cpfArray.length > 0){
        const mult = []
        for (let valor of this.cpfArray) {
            
            mult.push(valor*cont)
            cont--
        }
        const sum = mult.reduce((soma, valor) => soma += valor)
        this.firstn = 11 - (sum % 11)
        if (this.firstn > 9) this.firstn = 0
        return (this.finalsnum[0] == this.firstn)}
    }

    this.validateNumber2 = () => {
        let cont = 11

        if (this.cpfArray.length > 0){
        const mult = []
        this.cpfArray.push(this.firstn)
        for (let valor of this.cpfArray){
            mult.push(valor*cont)
            cont--
        }
        const sum = mult.reduce((soma, valor) => soma+=valor)
        this.secondn = 11 - (sum % 11)
        if (this.secondn > 9) this.secondn = 0
        return (this.finalsnum[1] == this.secondn)
    }
    }
    
}

const cpf = new CpfV()

cpf.init()
