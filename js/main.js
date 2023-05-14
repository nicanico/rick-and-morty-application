import { getAllCharacters, getAllLocations, getAllEpisodes, dataApi, getFilteredCharacter, getAllCharactersPage, getAllPage, getFilteredLocation, getFilteredEpisode} from "./fetch-api.js";
import './components/cards.js'

const dadosGeraisApi = await dataApi()
const personagens = await getAllCharacters()
const localizacao = await getAllLocations()
const episodios = await getAllEpisodes()


const cardDoPersonagem = (personagens) => {

    const card = document.createElement('card-persona')
    card.classList.add('card-person')

    card.image = personagens.image
    card.name = personagens.name
    card.gender = personagens.gender
    card.location = personagens.location.name
    card.origin = personagens.origin.name
    card.status = personagens.status
    card.species = personagens.species
    

    return card
    
}

const cardLocalizacao = (localizacao) => {
    const card = document.createElement('card-planet')
    card.classList.add('cardLocali')

    card.planet = localizacao.name
    card.type = localizacao.type
    card.dimension = localizacao.dimension

    return card

}

const cardEpisode = (episodios) => {
    const card = document.createElement('card-planet')
    card.classList.add('cardLocali')

    card.planet = episodios.name
    card.type = episodios.air_date
    card.dimension = episodios.episode

    return card

}

export const carregarTodosOsEps = () => {
    const container = document.getElementById('divEpisodios')
    const cardsEpi = episodios.map(cardEpisode)

    container.replaceChildren(...cardsEpi)
}

export const carregarTodasAsLocalizacoes = () => {
    const container = document.getElementById('divLocalizacao')
    const cardsLocal = localizacao.map(cardLocalizacao)

    container.replaceChildren(...cardsLocal)
}

export const carregarTodosOsPersonagens = () => {
    const container = document.getElementById('divPersonagens')
    const cardsPerson = personagens.map(cardDoPersonagem)

    container.replaceChildren(...cardsPerson)
    
}

export const buscarPersonagem = () => {

    const botaoCarregarMais = document.getElementById('carregarMais')
    
    const inputSearch = document.getElementById('inputPersonagens')

    const container = document.getElementById('divPersonagens')

    inputSearch.addEventListener('keyup', async function(e) {
        if(e.key === 'Enter') {
            e.preventDefault()
            console.log(inputSearch.value)
            let characterName = inputSearch.value
            if(characterName == ' '){
                console.log('vazio')
            } else {
                botaoCarregarMais.style.display = 'none'
                const filtredCharacters = await getFilteredCharacter(characterName)
                const carregarCardsFiltrados = filtredCharacters.map(cardDoPersonagem)
                container.replaceChildren(...carregarCardsFiltrados)
            }
        }
    })
}

export const buscarLocalizacao = () => {

    const botaoCarregarMais = document.getElementById('carregarMais')
    
    const inputSearch = document.getElementById('inputLocalizacao')

    const container = document.getElementById('divLocalizacao')

    inputSearch.addEventListener('keyup', async function(e) {
        if(e.key === 'Enter') {
            e.preventDefault()
            console.log(inputSearch.value)
            let locationName = inputSearch.value
            if(locationName == ' '){
                console.log('vazio')
            } else {
                botaoCarregarMais.style.display = 'none'
                const filtredLocation = await getFilteredLocation(locationName)
                const carregarCardsFiltrados = filtredLocation.map(cardLocalizacao)
                container.replaceChildren(...carregarCardsFiltrados)
            }
        }
    })
}

export const buscarEpisodio = () => {

    const botaoCarregarMais = document.getElementById('carregarMais')
    
    const inputSearch = document.getElementById('inputEpisodios')

    const container = document.getElementById('divEpisodios')

    inputSearch.addEventListener('keyup', async function(e) {
        if(e.key === 'Enter') {
            e.preventDefault()
            console.log(inputSearch.value)
            let episodeName = inputSearch.value
            if(episodeName == ' '){
                console.log('vazio')
            } else {
                botaoCarregarMais.style.display = 'none'
                const filtredEpisode = await getFilteredEpisode(episodeName)
                const carregarCardsFiltrados = filtredEpisode.map(cardEpisode)
                container.replaceChildren(...carregarCardsFiltrados)
            }
        }
    })
}

export const filtrarPorStatusEGenero = () => {
    
}

export const carregarMaisItens = (path) => {

    const container = document.getElementById('divPersonagens')
    const containerLocalization = document.getElementById('divLocalizacao')
    const containerEps = document.getElementById('divEpisodios')

    const botaoCarregarMais = document.getElementById('carregarMais')

    let page = 1

    botaoCarregarMais.onclick = async () => {
        if(path == '/character'){
            if(page < dadosGeraisApi.pageCharacter){
                page++
                console.log(path.substring(1,100))
                let card = await getAllCharactersPage(page)
                let carregarNovosPersonagens = card.map(cardDoPersonagem)
                container.append(...carregarNovosPersonagens)
            } else {
                botaoCarregarMais.style.display = 'none'
            }
        } else if(path == '/location') {
            if(page < dadosGeraisApi.pageLocalizacoes){
                page++
                const pathName = path.substring(1,100)
                let card = await getAllPage(pathName, page) 
                let carregarNovasLocalizacoes = card.map(cardLocalizacao) 
                console.log(carregarNovasLocalizacoes)
                containerLocalization.append(...carregarNovasLocalizacoes)
                console.log(card)
                console.log(pathName)
            } else {
                botaoCarregarMais.style.display = 'none'
            }
            console.log('estou em location')
        } else if(path == '/episode'){
            if(page < dadosGeraisApi.pageEpisodios){
                page++
                const pathName = path.substring(1,100)
                let card = await getAllPage(pathName, page) 
                let carregarNovosEps = card.map(cardEpisode)
                console.log(carregarNovosEps)
                containerEps.append(...carregarNovosEps)
                console.log(card)
                console.log(pathName)
            } else {
                botaoCarregarMais.style.display = 'none'
            }
            console.log('estou em episode')
        }
        
        console.log('click')
    }
    
}

export const listarDadosDaApi = async () => {
    const container = document.getElementById('dados')

    const cardGeralHome = document.createElement('div')
    cardGeralHome.classList.add('card-dados-serie')

    const divTituloDados = document.createElement('div')
    divTituloDados.classList.add('titulo-dados')

    const tituloPersonagens = document.createElement('span')
    tituloPersonagens.textContent = 'Personagens'

    const tituloLocalizacao = document.createElement('span')
    tituloLocalizacao.textContent = 'Localizações'

    const tituloEpisodios = document.createElement('span')
    tituloEpisodios.textContent = 'Episodios'

    divTituloDados.append(tituloPersonagens, tituloLocalizacao, tituloEpisodios)

    const dados = document.createElement('div')
    dados.classList.add('dados')

    const dadosPersonagens = document.createElement('span')
    dadosPersonagens.textContent = dadosGeraisApi.personagens

    const dadosLocalizacao = document.createElement('span')
    dadosLocalizacao.textContent = dadosGeraisApi.localizacoes

    const dadosEpisodios = document.createElement('span')
    dadosEpisodios.textContent = dadosGeraisApi.episodios

    dados.append(dadosPersonagens, dadosLocalizacao, dadosEpisodios)

    cardGeralHome.append(divTituloDados, dados)
    container.append(cardGeralHome)
}


