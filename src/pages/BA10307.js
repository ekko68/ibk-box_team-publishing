import { Add, AddOutlined, CheckOutlined, CloudUploadOutlined, EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, MarkChatReadOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, Remove } from "@mui/icons-material";
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

const BA10307 = () => {

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
            <Stack spacing={8} direction={'column'} sx={{py:5}}>
                <Paper sx={{p:4}}>
                    <Stepper activeStep={2} alternativeLabel>
                        
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

                {/* complete message */}
                <Paper  sx={{p:6}}>
                    <Stack direction={'column'} justifyContent="center" alignItems="center" spacing={4}>
                        <Box sx={{p:3, borderRadius:20 , backgroundColor:theme.palette.primary.lighter }}>
                            <MarkChatReadOutlined color="primary" sx={{fontSize:'3rem'}}/>
                        </Box>
                        
                        <Typography variant="h6" sx={{textAlign:'center'}}>
                            IBK 혁신투자부에 제안해 주신 펀드에 답변이 등록되었습니다.

                        </Typography>
                        <Stack direction={'row'} spacing={1}>
                            <Button variant="outlined" disableElevation >제안내용 보기</Button>
                            <Button variant="contained" disableElevation>확인</Button>
                        </Stack>
                    </Stack>
                </Paper>

                {/*  메세지 */}
                <Paper  sx={{p:3}}>
                    <Stack direction={'column'} justifyContent="center" alignItems="flex-start" spacing={2}>
                        <Chip  label="심사 완료 - 일부 수락" sx={{borderRadius:1, width:'10rem', backgroundColor:theme.palette.info.main, color:theme.palette.text.contrastText}}/>
                        <Box p={3} sx={{height:'14rem', overflow:'scroll', border:`1px solid ${theme.palette.divider}`, backgroundColor:theme.palette.background.tableOddRow}}>
                            <Typography variant="body1">
                                귀한 시간 내주셔서 펀드를 제안해 주신 것에 감사를 드립니다.<br/>
                                IBK 혁신투자부에서 제안 내용을 면밀히 검토하여 펀드 조성 의견 드립니다.<br/><br/>

                                청춘이 눈에 피고 열락의 것은 주는 없으면, 보라. 있는 몸이 목숨을 무엇을 품에 교향악이다. 청춘의 이 피고, 위하여서. 바이며, 오아이스도 평화스러운 싶이 동산에는 천하를 인류의 뿐이다. 품고 이 청춘의 우리의 같으며, 풍부하게 우리의 인류의 그들은 말이다. 더운지라 인생에 과실이 피어나기 생의 두기 그들의 크고 있으랴? 웅대한 무엇을 위하여서 황금시대의 눈이 이상은 만물은 것이다. 타오르고 인생을 설산에서 소담스러운 것이다. 위하여, 없는 밝은 실현에 위하여 싸인 그들에게 얼마나 발휘하기 칼이다.
                            </Typography>
                        </Box>
                    </Stack>

                </Paper>

            </Stack>


        </Container>
    </Stack>
    {/* End of Contents */}
    </>
};
  
export default BA10307;