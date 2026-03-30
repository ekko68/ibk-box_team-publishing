import * as React from 'react';
import { Box, Button, Divider, IconButton, Modal, Stack, Typography, useTheme } from "@mui/material"
import { Close } from '@mui/icons-material';

export const BtModal = ({buttonTitle,children,modalTitle, multiSelect}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 4,
        pb:1,
    };

    return (
        <>        
            <Button color='primary' onClick={handleOpen}>{buttonTitle}</Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                
                    <Stack 
                        direction={'row'} 
                        justifyContent="flex-end" 
                        alignItems="center" 
                        sx={{width:'100%', px:1, pt:1, boxSizing:'border-box'}}>
                        
                        {modalTitle && 
              
                            <Stack spacing={1} direction={'row'} alignItems="flex-end"  sx={{pt:0.5, pl:2, width:'100%'}}>
                                <Typography variant='h3'>
                                    {modalTitle}
                                </Typography>
                                
                                {multiSelect && 
                                    <Typography sx={{color:theme.palette.primary.main}}>
                                        *복수선택가능
                                    </Typography>
                                }

                            </Stack>
                
                        }
                        
                        
                        <IconButton onClick={handleClose}>
                            <Close/>
                        </IconButton>
                        
                    </Stack>
                    {modalTitle &&
                        <Divider sx={{pb:1}}/>
                    }
                    
                    {children}

                </Box>
                
            </Modal>
        </>
    )
}