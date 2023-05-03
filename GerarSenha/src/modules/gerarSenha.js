
const rand = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min)
}

const gerarLetraMa = () => String.fromCharCode(rand(65, 91))
const gerarLetraMi = () => String.fromCharCode(rand(97, 123))
const gerarN = () => String.fromCharCode(rand(48, 58))
const simbolos = String("!@#$%¨&*()_-+={[}]~;:.,")
const gerarS = () => simbolos[rand(0, simbolos.length)]


export default function gerarSenha(qtd, letraMa, letraMi, num, simb) {
    const senhaArray = []
    qtd = Number(qtd)

    for (let i = 0; i <= qtd; i++) {
        letraMa && senhaArray.push(gerarLetraMa())
        letraMi && senhaArray.push(gerarLetraMi())
        num && senhaArray.push(gerarN())
        simb && senhaArray.push(gerarS())
    }

    const senha = senhaArray.join("").slice(0, qtd)
    if (senha.length === qtd) return senha 
    else gerarSenha(qtd, letraMa, letraMi, num, simb)
}
