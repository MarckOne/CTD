let valorNome = document.querySelector('#nomePersonagem')
let valorLocal = document.querySelector('#nomeLocal')
let valorUrl = document.querySelector('#imagemPersonagem')
let valorBotao = document.querySelector('#botaoAdicionar')
let divTeste = document.querySelector('.teste')
let p = document.createElement("p");
let img = document.createElement("img")
let h3 = document.createElement("h3")
let sDiv = document.querySelectorAll('div')
let sImg = document.querySelectorAll('img')
let div = document.createElement('div')







function adicionarNovo() {

    let valorNomeR = document.createTextNode(valorNome.value)
    let valorLocalR = document.createTextNode(valorLocal.value)
    let valorUrlR = valorUrl.value

    div.setAttribute('id', 'blocks')
    div.appendChild(img)
    img.setAttribute('src', valorUrlR)
    img.setAttribute('class', 'imagem')
    div.appendChild(h3)
    h3.appendChild(valorNomeR)
    div.appendChild(p)
    p.appendChild(valorLocalR)
    divTeste.appendChild(div)
}


window.onload = function () {

    valorBotao.addEventListener('click', function (event) {
        event.preventDefault()
        adicionarNovo().innerHTML
    })
}

