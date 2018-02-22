import _propTypes from './DataTable.props.js';

import classnames from 'classnames';
import React from 'react';

export default class DataTable extends React.PureComponent {
  
  static propTypes = _propTypes

  render() {
    const { className } = this.props;
    return( 
      <table className={ classnames('c-DataTable', className) }>
        { this.renderHeader() }
        { this.renderBody() }
      </table>
    );
  }

  renderHeader() {
    return (
      <thead>
        <tr>
          { this.props.columns.map((column) => {
            return (
              <th key={column.label}>{column.label}</th>
            );
          })}
        </tr>
      </thead>
    );
  }

  renderBody() {
    return (
      <tbody>
        { this.props.data.map((row) => {
          return(
            <tr key={ row.id }>
              { 
                this.props.columns.map((config) => {
                  const { accessor, id } = config;
                  const columnValue = row[accessor];
                  return (
                    <td key={ `${row.id}_${id}` }>{ columnValue }</td>
                  );
                })
              }
            </tr>
          );
        }) }
      </tbody>
    );
  }

}