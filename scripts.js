const key = "10656625b23c270fbc7009a0c39096a0"

function colocarDadosNaTabela (dados) {
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".text-forecast").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity (city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTabela(dados)
}

function cliqueNoBotao () {
    const cidade = document.querySelector (".input-city").value

    searchCity(cidade)
}