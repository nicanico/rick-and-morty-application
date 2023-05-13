'use strict'

// Lista todos os personagens com base na pagina
export const getAllCharacters = async () => {
    const url = `https://rickandmortyapi.com/api/character`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data.results)
    return data.results

}

// Lista todas as localizações com base na pagina
export const getAllLocations = async () => {
    const url = `https://rickandmortyapi.com/api/location`

    const response = await fetch(url)

    const data = await response.json()

    // console.log(data.results)
    return data.results
}

// Lista todos os episodios com base na pagina
export const getAllEpisodes = async () => {
    const url = `https://rickandmortyapi.com/api/episode`

    const response = await fetch(url)

    const data = await response.json()

    // console.log(data.results)
    return data.results
}


// Filtra o personagem, por enquanto apenas pelo nome
export const getFilteredCharacter = async (name) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data.results)
    return data.results

}

// Filtra a localização, por enquanto apenas pelo nome
export const getFilteredLocation = async (name) => {
    const url = `https://rickandmortyapi.com/api/location/?name=${name}`

    const response = await fetch(url)

    const data = await response.json()

    // console.log(data.results)
    return data.results

}

// pega a quantidade de personagens, episodios e locais da serie
export const dataApi = async () =>{
    const urlLocation = `https://rickandmortyapi.com/api/location`
    const urlCharacter = `https://rickandmortyapi.com/api/character`
    const urlEpisodies =  `https://rickandmortyapi.com/api/episode`

    const responseLocation = await fetch(urlLocation)
    const responseCharacter = await fetch(urlCharacter)
    const responseEpisodies = await fetch(urlEpisodies)
    
    const dataLocation = await responseLocation.json()
    const dataCharacter = await responseCharacter.json()
    const dataEpisodies = await responseEpisodies.json()

    // console.log(dataLocation.info.count, dataCharacter.info.count, dataEpisodies.info.count)
    
    const data = {}
    
    data.localizacoes = dataLocation.info.count
    data.personagens =  dataCharacter.info.count
    data.episodios = dataEpisodies.info.count
    
    // console.log(data)
    return data
}

// getAllCharacters()
// getAllEpisodes()
// getAllLocations()
// dataApi()
