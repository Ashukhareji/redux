import React, { useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import './App.css';

const App = () => {
 
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false  },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
  
  // const [columnDefs, setColumnDefs] = useState([

  // // //     { field: "price", valueFormatter: p => '£' + p.value.toLocaleString() },
  // // //     { headerName: "make & model", valueGetter: p => p.make +' '+ p.model},

  
  //   { headerName: "Make & Model", valueGetter: p => p.make + ' ' + p.model},
  //   { field: "price" },
  // const [columnDefs, setColumnDefs] = useState([
   
  //   { field: "make"},
  //   { field: "model"},
  //   { field: "electric" },
  //   { 
  //     headerName: "Make & Model", 
  //     valueGetter: params => `${params.data.make} ${params.data.model}` 
  //   },
  //   { field: "price" },
  // ]);
  // console.log(columnDefs);
    
  const CustomButtonComponent = (props) => {
    return <button onClick={() => window.alert('clicked') }>Push Me!</button>;
  };
 
 const [colDefs, setColDefs] = useState([
    { field: "button", cellRenderer: CustomButtonComponent },
            { field: "price",
            flex:1,checkboxSelection: true },
           
            // { field: "make", flex:1,fliter:true, floatingFilter: true}, 
            {
              field: "make",
              editable: true,
              cellEditor: 'agSelectCellEditor',
              cellEditorParams: {
                  values: ['Tesla', 'Ford', 'Toyota'],
              },
          },
            { field: "model", flex:2 ,editable: true},
            // { field: "electric" , flex:1,},
           { field: 'electric',
    // cellClassRules: {
    //     // apply green to electric cars
    //     'rag-green': params => params.value === true,
    // }}
        }
    // ...
    
  ]);
  const rowSelection = 'multiple';
  const pagination = true;
  const paginationPageSize = 500;
  const paginationPageSizeSelector = [200, 500, 1000];
  const rowClassRules = {
    // apply red to Ford cars
    'rag-red': params => params.data.make === 'Ford',
};


  const defaultColDef = useMemo(() => {
    return {
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    }
  }, []);
  return (
    
    <div
      className="ag-theme-quartz"
  style={{ height: 500 }} >
   <AgGridReact
   pagination={pagination}
   paginationPageSize={paginationPageSize}
   paginationPageSizeSelector={paginationPageSizeSelector}
       rowData={rowData}
       columnDefs={colDefs}
       defaultColDef={defaultColDef}
       rowSelection={rowSelection}
       rowClassRules={rowClassRules}
      //  columnDefs={columnDefs}
   />
    </div>

  )
}

export default App