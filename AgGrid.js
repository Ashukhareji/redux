import { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const App = () => {
  const [rowData, setRowData] = useState([]);
  const [newTitle, setNewTitle] = useState('');
 
  const [colDefs] = useState([
    {
      headerName: 'ID',
      field: 'id',
      enableRowGroup: true,
      checkboxSelection: true,
      rowMultiSelectWithClick: true,
      cellRenderer: function(params) {
        return params.rowIndex + 1; 
      } 
    
    },
    
    { headerName: 'Date & Time', field: 'datetime',flex:1, },
    { headerName: 'Title', field: 'title', editable: true ,flex:1,},
    {
      headerName: 'Delete',flex:1,
      cellRenderer: params => (
        <button onClick={() => handleDelete(params.data.id)}>
          <FontAwesomeIcon icon={faTrash} bounce />
        </button>
      ),
    }
  ]);
  
  
  const defaultColDef = useMemo(() => ({
    resizable: true,
    floatingFilter: true,
    filter: "agTextColumnFilter",
   
  }),
   []);
 
  
  useEffect(() => {
    
    fetchData();
    
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/users');
       
      const data = response.data.map(item => ({
          
        ...item,
        
        
      }));
      
      setRowData(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  

  const handleDelete = async (idToDelete) => {
    try {
      await axios.delete(`http://localhost:4000/users/${idToDelete}`);
      setRowData(prevRowData => prevRowData.filter(item => item.id !== idToDelete));
      console.log('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting item: ', error);
    }
  };

  const addNewRow = async () => {
    const newItem = { title: newTitle, datetime: new Date().toLocaleString() };

    try {
      const response = await axios.post('http://localhost:4000/users', newItem);
     
      setRowData(prevRowData => [...prevRowData, response.data]);
      console.log('Item added successfully');
    } catch (error) {
      console.error('Error adding item: ', error);
    }
  };

  const handleInputChange = (event) => {
    setNewTitle(event.target.value);
  };


  return (
    <div className="ag-theme-quartz" style={{ height: '500px' }}>
      <div>
      <input
        type="text"
        placeholder="Enter new title"
        value={newTitle}
        onChange={handleInputChange}
      />
      <button onClick={addNewRow}>Add New Row</button>
    </div>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowSelection='multiple'
      />
    </div>
  );
};

export default App;
