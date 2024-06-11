import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function FormDialog({open,handleClose,data,onChange,handleFormSubmit}) {
 const {name,scope,question}=data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Create Catchphrase</DialogTitle>
        <DialogContent>
         <form>
             
             <TextField id="name" value={name} onChange={e=>onChange(e)} placeholder="Enter name" label="Name" variant="outlined" margin="dense" fullWidth />
             <TextField id="scope" value={scope} onChange={e=>onChange(e)} placeholder="Enter scope" label="Scope" variant="outlined" margin="dense" fullWidth />
             <TextField id="question" value={question} onChange={e=>onChange(e)} placeholder="Enter question" label="Question" variant="outlined" margin="dense" fullWidth />
             
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}