import { useTheme } from "@emotion/react"
import { Box, Grid, Stack, Typography } from "@mui/material"
import { BtAsteriskIcon } from "../BtAsteriskIcon";

export const BtContentGrid = ({children,gridXs,title,required,additionalContents}) => {
    const theme = useTheme();

    return (
        <Grid xs={gridXs} sx={{ borderBottom:`1px solid ${theme.palette.divider}`}}>
            <Stack direction={'row'} sx={{height:'100%'}}>
                <Box p={1.5} sx={{width:'10rem'}}>
                    <Stack direction='column' spacing={1} alignItems={"flex-start"} justifyContent="center" sx={{height:'100%'}}>
                        <Stack direction="row" spacing={0.75} justifyContent="flex-start" alignItems="center" sx={!additionalContents && {height:'100%'}}>
                            <Typography variant="body1" sx={{ color:theme.palette.text.sub}}>{title}</Typography>
                            {required && <BtAsteriskIcon/>}
                        </Stack>
                        {additionalContents && additionalContents}
                    </Stack>
                    
                </Box>
                <Box p={1.5} flexGrow={1}>
                    <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{height:'100%'}}>
                        {children}
                    </Stack>
                </Box>
            </Stack>
        </Grid>
    )
}