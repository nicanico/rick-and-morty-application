
'use strict'

import { listarDadosDaApi, carregarTodosOsPersonagens } from './main.js'

const routes = {
    '/in': 'index.html',
    '/' : '/pages/home.html',
    '/personagens' : '/pages/personagens.html',
    '/localizacao' : '/pages/localizacao.html',
    '/episodio' : '/pages/episodio.html'
}

const route = async () => {

    window.event.preventDefault()

    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    
    const response = await fetch(routes[path])
    const html = await response.text()

    // console.log(html)

    console.log(path)
    
    document.getElementById('root').innerHTML = html
    
    if(window.location.pathname == '/'){
        listarDadosDaApi()
    } else if(window.location.pathname == '/personagens'){
        console.log(window.location.pathname)
        carregarTodosOsPersonagens()
    }

}

window.route = route