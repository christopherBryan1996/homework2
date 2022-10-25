import {LitElement,html} from 'lit';
import { separateString } from '../action/stringAnalysis';

class Main extends LitElement{
    constructor(){
        super();
        this.valueInput='';
        this.trueTable=[];
    }
    render(){
        return html`
            <div>
                <h2>Ejemplos:</h2>
                <ul>
                    <li>p</li>
                    <li>~p</li>
                    <li>~(p)</li>
                    <li>~(~p)</li>
                    <li>p ∧ q</li>
                </ul>
            </div>
            <form>
                <input type="text" value="${this.valueInput}" @change="${this.handleOnchangeValue}"/>
                <input type="submit" @click="${this.handleOnClickAnalis}"/>
            </form>
        `
    }
    handleOnClickAnalis(e){
        e.preventDefault()
        this.trueTable= separateString(this.valueInput)
        console.log(this.trueTable)
    }
    handleOnchangeValue(e){
        this.valueInput=e.target.value
    }
};

customElements.define('main-homework',Main)