import { EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import { Grid, AppBar, Badge, Box, Button, Chip, Container, Divider, IconButton, MenuItem, Paper, Select, Stack, Typography, useTheme, Pagination, PaginationItem, TableContainer, Table, TableBody, TableRow, TableHead, TableCell, Avatar } from "@mui/material";
import { BtNavSelect } from "../components/BtNavSelect";
import { BtContentGrid } from "../components/BtContentGrid";
import { BtTabContext } from "../components/BtTabContext";
// import Grid from '@mui/material/Unstable_Grid2';

const BA10101 = () => {

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
                        <Button disableElevation color="primary" variant="contained">
                            투자사전환요청
                        </Button>
                        <Button disableElevation color="primary" variant="contained">
                            수정하기
                        </Button>
                    </Stack>
                    <Divider/>
                </Stack>

                <Paper  sx={{p:4}}>
                    <Stack direction={'column'} spacing={4}>
                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>기본정보</Typography>

                            <Grid container sx={{borderTop:`2px solid ${theme.palette.primary.main}`}}>

                                <BtContentGrid gridXs={6} title={'기업명'}>
                                    <Typography variant="body1">주식회사일루넥스</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'대표번호'}>
                                    <Typography variant="body1">주식회사일루넥스</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'대표'}>
                                    <Typography variant="body1">홍길동</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'팩스번호'}>
                                    <Typography variant="body1">02-3456-7890</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'설립일'}>
                                    <Typography variant="body1">2017-11-01</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'이메일'}>
                                    <Typography variant="body1">manager@illunex.com</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'기업형태'}>
                                    <Typography variant="body1">스타트업</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'직원 수'}>
                                    <Typography variant="body1">33</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'주소'}>
                                    <Typography variant="body1">(13536) 서울 마포 월드컵북로35 5F</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'업태'}>
                                    <Typography variant="body1">www.illunex.com</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'업종'}>
                                    <Typography variant="body1">서비스</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'최근매출(천원)'}>
                                    <Typography variant="body1">2,100,000 (2021년)</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'업태'}>
                                    <Typography variant="body1">소프트웨어개발 및 공급</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'기업구분'}>
                                    <Typography variant="body1">중소기업</Typography>
                                </BtContentGrid>                                 
                                <BtContentGrid gridXs={6} title={'관심분야'}>
                                    <Stack direction={'row'} spacing={1}>
                                        <Chip label="한국어" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="마케팅" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="한류" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="교육" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="글로벌" variant="outlined" sx={{borderRadius:2}}/>
                                    </Stack>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'상장구분'}>
                                    <Typography variant="body1">비상장</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={12} title={'사업장 소재지'}>
                                    <Typography variant="body1">서울</Typography>
                                </BtContentGrid>

                            </Grid>
                        </Stack>
                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>소개</Typography>

                            <Grid container sx={{borderTop:`2px solid ${theme.palette.primary.main}`}}>

                                <Grid xs={12}>
                                    <Box sx={{p:2}}>
                                        <Typography variant="body1">
                                            안녕하세요. (주)넥스파트너스 입니다.<br/>
                                            저희가 추구하는 투자의 핵심은 고객의 가치를 극대화시켜 장기적으로 ‘창업’과 ‘투자’가 .... 따라서 앞으로도 차별화되는 투자전략 및 기회를 모색하여 정부, 금융, 종합 IT 그룹 및 .... 소중한 동반자들께 고객을
                                            향해 더 높은 가치 실현을 집중해 갈 것을 약속드립니다. (주)넥스파트너스는 ‘성실’, ‘도전’, ‘고객만족’의 3대 핵심가치를 바탕으로 미래의 글로벌 .... 회사가 될 수 있도록 끊임없이 노력해 나아가겠습니다.
                                            관심과 격려 부탁드립니다. 감사합니다. 
                                        </Typography>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Stack>
                    </Stack>
                </Paper>

                {/* 지적재산권 */}
                <Stack  spacing={1}>
                    <Stack direction={'row'} alignItems="flex-end" spacing={1} >
                        <Typography variant="h2" flexGrow={1}>
                            지적재산권
                        </Typography>

                        <Button disableElevation color="primary" variant="contained">
                            수정하기
                        </Button>
                    </Stack>
                    <Divider/>
                </Stack>

                <Paper sx={{p:4}}>
                    <BtTabContext
                        tabItems={[
                            {label:'특허/실용신안',contentCount:20, content:
                            <>
                                <Grid container  sx={{'&>*:nth-child(even)':{
                                    background:theme.palette.background.default
                                }}}>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>    
                                </Grid>
                                <Stack alignItems={'center'}>
                                    <Pagination count={3}
                                        renderItem={(item) => 
                                            <PaginationItem {...item} 
                                                sx={{
                                                    color:theme.palette.disabled.main,
                                                    '&.Mui-selected':{
                                                        backgroundColor:'transparent',
                                                        color:theme.palette.primary.main,
                                                        '&:hover':{
                                                        backgroundColor:theme.palette.primary.light,
                                                        }
                                                    },
                                                    '&.MuiPaginationItem-previousNext':{
                                                        color:theme.palette.primary.main,
                                                    }
                                                }}
                                            />
                                        } 
                                        sx={{backgroundColor:theme.palette.background.white}}
                                    />
                                </Stack>
                            </>

                            },
                            {label:'상표',contentCount:12,content:
                            <>
                                <Grid container  sx={{'&>*:nth-child(even)':{
                                    background:theme.palette.background.default
                                }}}>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>    
                                </Grid>
                                <Stack alignItems={'center'}>
                                    <Pagination count={2}
                                        renderItem={(item) => 
                                            <PaginationItem {...item} 
                                                sx={{
                                                    color:theme.palette.disabled.main,
                                                    '&.Mui-selected':{
                                                        backgroundColor:'transparent',
                                                        color:theme.palette.primary.main,
                                                        '&:hover':{
                                                        backgroundColor:theme.palette.primary.light,
                                                        }
                                                    },
                                                    '&.MuiPaginationItem-previousNext':{
                                                        color:theme.palette.primary.main,
                                                    }
                                                }}
                                            />
                                        } 
                                        sx={{backgroundColor:theme.palette.background.white}}
                                    />
                                </Stack>
                            </>},
                            {label:'디자인',contentCount:8,content:
                            <>
                                <Grid container  sx={{'&>*:nth-child(even)':{
                                    background:theme.palette.background.default
                                }}}>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} container  sx={{p:4}}>
                                        <Grid width={240} height={160} sx={{border:`1px solid ${theme.palette.disabled.main}`}}>
                                            <img width='100%' height='100%' src="certification_01.jpg" style={{objectFit:'cover',objectPosition:'center center'}}/>
                                        </Grid>
                                        <Grid xs sx={{ml:3, py:2}}>
                                            <Stack direction={'column'} spacing={2}>
                                                <Typography color={"primary"} variant="h3">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 바업 및 이를 수행하는 시스템
                                                </Typography>
                                                <Typography variant="body1">
                                                    데이터 시각화 제공을 위한 그래프 관계망 제공 방법 및 이를 수행하는 시스템이 개시된다. 이 방법은 먼저 복수의 노드로 구성된 그래프 관계망을 표시하는 단계이다.  그 후, 사용자에 의해 그래프 관계망에 대한 노드 결합이 요구되는 경우 복수의 노드가 공통으로 갖고 있는 공통 정보 항목 중 사용자에 의해 ...
                                                </Typography>
                                                <Stack  direction={'row'} spacing={4}>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"} variant="body2">출원번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">출원일자</Typography>
                                                        <Typography variant="body2">1983-10-11</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록번호</Typography>
                                                        <Typography variant="body2">3019830010737</Typography>
                                                    </Stack>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <Typography color={"primary"}variant="body2">등록일자</Typography>
                                                        <Typography variant="body2">1984-07-20</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            
                                        </Grid>
                                    </Grid>    
                                </Grid>
                                <Stack alignItems={'center'}>
                                    <Pagination count={1}
                                        renderItem={(item) => 
                                            <PaginationItem {...item} 
                                                sx={{
                                                    color:theme.palette.disabled.main,
                                                    '&.Mui-selected':{
                                                        backgroundColor:'transparent',
                                                        color:theme.palette.primary.main,
                                                        '&:hover':{
                                                        backgroundColor:theme.palette.primary.light,
                                                        }
                                                    },
                                                    '&.MuiPaginationItem-previousNext':{
                                                        color:theme.palette.primary.main,
                                                    }
                                                }}
                                            />
                                        } 
                                        sx={{backgroundColor:theme.palette.background.white}}
                                    />
                                </Stack>
                            </>}
                        ]}
                    />
                </Paper>

                {/* 주요제품정보 */}
                <Stack  spacing={1}>
                    <Stack direction={'row'} alignItems="flex-end" spacing={1} >
                        <Typography variant="h2" flexGrow={1}>
                            주요제품정보
                        </Typography>
                        <Button disableElevation color="primary" variant="contained">
                            추가하기
                        </Button>
                    </Stack>
                    <Divider/>
                </Stack>

                <Paper  sx={{p:4}}>
                    <Stack direction={'column'} spacing={4}>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>제품정보</Typography>

                            <Grid container sx={{borderTop:`2px solid ${theme.palette.primary.main}`}}>

                                <Grid xs={12}>
                                    <Box sx={{p:2}}>
                                        <Stack
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center" sx={{height:'10rem'}}
                                        >
                                            <Typography color={'primary'} variant="body1" sx={{textAlign:'center'}}>
                                                현재 등록된 제품 정보가 없습니다
                                            </Typography>
                                        </Stack>

                                    </Box>
                                </Grid>

                            </Grid>
                        </Stack>
                    </Stack>
                </Paper>

                {/* 투자희망 정보 */}
                <Stack  spacing={1}>
                    <Stack direction={'row'} alignItems="flex-end" spacing={1} >
                        <Typography variant="h2" flexGrow={1}>
                            투자희망 정보
                        </Typography>
                        <Button disableElevation color="primary" variant="contained">
                            수정하기
                        </Button>
                    </Stack>
                    <Divider/>
                </Stack>

                <Paper  sx={{p:4}}>
                    <Stack direction={'column'} spacing={4}>
                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>단계 및 금액</Typography>

                            <Grid container sx={{borderTop:`2px solid ${theme.palette.primary.main}`}}>

                                <BtContentGrid gridXs={12} title={'노출유무'}>
                                    <Typography color={'primary'} variant="body1">공개</Typography>
                                    <Typography sx={{ml:2, color: theme.palette.warning.dark}} variant="body1">비공개</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'희망단계'}>
                                    <Typography variant="body1">Seed</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'투자금(천원)'}>
                                    <Typography variant="body1">50억 이하</Typography>
                                </BtContentGrid>
                                

                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>분야 및 기술</Typography>

                            <Grid container sx={{borderTop:`2px solid ${theme.palette.primary.main}`}}>
                                
                                <BtContentGrid gridXs={6} title={'비즈니스 분야'}>
                                    <Stack direction={'row'} spacing={1}>
                                        <Chip label="한국어" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="마케팅" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="한류" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="교육" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="글로벌" variant="outlined" sx={{borderRadius:2}}/>
                                    </Stack>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'비즈니스 분야'}>
                                    <Stack direction={'row'} spacing={1}>
                                        <Chip label="사물인터넷" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="빅데이터" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="전자상거래" variant="outlined" sx={{borderRadius:2}}/>
                                    </Stack>
                                </BtContentGrid>

                            </Grid>
                        </Stack>
                    </Stack>
                </Paper>

                {/* 팀원정보 */}
                <Stack  spacing={1}>
                    <Stack direction={'row'} alignItems="flex-end" spacing={1} >
                        <Typography variant="h2" flexGrow={1}>
                            팀원정보
                        </Typography>
                        <Button disableElevation color="primary" variant="contained">
                            수정하기
                        </Button>
                    </Stack>
                    <Divider/>
                </Stack>

                <Paper  sx={{p:4}}>
                    <Stack direction={'column'} spacing={1}>
                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>팀원</Typography>

                        </Stack>


                        <TableContainer component={Paper} sx={{borderRadius:0, boxShadow:'none'}}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{
                                borderTop:`2px solid ${theme.palette.primary.main}`,

                            }}>
                                <TableRow>
                                <TableCell align="center">No</TableCell>
                                <TableCell align="center">이름</TableCell>
                                <TableCell align="center">직급</TableCell>
                                <TableCell align="center">경력</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell align="center" component="th" scope="row">05</TableCell>
                                    <TableCell align="center" component="th" scope="row">
                                        <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2}>
                                            <Avatar src="avatars/profile_01.jpg" sx={{ bgcolor: theme.palette.disabled.main }}/> 
                                            <Typography variant="body1">최진규</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="left" component="th" scope="row">대표이사(前 빗썸코리아 부사장)</TableCell>
                                    <TableCell align="left" component="th" scope="row">빗썸코리아 / 비티원 부사장 / 알바천국 기획실장 /  인크루트 서비스기획 본부장</TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell align="center" component="th" scope="row">04</TableCell>
                                    <TableCell align="center" component="th" scope="row">
                                        <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2}>
                                            <Avatar src="avatars/profile_02.jpg" sx={{ bgcolor: theme.palette.disabled.main }} /> 
                                            <Typography variant="body1">오영준</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="left" component="th" scope="row">부사장(前 빗썸코리아 상무, 삼성 카드사)</TableCell>
                                    <TableCell align="left" component="th" scope="row">現 빗썸코리아 경영자문역 / 빗썸 커뮤니케이션실장 / 삼성카드 커뮤니케이션 실장</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" component="th" scope="row">03</TableCell>
                                    <TableCell align="center" component="th" scope="row">
                                        <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2}>
                                            <Avatar sx={{ bgcolor: theme.palette.disabled.main }}> <PersonOutlineOutlined sx={{color:theme.palette.background.white}} /> </Avatar>
                                            <Typography variant="body1">조윤수</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="left" component="th" scope="row">실장(前 빗썸코리아 실장)</TableCell>
                                    <TableCell align="left" component="th" scope="row">썸 고객지원실장 / YBM 교육사업팀장</TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell align="center" component="th" scope="row">02</TableCell>
                                    <TableCell align="center" component="th" scope="row">
                                        <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2}>
                                            <Avatar sx={{ bgcolor: theme.palette.disabled.main }}> <PersonOutlineOutlined sx={{color:theme.palette.background.white}} /> </Avatar>
                                            <Typography variant="body1">이용수</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="left" component="th" scope="row">실장(前 NHN, CJ쇼핑, 위메프)</TableCell>
                                    <TableCell align="left" component="th" scope="row">CJ, 네이버, 위메프 사업실장</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" component="th" scope="row">01</TableCell>
                                    <TableCell align="center" component="th" scope="row">
                                        <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2}>
                                            <Avatar sx={{ bgcolor: theme.palette.disabled.main }}> <PersonOutlineOutlined sx={{color:theme.palette.background.white}} /> </Avatar>
                                            <Typography variant="body1">최진규</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="left" component="th" scope="row">고문</TableCell>
                                    <TableCell align="left" component="th" scope="row">빗썸코리아 / 비티원 부사장 / 알바천국 기획실장 / 인크루트 서비스기획 본부장</TableCell>

                                </TableRow>
                                                               
                            </TableBody>
                            </Table>
                        </TableContainer>

                    </Stack>
                </Paper>

                {/* 소개영상 */}
                <Stack  spacing={1}>
                    <Stack direction={'row'} alignItems="flex-end" spacing={1} >
                        <Typography variant="h2" flexGrow={1}>
                            소개영상
                        </Typography>
                        <Button disableElevation color="primary" variant="contained">
                            수정하기
                        </Button>
                    </Stack>
                    <Divider/>
                </Stack>

                <Stack direction={'row'} spacing={2.5} >
                    <Paper sx={{p:3, width:'100%'}}>
                        <Stack direction={'column'} spacing={1}>
                            <Box sx={{position:'relative', paddingBottom:'56.25%',height:0}}>
                                <iframe style={{width:'100%', height:'100%', top:0, left:0, position:'absolute' }} src="https://www.youtube.com/embed/sphjzlQuXbM?si=2OXXTfB0fNvKp5hT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Box>
                            
                            <Typography variant="h6">투자박스 소개영상 Title</Typography>
                        </Stack>
                    </Paper>
                    <Paper sx={{p:3, width:'100%'}}>
                        <Stack direction={'column'} spacing={1}>
                            <Box sx={{position:'relative', paddingBottom:'56.25%',height:0}}>
                                <iframe style={{width:'100%', height:'100%', top:0, left:0, position:'absolute' }} src="https://www.youtube.com/embed/sphjzlQuXbM?si=2OXXTfB0fNvKp5hT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Box>
                            
                            <Typography variant="h6">투자박스 소개영상 Title</Typography>
                        </Stack>
                    </Paper>
                    <Paper sx={{p:3, width:'100%'}}>
                        <Stack direction={'column'} spacing={1}>
                            <Box sx={{position:'relative', paddingBottom:'56.25%',height:0}}>
                                <iframe style={{width:'100%', height:'100%', top:0, left:0, position:'absolute' }} src="https://www.youtube.com/embed/sphjzlQuXbM?si=2OXXTfB0fNvKp5hT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Box>
                            
                            <Typography variant="h6">투자박스 소개영상 Title</Typography>
                        </Stack>
                    </Paper>
                </Stack>


            </Stack>


        </Container>
    </Stack>
    {/* End of Contents */}
    </>
};
  
export default BA10101;