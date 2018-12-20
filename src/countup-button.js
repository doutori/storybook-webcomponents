import { LitElement, html } from '@polymer/lit-element';

class CountupButton extends LitElement {
  static get properties() {
    return {
      val: { type: Number },
      increaseNum: { type: Number },
    };
  }

  constructor() {
    super();
    this.increaseNum = 1;
    this.val = 0;
  }

  render() {
    console.log('render');
    return html`
        <style> button {
            -webkit-appearance: none;
            padding: 5px 20px;
            border: none;
            background: #fd0;
        }
        </style>
        <button id="button" @click="${this.clickHandler}">+${this.increaseNum}</button>
        <p>${this.val}</p>`;
  }

  clickHandler() {
    this.val += this.increaseNum
  }
}

customElements.define('countup-button', CountupButton);