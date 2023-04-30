'use strict'

class card extends HTMLElement {
    constructor() {
        super();
        
        this.shadow = this.attachShadow({mode: open})
    }
}

customElements.define('card-geral', card);