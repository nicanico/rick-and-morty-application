'use strict'

// Lista todos os personagens com base na pagina
export const getAllCharacters = async () => {
    const url = `https://rickandmortyapi.com/api/character`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)
    return data

}

// Lista todas as localizações com base na pagina
export const getAllLocations = async () => {
    const url = `https://rickandmortyapi.com/api/location`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)
    return data
}

// Lista todos os episodios com base na pagina
export const getAllEpisodes = async () => {
    const url = `https://rickandmortyapi.com/api/episode`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)
    return data
}


// Filtra o personagem, por enquanto apenas pelo nome
export const getFilteredCharacter = async (name) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)
    return data

}

// Filtra a localização, por enquanto apenas pelo nome
export const getFilteredLocation = async (name) => {
    const url = `https://rickandmortyapi.com/api/location/?name=${name}`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)
    return data

}

getAllCharacters()