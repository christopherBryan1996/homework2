import { LitElement, html, css} from 'lit'
class HeaderHm extends LitElement{
    static get styles(){
        return css`
            div{
                font-family: cursive;
                font-family: cursive;
                background: black;
                color: white;
            }
            h1,h2{
                margin: 0;
                text-align: center;
            }
            @media screen  and (max-width:600px) {
                h1,h2{
                    font-size: 28px;
                }
            }
            @media screen  and (max-width:400px) {
                h1,h2{
                    font-size: 23px;
                }
            }
        `
    }
    constructor(){
        super();
    };
    render(){
        return html`<div>
                    <h1>MATEMÁTICAS DISCRETAS</h1>
                    <h2>Tabla de verdad</h2>
                </div>
            `
    }
};

customElements.define('header-homework',HeaderHm);