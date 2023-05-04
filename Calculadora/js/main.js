class Calculadora {
    constructor() {
        this.display = document.querySelector('#calc')
        this.symbolsTextArray = ['C', '(', ')', "/", ',', '↩', '*', '+', '-', '=', 'Backspace']
        this.symbolsKeysObj = {dvs: "/", x: "*", plus: "+", minus: "-", dot: ",", equal: "Enter"}
        this.arrowArray = ["ArrowUp", "ArrowRight", "ArrowDown",  "ArrowLeft"]
        this.numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        this.resultTrue = false}

    init = () => {
        this.ListenerKey()
        this.computeClick()
    }

    ListenerKey = () => {
        document.addEventListener('keydown', (e) => {
            this.display.focus()
            if (this.resultTrue) {
                if (this.numArray.includes(e.key)) {
                    this.resultTrue = false
                    this.display.value = ''
                } 
                if (Object.values(this.symbolsKeysObj).includes(e.key)){
                    this.resultTrue = false
                }
            }
            if (Object.values(this.symbolsKeysObj).includes(e.key)) {
                if (this.display.value === '') this.display.blur()
                for (let chave of Object.keys(this.symbolsKeysObj)) {
                    if (this.symbolsKeysObj[chave] === e.key) {
                        const sym = document.getElementById(chave)
                        sym.classList.add("hover-btn")
                        setTimeout(() => {
                            sym.classList.remove("hover-btn")
                        }, 200)
                        if (e.key === "Enter") return this.result()
                        return
                        
                    }
                }
            } else if (e.key in this.numArray ){
                const sym = document.getElementById(`n${e.key}`)
                sym.classList.add("hover-btn")
                setTimeout(() => {
                    sym.classList.remove("hover-btn")
                }, 200)
                return 
                    
            } else if ( e.key == 'Backspace') return

            if (!this.resultTrue || this.arrowArray.includes(e.key)) return

            this.display.blur() 
            
        })

        this.display.addEventListener('keypress', (e) => {
            if (Object.values(this.symbolsKeysObj).includes(e.key) 
                && Object.values(this.symbolsKeysObj).includes(this.display.value.slice(-1))
                || !Object.values(this.symbolsKeysObj).includes(e.key)
                && !this.numArray.includes(e.key)) this.display.blur()
        })
    }

    computeClick = () => {
        document.addEventListener('click', (e) => {
            const el = e.target
            if (el.classList.contains('btn')){

                if (el.innerText ==='C') return this.clear() 
                if (el.innerText === '=') return this.result() 
                if (el.innerText === '↩' ) return this.del_case() 

                if (Object.values(this.symbolsTextArray).includes(el.innerText)){

                    if (this.display.value === '' 
                        || Object.values(this.symbolsKeysObj).includes(this.display.value.slice(-1))) return
                }
                        
            
                if (this.resultTrue) {
                    if (el.innerText in this.numArray) {
                        this.resultTrue = false
                        return this.display.value = el.innerText
                    } else{
                    this.display.value += el.innerText
                    this.resultTrue = false
                }} else {
                    this.display.value += el.innerText
                }
                    
            }

            
        })
    }
    
    clear = () => {
        this.display.value = ''
        this.resultTrue = false
    }

    del_case = () => {
        this.display.value = String(this.display.value).slice(0, -1)
        this.resultTrue = false
    }

    result = () => {
        try{
            const geval = eval(this.display.value)
            if (typeof geval == "number") {
                this.display.value = eval(this.display.value)
                this.resultTrue = true
            } else alert('Conta inválida!')
        } catch (e) {
            alert('Conta inválida!')
            this.display.value = ''
            
        }
        
    }
}

calc =  new Calculadora()
calc.init()

