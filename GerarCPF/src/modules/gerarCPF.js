export default class CpfV {
    constructor(cpf) {
        this.cpf = cpf
    }

    generate() {
        if (this.cpf){
        this.cpfArray = this.cpf.split('')

        this.generatorN1()
        this.generatorN2()
        
        const finalsn = String(this.firstn) + String(this.secondn)
        return this.cpf + finalsn
        
    }
}

    generatorN1() {
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
        }
    }

    generatorN2() {
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
    }
    }
    
}
