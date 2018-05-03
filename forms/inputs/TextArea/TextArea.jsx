import uiWrapper from '../../../HOC/uiWrapper/uiWrapper';

// return HOC wrapped component
export default uiWrapper({
  name: 'TextArea',
  element: 'textarea',
  modifiers: [
    'small',
    'medium',
    'large',
  ],
});
