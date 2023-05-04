'use strict'

class cardGeral extends HTMLElement {
    constructor() {
        super();
        
        this.shadow = this.attachShadow({mode: open})
        this.namePersonagem = 'Nome do Personagem'
        this.status = 'Status do personagem'
        this.especie = 'Especie'
        this.genero = 'Genero'
        this.origem = 'Origem'
        this.foto = null
    }

    static get observedAttributes(){
        return ['']
    }
}

customElements.define('card-geral', card);