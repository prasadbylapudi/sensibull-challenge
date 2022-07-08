import React, { useEffect, useState, useCallback } from "react";
import SearchStock from "./SearchStock";
import { ContextData } from "./ContextData";
import Header from "./Header";
function StockPage() {
  const [data, setData] = useState([]);
  console.log("data", data);

  const fetchData = useCallback(() => {
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
      <Header />
      <h1>quotes page</h1>
      <SearchStock />
    </ContextData.Provider>
  );
}

export default StockPage;
