import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import classNameType from 'js/shared/proptypes/className';

const ButtonGroup = function({ as, children, className }) {
  const Element = as;
  return (
    <Element className={classnames(className, 'c-ButtonGroup')}>
      {children}
    </Element>
  );
};

ButtonGroup.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  classNameType,
};

ButtonGroup.defaultProps = {
  as: 'div',
  children: undefined,
};

export default ButtonGroup;