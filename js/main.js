import { getAllCharacters, getAllLocations, getAllEpisodes, dataApi} from "./fetch-api.js";
import './components/cards.js'

const dadosGeraisApi = await dataApi()
const personagens = await getAllCharacters()
console.log(personagens)

const cardDoPersonagem = (personagens) => {
    console.log(personagens)

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

export const carregarTodosOsPersonagens = () => {
    const container = document.getElementById('divPersonagens')
    const cardsPerson = personagens.map(cardDoPersonagem)

    container.replaceChildren(...cardsPerson)
    console.log(container)
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
    console.log(cardGeralHome)
    container.append(cardGeralHome)
}

// cardDoPersonagem()
// carregarTodosOsPersonagens()

