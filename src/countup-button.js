import { LitElement, html } from '@polymer/lit-element';

class CountupButton extends LitElement {
  static get properties() {
    return {
      val: { type: Number },
      increment: { type: Number },
    };
  }

  constructor() {
    super();
    this.increment = 1;
    this.val = 0;
  }

  render() {
    console.log('render');
    return html`
        <style> button {
            -webkit-appearance: none;
            padding: 5px 20px;
            border: none;
            background: #9f0;
        }
        </style>
        <button id="button" @click="${this.clickHandler}">+${this.increment}</button>
        <p>${this.val}</p>`;
  }

  clickHandler() {
    this.val += this.increment
  }
}

customElements.define('countup-button', CountupButton);