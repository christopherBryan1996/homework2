import {LitElement,html,css} from 'lit';
import { separateString } from '../action/stringAnalysis';

class Main extends LitElement{
    static get styles(){
        return css`
            .info{
                display: flex;
                flex-direction: row;
                justify-content: center;
                margin: 8px 40px 0px;
            }
            .divTable{
                text-align: center;
            }
            p{
                border: 1px solid;
                padding: 2px 10px 6px;
                margin: 0;
                font-size: 2pc;
            }
        `
    }
    constructor(){
        super();
        this.valueInput='';
        this.trueTable=[];
    }
    _handleOnClickAnalis(e){
        e.preventDefault()
        let html=''
        this.trueTable= separateString(this.valueInput)
        this.trueTable.map((e)=>{
            html+=`
                <div class='divTable'>
                    <p>${e[0]}</p>
                    ${e[1].map((el)=>{
                        console.log(el)
                        return `
                            <p>${el}</p>
                        `
                    })}
                </div>
            `
        })
        this.renderRoot.querySelector('.info').innerHTML=html.replace(/,/g, "")
    }
    _handleOnchangeValue(e){
        this.valueInput=e.target.value
    }
    
    render(){
        console.log(this.status)
        return html`
            <div>
                <h2>Ejemplos:</h2>
                <ul>
                    <li>p</li>
                    <li>~p</li>
                    <li>~(p)</li>
                    <li>~(~p)</li>
                    <li>p ∧ q</li>
                    <li>p ∨ q</li>
                    <li>p ⨁ p</li>
                    <li>p ⟹ q</li>
                    <li>p ⟺ q</li>
                </ul>
            </div>
            <form>
                <input type="text" value="${this.valueInput}" @change="${this._handleOnchangeValue}"/>
                <input type="submit" @click="${this._handleOnClickAnalis}"/>
            </form>
            <div class="info"></div>
            
        `
    }
};

customElements.define('main-homework',Main)