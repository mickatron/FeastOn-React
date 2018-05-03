The `uiWrapper` function is a Higher Order Component(HOC) that composes some default functionality 
and `PropTypes` for a component HTML wrapper element. 


#### Editable modifier Props
You can edit allowable `modifier` PropTypes for a component composed with `uiWrapper`.

```js static
import editModifierProps from '/utils/modifierProps';

editModifierProps('Button', []);

editModifierProps('Button', [], false);
```

#### Editable width Props


### Usage

Accepts a single configuration `object`. The components function signature is below.
```js static
uiWrapper({
  name, // The name of the component
  element = 'div', // the default element to render, can be a string or component.
  Component, // A `React` component the HOC to compose.
  blockName = undefined, // A Block__Element name for the component, if none is specified the name `name` property will be used.
  modifiers = [], // a list of modifiers the component accepts. End user can augment and edit these values.
});
```