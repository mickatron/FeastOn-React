import uiWrapper from '../../HOC/uiWrapper/uiWrapper';

/**
 * return HOC wrapped component
 */

export default uiWrapper({
  name: 'Button',
  element: 'button',
  modifiers: [
    'true',
    'warn',
    'false',
    'link',
    'outline',
    'pill',
    'full',
    'zeta',
    'epsilon',
    'gamma',
    'delta',
    'beta',
    'alpha',
  ],
});
