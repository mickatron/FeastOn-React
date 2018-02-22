import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';

export default function Form({ className, children, disabled, valid }) {
  return (    
    <form className={ classnames('c-Form', className) }>
      { children }
    </form>
  );
}

Form.PropTypes = {
  className: classNameType,
  children: PropTypes.node.isRequired,
};