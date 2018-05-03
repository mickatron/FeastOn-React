import uiWrapper from '../../HOC/uiWrapper/uiWrapper';

// return HOC wrapped component
export default uiWrapper({
  name: 'Grid',
  element: 'div',
  modifiers: [
    'noCellGutters',
    'noCellPadding',
  ],
});
