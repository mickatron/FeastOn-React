import PropTypes from 'prop-types';
import classNameType from 'js/shared/proptypes/className';

export default {
  columns: PropTypes.oneOf([1, 2, 3]),
  className: classNameType,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      className: classNameType,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          width: PropTypes.string,
          help: PropTypes.string,
          label: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          value: PropTypes.string,
          input: PropTypes.shape({
            type: PropTypes.oneOf(['TextInput', 'PasswordInput']).isRequired,
            placeholder: PropTypes.string,
            props: PropTypes.object,
          }).isRequired,
          required: PropTypes.bool,
          validation: PropTypes.shape({
            contains: PropTypes.string,
            equals: PropTypes.string,
            isEmail: PropTypes.object, // TODO: expand shape
            isLength: PropTypes.shape({ min: 0, max: undefined }),
            isUrl: PropTypes.string,
          }),
        })
      ),
    })
  ),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};