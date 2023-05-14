import { getAllCharacters, getAllLocations, getAllEpisodes, dataApi, getFilteredCharacter, getAllCharactersPage} from "./fetch-api.js";
import './components/cards.js'

const dadosGeraisApi = await dataApi()
const personagens = await getAllCharacters()

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
    console.log(card)
    

    return card
    
}

export const carregarTodosOsPersonagens = () => {
    const container = document.getElementById('divPersonagens')
    const cardsPerson = personagens.map(cardDoPersonagem)

    container.replaceChildren(...cardsPerson)
    
}

export const buscarPersonagem = () => {

    const botaoCarregarMais = document.getElementById('carregarMaisPersonagens')
    

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

export const filtrarPorStatusEGenero = () => {
    
}

export const carregarMaisPersonagens = () => {

    const container = document.getElementById('divPersonagens')
    const botaoCarregarMais = document.getElementById('carregarMaisPersonagens')

    let page = 1

    botaoCarregarMais.onclick = async () => {
        if(page < dadosGeraisApi.pageCharacter){
            page++
            let card = await getAllCharactersPage(page)
            let carregarNovosPersonagens = card.map(cardDoPersonagem)
            console.log(carregarNovosPersonagens)
            container.append(...carregarNovosPersonagens)
            console.log(card)
        } else {
            botaoCarregarMais.style.display = 'none'
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

// cardDoPersonagem()
// carregarTodosOsPersonagens()

