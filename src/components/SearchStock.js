import * as React from 'react'
import debounce from 'lodash.debounce'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState, useContext, useMemo, useEffect } from 'react'
import { ContextData } from './ContextData'
import classes from './SearchStock.module.css'
export default function Searchstock() {
  const { data } = useContext(ContextData)
  let listToDisplay = data
  const [searchData, setSearchData] = useState('')
  const [filteredData, setFilteredData] = useState(data)
  console.log('searchdata', searchData)
  if (searchData !== '') {
    setFilteredData(
      data.filter((item) => {
        return item.Name === searchData
      }),
    )
    console.log('filtered data', filteredData)
  }
  const handleChange = (e) => {
    setSearchData(e.target.value)
    console.log('search data', searchData)
  }

  console.log('search data', searchData)
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 1000)
  }, [])
  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  })

  return (
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
        onChange={() => {
          debouncedResults()
        }}
      />
      {}
    </Box>
  )
}
