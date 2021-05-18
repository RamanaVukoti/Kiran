import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import BrDataTable from './CustomTable';

const App = () => {
  const [tableData, setTableData] = useState([])
  const [iteration, setIteration] = useState(1)
  const [totalRecords, setTotalRecords] = useState(500)
  const apiFetchLimit = 40
  const config = {
    perPage: 10,
    apiFetchLimit: 40,
    columns: [
      {
        field: 'columnA',
        header: 'Coumn A',
        sort: true
      },
      {
        field: 'columnB',
        header: 'Coumn B',
        sort: true
      },
      {
        field: 'columnC',
        header: 'Coumn C',
        sort: false
      }
    ]
  }
  const apiCall = (itr) => {
    const data = dataStore(itr)
    //setTableData(data)
    setTableData(oldaData => [...oldaData, ...data])
    setIteration(itr)
    setTimeout(() => {
      console.log("total Data", { data })
    })
  }
  const dataStore = (iteration) => {
    const start = ((iteration - 1)) * config.apiFetchLimit
    const end = (iteration) * config.apiFetchLimit
    const data = []
    for (let i = start; i < end; i++) {
      const obj = { columnA: `columnA ${i}`, columnB: `columnB ${i}${i}`, columnC: `columnC ${i}`, columnD: `columnD ${i}`, columnE: `columnE ${i}` }
      data.push(obj)
    }
    return data
  }
  useEffect(() => {

    const data = dataStore(1)
    //setTableData(data)
    setTableData(oldaData => [...oldaData, ...data])
    setTimeout(() => {
      console.log("total Data", { data })
    })
  }, [])

  const updateIteration = (iteration) => {
    setIteration(iteration)
  }



  return (
    <div className="App">
      <BrDataTable config={config} totalCount={400} data={tableData} apiCall={apiCall} updateIteration={updateIteration}  iterationArg={iteration} />
    </div>
  );
}

export default App;
