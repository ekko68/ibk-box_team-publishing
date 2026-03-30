import { Add, AddOutlined, CheckOutlined, CloudUploadOutlined, EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, Remove } from "@mui/icons-material";
import { Grid, AppBar, Badge, Box, Button, Chip, Container, Divider, IconButton, MenuItem, Paper, Select, Stack, Typography, useTheme, Pagination, PaginationItem, TableContainer, Table, TableBody, TableRow, TableHead, TableCell, Avatar, TextField, InputAdornment, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, Stepper, StepLabel, Step } from "@mui/material";
import { BtNavSelect } from "../components/BtNavSelect";
import { BtContentGrid } from "../components/BtContentGrid";
import { BtTabContext } from "../components/BtTabContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { BtSelect } from "../components/BtSelect/BtSelect";
import { BtAsteriskIcon } from "../components/BtAsteriskIcon";
// import Grid from '@mui/material/Unstable_Grid2';

const BA10601 = () => {

    const theme = useTheme();

    return <>
    {/* Header */}

    <AppBar elevation={false} sx={{backgroundColor:theme.palette.secondary.main}}>
        <Stack direction={'row'}>
            <Box sx={{height:'4rem', py:1.25,px:2,
                backgroundImage:`linear-gradient(to right, ${theme.palette.primary.main} , ${theme.palette.secondary.main})`
            }}>
                <img width={232} src="./btLogo.png" alt="logo"/>
            </Box>

            <Box flexGrow={1} />

            <Stack direction={'row'} 
            spacing={4}
            sx={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)' }}>
                <Button sx={{ fontSize:'1.25rem', color:'white'}}>
                    기업정보
                </Button>
                <Button sx={{ fontSize:'1.25rem', color:'white'}}>
                    투자기관
                </Button>
                <Button sx={{fontSize:'1.25rem', color:'white'}}>
                    컨설팅
                </Button>
                <Button sx={{fontSize:'1.25rem', color:'white'}}>
                    뉴스
                </Button>
            </Stack>

            <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2} sx={{borderLeft:`1px solid ${theme.palette.primary.main}`, px:'1rem', 
            height:'5.25rem',
            backgroundImage:`linear-gradient(to right, ${theme.palette.secondary.main} , ${theme.palette.primary.main} )`
            }}>
                <Badge badgeContent={3} color="primary">
                    <NotificationsNoneOutlined/>
                </Badge>
                <Badge badgeContent={3} color="warning">
                    <EmailOutlined/>
                </Badge>
                <HeadsetMicOutlined/>
                <Typography variant="body2">
                    illunexinc
                </Typography>
                <Box sx={{ backgroundColor:theme.palette.primary.main, width:'2rem', height:'2rem', position:'relative', borderRadius:'1rem'}}>
                    <PersonOutlineOutlined sx={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)' }}/>
                </Box>

            </Stack>
        </Stack>
    </AppBar> 
    {/* End ofHeader */}
    {/* Contents */}
    <Stack direction={'column'} sx={{mt:'5.25rem', backgroundColor:theme.palette.background.default}}>
        {/* page banner*/}
        <Box sx={{
            position:'relative',
            background:`linear-gradient(0deg, rgba(81, 105, 153, 0.7), rgba(81, 105, 153, 0.7)), url("./banners/IBK_center.jpg")`,
            backgroundSize:'cover',
            backgroundPosition: 'center center',
            height:'18rem',
        }} >
            <Typography 
                variant="h1"
                color={'white'}
                sx={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)' }}
            >
                IBK 제안센터
            </Typography>
        </Box>
        {/* end of page banner*/}
        {/* breadcrumbs */}
        <Box sx={{
            background:theme.palette.background.white,
            borderBottom:`1px solid ${theme.palette.divider}`,
        }}>
            <Container maxWidth="false" disableGutters sx={{maxWidth:'1280px', px:'1.25rem'}}>
                <Box>
                    <Stack direction={'row'} divider={<Divider orientation="vertical" flexItem />}>
                        <Divider orientation="vertical" flexItem sx={{height:'1px'}}/>
                        <IconButton sx={{borderRadius:0, px:2}}>
                            <HomeOutlined/>
                        </IconButton>
                        <BtNavSelect defaultValue={10} onnItem={true}>
                            
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>IBK 제안센터</MenuItem>

                        </BtNavSelect>
                        <BtNavSelect  defaultValue={10} >
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>IBK 추천기업 리스트</MenuItem>
                            <MenuItem value={20} sx={{fontSize:'1rem'}}>Item 2</MenuItem>
                            <MenuItem value={30} sx={{fontSize:'1rem'}}>Item 3</MenuItem>
                        </BtNavSelect>
                        <Divider orientation="vertical" flexItem sx={{height:'1px'}}/>
                        
                    </Stack>
                </Box>
            </Container>
        </Box>
        {/* end of breadcrumbs */}
        <Container maxWidth="false" disableGutters sx={{maxWidth:'1280px', px:'1.25rem'}}>
            <Stack spacing={8} direction={'column'} sx={{py:5}}>



                {/* 추천기업 */}
                <Stack spacing={2}>
                    <Stack  spacing={1}>
                        <Stack direction={'row'} alignItems="flex-end" spacing={1} >
                            <Typography variant="h2" flexGrow={1}>
                                IBK 추천기업 리스트
                            </Typography>

                        </Stack>
                        <Divider/>
                    </Stack>

                    <Grid container spacing={2} sx={{mt:0, position:'relative', left:'-1rem'}}>
                        <Grid item xs={2}>
                            <Paper sx={{p:2}}>
                                <Stack direction={'column'} spacing={1}>
                                    <img height={120} src="logos/company_logo_1.jpg" style={{objectFit:'contain'}} />
                                    <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                        스타트업
                                    </Typography>
                                    <Typography variant="h2" sx={{fontWeight:500}}>
                                        일루넥스
                                    </Typography>
                                    <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                        Seed | 300억
                                    </Typography>

                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper sx={{p:2}}>
                                <Stack direction={'column'} spacing={1}>
                                    <img height={120} src="logos/company_logo_1.jpg" style={{objectFit:'contain'}} />
                                    <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                        스타트업
                                    </Typography>
                                    <Typography variant="h2" sx={{fontWeight:500}}>
                                        일루넥스
                                    </Typography>
                                    <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                        Seed | 300억
                                    </Typography>

                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper sx={{p:2}}>
                                <Stack direction={'column'} spacing={1}>
                                    <img height={120} src="logos/company_logo_1.jpg" style={{objectFit:'contain'}} />
                                    <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                        스타트업
                                    </Typography>
                                    <Typography variant="h2" sx={{fontWeight:500}}>
                                        일루넥스
                                    </Typography>
                                    <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                        Seed | 300억
                                    </Typography>

                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper sx={{p:2}}>
                                <Stack direction={'column'} spacing={1}>
                                    <img height={120} src="logos/company_logo_1.jpg" style={{objectFit:'contain'}} />
                                    <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                        스타트업
                                    </Typography>
                                    <Typography variant="h2" sx={{fontWeight:500}}>
                                        일루넥스
                                    </Typography>
                                    <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                        Seed | 300억
                                    </Typography>

                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper sx={{p:2}}>
                                <Stack direction={'column'} spacing={1}>
                                    <img height={120} src="logos/company_logo_1.jpg" style={{objectFit:'contain'}} />
                                    <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                        스타트업
                                    </Typography>
                                    <Typography variant="h2" sx={{fontWeight:500}}>
                                        일루넥스
                                    </Typography>
                                    <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                        Seed | 300억
                                    </Typography>

                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper sx={{p:2}}>
                                <Stack direction={'column'} spacing={1}>
                                    <img height={120} src="logos/company_logo_1.jpg" style={{objectFit:'contain'}} />
                                    <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                        스타트업
                                    </Typography>
                                    <Typography variant="h2" sx={{fontWeight:500}}>
                                        일루넥스
                                    </Typography>
                                    <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                        Seed | 300억
                                    </Typography>

                                </Stack>
                            </Paper>
                        </Grid>

                    </Grid>

                    <Stack direction={'row'} alignItems="center">
                        <Typography variant="h7" flexGrow={1}>
                            99개 기업이 투자를 기다리고 있습니다.
                        </Typography>
                        <Button variant="outlined">
                            더보기
                        </Button>
                    </Stack>

                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                        <Button size="large" variant="contained" disableElevation>확인</Button>
                    </Stack>
                </Stack>

            </Stack>


        </Container>
    </Stack>
    {/* End of Contents */}
    </>
};
  
export default BA10601;