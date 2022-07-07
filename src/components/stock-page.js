import React from 'react'
import { useEffect, useState, useCallback } from 'react'
function Stockpage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchData = useCallback(() => {
    setLoading(true)
    fetch('https://prototype.sbulltech.com/api/v2/instruments')
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        const jsonData = csvJSON(data)
        setData(() => [...jsonData])
        console.log(data)
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false)
      })
  }, [])
  function csvJSON(csv) {
    var lines = csv.split('\n')

    var result = []
    var headers = lines[0].split(',')

    for (var i = 1; i < lines.length; i++) {
      var obj = {}
      var currentLine = lines[i].split(',')

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j]
      }

      result.push(obj)
    }

    return result
  }
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div>
      <h1>stocks page</h1>
      <table>
        <th>Symbol</th>
        <th>Name</th>
        <th>Sector</th>
      </table>
      {data.length &&
        data.map((item, index) => (
          <>
            <tbody>
              <td>{item.Symbol}</td>
              <td>{item.Name}</td>
              <td>{item.Sector}</td>
            </tbody>
          </>
        ))}
    </div>
  )
}

export default Stockpage
