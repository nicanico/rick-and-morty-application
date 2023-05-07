'use strict'

class card extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }
}