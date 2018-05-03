
import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import classNameType from '../../proptypes/className';
import keyType from '../../proptypes/key';

export default class DataTable extends React.PureComponent {
  static propTypes = {
    /** A custom className. */
    className: classNameType,
    /** The columns you wish to render from the dataset provided. */
    columns: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      id: keyType.isRequired,
    })).isRequired,
    /** The dataset you wish to render the table from. */
    data: PropTypes.arrayOf(PropTypes.shape({
      id: keyType.isRequired,
    })).isRequired,
  }

  static defaultProps = {
    className: undefined,
  }

  renderHeader() {
    return (
      <tr>
        { this.props.columns.map(column => (
          <th key={column.label}>{column.label}</th>
        ))}
      </tr>
    );
  }

  renderBody() {
    return (
      this.props.data.map(row => (
        <tr key={row.id}>
          {
            this.props.columns.map((config) => {
              const { accessor, id } = config;
              const columnValue = row[accessor];
              return (
                <td key={`${row.id}_${id}`}>{ columnValue }</td>
              );
            })
          }
        </tr>
      ))
    );
  }

  render() {
    const { className } = this.props;
    return (
      <table className={classnames('c-DataTable', className)}>
        <thead>
          {this.renderHeader()}
        </thead>
        <tbody>
          {this.renderBody()}
        </tbody>
      </table>
    );
  }
}
