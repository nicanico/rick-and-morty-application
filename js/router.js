'use strict'

const routes = {
    '/' :  '/pages/home.html',
    '/personagens' : '/pages/personagens.html',
    '/localizacao' : '/pages/localizacao.html',
    '/episodio' : '/pages/episodio.html',
}

const route = async () => {

    window.event.preventDefault()

    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    
    const response = await fetch(routes[path])
    const html = await response.text()

    // console.log(html)

    // console.log(routes[path])
    
    document.getElementById('root').innerHTML = html
    
    
}

window.route = route