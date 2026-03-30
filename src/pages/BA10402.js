import { Add, AddOutlined, EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, Remove,CloudUploadOutlined } from "@mui/icons-material";
import { Grid, AppBar, Badge, Box, Button, Chip, Container, Divider, IconButton, MenuItem, Paper, Select, Stack, Typography, useTheme, Pagination, PaginationItem, TableContainer, Table, TableBody, TableRow, TableHead, TableCell, Avatar, TextField, InputAdornment, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, Stepper, StepLabel, Step } from "@mui/material";
import { BtNavSelect } from "../components/BtNavSelect";
import { BtContentGrid } from "../components/BtContentGrid";
import { BtTabContext } from "../components/BtTabContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { BtSelect } from "../components/BtSelect/BtSelect";
// import Grid from '@mui/material/Unstable_Grid2';

const BA10402 = () => {

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
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>투자기업 추천</MenuItem>
                            <MenuItem value={20} sx={{fontSize:'1rem'}}>Item 2</MenuItem>
                            <MenuItem value={30} sx={{fontSize:'1rem'}}>Item 3</MenuItem>
                        </BtNavSelect>
                        <BtNavSelect  defaultValue={10} >
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>추천기업 정보 등록</MenuItem>
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
            <Stack spacing={4} direction={'column'} sx={{py:5}}>


                {/* 제안 펀드 정보 */}
                <Paper  sx={{p:4}}>
                    <Stack direction={'column'} spacing={4}>
                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>운용사 추천기업 등록</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>
                                
                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'운용사명'} required={true}>
                                    <TextField
                                        size="small"
                                        value={'(주)넥스파트너스'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'담당 심사역'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'연락처'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'이메일'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>
                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'추천 기업명'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                    />                                   
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'사업자번호'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                    />                                   
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'주요사업'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        placeholder="20자 이내 작성"
                                    />                                   
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'리드투자자'} >
                                    <Stack direction={'row'} spacing={2} sx={{width:'100%'}}>
                                        <Stack flexGrow={1} direction={'row'} alignItems={'center'} spacing={1}>
                                            <Typography sx={{width:'4rem'}}>운용사명</Typography>
                                            <TextField flexGrow={1} size="small" value={''} sx={{width:'100%'}}/>  
                                        </Stack>
                                        <Stack flexGrow={1} direction={'row'} alignItems={'center'} spacing={1}>
                                            <Typography sx={{width:'2rem'}}>금액</Typography>
                                            <TextField  size="small" value={''} sx={{width:'100%'}} />  
                                        </Stack>
                                        <Stack flexGrow={1} direction={'row'} alignItems={'center'} spacing={1} >
                                            <Typography sx={{width:'2rem'}}>단계</Typography>
                                            <BtSelect flexGrow={1} defaultValue={2} sx={{width:'100%'}}>
                                                <MenuItem disabled value={0}>선택하세요</MenuItem>
                                                <MenuItem value={1}>IR</MenuItem>
                                                <MenuItem value={2}>투심</MenuItem>
                                                <MenuItem value={3}>확정</MenuItem>
                                                <MenuItem value={4}>미정</MenuItem>
                                            </BtSelect> 
                                        </Stack>  
                                    </Stack>
                                                                 
                                </BtContentGrid>

                                
                                <BtContentGrid gridXs={12} title={'투자 라운드 종료시점'} >
                                    <FormControl>
                                        <RadioGroup row>
                                            <FormControlLabel value="1" control={<Radio/>} 
                                            label={
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker format="YYYY-MM-DD" sx={{width:'100%'}}/>
                                                </LocalizationProvider>   
                                            } />
                                            <FormControlLabel value="2" control={<Radio/>} label="미정" />
                                        </RadioGroup>
                                    </FormControl>                                 
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'총 투자 유치금액'} >
                                    <FormControl>
                                        <RadioGroup row>
                                            <FormControlLabel value="1" control={<Radio/>} 
                                            label={
                                                <Stack alignItems={'center'} direction={'row'} spacing={2}>
                                                    <TextField size="small" InputProps={{endAdornment: <InputAdornment position="end">억원</InputAdornment>}} value={''} sx={{width:'100%'}} /> 
                                                    <Typography>~</Typography>
                                                    <TextField size="small" InputProps={{endAdornment: <InputAdornment position="end">억원</InputAdornment>}} value={''} sx={{width:'100%'}} />  
                                                </Stack>
                                            } />
                                            <FormControlLabel value="2" control={<Radio/>} label="미정" />
                                        </RadioGroup>
                                    </FormControl>                                 
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'진행밸류(pre)'} >
                                    <FormControl>
                                        <RadioGroup row>
                                            <FormControlLabel  value="1" control={<Radio/>} 
                                            label={
                                                <Stack alignItems={'center'} direction={'row'} spacing={2}>
                                                    <TextField size="small" InputProps={{endAdornment: <InputAdornment position="end">억원</InputAdornment>}} value={''} sx={{width:'100%'}} /> 
                                                    <Typography>~</Typography>
                                                    <TextField size="small" InputProps={{endAdornment: <InputAdornment position="end">억원</InputAdornment>}} value={''} sx={{width:'100%'}} />  
                                                </Stack>
                                            } />
                                            <FormControlLabel value="2" control={<Radio/>} label="미정" />
                                        </RadioGroup>
                                    </FormControl>                                 
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'추천 의견'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        multiline
                                        rows={10}
                                    />                                   
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'파일 첨부'} required={true} additionalContents={<Typography variant="body2" sx={{color:theme.palette.text.sub}}>파일 첨부<br/>(회사 자료, 투심 보고서)</Typography>}>
                                    <Stack direction={'column'} spacing={2} sx={{width:'100%'}}>
                                        <Box sx={{p:2, boxSizing:'border-box', width:'100%',  backgroundColor:theme.palette.background.default}}>
                                            <Stack direction="column"  justifyContent="center" alignItems="center" sx={{borderRadius:3, p:3, border:`3px solid ${theme.palette.disabled.light}` }}>
                                                <CloudUploadOutlined sx={{ color:theme.palette.disabled.light, fontSize:'4rem'}}/>
                                                <Typography sx={{textAlign:'center'}}>
                                                    파일을 드래그해서 올려 놓거나,<br/> 
                                                    파일첨부 버튼을 눌러 파일을 등록해 주세요.
                                                </Typography>
                                            </Stack>
                                        </Box>
                                        
                                        <Stack direction="row"
                                            justifyContent="flex-start"
                                            alignItems="center" spacing={2} >
                                            <Button variant="outlined">
                                                파일첨부
                                            </Button>
                                            <Typography variant="body2" sx={{color:theme.palette.text.sub}}>
                                                펀드 IM 자료 첨부. pptx, doc, docx, hwp, pdf 100MB 이내
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </BtContentGrid>


                            </Grid>
                        </Stack>

                        <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center">
                            <Button size="large" variant="outlined" disableElevation>취소</Button>
                            <Button size="large" variant="contained" disableElevation>제출</Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Stack>


        </Container>
    </Stack>
    {/* End of Contents */}
    </>
};
  
export default BA10402;