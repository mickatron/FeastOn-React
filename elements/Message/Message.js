import uiWrapper from '../../HOC/uiWrapper/uiWrapper';

// return HOC wrapped component
export default uiWrapper({
  name: 'Message',
  element: 'div',
  modifiers: [
    'truthy',
    'falsy',
    'warning',
    'info',
  ],
});
