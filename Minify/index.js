import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import FormDialog from '../components/dialog';
import { Button, Grid } from '@mui/material';
import '../components/dialog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { preprocessData, getInitialFormData } from '../Minify/helpers/getProcessedData';
import { fetchData, deleteRow, addRow } from '../Minify/helpers/apiCall';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridApi: null,
      tableData: null,
      open: false,
      formData: getInitialFormData()
    };
  }

  handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this row?");
    if (confirmDelete) {
      deleteRow(id).then(fetchData);
    }
  };

  handleFormSubmit = () => {
    addRow(this.state.formData).then(() => {
      this.handleClose();
      fetchData();
    });
  };

  handleClose = () => {
    this.setState({ open: false, formData: getInitialFormData() });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  onChange = (e) => {
    const { value, id } = e.target;
    this.setState(prevState => ({
      formData: { ...prevState.formData, [id]: value }
    }));
  };

  componentDidMount() {
    fetchData().then(data => this.setState({ tableData: preprocessData(data) }));
  }

  render() {
    const { gridApi, tableData, open, formData } = this.state;

    const columnDefs = [
      { headerName: "CatchphraseName", field: "name" },
      { headerName: "Scope", field: "scope" },
      { headerName: "Question", field: "question" },
      {
        headerName: "Actions", field: "id",
        cellRenderer: (params) => (
          <div>
            <Button onClick={() => this.handleDelete(params.value)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        )
      }
    ];

    const onGridReady = (params) => {
      this.setState({ gridApi: params });
    };

    const defaultColDef = {
      sortable: true,
      flex: 1,
      filter: true,
      floatingFilter: true
    };

    return (
      <div className="App">
        <Grid align="right">
          <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Add Catchphrase</Button>
        </Grid>
        <div className="ag-theme-alpine" style={{ height: '90vh', width: '100%' }}>
          <AgGridReact
            gridApi={gridApi}
            rowData={tableData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
          />
        </div>
        <FormDialog open={open} handleClose={this.handleClose} data={formData} onChange={this.onChange} handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

