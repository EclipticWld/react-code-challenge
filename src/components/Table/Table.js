import React, { Component } from 'react';
import './Table.css';

class Table extends Component {

  renderHead(thead) {
    return thead.map((head, index) => <th key={index}>{head}</th>)
  }

  renderRow(row, index) {
    const rowData = Object.keys(row).map(key => row[key]);
    const columns = rowData.map((column, i) => <td key={i}>{column}</td>);
    return (
      <tr key={index}>
        {columns}
      </tr>
    )
  }

  renderBody() {
    const { thead, tbody, isFetching } = this.props;
    const columnsLenght = thead.length;

    if (isFetching) {
      return (
        <tr className="Loading">
          <td colSpan={columnsLenght}>Loading...</td>
        </tr>
      )
    }

    return (
      tbody.map((row, index) => this.renderRow(row, index))
    )

  }

  render() {
    const { thead } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            {this.renderHead(thead)}
          </tr>
        </thead>
        <tbody>
          {this.renderBody()}
        </tbody>
      </table>
    )
  }
}

export default Table;
