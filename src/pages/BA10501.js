import { Add, AddOutlined, ArrowForward, EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, Remove } from "@mui/icons-material";
import { Grid, AppBar, Badge, Box, Button, Chip, Container, Divider, IconButton, MenuItem, Paper, Select, Stack, Typography, useTheme, Pagination, PaginationItem, TableContainer, Table, TableBody, TableRow, TableHead, TableCell, Avatar, TextField, InputAdornment } from "@mui/material";
import { BtNavSelect } from "../components/BtNavSelect";
import { BtContentGrid } from "../components/BtContentGrid";
import { BtTabContext } from "../components/BtTabContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Grid from '@mui/material/Unstable_Grid2';

const BA10501 = () => {

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
            <Stack spacing={2} sx={{textAlign:'center', position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)' }}>
                <Typography 
                    variant="h1"
                    color={'white'}
                    
                >
                    IBK 제안센터
                </Typography>
            </Stack>
            
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
                        <Divider orientation="vertical" flexItem sx={{height:'1px'}}/>
                        
                    </Stack>
                </Box>
            </Container>
        </Box>
        {/* end of breadcrumbs */}
        <Container maxWidth="false" disableGutters sx={{maxWidth:'1280px', px:'1.25rem'}}>
            <Stack spacing={4} direction={'column'} sx={{py:5}}>
                {/* 내정보 */}
                <Paper  sx={{p:4}}>
                    <Stack direction={'column'} alignItems={'center'} spacing={3}>
                        <Typography variant="h3">
                            IBK 벤처대출
                        </Typography>
                        <Typography variant="body1">
                            초기 투자를 받은 유망 스타트업에 낮은 금리로 제공하는 대출 상품
                        </Typography>
                        <Stack direction={'row'} spacing={2}>
                            <Button variant="contained" disableElevation>
                                대출 추천서 제출
                            </Button>
                            <Button variant="contained" disableElevation>
                                추천 내역 보기
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
                <Paper  sx={{p:4}}>
                    <Stack direction={'column'} spacing={3} >
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Typography variant="h2" sx={{width:'12rem'}}>지원대상</Typography>
                            <Typography flexGrow={1} variant="body1">⎡IBK벤처대출⎦협약 벤처투자기관이 투자(2년 이내)하고 추천한 중소기업, 당행 직접투자기업 및 투자를 유치한 IBK 창공기업</Typography>
                        </Stack>
                        <Divider/>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Typography variant="h2" sx={{width:'12rem'}}>투자기업 추천</Typography>
                            <Typography flexGrow={1} variant="body1">
                                투자유치금액(2년 이내)의 일정비율 범위 이내<br/>
                                ① 창업 3년 이내 : 100% 이내, 최대 6억원<br/>
                                ② 창업 3년 이후 : 50% 이내, 최대 10억원<br/>
                            </Typography>
                        </Stack>
                        <Divider/>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Typography variant="h2" sx={{width:'12rem'}}>자금용도</Typography>
                            <Typography flexGrow={1} variant="body1">
                                운전자금<br/>
                                (대출은 신규대출에 한하며, 당행 대출 대환 불가)
                            </Typography>
                        </Stack>
                        <Divider/>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Typography variant="h2" sx={{width:'12rem'}}>계정과목</Typography>
                            <Typography flexGrow={1} variant="body1">
                                [신용대출] 중소기업자금대출(전액신용)<br/>
                                [신주인수권부사채] 인수신주인수권부사채(전액신용)
                            </Typography>
                        </Stack>
                        <Divider/>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Typography variant="h2" sx={{width:'12rem'}}>금리</Typography>
                            <Typography flexGrow={1} variant="body1">
                                [신용대출] 산출금리에서 1.0%p 감면<br/>
                                [신주인수권부사채] 개별약정에 따름
                            </Typography>
                        </Stack>
                        <Divider/>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Typography variant="h2" sx={{width:'12rem'}}>만기(상환방법)</Typography>
                            <Typography flexGrow={1} variant="body1">
                                [신용대출] 6년(2년 거치 4년 분할상환)<br/>
                                [신주인수권부사채] 6년(만기 일시상환)/ 6년(2년 거치 4년 분할상환)
                            </Typography>
                        </Stack>
                        <Divider/>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Typography variant="h2" sx={{width:'12rem'}}>특례운용</Typography>
                            <Typography flexGrow={1} variant="body1">
                                대출한도 산정시, 1회전 소요운전자금 산정 생략<br/>
                                (타 여신 취급시 본건 포함)<br/>
                                후속투자 유치로 중도상환 시 중도상환해약금 면제 가능
                            </Typography>
                        </Stack>
                    </Stack>

                </Paper>
            </Stack>


        </Container>
    </Stack>
    {/* End of Contents */}
    </>
};
  
export default BA10501;