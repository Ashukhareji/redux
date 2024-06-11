import React, { useState, useRef, useEffect, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import 'ag-grid-enterprise';
import './AgGrid project/styles.css'

function App() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([
    { field: 'athlete', flex:2 },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' }
  ]);
  const rowSelection = 'multiple';
  const pagination = true;
  const paginationPageSize = 500;
  const paginationPageSizeSelector = [200, 500, 1000];
  const rowClassRules = {
   
    'rag-red': params => params.data.country === 'Russia',
};
  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    enableRowGroup: true,
      floatingFilter: true,
      flex: 1,
      editable: true
  }), []);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
  
  }, []);

  return (
    <div className="ag-theme-quartz" style={{ height: '100vh', width: '100%' }}>
      <AgGridReact
        ref={gridRef}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        rowData={rowData}
        animateRows={true}
        enableRangeSelection={true}
        enableCharts={true}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection={rowSelection}
       rowClassRules={rowClassRules}
       setColumnDefs={setColumnDefs}
      />
    </div>
  );
}

export default App;
