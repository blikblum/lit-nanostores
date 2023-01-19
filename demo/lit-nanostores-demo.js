import { LitElement, css, html } from 'lit'
import { message } from './message.js'
import './message-banner.js'

export class LitNanostoresDemo extends LitElement {
  static styles = css`
    h1 {
      line-height: 1.1;
    }
  `
  inputChange(e) {
    message.set(e.target.value)
  }

  render() {
    return html`<h1>Lit Nanostores Demo</h1>

      <label>Set message</label>
      <input @change=${this.inputChange} />

      <message-banner></message-banner>

      <message-banner></message-banner> `
  }
}

window.customElements.define('lit-nanostores-demo', LitNanostoresDemo)
