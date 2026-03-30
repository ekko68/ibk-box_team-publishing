import { Add, AddOutlined, EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, Remove } from "@mui/icons-material";
import { Grid, AppBar, Badge, Box, Button, Chip, Container, Divider, IconButton, MenuItem, Paper, Select, Stack, Typography, useTheme, Pagination, PaginationItem, TableContainer, Table, TableBody, TableRow, TableHead, TableCell, Avatar, TextField, InputAdornment, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, Stepper, StepLabel, Step } from "@mui/material";
import { BtNavSelect } from "../components/BtNavSelect";
import { BtContentGrid } from "../components/BtContentGrid";
import { BtTabContext } from "../components/BtTabContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { BtSelect } from "../components/BtSelect/BtSelect";
// import Grid from '@mui/material/Unstable_Grid2';

const BA10302 = () => {

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
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>펀드 제안</MenuItem>
                            <MenuItem value={20} sx={{fontSize:'1rem'}}>Item 2</MenuItem>
                            <MenuItem value={30} sx={{fontSize:'1rem'}}>Item 3</MenuItem>
                        </BtNavSelect>
                        <BtNavSelect  defaultValue={10} >
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>신규 펀드 제안</MenuItem>
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
                <Paper sx={{p:4}}>
                    <Stepper activeStep={0} alternativeLabel>
                        
                        <Step key={'0'}>
                            <StepLabel>제안 펀드 정보</StepLabel>
                        </Step>
                        <Step key={'1'}>
                            <StepLabel>운용사 상세 정보</StepLabel>
                        </Step>
                        <Step key={'2'}>
                            <StepLabel>제출 완료</StepLabel>
                        </Step>
                    </Stepper>
                </Paper>

                {/* 제안 펀드 정보 */}
                <Paper  sx={{p:4}}>
                    <Stack direction={'column'} spacing={4}>
                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>제안 펀드 정보</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>
                                
                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'회사명'} required={true}>
                                    <TextField
                                        size="small"
                                        value={'(주)넥스파트너스'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'펀드유형'} required={true}>

                                    <BtSelect defaultValue={0}>
                                        <MenuItem disabled value={0}>선택하세요</MenuItem>
                                        <MenuItem value={1}>벤처투자조합</MenuItem>
                                        <MenuItem value={2}>신기술투자조합</MenuItem>
                                        <MenuItem value={3}>일반 PEF</MenuItem>
                                        <MenuItem value={4}>전문투자형 PEF</MenuItem>
                                        <MenuItem value={5}>기타</MenuItem>
                                    </BtSelect>

                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'결성목표액'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">억원</InputAdornment>,
                                          }}
                                    />                                   
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'IBK출자 제안금액'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">억원</InputAdornment>,
                                          }}
                                    />                                   
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'기준수익률(IRR)'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                          }}
                                    />                                   
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'존속기간'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">년</InputAdornment>,
                                          }}
                                    />                                   
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'성과보수'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">IRR 초과수익의</InputAdornment>,
                                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                          }}
                                    />                                   
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'투자기간'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">년</InputAdornment>,
                                          }}
                                    />                                   
                                </BtContentGrid> 
                                <BtContentGrid gridXs={6} title={'관리보수'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                          }}
                                    />                                   
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'펀드유형'} required={true}>

                                    <BtSelect defaultValue={0}>
                                        <MenuItem disabled value={0}>선택하세요</MenuItem>
                                        <MenuItem value={1}>수시납</MenuItem>
                                        <MenuItem value={2}>분할납</MenuItem>
                                        <MenuItem value={3}>일시납</MenuItem>
                                    </BtSelect>

                                </BtContentGrid>
                                <BtContentGrid gridXs={12} title={'투자대상'} >
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                    />                                   
                                </BtContentGrid>                           
                                <BtContentGrid gridXs={12} title={'주요LP 지원 및 선정분야'} >
                                    <TableContainer component={Paper} sx={{borderRadius:0, boxShadow:'none'}}>
                                        <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead sx={{
                                                borderTop:`1px solid ${theme.palette.divider}`,
                                            }}>
                                                <TableRow>
                                                    <TableCell 
                                                        align="center"  >
                                                        출자기관
                                                    </TableCell >
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>지원 분야</TableCell>
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>지원 금액(억원)</TableCell>
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>진행 단계</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={'한국모태펀드'} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={'22년 정시 1차 창업초기 루키'} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" InputProps={{endAdornment: <InputAdornment position="end">억원</InputAdornment>}} value={'999'} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <BtSelect defaultValue={1}>
                                                            <MenuItem disabled value={0}>선택하세요</MenuItem>
                                                            <MenuItem value={1}>선정</MenuItem>
                                                            <MenuItem value={2}>서류 통과</MenuItem>
                                                            <MenuItem value={3}>서류 심사 중</MenuItem>
                                                            <MenuItem value={4}>지원 예정</MenuItem>
                                                        </BtSelect>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={'한국모태펀드'} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={'22년 정시 1차 창업초기 루키'} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" InputProps={{endAdornment: <InputAdornment position="end">억원</InputAdornment>}} value={'999'} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <BtSelect defaultValue={2}>
                                                            <MenuItem disabled value={0}>선택하세요</MenuItem>
                                                            <MenuItem value={1}>선정</MenuItem>
                                                            <MenuItem value={2}>서류 통과</MenuItem>
                                                            <MenuItem value={3}>서류 심사 중</MenuItem>
                                                            <MenuItem value={4}>지원 예정</MenuItem>
                                                        </BtSelect>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={'한국모태펀드'} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={'22년 정시 1차 창업초기 루키'} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" InputProps={{endAdornment: <InputAdornment position="end">억원</InputAdornment>}} value={'999'} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <BtSelect defaultValue={3}>
                                                            <MenuItem disabled value={0}>선택하세요</MenuItem>
                                                            <MenuItem value={1}>선정</MenuItem>
                                                            <MenuItem value={2}>서류 통과</MenuItem>
                                                            <MenuItem value={3}>서류 심사 중</MenuItem>
                                                            <MenuItem value={4}>지원 예정</MenuItem>
                                                        </BtSelect>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={'한국모태펀드'} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={'22년 정시 1차 창업초기 루키'} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" InputProps={{endAdornment: <InputAdornment position="end">억원</InputAdornment>}} value={'999'} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <BtSelect defaultValue={4}>
                                                            <MenuItem disabled value={0}>선택하세요</MenuItem>
                                                            <MenuItem value={1}>선정</MenuItem>
                                                            <MenuItem value={2}>서류 통과</MenuItem>
                                                            <MenuItem value={3}>서류 심사 중</MenuItem>
                                                            <MenuItem value={4}>지원 예정</MenuItem>
                                                        </BtSelect>
                                                    </TableCell>
                                                </TableRow>                                                                                            
                                                <TableRow>
                                                    <TableCell colSpan={4} align="center" component="th" scope="row">
                                                    <Button color="primary" variant="outlined" endIcon={<Add/>}>행 추가</Button>
                                                    </TableCell>
                                                </TableRow>

                                            </TableBody>

                                        </Table>
                                    </TableContainer>                      
                                </BtContentGrid>
                                <BtContentGrid gridXs={12} title={'출자자 모집현황'} required={true}>
                                    <TableContainer component={Paper} sx={{borderRadius:0, boxShadow:'none'}}>
                                        <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead sx={{
                                                borderTop:`1px solid ${theme.palette.divider}`,
                                            }}>
                                                <TableRow>
                                                    <TableCell 
                                                        align="center"  >
                                                        출자기관
                                                    </TableCell >
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>출자 금액</TableCell>
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>비율</TableCell>
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>진행 단계</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <FormControl>
                                                            <RadioGroup row>
                                                                <FormControlLabel value="1" control={<Radio/>} label={<TextField size="small" value={''} InputProps={{endAdornment: <InputAdornment position="end">억원</InputAdornment>}} sx={{width:'6rem'}} />} />
                                                                <FormControlLabel value="2" control={<Radio/>} label="미정" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <FormControl>
                                                            <RadioGroup row>
                                                                <FormControlLabel value="1" control={<Radio/>} label={<TextField size="small" value={''} InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>}} sx={{width:'6rem'}} />} />
                                                                <FormControlLabel value="2" control={<Radio/>} label="미정" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <BtSelect defaultValue={1}>
                                                            <MenuItem disabled value={0}>선택하세요</MenuItem>
                                                            <MenuItem value={1}>LOC</MenuItem>
                                                            <MenuItem value={2}>LOI</MenuItem>
                                                            <MenuItem value={3}>투자 심사 중</MenuItem>
                                                        </BtSelect>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <FormControl>
                                                            <RadioGroup row>
                                                                <FormControlLabel value="1" control={<Radio/>} label={<TextField size="small" value={''} InputProps={{endAdornment: <InputAdornment position="end">억원</InputAdornment>}} sx={{width:'6rem'}} />} />
                                                                <FormControlLabel value="2" control={<Radio/>} label="미정" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <FormControl>
                                                            <RadioGroup row>
                                                                <FormControlLabel value="1" control={<Radio/>} label={<TextField size="small" value={''} InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>}} sx={{width:'6rem'}} />} />
                                                                <FormControlLabel value="2" control={<Radio/>} label="미정" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <BtSelect defaultValue={2}>
                                                            <MenuItem disabled value={0}>선택하세요</MenuItem>
                                                            <MenuItem value={1}>LOC</MenuItem>
                                                            <MenuItem value={2}>LOI</MenuItem>
                                                            <MenuItem value={3}>투자 심사 중</MenuItem>
                                                        </BtSelect>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <FormControl>
                                                            <RadioGroup row>
                                                                <FormControlLabel value="1" control={<Radio/>} label={<TextField size="small" value={''} InputProps={{endAdornment: <InputAdornment position="end">억원</InputAdornment>}} sx={{width:'6rem'}} />} />
                                                                <FormControlLabel value="2" control={<Radio/>} label="미정" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <FormControl>
                                                            <RadioGroup row>
                                                                <FormControlLabel value="1" control={<Radio/>} label={<TextField size="small" value={''} InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>}} sx={{width:'6rem'}} />} />
                                                                <FormControlLabel value="2" control={<Radio/>} label="미정" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <BtSelect defaultValue={3}>
                                                            <MenuItem disabled value={0}>선택하세요</MenuItem>
                                                            <MenuItem value={1}>LOC</MenuItem>
                                                            <MenuItem value={2}>LOI</MenuItem>
                                                            <MenuItem value={3}>투자 심사 중</MenuItem>
                                                        </BtSelect>
                                                    </TableCell>
                                                </TableRow>                                                                                                            
                                                <TableRow>
                                                    <TableCell colSpan={4} align="center" component="th" scope="row">
                                                    <Button  variant="outlined" endIcon={<Add/>}>행 추가</Button>
                                                    </TableCell>
                                                </TableRow>

                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <Typography>IBK</Typography>
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                 
                                                        <TextField size="small" value={''} InputProps={{endAdornment: <InputAdornment position="end">억원</InputAdornment>}} sx={{width:'10rem'}} />
                                                    
                                                    
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>}} sx={{width:'10rem'}} />
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Chip  label="제안" color="primary" sx={{borderRadius:1, width:'100%'}}/>
                                                    </TableCell>
                                                </TableRow>

                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <Typography variant="h6" color={"primary"}>결성목표액</Typography>
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Typography variant="h6" color={"primary"}>9,999,999,999 원</Typography>
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Typography variant="h6" color={"primary"}>100%</Typography>
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                    </TableCell>
                                                </TableRow>  
                                            </TableBody>
                                        </Table>
                                    </TableContainer>                      
                                </BtContentGrid> 
                            </Grid>
                        </Stack>

                        <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center">
                            <Button size="large" variant="outlined" disableElevation>저장 및 종료</Button>
                            <Button size="large" variant="contained" disableElevation>저장 후 다음</Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Stack>


        </Container>
    </Stack>
    {/* End of Contents */}
    </>
};
  
export default BA10302;