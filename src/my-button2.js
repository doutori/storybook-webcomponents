import { LitElement, html } from '@polymer/lit-element';

class MyButton2 extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    };
  }

  constructor() {
    super();
    this.name = 'World';
  }

  render() {
    return html`<a href="#">Hello, ${this.name}!</a>`;
  }
}

customElements.define('my-button2', MyButton2);