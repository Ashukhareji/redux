
export const fetchData = () => {
    
    const url = `http://localhost:5000/user`;
    return fetch(url)
   
      .then(resp => resp.json());
      
  };
  
  export const deleteRow = (id) => {
    window.location.reload();
    const url = `http://localhost:5000/user/${id}`;
    return fetch(url, { method: "DELETE" })
      .then(resp => resp.json());
  };
  
  export const addRow = (formData) => {
    window.location.reload();
    const url = `http://localhost:5000/user`;
    
    return fetch(url, {
        
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'content-type': "application/json"
      }
    })
    
    .then(resp => resp.json());
    
  };

