import { useTheme } from '@emotion/react';
import { Badge, Box, Chip, Stack, Tab, Tabs, Typography } from '@mui/material';
import * as React from 'react';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      key: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const BtTabContext = ({tabItems}) => {

    const theme = useTheme();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };;

    console.log('tabItems is:',tabItems);

    return(
        <>
            <Box sx={{  mx:-4, px:4, borderBottom:1, borderColor:'divider'}}>
                <Tabs  indicatorColor="secondary" value={value} onChange={handleChange}>
                    {/* <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} /> */}
                    {tabItems.map((tapItem,index) => (
                        <Tab  label={
                            <Stack justifyContent={'center'} alignItems={'center'} spacing={1} direction={'row'} >
                                <Typography variant='h3' sx={{margin:3}}>{tapItem.label}</Typography>
                                {tapItem.contentCount && <Chip size='small' label={tapItem.contentCount} variant="contained"  
                                sx={{
                                    px:0.5,
                                    color:theme.palette.background.white,    
                                    backgroundColor:value === index ? theme.palette.secondary.main : theme.palette.disabled.main,
                                }}/>}
                                
                            </Stack> 
                        } {...a11yProps(index)} />
                    )) }
                </Tabs>
            </Box>
            {tabItems.map((tapItem,index)=>(
            <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} key={`simple-tabpanel-${index}`}> 
                {tapItem.content}
            </div>))}

        </>
    )
}