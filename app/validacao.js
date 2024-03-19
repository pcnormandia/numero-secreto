function verificaValidade(chute) {
    const numero = +chute;

    if(chuteEhInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }
    if(numeroEhPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor invalido. Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return        
    }    
   
    if(numero === numeroSorteado) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSorteado}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if (numero > numeroSorteado) {
            elementoChute.innerHTML += `
            <div>O número secreto é menor<i class="fa-solid fa-arrow-down-long"></i></div>
            `
    } else{
        elementoChute.innerHTML += `
            <div>O número secreto é maior<i class="fa-solid fa-arrow-up-long"></i></div>
            `
    }
}

function chuteEhInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroEhPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', evento => {
    if(evento.target.id == "jogar-novamente"){
        window.location.reload();
    }
})