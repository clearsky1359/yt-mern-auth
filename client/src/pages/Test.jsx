import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';


export  function Test(){

    
    return( 
    
    <>
    <h1>
        test
        <div></div>
        <Button variant="contained" color='success'>Contained</Button>
        <Stack direction="row" alignItems="center" spacing={5}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
    </h1>
    
    </>
    )
}