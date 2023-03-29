function Tabuada() {
    let numero = document.getElementById("input-numero").value
    let resultado = document.getElementById("resultado")

    if (numero.length == 0) {
        alert("Digite um número na tela")    
    }
    else {
        resultado.innerHTML = ''
        for (let multiplicador = 1 ; multiplicador <= 10 ; multiplicador ++) {
            let resp = document.createElement('p')
            let calculo = numero * multiplicador
            resp.innerText = `${numero} x ${multiplicador} = ${calculo}`
            resultado.appendChild(resp)
        }
    }
}