import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const GridExample = () => {
    const [rowData, setRowData] = useState([]);
    
    const handleDeleteTitle = (idToDelete) => {
        setRowData(prevRowData => prevRowData.filter(item => item.id !== idToDelete));
        console.log(setRowData)
    };

    const handleUpdateTitle = (id) => {
        const itemToUpdate = rowData.find(item => item.id === id);
        if (itemToUpdate) {
            console.log("Update button clicked for row:", itemToUpdate);
            alert(`Update action for title: ${itemToUpdate.title}`);
        }
    };
    const [colDefs, setColDefs] = useState([
        { headerName: "ID", field: "id" }, 
        { headerName: "Date & Time", field: "datetime" }, 
        { headerName: "Title", field: "title" },
        {
            headerName: "Delete",
            cellRenderer: (params) => (
                <button onClick={() => handleDeleteTitle(params.data.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            )
        },
        {
            headerName: "Update",
            cellRenderer: (params) => (
                <button onClick={() => handleUpdateTitle(params.data.id)}>
                    <FontAwesomeIcon icon={faPenSquare} />
                </button>
            )
        }
    ]);
    
    
    const defaultColDef = useMemo(() => ({
        editable: true,
        filter: true,
    }), []);

    
    useEffect(() => {
        fetch('http://localhost:4000/user')
            .then(response => response.json())
            .then(data => {
                const adjustedData = data.map((item, index) => ({
                    ...item,
                    id: index + 1 
                }));
                setRowData(adjustedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <div className="ag-theme-quartz" style={{ height: '500px', width: '100%' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
            />
        </div>
    );
};

export default GridExample;
