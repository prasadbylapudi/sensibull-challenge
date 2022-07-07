import React from 'react'
import { useContext } from 'react'
import { ContextData } from './ContextData'
function StockItem(props) {
  const { data } = useContext(ContextData)
  console.log('context is working', data)
  return (
    <>
      <h1>stock item</h1>
      {data &&
        data.map((item, idx) => (
          <div key={idx}>
            <h1>{item.Name}</h1>
          </div>
        ))}
    </>
  )
}

export default StockItem
