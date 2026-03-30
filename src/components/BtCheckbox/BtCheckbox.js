import * as React from 'react';
import { Checkbox, FormControlLabel, Typography } from "@mui/material"

export const BtCheckbox = ({label,defaultChecked}) => {

    const [value,setValue] = React.useState(defaultChecked===true? true : false);

    // console.log('default checked:', value);

    return (

        <FormControlLabel control={<Checkbox color="primary" defaultChecked={value} />} label={<Typography>{label}</Typography>}  />

    )
}