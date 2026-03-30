import * as React from 'react';
import { Children } from 'react';
import { Select,useTheme } from "@mui/material"
import { KeyboardArrowDown, Remove } from '@mui/icons-material';


export const BtNavSelect = ({children, defaultValue}) => {

    const [value,setValue] = React.useState(defaultValue);
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const theme = useTheme();
    const childrenCount = Children.count(children);
    return(
        <Select
            // disabled={childrenCount <= 1 && true }
        
            value={value}
            onChange={handleChange}
            IconComponent={() => (
                childrenCount <= 1 ? <Remove /> : <KeyboardArrowDown />
              )}
            sx={{
                fontSize:'1rem',
                pr:'1rem',
                borderColor:theme.palette.primary.main,
                borderRadius:0,
                // borderLeft:`1px solid ${theme.palette.info.main}`,
                width:'15rem',
                '.MuiOutlinedInput-notchedOutline': {
                    border:'none',
                    // borderRight:`1px solid ${theme.palette.info.main}`,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    // borderRight:`1px solid ${theme.palette.info.main}`,
                    // border:'none',

                },
                "&:focus": {
                    // borderRight:`1px solid ${theme.palette.info.main}`,
                },
                
                '&:before': {
                    border:'none'
                },
                '&:after': {
                    border:'none'
                },
            }}
            
        >
            {children}
            
        </Select>
    )
}