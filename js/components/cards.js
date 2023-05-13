'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})

        this.image = null
        this.name = 'Nome do personagem'
        this.gender = 'Genero'
        this.location = 'localização'
        this.origin = 'Localização de Origem'
        this.status = 'desconhecido'
        this.statusColor = 'background-color: coral'
        this.species = 'desconhecida'
    }

    static get observedAttributes(){
        return ['name', 'image', 'gender', 'location', 'origin', 'status', 'statusColor', 'species']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.style())
    }

    component() {
        // const card = document.createElement('div')
        // card.classList.add('card-person')

        // const photo = document.createElement('img')
        // photo.src = this.image

        // const content = document.createElement('div')
        // card.classList.add('content-geral')

        // const namePerson = document.createElement('p')
        // namePerson.classList.add('name')
        // namePerson.textContent = this.name

        // const statusCondition = document.createElement('div')
        // card.classList.add('content-geral')

        // const statusPerson = document.createElement('p')
        // statusPerson.classList.add('status-person')
        // statusPerson.textContent = this.status

        // const speciePerson = document.createElement('p')
        // speciePerson.classList.add('species-person')
        // speciePerson.textContent = this.species

        // statusCondition.append(statusPerson, speciePerson)

        // const gender = document.createElement('p')
        // gender.classList.add('gender')
        // gender.textContent = this.gender

        // const origin = document.createElement('p')
        // origin.classList.add('origin-name')
        // origin.textContent = this.origin

        // const location = document.createElement('p')
        // location.classList.add('location-name')
        // location.textContent = this.location

        // content.append(namePerson, statusCondition, gender, origin)

        // card.append(photo, content)

        const card = document.createElement('div')
        card.classList.add('card-person')

        const photo = document.createElement('img')
        photo.src = this.image

        const contentGeral = document.createElement('div')
        contentGeral.classList.add('content-geral')

        const namePerson = document.createElement('p')
        namePerson.classList.add('name')

        const spanName = document.createElement('span')
        spanName.textContent = 'Name: '

        namePerson.append(spanName)
        namePerson.textContent = this.name

        const statusCondition = document.createElement('div')
        statusCondition.classList.add('status-condition')

        const statusColor = document.createElement('div')
        statusColor.classList.add('status-color-person')

        if(this.status == 'Dead'){
            statusColor.style.background = '#cc0000'
        } else if(this.status == 'Alive'){
            statusColor.style.background = '#287233'
        } else if(this.status == 'Unknown'){
            statusColor.style.background = '#c7c7c7'
        } else {
            statusColor.style.background = '#6bd3ff'
        }

        const statusPerson = document.createElement('p')
        statusPerson.classList.add('status-person')

        const spanLine = document.createElement('span')
        spanLine.textContent = '-'

        statusPerson.append(spanLine)
        statusPerson.textContent = this.status

        const speciesPerson = document.createElement('p')
        speciesPerson.classList.add('species-person')
        speciesPerson.textContent = this.species

        statusPerson.append(spanLine)
        statusPerson.textContent = this.status

        statusCondition.append(statusColor, statusPerson, speciesPerson)

        const genderPerson = document.createElement('p')
        genderPerson.classList.add('gender')

        const spanGender = document.createElement('span')
        spanGender.textContent = 'Gender: '

        genderPerson.append(spanGender)
        genderPerson.textContent = this.gender

        const originPerson = document.createElement('p')
        originPerson.classList.add('origin-name')

        const spanOrigin = document.createElement('span')
        spanOrigin.textContent = 'Origin: '

        originPerson.append(spanOrigin)
        originPerson.textContent = this.origin

        const locationPerson = document.createElement('p')
        locationPerson.classList.add('location-name')

        const spanLocation = document.createElement('span')
        spanLocation.textContent = 'First seen in: '

        locationPerson.append(spanOrigin)
        locationPerson.textContent = this.location

        contentGeral.append(namePerson, statusCondition, genderPerson, originPerson, locationPerson)

        card.append(photo, contentGeral)

        return card
    }

    style() {
        const style = document.createElement('style')
        style.textContent = `
        .card-person{
            display: flex;
            gap: 20px;
            align-items: center;
            width: 370px;
            height: 170px;
            background-color: #252525;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 20px;
            padding: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-left: 1px solid rgba(255, 255, 255, 0.5);
        
        }
        .card-person img{
            width: 130px;
            height: 130px;
            margin-right: 19px;
            
        }
        .card-person p{
            margin: 0px;
        }
        .name{
            font-size: 1.5rem;
            font-weight: bolder;
            color: #B2DF28;
        }
        .status-condition{
            display: flex;
            gap: 5px;
            align-items: center;
        }
        .status-color-person{
            width: 10px;
            height: 10px;
            background-color: tomato;
            border-radius: 20px;
        } 
        `
        return style
    }

}

customElements.define('card-persona', card)
