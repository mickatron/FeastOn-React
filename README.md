Highly customizable UI component library for React.

- Fully tested & documented
- Accessible
- Slender, minimalist components
- Modular
- Customizable 

## Quick Start

## Features
### Modular
Import as much or as little of the Library as you require.

### Augmentation
Take full control of rendered elements. Components wrapping tag may be customized and you can even render one component as another.

### Editable enum PropTypes
Some props are solely used for presentational styling, by default the allowable props implement the .... SASS libraries classes. Though you will want to step outside those confines as the library will not cover every permutation. In these instances you can edit the PropTypes to suit your needs, allowing you to extend the styling capabilities of the components whilst retaining robust type checking.  

### BEM conventions
Uses the hyphenated BEM naming convention for class names.

### Sub Components
Sub Components can be accessed in two different ways giving you ultimate flexibility in which components you add to your project.

```js
// imports all sub components as prototype properties
// eg. Tile.Header, Tile.Meta, Tile.Content, Tile.Footer
import Tile from '/Tile';

// imports only the Tile component
import Tile from '/Tile/Tile';
// Other sub components must be explicitly imported
import TileContent from '/Tile/TileContent/TileContent';
```




- collections

- elements

- HOC


