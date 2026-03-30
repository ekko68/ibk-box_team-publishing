import * as React from 'react';
import { Select, useTheme } from "@mui/material"
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

export const BtSelect = ({children, defaultValue, disabled}) => {
    const [value,setValue] = React.useState(defaultValue);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const theme = useTheme();

    return(
        <Select
            value={value}
            onChange={handleChange}
            IconComponent={() => (
                <KeyboardArrowDown sx={{mr:1}} />
            )}
            disabled = {disabled? true : false}
            size='small'
            sx={{
                width:'100%',
                backgroundColor:  disabled? theme.palette.disabled.lighter : 'transparent'
            }}
        >
            {children}
        </Select>
    )
}