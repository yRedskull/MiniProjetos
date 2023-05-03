import {senhaGerada, qtd, checkMa, checkMi, checkN, checkS} from './modules/pegarSenha'

import './assets/css/style.css'


document.addEventListener('click', e => {
    const el = e.target

    if (el.classList.contains('gerar')) {
        const display = document.querySelector(".display")
        const senha = senhaGerada()
        if (senha) {
            display.classList.add('display-style')
            display.innerHTML = senha
        } else if(!qtd.value){
            alert('Adicione a quantidade de caracteres que deseja.')
            display.innerHTML = ''
            display.classList.remove('display-style')
        } else if (!checkMa.checked && !checkMi.checked && !checkN.checked && !checkS.checked) alert('Selecione alguma das opções.')
    }
})

