import * as React from 'react';
import { Checkbox, FormControlLabel, Typography, Stack, TextField } from "@mui/material"

export const BtEctCheckbox = (defaultChecked) => {

    const [value,setValue] = React.useState(defaultChecked===true? true : false);
    const handleChange = (event) => {
        setValue(!value);
    };


    // console.log('default checked :', value);

    return (
        
        <FormControlLabel control={<Checkbox onChange={handleChange} color="tertiary" defaultChecked={value} />} label={value? <TextField size='small'/> : <Typography>기타</Typography>}  /> 

    )
}