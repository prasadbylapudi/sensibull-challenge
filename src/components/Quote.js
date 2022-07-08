import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTable } from 'react-table'
import { useSortBy } from 'react-table/dist/react-table.development'
import { COLUMNS } from './QuoteColumn.js'
import classes from './Quotes.module.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const Quote = () => {
  const params = useParams()
  const [quotes, setQuotes] = useState([])
  const fetchQuotes = useCallback(() => {
    fetch(`https://prototype.sbulltech.com/api/v2/quotes/${params.symbol}`)
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        const parseData = JSON.parse(data)
        const payloadData = parseData.payload[params.symbol]
        setQuotes(() => [...payloadData])
      })
  }, [])

  useEffect(() => {
    fetchQuotes()
  }, [fetchQuotes])

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: quotes,
    },
    useSortBy,
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <>
      <div className={classes.tableInner}>
        <div className={classes.tableContainer}>
          <table {...getTableProps()} className={classes.table}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <hr></hr>
        <Link to="/stockpage">
          <Button variant="contained" color="secondary">
            Back to Home
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Quote
