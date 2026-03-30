import { Add, AddOutlined, ArrowForward, EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, Remove } from "@mui/icons-material";
import { Grid, AppBar, Badge, Box, Button, Chip, Container, Divider, IconButton, MenuItem, Paper, Select, Stack, Typography, useTheme, Pagination, PaginationItem, TableContainer, Table, TableBody, TableRow, TableHead, TableCell, Avatar, TextField, InputAdornment } from "@mui/material";
import { BtNavSelect } from "../components/BtNavSelect";
import { BtContentGrid } from "../components/BtContentGrid";
import { BtTabContext } from "../components/BtTabContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Grid from '@mui/material/Unstable_Grid2';

const BA10202 = () => {

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
                <Typography 
                    variant="body1"
                    color={'white'}
                    
                >
                    IBK는 VC 여러분과 함께합니다.<br/>
                    좋은 펀드 및 투자기업을 IBK에 제안해 주시고,<br/>
                    IBK가 추천하는 투자대상 기업도 확인해 보세요.
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
                    <Stack direction={'column'} spacing={3}>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Typography variant="h2" sx={{width:'12rem'}}>펀드 제안</Typography>
                            <Typography flexGrow={1} variant="body1">IBK에 펀드를 제안해 주세요.<br/> 내부 심사를 통해 IBK 운용펀드로 등록될 수 있습니다.</Typography>
                            <Button variant="contained" disableElevation endIcon={<ArrowForward/>}>제안하기</Button>
                        </Stack>
                        <Divider/>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Typography variant="h2" sx={{width:'12rem'}}>투자기업 추천</Typography>
                            <Typography flexGrow={1} variant="body1">투자할만한 좋은 기업을 알고계신가요?<br/>IBK에 추천해 주시면 기업이 직접 투자받을 수 있는 기회도 생깁니다.</Typography>
                            <Button variant="contained" disableElevation endIcon={<ArrowForward/>}>제안하기</Button>
                        </Stack>
                        <Divider/>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Typography variant="h2" sx={{width:'12rem'}}>IBK 벤처대출 신청</Typography>
                            <Typography flexGrow={1} variant="body1">IBK와 업무협약한 벤처투자기관이  투자하고 추천한 벤처기업에게 저금리 대출을 지원합니다.</Typography>
                            <Button variant="contained" disableElevation endIcon={<ArrowForward/>}>제안하기</Button>
                        </Stack>
                        <Divider/>
                        <Stack direction={'row'} alignItems={'center'} spacing={1}>
                            <Typography variant="h2" sx={{width:'12rem'}}>IBK 추천기업 리스트</Typography>
                            <Typography flexGrow={1} variant="body1">입력된 VC의 전문투자분야 정보를 기반으로 IBK가 투자를 기다리는 기업을 추천해 드립니다.<br/>지금 확인해 보세요.</Typography>
                            <Button variant="contained" disableElevation endIcon={<ArrowForward/>}>제안하기</Button>
                        </Stack>
                    </Stack>

                </Paper>
            </Stack>


        </Container>
    </Stack>
    {/* End of Contents */}
    </>
};
  
export default BA10202;