import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'
export default function StockList(props) {
  const filteredData = props.filteredData
  const data = filteredData
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h1>Symbol</h1>
            </TableCell>
            <TableCell align="left">
              <h1>Name</h1>
            </TableCell>
            <TableCell align="left">
              <h1>Sector</h1>
            </TableCell>
            <TableCell align="left">
              <h1>Validtill</h1>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/quotes/${item.Symbol}`}>{item.Symbol}</Link>
              </TableCell>
              <TableCell align="left">{item.Name}</TableCell>
              <TableCell align="left">{item.Sector}</TableCell>
              <TableCell align="left">{item.Validtill}</TableCell>
            </TableRow>
          ))}
          {data.length === 0 && (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <h3>nothing matched & try new stuff</h3>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
