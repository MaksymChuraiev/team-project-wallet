import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectedInput({ name, array }) {
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">{name}</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={name}
          onChange={handleChange}
          sx={{ borderRadius: 30 }}
        >
          {array.map(elem => (
            <MenuItem
              sx={{ border: 'none', outline: 'none' }}
              value={elem.type}
            >
              {elem.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
