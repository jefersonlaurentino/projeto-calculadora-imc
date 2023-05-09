// calculo IMC
var peso = document.querySelector('input#ikg')
var altura = document.querySelector('input#ialt')
var mos = document.querySelector('p#calcu')

function calcular() {
    var p = Number(peso.value)
    var a = Number(altura.value)

    var rimc = p / (a * a)
    var resimc = rimc.toFixed(2)

    var rkg1 = 18.5 * (a * a)
    var res1 = rkg1.toFixed(2)

    var rkg2 = 24.9 * (a * a)
    var res2 = rkg2.toFixed(2) 

    if (resimc < 18.5) {
        mos.innerHTML = `<span style="color: red;">${resimc}</span><br>você estar abaixo do peso!<br>seu peso ideal é entre<br> <strong>(${res1}Kg é ${res2}Kg)</strong>`
    } else if (resimc <= 24.9) {
        mos.innerHTML = `<span style="color: green;">${resimc}</span><br>você estar com o peso normal!<br>seu peso ideal é entre<br> <strong>(${res1}Kg é ${res2}Kg)</strong>`
    } else if (resimc <= 29.9) {
        mos.innerHTML = `<span style="color: rgb(244, 208, 63);">${resimc}</span><br>você estar acima do peso!<br>seu peso ideal é entre<br> <strong>(${res1}Kg é ${res2}Kg)</strong>`
    } else if (resimc <= 34.9) {
        mos.innerHTML = `<span style="color: red;">${resimc}</span><br>você estar com obesidade (grau I)<br>seu peso ideal é entre<br> <strong>(${res1}Kg é ${res2}Kg)</strong>`
    } else if (resimc <= 39.9) {
        mos.innerHTML = `<span style="color: red;">${resimc}</span><br>você estar com obesidade (grau: II)<br>seu peso ideal é entre<br> <strong>(${res1}Kg é ${res2}Kg)</strong>`
    } else {
        mos.innerHTML = `<span style="color: red;">${resimc}</span><br>você estar com obesidade (grau: III)<br>seu peso ideal é entre<br> <strong>(${res1}Kg é ${res2}Kg)</strong>`
    }
}

function testeclick() {
    if (teste.style.display == 'none') {
        teste.style.display = 'block'
    } else {
        teste.style.display = 'block'
    }
}