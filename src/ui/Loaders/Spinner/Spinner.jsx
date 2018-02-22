import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import classNameType from 'js/shared/proptypes/className';


const Spinner = function({ children, className }) {
  return (
    <div className={classnames(className,'c-Spinner')}>

      { children ? 
        <span className="c-Spinner__text">{children}</span> 
        : 
        null 
      }
    </div>
  );
};

Spinner.propTypes = {
  children: PropTypes.node,
  classNameType,
};

export default Spinner;