import React, { useEffect, useState, useCallback } from "react";
import SearchStock from "./SearchStock";
import { ContextData } from "./ContextData";
function StockPage() {
  const [data, setData] = useState([]);
  console.log("data", data);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    fetch("https://prototype.sbulltech.com/api/v2/instruments")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const jsonData = csvJSON(data);
        setData(() => [...jsonData]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  function csvJSON(csv) {
    var lines = csv.split("\n");

    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length - 1; i++) {
      var obj = {};
      var currentLine = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }
      result.push(obj);
    }
    return result;
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <ContextData.Provider value={{ data }}>
      <h1>Stock Page</h1>
      <SearchStock />
    </ContextData.Provider>
  );
}

export default StockPage;
