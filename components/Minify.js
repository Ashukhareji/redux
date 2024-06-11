import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import FormDialog from '../components/dialog';
import { Button, Grid } from '@mui/material';
import '../components/dialog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const initialValue = { name: "", scope: "", question: "" }
function Minify() {
  const [gridApi, setGridApi] = useState(null)
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };
  const url = `http://localhost:4000/user`
  const columnDefs = [

    { headerName: "CatchphraseName", field: "name" },
    { headerName: "Scope", field: "scope" },
    { headerName: "Question", field: "question" },
    {
      headerName: "Actions",field:"id",
      cellRenderer: (params)=><div>
           <Button onClick={() => handleDelete(params.value)}> <FontAwesomeIcon icon={faTrash} /> </Button>
        </div>
         
    }
  ];
  const pagination = true;
  const paginationPageSize = 500;
  
  useEffect(() => {
    getUsers()
  }, [])


  const getUsers = () => {
    fetch(url).then(resp => resp.json()).then(resp => setTableData(resp))
  }
  const onChange = (e) => {
    const { value, id } = e.target
    // console.log(value,id)
    setFormData({ ...formData, [id]: value })
  }
  const onGridReady = (params) => {
    setGridApi(params)
  }
 
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure, you want to delete this row", id)
    if (confirm) {
      fetch(url + `/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(resp => getUsers())

    }
  }
  const handleFormSubmit = () => {
   
      fetch(url, {
        method: "POST", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()
        })
    }
  

  const defaultColDef = {
    sortable: true,
    flex: 1, filter: true,
    floatingFilter: true
  }
  return (
    <div className="App">
      
      <Grid align="right">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>Add Catchphrase</Button>
      </Grid>
      <div className="ag-theme-alpine" style={{ height: '90vh' , width: '100%'}}>
        <AgGridReact
          rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination={pagination}
   paginationPageSize={paginationPageSize}
        />
      </div>
      <FormDialog open={open} handleClose={handleClose}
        data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default Minify;