import { Add, AddOutlined, CloseOutlined, EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, Remove } from "@mui/icons-material";
import { Grid, AppBar, Badge, Box, Button, Chip, Container, Divider, IconButton, MenuItem, Paper, Select, Stack, Typography, useTheme, Pagination, PaginationItem, TableContainer, Table, TableBody, TableRow, TableHead, TableCell, Avatar, TextField, InputAdornment } from "@mui/material";
import { BtNavSelect } from "../components/BtNavSelect";
import { BtContentGrid } from "../components/BtContentGrid";
import { BtTabContext } from "../components/BtTabContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Grid from '@mui/material/Unstable_Grid2';

const BA10102 = () => {

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
            background:`linear-gradient(0deg, rgba(81, 105, 153, 0.7), rgba(81, 105, 153, 0.7)), url("./banners/mypage.jpg")`,
            backgroundSize:'cover',
            backgroundPosition: 'center center',
            height:'18rem',
        }} >

            <Container maxWidth="false" disableGutters sx={{maxWidth:'1280px', px:'1.25rem', height:'100%'}}>
                <Stack spacing={1} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{width:'10rem', height:'100%'}} >
                    <Box sx={{ boxSizing:'border-box' , p:3, borderRadius:1, width:'10rem', height:'10rem', backgroundColor:theme.palette.background.white}}>
                        <Avatar src="logos/company_logo_1.jpg" sx={{ borderRadius:0,  width:'7rem', height:'7rem', bgcolor: theme.palette.disabled.main }}/>
                    </Box>
                    <Typography variant="body1" sx={{color:theme.palette.text.contrastText}}>주식회사일루넥스</Typography>
                </Stack>
            </Container>

            <Typography 
                variant="h1"
                color={'white'}
                sx={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)' }}
            >
                마이페이지
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
                            
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>마이페이지</MenuItem>

                        </BtNavSelect>
                        <BtNavSelect  defaultValue={10} >
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>내 정보</MenuItem>
                            <MenuItem value={20} sx={{fontSize:'1rem'}}>Item 2</MenuItem>
                            <MenuItem value={30} sx={{fontSize:'1rem'}}>Item 3</MenuItem>
                        </BtNavSelect>
                        <BtNavSelect  defaultValue={10} >
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>투자사전환요청</MenuItem>
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
                {/* 내정보 */}
                <Stack  spacing={1}>
                    <Stack direction={'row'} alignItems="flex-end" spacing={1} >
                        <Typography variant="h2" flexGrow={1}>
                            내 정보
                        </Typography>

                    </Stack>
                    <Divider/>
                </Stack>

                <Paper  sx={{p:4}}>
                    <Stack direction={'column'} spacing={4}>
                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>투자사 전환요청</Typography>

                            <Grid container sx={{borderTop:`2px solid ${theme.palette.primary.main}`}}>

                                <BtContentGrid gridXs={6} title={'회사명'}>
                                    <TextField
                                        size="small"
                                        value={'(주)넥스파트너스'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'사업자 등록번호'}>
                                    <TextField
                                        size="small"
                                        value={'123-45-6789123'}
                                        sx={{width:'100%'}}
                                    />                                    
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'관심 비즈니스 분야'}>
                                    <Stack direction={'row'} spacing={1}>
                                        <Button size="small" color="info" variant="outlined" endIcon={<CloseOutlined />}>
                                            한국어
                                        </Button>
                                        <Button size="small" color="info" variant="outlined" endIcon={<CloseOutlined />}>
                                            마켓팅
                                        </Button>
                                        <Button size="small" color="info" variant="outlined" endIcon={<CloseOutlined />}>
                                            한류
                                        </Button>
                                        <Button size="small" color="primary" variant="outlined" endIcon={<Add />}>
                                            추가
                                        </Button>
                                    </Stack>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'활용기술'}>
                                    <Stack direction={'row'} spacing={1}>
                                        <Button size="small" color="info" variant="outlined" endIcon={<CloseOutlined />}>
                                            블록체인
                                        </Button>
                                        <Button size="small" color="info" variant="outlined" endIcon={<CloseOutlined />}>
                                            AR/VR
                                        </Button>
                                        <Button size="small" color="primary" variant="outlined" endIcon={<Add />}>
                                            추가
                                        </Button>
                                    </Stack>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'주요투자업종'}>
                                    <Stack direction={'row'} spacing={1}>
                                        <Button size="small" color="info" variant="outlined" endIcon={<CloseOutlined />}>
                                            ICT 제조
                                        </Button>
                                        <Button size="small" color="info" variant="outlined" endIcon={<CloseOutlined />}>
                                            게임
                                        </Button>
                                        <Button size="small" color="primary" variant="outlined" endIcon={<Add />}>
                                            추가
                                        </Button>
                                    </Stack>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'주요투자단계'}>
                                    <Stack direction={'row'} spacing={1}>
                                        <Button size="small" color="info" variant="outlined" endIcon={<CloseOutlined />}>
                                            Seed
                                        </Button>
                                        <Button size="small" color="info" variant="outlined" endIcon={<CloseOutlined />}>
                                            Pre IPO
                                        </Button>
                                        <Button size="small" color="primary" variant="outlined" endIcon={<Add />}>
                                            추가
                                        </Button>
                                    </Stack>
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'대표이사 정보'}>
                                    <Stack direction={'row'} spacing={2} sx={{width:'100%'}}>
                                        <Stack direction={'row'} justifyContent="flex-start" alignItems="center" spacing={1}>
                                            <Typography variant="body1">성명</Typography>
                                            <TextField
                                                size="small"
                                                value={'홍길동'}
                                                
                                            />  
                                        </Stack>
                                        <Stack direction={'row'} justifyContent="flex-start" alignItems="center" spacing={1}>
                                            <Typography variant="body1">전화번호</Typography>
                                            <TextField
                                                size="small"
                                                value={'02-3456-7890'}
                                                
                                            />  
                                        </Stack>
                                        <Stack flexGrow={1} direction={'row'} justifyContent="flex-start" alignItems="center" spacing={1}>
                                            <Typography sx={{width:'3rem'}} variant="body1">이메일</Typography>
                                            <TextField
                                                size="small"
                                                value={'manager@illunex.com'}
                                                sx={{boxSizing:'border-box', width:'100%'}}
                                            />  
                                        </Stack>
                                        <Button size="small" color="primary" variant="outlined" endIcon={<Add />}>
                                            추가
                                        </Button>
                                    </Stack>
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'대표이사 정보'}>
                                    <Stack direction={'row'} spacing={2} sx={{width:'100%'}}>
                                        <Stack direction={'row'} justifyContent="flex-start" alignItems="center" spacing={1}>
                                            <Typography variant="body1">성명</Typography>
                                            <TextField
                                                size="small"
                                                value={''}
                                                
                                            />  
                                        </Stack>
                                        <Stack direction={'row'} justifyContent="flex-start" alignItems="center" spacing={1}>
                                            <Typography variant="body1">전화번호</Typography>
                                            <TextField
                                                size="small"
                                                value={''}
                                                
                                            />  
                                        </Stack>
                                        <Stack flexGrow={1} direction={'row'} justifyContent="flex-start" alignItems="center" spacing={1}>
                                            <Typography sx={{width:'3rem'}} variant="body1">이메일</Typography>
                                            <TextField
                                                size="small"
                                                value={''}
                                                sx={{boxSizing:'border-box', width:'100%'}}
                                            />  
                                        </Stack>
                                        <Box sx={{px:2}}>
                                            <IconButton size="small" sx={{ border:`1px solid ${theme.palette.text.sub}`}}><Remove/></IconButton>
                                        </Box>
                                        
                                    </Stack>
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'투자인력 정보'}>
                                    <Stack direction={'row'} spacing={2} sx={{width:'100%'}}>
                                        <Stack direction={'row'} justifyContent="flex-start" alignItems="center" spacing={1}>
                                            <Typography variant="body1">성명</Typography>
                                            <TextField
                                                size="small"
                                                value={''}
                                                
                                            />  
                                        </Stack>
                                        <Stack direction={'row'} justifyContent="flex-start" alignItems="center" spacing={1}>
                                            <Typography variant="body1">전화번호</Typography>
                                            <TextField
                                                size="small"
                                                value={''}
                                                
                                            />  
                                        </Stack>
                                        <Stack flexGrow={1} direction={'row'} justifyContent="flex-start" alignItems="center" spacing={1}>
                                            <Typography sx={{width:'3rem'}} variant="body1">이메일</Typography>
                                            <TextField
                                                size="small"
                                                value={''}
                                                sx={{boxSizing:'border-box', width:'100%'}}
                                            />  
                                        </Stack>
                                        <Button size="small" color="primary" variant="outlined" endIcon={<Add />}>
                                            추가
                                        </Button>
                                    </Stack>
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'관리인력 정보'}>
                                    <Stack direction={'row'} spacing={2} sx={{width:'100%'}}>
                                        <Stack direction={'row'} justifyContent="flex-start" alignItems="center" spacing={1}>
                                            <Typography variant="body1">성명</Typography>
                                            <TextField
                                                size="small"
                                                value={''}
                                                
                                            />  
                                        </Stack>
                                        <Stack direction={'row'} justifyContent="flex-start" alignItems="center" spacing={1}>
                                            <Typography variant="body1">전화번호</Typography>
                                            <TextField
                                                size="small"
                                                value={''}
                                                
                                            />  
                                        </Stack>
                                        <Stack flexGrow={1} direction={'row'} justifyContent="flex-start" alignItems="center" spacing={1}>
                                            <Typography sx={{width:'3rem'}} variant="body1">이메일</Typography>
                                            <TextField
                                                size="small"
                                                value={''}
                                                sx={{boxSizing:'border-box', width:'100%'}}
                                            />  
                                        </Stack>
                                        <Button size="small" color="primary" variant="outlined" endIcon={<Add />}>
                                            추가
                                        </Button>
                                    </Stack>
                                </BtContentGrid>


                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Stack direction={'row'} spacing={2}>
                                <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>상세 정보 등록(선택)</Typography>

                                <Typography variant="body1"  sx={{color:theme.palette.text.sub}}>
                                    * 상세등록을 하시면 IBK 금융그룹에 출자 신청 시 편리합니다.
                                </Typography>
                            </Stack>

                            <Stack direction={'row'} spacing={2} justifyContent="flex-start" alignItems="center" sx={{pt:2, pb:1, borderTop:`2px solid ${theme.palette.primary.main}`}} >
                                <Typography variant="body1" flexGrow={1}>
                                    등록되어 있는 IR 정보를 자동으로 불러옵니다.<br/>
                                    그리고 아래 항목을 입력하시면 BOX IR 정보에 자동으로 반영됩니다.
                                </Typography>
                                <Button size="small" color="primary" variant="outlined">재무정보 자동 입력</Button>
                            </Stack>

                            <Grid container sx={{marginTop:0, borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'운용사명'} required={true}>
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
                                <BtContentGrid gridXs={6} title={'대표이사'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'회사 소재지'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                    />                                    
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'설립년월일'} required={true}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker format="YYYY-MM-DD" slotProps={{ textField: { size: 'small' } }} sx={{width:'100%'}}/>
                                    </LocalizationProvider>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'펀드운용 시작일'} required={true}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker format="YYYY-MM-DD" slotProps={{ textField: { size: 'small' } }} sx={{width:'100%'}}/>
                                    </LocalizationProvider>                                   
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'자본 총계'} required={true}>
                                    <TextField
                                        size="small"
                                        value={''}
                                        disabled
                                        sx={{
                                            width:'100%',
                                            backgroundColor:theme.palette.disabled.lighter,
                                        }}
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
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">원</InputAdornment>,
                                          }}
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
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>

                                                </TableRow>


                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">부채총계</TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>

                                                </TableRow>

                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">자본총계</TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>

                                                </TableRow>


                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">영업수익</TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>

                                                </TableRow>


                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">영업비용</TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>

                                                </TableRow>


                                                <TableRow>
                                                    <TableCell align="center" component="th" scope="row">당기순이익</TableCell>
                                                    <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
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
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment>, }} sx={{width:'100%'}} /> 
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
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment>, }} sx={{width:'100%'}} /> 
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
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment>, }} sx={{width:'100%'}} /> 
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
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">원</InputAdornment>, }} sx={{width:'100%'}} /> 
                                                    </TableCell>
                                                    <TableCell align="left" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                                        <TextField size="small" value={''} InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment>, }} sx={{width:'100%'}} /> 
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
                        <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                            <Button variant="outlined" size="large" color="primary" disableElevation >취소</Button>
                            <Button variant="contained" size="large" color="primary" disableElevation>선정</Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Stack>


        </Container>
    </Stack>
    {/* End of Contents */}
    </>
};
  
export default BA10102;