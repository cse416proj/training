import React, { useState } from 'react';
import FileUpload from './FileUpload';
import { Box, FormControl, FormLabel, InputLabel, Select, MenuItem, Button } from '@mui/material';

export default function Dropdown() {
  const [fileFormat, setFileFormat] = useState('');

  const handleFileFormatChange = (event) => {
    setFileFormat(event.target.value);
  };

  const handleClear = (event) => {
    setFileFormat('');
  }

  return (
    <Box class='flex-column' id='select-file-container'>
        <Box class='flex-row' id='select-file'>
            <FormLabel style={{ color: 'black', fontSize: '22.5px' }}>Select a file format:</FormLabel>
            <FormControl style={{ marginLeft: '1.5%' }}>
                <InputLabel id='map-format'>File format</InputLabel>
                <Select
                    labelId='map-format-dropdown'
                    label='file-format'
                    value={fileFormat}
                    style={{ width: '19vw', backgroundColor: 'white' }}
                    onChange={handleFileFormatChange}
                >
                    <MenuItem value='Shapefiles'>Shapefiles</MenuItem>
                    <MenuItem value='GeoJSON'>GeoJSON</MenuItem>
                    <MenuItem value='Keyhole(KML)'>Keyhole (KML)</MenuItem>
                </Select>
            </FormControl>
            <Button
                variant='outlined'
                onClick={handleClear}
                style={{ height: 50, marginLeft: '2%' }}
            >
                Clear Map Format
            </Button>
        </Box>
        
        <FileUpload fileFormat={fileFormat}/>
    </Box>
  );
}
