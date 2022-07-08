import * as React from 'react'
import debounce from 'lodash.debounce'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState, useContext, useMemo, useEffect } from 'react'
import { ContextData } from './ContextData'
import classes from './SearchStock.module.css'
import StockList from './StockList'
export default function Searchstock() {
  const { data } = useContext(ContextData)
  const [searchData, setSearchData] = useState('')
  console.log('searchdata', searchData)
  var filteredData = data
  console.log('before search fil data', filteredData)
  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchData(e.target.value)
  }
  filteredData = data.filter(
    (item) =>
      item.Symbol.toLowerCase().includes(searchData) ||
      item.Name.toLowerCase().includes(searchData),
  )
  console.log('filtered data', filteredData)
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 100)
  }, [])

  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  })

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className={classes.searchContainer}
          id="filled-basic"
          label="search stock"
          variant="filled"
          onChange={debouncedResults}
        />
      </Box>
      <StockList filteredData={filteredData} />
    </>
  )
}
