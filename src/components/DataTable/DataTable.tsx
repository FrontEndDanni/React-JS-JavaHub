import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'caffeineContent',
    headerName: 'Caffeine Content',
    width: 150,
    editable: true,
  },
  {
    field: 'blend',
    headerName: 'Blend',
    width: 150,
    editable: true,
  },
  {
    field: 'roast',
    headerName: 'Roast',
    width: 110,
    editable: true,
  }

];

const rows = [
  { id: 1, blend: 'Venezuela', caffeineContent: 'High', roast: 'Medium' },
  { id: 2, blend: 'Jamaican Blue Mountain', caffeineContent: 'High', roast: 'Medium' },
  { id: 3, blend: 'Verona', caffeineContent: 'Medium', roast: 'Dark' },
  { id: 4, blend: 'Anniversary', caffeineContent: 'High', roast: 'Medium' },
  { id: 5, blend: 'French', caffeineContent: 'Medium', roast: 'Dark' },
  { id: 6, blend: 'Italian', caffeineContent: 'Medium', roast: 'Dark' },
  { id: 7, blend: 'Kona', caffeineContent: 'Low', roast: 'Light' },
  { id: 8, blend: 'Holiday', caffeineContent: 'Decaf', roast: 'Medium' },
  { id: 9, blend: 'Kenya', caffeineContent: 'Medium', roast: 'Medium' },
];

export const DataTable = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
