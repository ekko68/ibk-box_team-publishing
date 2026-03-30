import { Add, AddOutlined, EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, Remove,CloudUploadOutlined, CheckBox, CheckOutlined, CloseOutlined } from "@mui/icons-material";
import { Grid, AppBar, Badge, Box, Button, Chip, Container, Divider, IconButton, MenuItem, Paper, Select, Stack, Typography, useTheme, Pagination, PaginationItem, TableContainer, Table, TableBody, TableRow, TableHead, TableCell, Avatar, TextField, InputAdornment, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, Stepper, StepLabel, Step, Checkbox } from "@mui/material";
import { BtNavSelect } from "../components/BtNavSelect";
import { BtContentGrid } from "../components/BtContentGrid";
import { BtTabContext } from "../components/BtTabContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { BtSelect } from "../components/BtSelect/BtSelect";
import dayjs from "dayjs";
// import Grid from '@mui/material/Unstable_Grid2';

const BA10802 = () => {

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
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>내정보</MenuItem>
                            <MenuItem value={20} sx={{fontSize:'1rem'}}>Item 2</MenuItem>
                            <MenuItem value={30} sx={{fontSize:'1rem'}}>Item 3</MenuItem>
                        </BtNavSelect>
                        <BtNavSelect  defaultValue={10} >
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>IBK벤처대출</MenuItem>
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
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>온라인 재무서류 제출</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>

                        <Stack direction={'row'} alignItems={'flex-start'} spacing={2}>
                            <Typography flexGrow={1} sx={{color:theme.palette.text.sub}}>
                                • 사업자등록증, 부가세과세표준증명원<br/>
                                : 우측의 재무서류 자동 수집 버튼을 누르시고 홈택스에 등록된 공동인증서로 인증하시면 서류가 자동으로 제출됩니다.<br/>
                                • 주주명부, 회사소개서(IR자료)<br/>
                                : 혁신투자BOX에 등록되어 있는 IR 정보가 있다면 등록된 정보를 자동으로 불러옵니다. 다른 자료를 제출하고 싶으시면 파일 첨부 버튼으로 자료를 직접 등록해 주세요.
                            </Typography>
                            <Button variant="outlined" disableElevation>
                                필요서류 자동 제출
                            </Button>
                        </Stack>
     
                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'기업명'} >
                                    <Stack direction={'row'} alignItems={"center"} spacing={2} sx={{width:'100%'}}>
                                        
                                        <CheckOutlined color="primary" />
                                        <Typography flexGrow={1}>
                                            자동 수집 완료
                                        </Typography>
                                        
                                    </Stack>
                                    
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'부가세과세표준증명원'} additionalContents={<Typography sx={{color:theme.palette.text.sub}}>(최근 3개년도)</Typography>} >
                                    <Stack direction={'row'} alignItems={"center"} spacing={2} sx={{width:'100%'}}>
                                        <Typography flexGrow={1} sx={{color:theme.palette.disabled.main}}> 
                                            파일을 등록해 주세요.
                                        </Typography>
                                        <Button variant="outlined">파일 첨부</Button>
                                    </Stack>
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'법인등기사항전부증명서'} >
                                    <Stack direction={'row'} alignItems={"center"} spacing={2} sx={{width:'100%'}}>
                                        <Typography flexGrow={1} sx={{color:theme.palette.disabled.main}}> 
                                            파일을 등록해 주세요.
                                        </Typography>
                                        <Button variant="outlined">파일 첨부</Button>
                                    </Stack>
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'법인등기사항전부증명서'} >
                                    <Stack direction={'row'} alignItems={"center"} spacing={2} sx={{width:'100%'}}>
                                        <Typography flexGrow={1}> 
                                            주주명부_(주)홈핏.pdf
                                        </Typography>
                                        <IconButton size="small">
                                            <CloseOutlined/>
                                        </IconButton>
                                    </Stack>
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'기업명'} >
                                    <Stack direction={'row'} alignItems={"center"} spacing={2} sx={{width:'100%'}}>
                                        <CheckOutlined color="primary" />
                                        <Typography flexGrow={1}>
                                            자동 등록 완료
                                        </Typography>
                                        
                                        <Button variant="outlined">파일 첨부</Button>
                                    </Stack>
                                    
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={''} >
                                    <Stack direction={'row'} alignItems={"center"} spacing={2} sx={{width:'100%'}}>
                                        
                                    </Stack>
                                    
                                </BtContentGrid>

                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>기업 정보 입력</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'기업명'} >
                                    <TextField
                                        size="small"
                                        value={'(주)홈핏(자동입력)'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'대표자명'} >
                                    <TextField
                                        size="small"
                                        value={'엄선진(자동입력)'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'사업자번호'} >
                                    <TextField
                                        size="small"
                                        value={'617-86-11111(자동입력)'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'설립년월일'} >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker   format="YYYY-MM-DD" value={dayjs('2017-01-25')} sx={{
                                            width:'100%',}}
                                            slotProps={{ textField: { size: 'small' } }}
                                        />
                                    </LocalizationProvider> 
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'본사 주소'} >
                                    <TextField
                                        size="small"
                                        value={'서울특별시 강남구 선릉로 108길 51, 3층(삼성동)'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'기업 담당자명'} >
                                    <TextField
                                        size="small"
                                        value={'김정근'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'담당자 직책'} >
                                    <TextField
                                        size="small"
                                        value={'매니저'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'담당자 연락처'} >
                                    <TextField
                                        size="small"
                                        value={'010-1234-1234'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'담당자 이메일'} >
                                    <TextField
                                        size="small"
                                        value={'abc@gmail.com'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>신용평가에 필요한 기타 서류</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>

                        <Stack direction={'row'} alignItems={'center'} spacing={2}>
                            <Typography flexGrow={1} sx={{color:theme.palette.text.sub}}>
                                • 우측의 각 동의서를 다운로드 받으시고 대표님 서명 후 스캔하셔서 파일 첨부해 주세요.
                            </Typography>
                            <Button variant="outlined" disableElevation>
                                개인(신용)정보 조회동의서
                            </Button>
                            <Button variant="outlined" disableElevation>
                                개인(신용)정보 수집 이용 동의서
                            </Button>
                        </Stack>
     
                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>


                                <BtContentGrid gridXs={6} title={'법인등기사항전부증명서'} >
                                    <Stack direction={'row'} alignItems={"center"} spacing={2} sx={{width:'100%'}}>
                                        <Typography flexGrow={1}> 
                                            주주명부_(주)홈핏.pdf
                                        </Typography>
                                        <IconButton size="small">
                                            <CloseOutlined/>
                                        </IconButton>
                                    </Stack>
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'법인등기사항전부증명서'} >
                                    <Stack direction={'row'} alignItems={"center"} spacing={2} sx={{width:'100%'}}>
                                        <Typography flexGrow={1} sx={{color:theme.palette.disabled.main}}> 
                                            파일을 등록해 주세요.
                                        </Typography>
                                        <Button variant="outlined">파일 첨부</Button>
                                    </Stack>
                                </BtContentGrid>



                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>IBK벤처대출 투자확인서, 자금사용계획서</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'입력 항목'} >
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        placeholder="입력해 주세요"
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'입력 항목'} >
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        placeholder="입력해 주세요"
                                    />
                                </BtContentGrid>

                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>IBK벤처대출 지원신청서</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'입력 항목'} >
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        placeholder="입력해 주세요"
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'입력 항목'} >
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                        placeholder="입력해 주세요"
                                    />
                                </BtContentGrid>

                            </Grid>
                        </Stack>


                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>정관(신주인수권부사채 발행 가능여부 확인)</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>

                        <Stack direction={'row'} alignItems={'flex-start'} spacing={2}>
                            <Typography flexGrow={1} sx={{color:theme.palette.text.sub}}>
                                • 신주인수권부사채 발행 가능 여부(정관상 기재 안되어 있는 경우가 많으니 꼭 확인해 주세요) 및 주주총회, 이사회결의사항 여부 확인 부탁 드립니다.
                            </Typography>
                        </Stack>
     
                        <Stack direction={'column'} spacing={1}>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'정관'} >
                                    <Stack direction={'row'} alignItems={"center"} spacing={2} sx={{width:'100%'}}>
                                        <Typography flexGrow={1} sx={{color:theme.palette.disabled.main}}> 
                                            파일을 등록해 주세요.
                                        </Typography>
                                        <Button variant="outlined">파일 첨부</Button>
                                    </Stack>
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'주주총회 또는 이사회 결의서'} >
                                    <Stack direction={'row'} alignItems={"center"} spacing={2} sx={{width:'100%'}}>
                                        <Typography flexGrow={1} sx={{color:theme.palette.disabled.main}}> 
                                            파일을 등록해 주세요.
                                        </Typography>
                                        <Button variant="outlined">파일 첨부</Button>
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
  
export default BA10802;