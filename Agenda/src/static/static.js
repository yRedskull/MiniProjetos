exports.dataAgora = () => {
    let data = new Date()
    let dia  = data.getDate().toString().padStart(2, '0')
    let mes  = (data.getMonth()+1).toString().padStart(2, '0')
    let ano  = data.getFullYear()
    let horas = data.getHours().toString().padStart(2, '0')
    let minutos = data.getMinutes().toString().padStart(2, '0')
    let segundos = data.getSeconds().toString().padStart(2, '0')
    let dataAgora = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`
    return dataAgora
}

console.log(exports.dataAgora())