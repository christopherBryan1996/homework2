class Footer extends HTMLElement{
    constructor(){
        super();
        this.shadow=this.attachShadow({mode:'open'});
        console.log('helo');
    };
    connectedCallback(){
    };
};

customElements.define('footer-homework',Footer);