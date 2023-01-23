# lit-nanostores

> Integrates [nanostores](https://github.com/nanostores/nanostores) with [Lit](https://lit.dev)

### Features

&nbsp; &nbsp; ✓ Hooks into Lit property system<br>
&nbsp; &nbsp; ✓ Easy to implement unit tests. Same as components without app state<br>

### Install

```sh
npm install lit nanostores lit-nanostores
```

or

```sh
yarn add lit nanostores lit-nanostores
```

### Usage

`withStore` is mixin / class decorator that extends LitElement components allowing to define store in property definition

```javascript
import { atom } from 'nanostores'
import { LitElement, html } from 'lit'
import { withStore } from 'lit-nanostores'

const propAtom = atom('world')

class MyComponent extends withStore(LitElement) {
  static properties = {
    // declaring store in a property definition will set the property to the atom value
    // and re render the component when atom is updated
    myProp: { type: String, store: propAtom },
  }

  render() {
    return html` <div>Hello ${this.myProp}</div> `
  }
}
```

optionally use decorator syntax

```javascript
@withStore
class MyComponent extends LitElement {}
```

### Remarks

- Keeps the basic structure of how Lit component is written: declare a property and use it in render.
  - Its easy to create unit tests or demo (like storybook): just set the property / attribute as any other component. See testing example [here](demo/message-banner.test.js)
  - Its easy to add (or remove) integration with app state (nanostores)
- Not sure how can make the property declaration work with typescript. I saw this pattern in other projects but not investigated further

### License

MIT
Copyright © 2023 Luiz Américo Pereira Câmara
