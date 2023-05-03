import gerarSenha from "./gerarSenha";

export const qtd = document.querySelector('.qtd')
export const checkMa = document.querySelector('.checkMa')
export const checkMi = document.querySelector('.checkMi')
export const checkN = document.querySelector('.checkN')
export const checkS = document.querySelector('.checkS')

export const senhaGerada = () => {
    

    return gerarSenha(qtd.value, checkMa.checked, checkMi.checked, checkN.checked, checkS.checked)
}
