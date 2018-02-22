import PropTypes from 'prop-types';

import classNameType from 'js/shared/proptypes/className';
import keyType from 'js/shared/proptypes/key';

const dataTableProps = {
  className: classNameType,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      id: keyType.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: keyType.isRequired,
    })
  ).isRequired,
};

export default dataTableProps;