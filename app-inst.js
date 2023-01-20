import {LitElement, html} from 'lit';

export class AppInst extends LitElement {
  static properties = {
    name: {type: String},
  };

  constructor() {
    super();
    this.name = 'WTF?';
  }

  render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.name} code.</p>
    `;
  }
}
customElements.define('app-inst', AppInst);
