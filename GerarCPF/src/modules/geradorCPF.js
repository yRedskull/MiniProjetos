import gerarCPF from './gerarCPF'

export default class GerarCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max-min) + min))
    }

    formatar(cpfnovo) {
        return (
            cpfnovo.slice(0, 3) + '.' +
            cpfnovo.slice(3, 6) + '.' +
            cpfnovo.slice(6, 9) + '-' +
            cpfnovo.slice(9, 11)
        )
    }

    gerarNovoCPF() {
        const cpfnovo = new gerarCPF(this.rand())

        return this.formatar(cpfnovo.generate())
    }
}