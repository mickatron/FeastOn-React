import uiWrapper from '../../HOC/uiWrapper/uiWrapper';
// return HOC wrapped component
export default uiWrapper({
  name: 'Menu',
  element: 'ul',
  modifiers: [
    'bar',
    'block',
    'inline',
    'horizontal',
    'vertical',
  ],
});
