import { css, html, LitElement } from 'lit';
import { provide } from '@lit-labs/context';
import { customElement, property } from 'lit/decorators.js';

import { {{camel_case app_name}}StoreContext } from '../context.js';
import { {{pascal_case app_name}}Store } from '../{{kebab_case app_name}}-store.js';

@customElement('{{kebab_case app_name}}-context')
export class {{pascal_case app_name}}Context extends LitElement {
  @provide({ context: {{camel_case app_name}}StoreContext })
  @property({ type: Object })
  store!: {{pascal_case app_name}}Store;

  render() {
    return html`<slot></slot>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}
