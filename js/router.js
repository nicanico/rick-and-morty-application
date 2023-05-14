
'use strict'

import { listarDadosDaApi, carregarTodosOsPersonagens, buscarPersonagem, carregarMaisItens, carregarTodasAsLocalizacoes, carregarTodosOsEps, buscarLocalizacao, buscarEpisodio } from './main.js'

const routes = {
    '/in': 'index.html',
    '/' : '/pages/home.html',
    '/character' : '/pages/personagens.html',
    '/location' : '/pages/localizacao.html',
    '/episode' : '/pages/episodio.html'
}

const route = async () => {

    window.event.preventDefault()

    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    
    const response = await fetch(routes[path])
    const html = await response.text()

    console.log(path)
    
    document.getElementById('root').innerHTML = html
    
    if(window.location.pathname == '/'){
        listarDadosDaApi()
    } else if(window.location.pathname == '/character'){
        carregarTodosOsPersonagens()
        buscarPersonagem()
        carregarMaisItens(path)
    } else if(window.location.pathname == '/location'){
        carregarTodasAsLocalizacoes()
        buscarLocalizacao()
        carregarMaisItens(path)
    } else if (window.location.pathname == '/episode'){
        carregarTodosOsEps()
        buscarEpisodio()
        carregarMaisItens(path)
    
    }

}

window.route = route