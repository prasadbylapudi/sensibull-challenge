import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { ContextData } from './ContextData'
import { useContext } from 'react'
export default function StockList() {
  const { data } = useContext(ContextData)
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h1>Symbol</h1>
            </TableCell>
            <TableCell align="right">
              <h1>Name</h1>
            </TableCell>
            <TableCell align="right">
              <h1>Sector</h1>
            </TableCell>
            <TableCell align="right">
              <h1>Validtill</h1>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.Symbol}
              </TableCell>
              <TableCell align="right">{item.Name}</TableCell>
              <TableCell align="right">{item.Sector}</TableCell>
              <TableCell align="right">{item.Validtill}</TableCell>
            </TableRow>
          ))}
          {data.length === 0 && (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
