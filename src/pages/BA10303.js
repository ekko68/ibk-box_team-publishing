import { Add, AddOutlined, CloudUploadOutlined, EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, Remove } from "@mui/icons-material";
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

const BA10103 = () => {

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
                    <Stepper activeStep={1} alternativeLabel>
                        
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

                {/* 운용사 상세 정보 */}
                <Paper  sx={{p:4}}>
                    <Stack direction={'column'} spacing={4}>
                        
                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>운용사 정보(IR정보)</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>

                        <Stack direction={'row'} spacing={2}>
                            <Typography flexGrow={1} variant="body1">
                                등록되어 있는 IR 정보를 자동으로 불러옵니다.<br/>
                                그리고 아래 항목을 입력하시면 BOX IR 정보에 자동으로 반영됩니다.
                            </Typography>
                            <Button variant="outlined">재무정보 자동 입력</Button>
                        </Stack>
                                
                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'운용사명'} required={true}>
                                    <TextField size="small" value={''} sx={{width:'100%'}} />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'사업자번호'} required={true}>
                                    <TextField size="small" value={''} sx={{width:'100%'}} />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'대표이사'} required={true}>
                                    <TextField size="small" value={''} sx={{width:'100%'}} />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'회사 소재지'} required={true}>
                                    <TextField size="small" value={''} sx={{width:'100%'}} />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'기준수익률(IRR)'} required={true}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker format="YYYY-MM-DD" sx={{width:'100%'}}/>
                                    </LocalizationProvider>                                 
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'펀드운용 시작일'} required={true}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker format="YYYY-MM-DD" sx={{width:'100%'}}/>
                                    </LocalizationProvider>                                 
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'자본 총계'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        disabled
                                        sx={{width:'100%', backgroundColor:theme.palette.disabled.lighter}}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">원</InputAdornment>,
                                          }}
                                    />                                   
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'납입 자본금'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">원</InputAdornment>,
                                          }}
                                    />                                   
                                </BtContentGrid> 

                                <BtContentGrid gridXs={12} title={'징계여부'} >
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                    />                                   
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'제무정보'} required={true} additionalContents={<Typography variant="body2" sx={{color:theme.palette.text.sub}}>(단위:원)</Typography>}>
                                    <TableContainer component={Paper} sx={{borderRadius:0, boxShadow:'none'}}>
                                        <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead sx={{
                                                borderTop:`1px solid ${theme.palette.divider}`,
                                            }}>
                                                <TableRow>
                                             <TableCell align="center">구분 / 연도</TableCell>
                                                <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>최근 회계연도</TableCell>
                                                <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>-1Y</TableCell>
                                                <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>-2Y</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>

                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">자산총계</TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>

                                                </TableRow>


                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">부채총계</TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>

                                                </TableRow>

                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">자본총계</TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>

                                                </TableRow>


                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">영업수익</TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>

                                                </TableRow>


                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">영업비용</TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>

                                                </TableRow>


                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">당기순이익</TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>

                                                </TableRow>

                                                

                                                                            
                                            </TableBody> 
                                        </Table>
                                    </TableContainer>                      
                                </BtContentGrid> 

                                <BtContentGrid gridXs={12} title={'주요 주주 구성'} required={true} additionalContents={<><Button size="small" color="primary" variant="outlined">양식 다운로드</Button><Button size="small" color="primary" variant="outlined">엑셀 업로드</Button></>}>
                                    <TableContainer component={Paper} sx={{borderRadius:0, boxShadow:'none'}}>
                                        <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead sx={{
                                                borderTop:`1px solid ${theme.palette.divider}`,
                                            }}>
                                                <TableRow>
                                                    <TableCell 
                                                        align="center"  >
                                                        주주명
                                                    </TableCell >
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>지분액(원)</TableCell>
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>지분율(%)</TableCell>
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>비고</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell colSpan={4} align="center" component="th" scope="row">
                                                    <Button color="primary" variant="outlined" endIcon={<Add/>}>행 추가</Button>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <Typography variant="h6" color={"primary"}>합계</Typography>
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

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>기운용 펀드 정보</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>

                        <Stack direction={'column'} >
                            <Stack direction={'row'}>
                                <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>


                                    <BtContentGrid gridXs={12} title={'운용규모'} >
                                        <Stack direction={'row'} spacing={2} >
                                            <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">개 펀드</InputAdornment>,}} sx={{width:'12rem', boxSizing:'border-box'}} />
                                            <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">억원</InputAdornment>,}} sx={{width:'12rem'}} />
                                        </Stack>
                                        
                                    </BtContentGrid>

                                    <BtContentGrid gridXs={12} title={'블라인드'} >
                                        <Stack direction={'row'} spacing={2} >
                                            <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">개 펀드</InputAdornment>,}} sx={{width:'12rem', boxSizing:'border-box'}} />
                                            <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">억원</InputAdornment>,}} sx={{width:'12rem'}} />
                                        </Stack>
                                    </BtContentGrid>

                                    <BtContentGrid gridXs={12} title={'프로젝트'} >
                                        <Stack direction={'row'} spacing={2} >
                                            <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">개 펀드</InputAdornment>,}} sx={{width:'12rem', boxSizing:'border-box'}} />
                                            <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">억원</InputAdornment>,}} sx={{width:'12rem'}} />
                                        </Stack>
                                    </BtContentGrid>

                                  
                                </Grid>
                                <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`,borderBottom:`1px solid ${theme.palette.divider}`}}>

                                    <Stack direction={'row'} sx={{width:'100%'}}>
                                        <Box p={1.5} sx={{width:'10rem'}}>
                                            <Stack direction='column' spacing={1} alignItems={"flex-start"} justifyContent="center" sx={{height:'100%'}}>
                                                <Stack direction="row" spacing={0.75} justifyContent="flex-start" alignItems="center" sx={{height:'100%'}}>
                                                    <Typography variant="body1" sx={{color:theme.palette.text.sub}}>
                                                        청산펀드 수익률 IRR
                                                    </Typography>
                                                    
                                                    
                                                </Stack>
                                            </Stack>
                                        
                                        </Box>
                                        <Box p={1.5} flexGrow={1}>
                                            <Stack direction="column" justifyContent="center" alignItems="flex-start" sx={{height:'100%'}} spacing={2}>
                                                <TextField
                                                    size="small"
                                                    value={''}
                                                    sx={{width:'100%'}}
                                                    InputProps={{
                                                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                                    }}
                                                />
                                                <Typography variant="body1" sx={{color:theme.palette.text.sub}}>
                                                    최근 5년내 청산펀드 기준, 납입총액 가중평균
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    </Stack>

                                </Grid>
                            </Stack>
                            <BtContentGrid gridXs={12} title={'펀드 소진율'}>
                                <TextField size="small" value={''} placeholder="(활동 펀드. 중 최저 소진율 펀드) 펀드명/ 결성금액/ 투자금액" sx={{width:'100%'}} />
                            </BtContentGrid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>운용인력 정보</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>
                                
                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'총 운용인력 수'} required={true}>
                                    <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">명</InputAdornment>}} sx={{width:'100%'}} />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'대표 펀드 매니저명'} required={true}>
                                    <TextField size="small" value={''} sx={{width:'100%'}} />
                                </BtContentGrid>



                                <BtContentGrid gridXs={12} title={'운용인력 징계여부'} >
                                    <TextField
                                        size="small"
                                        value={''}
                                        multiline
                                        rows={4}
                                        sx={{width:'100%'}}
                                    />                                   
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'제안펀드 참여 운용인력'} required={true}>
                                    <TableContainer component={Paper} sx={{borderRadius:0, boxShadow:'none'}}>
                                        <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead sx={{
                                                borderTop:`1px solid ${theme.palette.divider}`,
                                            }}>
                                                <TableRow>
                                             <TableCell align="center">이름</TableCell>
                                                <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>투자경력(년)</TableCell>
                                                <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>근속연수(년)</TableCell>
                                                <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>5년간 투자금액(억원)</TableCell>
                                                <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>10년간 투자 중<br/>완전회수 실적(억원)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>

                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''}  sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''}  sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Stack direction={'row'} spacing={2}>
                                                            <Stack direction={'row'} alignItems="center">
                                                                <Typography sx={{width:'2rem'}}>투자</Typography>
                                                                <TextField size="small" value={''} sx={{width:'5rem'}} />
                                                            </Stack>
                                                            <Stack direction={'row'} alignItems="center">
                                                                <Typography sx={{width:'2rem'}}>회수</Typography>
                                                                <TextField size="small" value={''} sx={{width:'5rem'}}  />
                                                            </Stack>
                                                        </Stack>
                                                        
                                                    </TableCell>
                                                </TableRow>

                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''}  sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''}  sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Stack direction={'row'} spacing={2}>
                                                            <Stack direction={'row'} alignItems="center">
                                                                <Typography sx={{width:'2rem'}}>투자</Typography>
                                                                <TextField size="small" value={''} sx={{width:'5rem'}} />
                                                            </Stack>
                                                            <Stack direction={'row'} alignItems="center">
                                                                <Typography sx={{width:'2rem'}}>회수</Typography>
                                                                <TextField size="small" value={''} sx={{width:'5rem'}}  />
                                                            </Stack>
                                                        </Stack>
                                                        
                                                    </TableCell>
                                                </TableRow>

                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''}  sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''}  sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Stack direction={'row'} spacing={2}>
                                                            <Stack direction={'row'} alignItems="center">
                                                                <Typography sx={{width:'2rem'}}>투자</Typography>
                                                                <TextField size="small" value={''} sx={{width:'5rem'}} />
                                                            </Stack>
                                                            <Stack direction={'row'} alignItems="center">
                                                                <Typography sx={{width:'2rem'}}>회수</Typography>
                                                                <TextField size="small" value={''} sx={{width:'5rem'}}  />
                                                            </Stack>
                                                        </Stack>
                                                        
                                                    </TableCell>
                                                </TableRow>

                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''}  sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''}  sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Stack direction={'row'} spacing={2}>
                                                            <Stack direction={'row'} alignItems="center">
                                                                <Typography sx={{width:'2rem'}}>투자</Typography>
                                                                <TextField size="small" value={''} sx={{width:'5rem'}} />
                                                            </Stack>
                                                            <Stack direction={'row'} alignItems="center">
                                                                <Typography sx={{width:'2rem'}}>회수</Typography>
                                                                <TextField size="small" value={''} sx={{width:'5rem'}}  />
                                                            </Stack>
                                                        </Stack>
                                                        
                                                    </TableCell>
                                                </TableRow>
                                                                            
                                            </TableBody> 
                                        </Table>
                                    </TableContainer>                      
                                </BtContentGrid> 

                                <BtContentGrid gridXs={12} title={'운용인력 유지율'} required={true}>
                                    <TableContainer component={Paper} sx={{borderRadius:0, boxShadow:'none'}}>
                                        <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead sx={{
                                                borderTop:`1px solid ${theme.palette.divider}`,
                                            }}>
                                                <TableRow>
                                                    <TableCell 
                                                        align="center"  >
                                                        운용인력명
                                                    </TableCell >
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>현재 재직 여부</TableCell>
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>비고</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Stack direction="row" justifyContent="center">
                                                            <RadioGroup row>
                                                                <FormControlLabel value="Y" control={<Radio />} label="Y" />
                                                                <FormControlLabel value="N" control={<Radio />} label="N" />
                                                            </RadioGroup> 
                                                        </Stack>
                                                        
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
   
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Stack direction="row" justifyContent="center">
                                                            <RadioGroup row>
                                                                <FormControlLabel value="Y" control={<Radio />} label="Y" />
                                                                <FormControlLabel value="N" control={<Radio />} label="N" />
                                                            </RadioGroup> 
                                                        </Stack>
                                                        
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
   
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Stack direction="row" justifyContent="center">
                                                            <RadioGroup row>
                                                                <FormControlLabel value="Y" control={<Radio />} label="Y" />
                                                                <FormControlLabel value="N" control={<Radio />} label="N" />
                                                            </RadioGroup> 
                                                        </Stack>
                                                        
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
   
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Stack direction="row" justifyContent="center">
                                                            <RadioGroup row>
                                                                <FormControlLabel value="Y" control={<Radio />} label="Y" />
                                                                <FormControlLabel value="N" control={<Radio />} label="N" />
                                                            </RadioGroup> 
                                                        </Stack>
                                                        
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
   
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell colSpan={4} align="center" component="th" scope="row">
                                                    <Button color="primary" variant="outlined" endIcon={<Add/>}>행 추가</Button>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <Typography variant="h6" color={"primary"}>총 00명</Typography>
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Typography variant="h6" color={"primary"}>현재 재직 00명</Typography>
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Typography variant="h6" color={"primary"}></Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>

                                        </Table>
                                    </TableContainer>                      
                                </BtContentGrid>                         
                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>관리인력 정보</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>
                                
                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'총 관리인력 수'} required={true}>
                                    <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">명</InputAdornment>}} sx={{width:'100%'}} />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'전문자격증 보유인력'} required={true}>
                                    <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">명</InputAdornment>}} sx={{width:'100%'}} />
                                </BtContentGrid>



                                <BtContentGrid gridXs={12} title={'운용인력 징계여부'} required={true}>
                                    <TableContainer component={Paper} sx={{borderRadius:0, boxShadow:'none'}}>
                                        <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead sx={{
                                                borderTop:`1px solid ${theme.palette.divider}`,
                                            }}>
                                                <TableRow>
                                                    <TableCell 
                                                        align="center"  >
                                                        이름
                                                    </TableCell >
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>리스크 관리경력</TableCell>
                                                    <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>비고</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                        
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
   
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                        
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
   
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                        
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
   
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} />
                                                        
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} sx={{width:'100%'}} /> 
                                                    </TableCell>
   
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell colSpan={4} align="center" component="th" scope="row">
                                                    <Button color="primary" variant="outlined" endIcon={<Add/>}>행 추가</Button>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">
                                                        <Typography variant="h6" color={"primary"}>총 00명</Typography>
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Typography variant="h6" color={"primary"}>현재 재직 00명</Typography>
                                                    </TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <Typography variant="h6" color={"primary"}></Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>

                                        </Table>
                                    </TableContainer>                      
                                </BtContentGrid>                         
                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>관련자료 첨부</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>
                                
                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={12} title={'파일 첨부'} required={true}>
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
                            <Button size="large" variant="outlined" disableElevation>저장 및 종료</Button>
                            <Button size="large" variant="outlined" disableElevation>PDF 다운로드</Button>
                            <Button size="large" variant="outlined" disableElevation>이전</Button>
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
  
export default BA10103;