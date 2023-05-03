class CpfV {
    constructor(cpf) {
        this.cpf = cpf
    }
    validate = () => {
        if (this.cpf){
        this.cpflimpo = this.cpf.replace(/\D+/g, '')
        this.cpfArray = this.cpflimpo.split('')
        this.finalsnum = this.cpfArray.splice(-2)

        if (this.cpflimpo.length != 11) return false

        const valNumber1 = this.validateNumber1()
        const valNumber2 = this.validateNumber2()
        
        if (valNumber1 && valNumber2) {
            return true
        }else{ 
            return false
        } 
    }
}

    validateNumber1 = () => {
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

    validateNumber2 = () => {
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
