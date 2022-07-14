import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api'
import { useGetData } from '../../custom-hooks';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material'
import { CoffeeForm } from '../../components/CoffeeForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'caffeineContent',
    headerName: 'Caffeine Content',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name/Blend',
    width: 150,
    editable: true,
  },
  {
    field: 'roast',
    headerName: 'Roast',
    width: 110,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 110,
    editable: true,
  },
  {
    field: 'place_of_origin',
    headerName: 'Place of Origin',
    width: 110,
    editable: true,
  }

];

interface gridData {
    data: {
        id?: string;
        name?: string;

    }
}

export const DataTable = () => {
    let { coffeeData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])


    let handleOpen = () => setOpen(true);

    let handleClose = () => setOpen(false);

    let deleteData = async () => {
        await serverCalls.delete(`${gridData[0]}`)
        getData();
    }
    console.log(gridData) 
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Beans Available</h2>
            <DataGrid
                rows={coffeeData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                onSelectionModelChange={newSelectionModel => setData(newSelectionModel)}
                {...coffeeData}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

            {/*Dialog Pop Up begin */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update One Coffee</DialogTitle>
                <DialogContent>
                    <DialogContentText>Coffee id: {gridData[0]}</DialogContentText>
                    <CoffeeForm id={`${gridData[0]}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}