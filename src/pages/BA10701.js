import { EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import { Grid, AppBar, Badge, Box, Button, Chip, Container, Divider, IconButton, MenuItem, Paper, Select, Stack, Typography, useTheme, Pagination, PaginationItem, TableContainer, Table, TableBody, TableRow, TableHead, TableCell, Avatar } from "@mui/material";
import { BtNavSelect } from "../components/BtNavSelect";
import { BtContentGrid } from "../components/BtContentGrid";
import { BtTabContext } from "../components/BtTabContext";
// import Grid from '@mui/material/Unstable_Grid2';

const BA10701 = () => {

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
                                    <Typography variant="body1">(주)붐코커뮤니케이션</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'대표번호'}>
                                    <Typography variant="body1">02-3456-7890</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'대표'}>
                                    <Typography variant="body1">박경훈</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'팩스번호'}>
                                    <Typography variant="body1">02-3456-7890</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'설립일'}>
                                    <Typography variant="body1"></Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'이메일'}>
                                    <Typography variant="body1"></Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'투자유형'}>
                                    <Typography variant="body1">엔젤투자</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'직원수'}>
                                    <Typography variant="body1">45</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'주소'}>
                                    <Typography variant="body1">(13536) 서울 마포 월드컵북로35 5F</Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'홈페이지'}>
                                    <Typography variant="body1"></Typography>
                                </BtContentGrid>                      
                                <BtContentGrid gridXs={12} title={'관심분야'}>
                                    <Stack direction={'row'} spacing={1}>
                                        <Chip label="한국어" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="마케팅" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="한류" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="교육" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="글로벌" variant="outlined" sx={{borderRadius:2}}/>
                                    </Stack>
                                </BtContentGrid>
                            </Grid>
                        </Stack>

                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>투자정보</Typography>

                            <Grid container sx={{borderTop:`2px solid ${theme.palette.primary.main}`}}>
                                <BtContentGrid gridXs={6} title={'관심분야'}>
                                    <Stack direction={'row'} spacing={1}>
                                        <Chip label="한국어" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="마케팅" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="한류" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="교육" variant="outlined" sx={{borderRadius:2}}/>
                                        <Chip label="글로벌" variant="outlined" sx={{borderRadius:2}}/>
                                    </Stack>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'활용기술'}>
                                    <Typography variant="body1"></Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'주요 투자 단계'}>
                                    <Typography variant="body1"></Typography>
                                </BtContentGrid>
                                <BtContentGrid gridXs={6} title={'투자 금액 범위'}>
                                    <Typography variant="body1"></Typography>
                                </BtContentGrid>
                     
                                <BtContentGrid gridXs={12} title={'주요 투자 지역'}>
                                    <Typography variant="body1"></Typography>
                                </BtContentGrid>
                     
                     
                                
                            </Grid>
                        </Stack>



                        <Stack direction={'column'} spacing={1}>
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>소개</Typography>

                            <Grid container sx={{borderTop:`2px solid ${theme.palette.primary.main}`}}>

                                <Grid xs={12}>
                                    <Box sx={{p:2}}>
                                        <Typography variant="body1">
                                            혁신을 주도하는 투자사 Boomco<br/>
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




                {/* 포트폴리오 */}
                <Stack  spacing={1}>
                    <Stack direction={'row'} alignItems="flex-end" spacing={1} >
                        <Typography variant="h2" flexGrow={1}>
                            포트폴리오
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
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>투자 리스트</Typography>

                        </Stack>


                        <TableContainer component={Paper} sx={{borderRadius:0, boxShadow:'none'}}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
                            <TableHead sx={{
                                borderTop:`2px solid ${theme.palette.primary.main}`,

                            }}>
                                <TableRow>
                                    <TableCell align="center" sx={{color: theme.palette.text.sub}}>기업명</TableCell>
                                    <TableCell align="center" sx={{color: theme.palette.text.sub}}>비즈니스 분야</TableCell>
                                    <TableCell align="center" sx={{color: theme.palette.text.sub}}>활용기술</TableCell>
                                    <TableCell align="center" sx={{color: theme.palette.text.sub}}>투자단계</TableCell>
                                    <TableCell align="center" sx={{color: theme.palette.text.sub}}>투자금액</TableCell>
                                    <TableCell align="center" sx={{color: theme.palette.text.sub}}>투자년월</TableCell>
                                    <TableCell align="center" sx={{color: theme.palette.text.sub}}>수정</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow sx={{backgroundColor:theme.palette.background.tableOddRow}}>
                                    <TableCell align="center" component="th" scope="row">
                                        <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2}>
                                            <Avatar src="avatars/vc_01.jpg" sx={{ border:"1px solid #e8ebf1", borderRadius:2, bgcolor: theme.palette.disabled.main }}/> 
                                            <Typography variant="body1">비즈스타</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center" component="th" scope="row">광고/마케팅</TableCell>
                                    <TableCell align="center" component="th" scope="row">빅데이터</TableCell>
                                    <TableCell align="center" component="th" scope="row">Series B</TableCell>
                                    <TableCell align="center" component="th" scope="row">30,000,000,000</TableCell>
                                    <TableCell align="center" component="th" scope="row">2023-05-01</TableCell>
                                    <TableCell align="center" component="th" scope="row">
                                        <Button variant="outlined" disableElevation>수정</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align="center" component="th" scope="row">
                                        <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2}>
                                            <Avatar src="avatars/vc_02.jpg" sx={{ border:"1px solid #e8ebf1", borderRadius:2, bgcolor: theme.palette.disabled.main }}/> 
                                            <Typography variant="body1">삼성테크</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center" component="th" scope="row">3D프린터</TableCell>
                                    <TableCell align="center" component="th" scope="row">기타</TableCell>
                                    <TableCell align="center" component="th" scope="row">Seed</TableCell>
                                    <TableCell align="center" component="th" scope="row">100,000,000</TableCell>
                                    <TableCell align="center" component="th" scope="row">2023-05-01</TableCell>
                                    <TableCell align="center" component="th" scope="row">
                                        <Button variant="outlined" disableElevation>수정</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{backgroundColor:theme.palette.background.tableOddRow}}>
                                    <TableCell align="center" component="th" scope="row">
                                        <Stack direction={'row'} justifyContent="center" alignItems="center" spacing={2}>
                                            <Avatar src="avatars/vc_03.jpg" sx={{ border:"1px solid #e8ebf1", borderRadius:2, bgcolor: theme.palette.disabled.main }}/> 
                                            <Typography variant="body1">엘지화학</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center" component="th" scope="row">HR</TableCell>
                                    <TableCell align="center" component="th" scope="row">블록체인</TableCell>
                                    <TableCell align="center" component="th" scope="row">Series A</TableCell>
                                    <TableCell align="center" component="th" scope="row">2,000,000,000</TableCell>
                                    <TableCell align="center" component="th" scope="row">2023-05-01</TableCell>
                                    <TableCell align="center" component="th" scope="row">
                                        <Button variant="outlined" disableElevation>수정</Button>
                                    </TableCell>
                                </TableRow>


                                                               
                            </TableBody>
                            </Table>
                        </TableContainer>

                        <Typography variant="body2" sx={{color:theme.palette.primary.main}}>전체:3</Typography>

                        <Stack alignItems={'center'}>
                            <Pagination count={1} variant="outlined" shape="rounded"
                                renderItem={(item) => 
                                    <PaginationItem {...item} 
                                        sx={{
                                            color:theme.palette.primary.main,
                                            '&.Mui-selected':{
                                                backgroundColor:theme.palette.primary.main,
                                                color:theme.palette.text.contrastText,
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

                    </Stack>
                </Paper>

                {/* 투자 운용 보고서 */}
                <Stack  spacing={1}>
                    <Stack direction={'row'} alignItems="flex-end" spacing={1} >
                        <Typography variant="h2" flexGrow={1}>
                            투자 운용 보고서
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
                            <Typography variant="h3"><FiberManualRecordOutlined color="primary"  sx={{mr:1, fontSize:'1rem' }}/>자산현황 신고</Typography>

                        </Stack>


                        <TableContainer component={Paper} sx={{borderRadius:0, boxShadow:'none'}}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                            <TableHead sx={{
                                borderTop:`2px solid ${theme.palette.primary.main}`,

                            }}>
                                <TableRow >
                                    <TableCell align="center" sx={{color: theme.palette.text.sub}}>구분</TableCell>
                                    <TableCell align="center" sx={{color: theme.palette.text.sub}}>최종 제출일</TableCell>
                                    <TableCell align="center" sx={{color: theme.palette.text.sub}}>파일명</TableCell>
                                    <TableCell align="center" sx={{color: theme.palette.text.sub}}>수정</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow sx={{backgroundColor:theme.palette.background.tableOddRow}}>
                                    <TableCell align="center" component="th" scope="row">2023년 2분기</TableCell>
                                    <TableCell align="center" component="th" scope="row">2023-06-30</TableCell>
                                    <TableCell align="center" component="th" scope="row" sx={{color:theme.palette.primary.main , textDecoration:'underline'}}>S202306_(투자팀)_(조합명)_간접투자기구 자산현황.xlsx</TableCell>
                                    <TableCell align="center" component="th" scope="row">
                                        <Button variant="outlined" disableElevation>수정</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align="center" component="th" scope="row">2023년 2분기</TableCell>
                                    <TableCell align="center" component="th" scope="row">2023-06-30</TableCell>
                                    <TableCell align="center" component="th" scope="row" sx={{color:theme.palette.primary.main  ,textDecoration:'underline'}}>S202306_(투자팀)_(조합명)_간접투자기구 자산현황.xlsx</TableCell>
                                    <TableCell align="center" component="th" scope="row">
                                        <Button variant="outlined" disableElevation>수정</Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow sx={{backgroundColor:theme.palette.background.tableOddRow}}>
                                    <TableCell align="center" component="th" scope="row">2023년 2분기</TableCell>
                                    <TableCell align="center" component="th" scope="row">2023-06-30</TableCell>
                                    <TableCell align="center" component="th" scope="row" sx={{color:theme.palette.primary.main , textDecoration:'underline'}}>S202306_(투자팀)_(조합명)_간접투자기구 자산현황.xlsx</TableCell>
                                    <TableCell align="center" component="th" scope="row">
                                        <Button variant="outlined" disableElevation>수정</Button>
                                    </TableCell>
                                </TableRow>



                                                               
                            </TableBody>
                            </Table>
                        </TableContainer>

                    </Stack>
                </Paper>




            </Stack>


        </Container>
    </Stack>
    {/* End of Contents */}
    </>
};
  
export default BA10701;