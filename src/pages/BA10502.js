import { Add, AddOutlined, EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, Remove,CloudUploadOutlined, CheckBox } from "@mui/icons-material";
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

const BA10502 = () => {

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
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>IBK 벤처대출 추천서 제출</MenuItem>
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
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>추천기업</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>
                                
                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h4">1. 기본정보</Typography>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'기업명'} >
                                    <TextField
                                        size="small"
                                        value={'(주)홈핏'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'대표자명'} >
                                    <TextField
                                        size="small"
                                        value={'엄선진'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'사업자번호'} >
                                    <TextField
                                        size="small"
                                        value={'617-86-11111'}
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

                                <BtContentGrid gridXs={12} title={'업종명(표준산업분류)'} >
                                    <TextField
                                        size="small"
                                        value={'교육 서비스업(85709)'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'투자업종 구분'} >
                                    <Stack direction={'column'} spacing={1} sx={{width:'100%'}}>
                                        <BtSelect flexGrow={1} defaultValue={6} sx={{width:'100%'}}>
                                            <MenuItem disabled value={0}>선택하세요</MenuItem>
                                            <MenuItem value={1}>ICT서비스</MenuItem>
                                            <MenuItem value={2}>ICT제조</MenuItem>
                                            <MenuItem value={3}>바이오∙의료</MenuItem>
                                            <MenuItem value={4}>화학∙소재</MenuItem>
                                            <MenuItem value={5}>전기∙기계∙장비</MenuItem>
                                            <MenuItem value={6}>유통∙서비스</MenuItem>
                                            <MenuItem value={7}>기타</MenuItem>
                                        </BtSelect>
                                        <Typography variant="body2">* 영상・공연・음반, 게임은 ‘ICT 서비스’에 포함</Typography>
                                    </Stack>
                                     
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'주요제품'} >
                                    <TextField
                                        size="small"
                                        value={'방문PT플랫폼'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>
                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h4">2. 담당자 정보</Typography>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

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
                            <Typography variant="h4">3. 투자 의견</Typography>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={12} title={'기업 경쟁력 또는 성장가능성'} >
                                    <Stack sx={{width:'100%'}} spacing={1}>
                                        <Typography sx={{textAlign:'right', color:theme.palette.text.sub}}>0/1000</Typography>
                                        <TextField
                                            size="small"
                                            value={''}
                                            multiline
                                            rows={5}
                                            sx={{width:'100%'}}
                                        />
                                    </Stack>
                                    
                                </BtContentGrid>

                                <BtContentGrid gridXs={12} title={'후속투자 가능성 및 예상시기'} >
                                    <Stack sx={{width:'100%'}} spacing={1}>
                                        <Typography sx={{textAlign:'right', color:theme.palette.text.sub}}>0/1000</Typography>
                                        <TextField
                                            size="small"
                                            value={''}
                                            multiline
                                            rows={5}
                                            sx={{width:'100%'}}
                                        />
                                    </Stack>
                                </BtContentGrid>

                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>
                            담당자 정보</Typography>
                            <Divider  sx={{height:'1px', backgroundColor:theme.palette.primary.main }}/>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h4">1. 투자 내역</Typography>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'기업명'} >
                                    <TextField
                                        size="small"
                                        value={'씨엔티테크(주)'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'투자라운드(직전)'} >
                                    <BtSelect flexGrow={1} defaultValue={2} sx={{width:'100%'}}>
                                        <MenuItem disabled value={0}>선택하세요</MenuItem>
                                        <MenuItem value={1}>Series A</MenuItem>
                                        <MenuItem value={2}>Item 2</MenuItem>
                                        <MenuItem value={3}>Item 3</MenuItem>
                                    </BtSelect>
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'투자금액(원)'} >
                                    <TextField
                                        size="small"
                                        value={'200,024,160'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'투자일자(직전)'} >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker   format="YYYY-MM-DD" value={dayjs('2023-05-25')} sx={{
                                            width:'100%',}}
                                            slotProps={{ textField: { size: 'small' } }}
                                        />
                                    </LocalizationProvider> 
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'주당가격(원)'} >
                                    <TextField
                                        size="small"
                                        value={'49,560'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'기업가치(원)'} >
                                    <TextField
                                        size="small"
                                        value={'15,660,117,480'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'투자종류'} >
                                    <TextField
                                        size="small"
                                        value={'RCPS'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'비고'} >
                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h4">2. 담당자 정보</Typography>
                            <Typography sx={{color:theme.palette.text.sub}}>* 담당 심사역 정보</Typography>
                            <Grid container sx={{pb:2, borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'이름'} >
                                    <TextField
                                        size="small"
                                        value={'김명길'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'직책'} >
                                    <TextField
                                        size="small"
                                        value={'매니저'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'연락처'} >
                                    <TextField
                                        size="small"
                                        value={'010-1111-2222'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'이메일'} >
                                    <TextField
                                        size="small"
                                        value={'eric@cntt.co.kr'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>


                            </Grid>
                            <Typography sx={{color:theme.palette.text.sub}}>* 연락 담당자 정보</Typography>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                                <BtContentGrid gridXs={6} title={'이름'} >
                                    <TextField
                                        size="small"
                                        value={'김명길'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'직책'} >
                                    <TextField
                                        size="small"
                                        value={'매니저'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'연락처'} >
                                    <TextField
                                        size="small"
                                        value={'010-1111-2222'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>

                                <BtContentGrid gridXs={6} title={'이메일'} >
                                    <TextField
                                        size="small"
                                        value={'eric@cntt.co.kr'}
                                        sx={{width:'100%'}}
                                    />
                                </BtContentGrid>


                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h4">3. 투자사실 증빙 서류 첨부</Typography>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>
                                <BtContentGrid gridXs={12} title={'파일 첨부'} >
                                    <Stack direction={'column'} spacing={2} sx={{width:'100%' }}>
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

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h4">4. 투자분석 보고서(투자심사자료) 첨부</Typography>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>
                                <BtContentGrid gridXs={12} title={'파일 첨부'} >
                                    <Stack direction={'column'} spacing={2} sx={{width:'100%' }}>
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

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h4">5. 기타 파일 첨부</Typography>
                            <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>
                                <BtContentGrid gridXs={12} title={'파일 첨부'} >
                                    <Stack direction={'column'} spacing={2} sx={{width:'100%' }}>
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

                        <Grid container sx={{borderTop:`1px solid ${theme.palette.divider}`}}>

                            <BtContentGrid gridXs={12} title={'추천 기업은행 영업점'} required>
                                <Stack sx={{width:'100%'}} spacing={1}>

                                    <TextField
                                        size="small"
                                        value={''}
                                        sx={{width:'100%'}}
                                    />

                                    <FormControlLabel control={<Checkbox  sx={{pl:0}} />} label={
                                    <Typography variant="body1" sx={{color:theme.palette.text.sub}}>
                                        당사는 위 추천 기업에 대해 0000년 00월 00일 투자하고, IBK벤처대출 지원 대상기업으로 IBK기업은행에 추천하였음을 확인합니다.</Typography>} />

                                </Stack>
                                
                            </BtContentGrid>
                            
                        </Grid>

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
  
export default BA10502;