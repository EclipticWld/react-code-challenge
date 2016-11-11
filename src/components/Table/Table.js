import React, { PropTypes } from 'react'
import './Table.css'

const renderRow = (row, index) => {
  const rowData = Object.keys(row).map(key => row[key])
  const columns = rowData.map((column, i) => <td key={i}>{column}</td>)
  return (
    <tr key={index}>
      {columns}
    </tr>
  )
}

const Table = (props) => {
  const { thead, tbody, isFetching } = props

  if (isFetching) {
    return (
      <table className='table'>
        <tbody>
          <tr className='Loading'>
            <td>Loading...</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          {thead.map((head, index) => <th key={index}>{head}</th>)}
        </tr>
      </thead>
      <tbody>
        {tbody.map((row, index) => renderRow(row, index))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  thead: PropTypes.array.isRequired,
  tbody: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default Table
