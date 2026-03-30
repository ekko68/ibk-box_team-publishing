import {  CloseOutlined, EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import { Grid, AppBar, Badge, Box, Button, Chip, Container, Divider, IconButton, MenuItem, Paper, Select, Stack, Typography, useTheme, Pagination, PaginationItem, TableContainer, Table, TableBody, TableRow, TableHead, TableCell, Avatar, MenuList, ListItemText, Link, FormGroup, FormControlLabel, Checkbox, Icon } from "@mui/material";
import { BtNavSelect } from "../components/BtNavSelect";
import { BtContentGrid } from "../components/BtContentGrid";
import { BtTabContext } from "../components/BtTabContext";
import { BtModal } from "../components/BtModal";
import { BtCheckbox } from "../components/BtCheckbox";
import { BtEctCheckbox } from "../components/BtEctCheckbox";
import { BtSelect } from "../components/BtSelect/BtSelect";

// import Grid from '@mui/material/Unstable_Grid2';

const Home = () => {

    const theme = useTheme();

    return <>
    <Stack alignItems={'center'}   sx={{p:4, backgroundColor:theme.palette.info.main, width:'100%'}}>
      <Paper sx={{ width: 800 }}>
            <MenuList dense>
            
                <MenuItem>
                    <ListItemText>마이페이지 - 투자사 전환요청</ListItemText>
                </MenuItem>

                <Link color={'primary'} href="/BA10101">
                    <MenuItem >
                        <ListItemText inset>BA10101 마이페이지(기업) - 내정보</ListItemText>
                    </MenuItem>
                </Link>
                <Stack direction={'row'} sx={{px:10}}>
                    <BtModal buttonTitle={'BA10101 - modal 1'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack direction={'column'} alignItems={'center'}  sx={{px:2, pb:2}}>
                                <Stack direction={'column'} sx={{position:'relative'}}>
                                    <Typography variant="h5" align="center" sx={{zIndex:10}}>투자사 전환 요청 관련 안내</Typography>
                                    <Box sx={{ position:'relative', top:'-1.5rem',  height:'1rem' , backgroundColor:theme.palette.warning.light}}/>
                                </Stack>
                                
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>투자사로 전환될 경우<br/> 다시 투자희망기업으로 전환이 불가능합니다.<br/> 투자사 전환을 요청하시겠습니까?</Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="contained" disableElevation sx={{backgroundColor:theme.palette.disabled.light, color:theme.palette.text.sub,'&:hover':{backgroundColor:theme.palette.disabled.main } }}>취소</Button>
                                <Button variant="contained" color="primary" disableElevation>투자사전환요청</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>

                    <BtModal buttonTitle={'BA10101 - modal 2'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack spacing={2} direction={'column'} alignItems={'center'}  sx={{px:2, pb:2}}>
                                
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>투자사 전환 요청이 완료됐습니다.<br/>
                                관리자 승인 후 투자사 회원으로 전환됩니다.
                                </Typography>

                                <Typography variant="body1" align="center" sx={{color:theme.palette.primary.main}}>
                                    요청일 : 2022-04-11
                                </Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                
                                <Button variant="contained" color="primary" disableElevation>확인</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                </Stack>
                
                <Link color={'primary'} href="/BA10102">
                    <MenuItem >
                        <ListItemText inset>BA10102 마이페이지(기업) - 내정보 - 투자사전환요청</ListItemText>
                    </MenuItem>
                </Link>

                <Stack direction={'row'} sx={{px:10}}>
                    <BtModal modalTitle={'주요투자업종'} multiSelect={true} buttonTitle={'BA10102 - modal 1'}>
                        <Stack direction={'column'} sx={{width:600}}>    
                            <FormGroup>
                            <Grid container spacing={2} sx={{ py:2, px:3}}>
                                <Grid item xs={4}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="ICT 서비스" />
                                        <BtCheckbox label="영상・공연・음반" />
                                        <BtCheckbox label="게임" />
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="ICT 제조" />
                                        <BtCheckbox label="전기・기계・장비" />
                                        <BtCheckbox label="화학・소재" />         
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="바이오・의료" />
                                        <BtCheckbox label="유통・서비스" />
                                        <BtEctCheckbox />              
                                    </Stack>
                                </Grid>
                            </Grid>
                            </FormGroup>
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="contained" disableElevation sx={{backgroundColor:theme.palette.disabled.light, color:theme.palette.text.sub,'&:hover':{backgroundColor:theme.palette.disabled.main } }}>취소</Button>
                                <Button variant="contained" color="primary" disableElevation>선택 완료</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                    <BtModal modalTitle={'주요투자단계'} multiSelect={true} buttonTitle={'BA10102 - modal 2'}>
                        <Stack  direction={'column'} sx={{width:600}}>    
                            <FormGroup>
                            <Grid container spacing={2} sx={{  py:2, px:3}}>

                                <Grid item xs={4}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="Seed" />
                                        <BtCheckbox label="Series C" />
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="Series A" />
                                        <BtCheckbox label="Pre IPO" />        
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="Series B" />           
                                    </Stack>
                                </Grid>
                            </Grid>
                            </FormGroup>
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="contained" disableElevation sx={{backgroundColor:theme.palette.disabled.light, color:theme.palette.text.sub,'&:hover':{backgroundColor:theme.palette.disabled.main } }}>취소</Button>
                                <Button variant="contained" color="primary" disableElevation>선택 완료</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                    <BtModal modalTitle={'비즈니스 분야'} multiSelect={true}  buttonTitle={'BA10102 - modal 3'}>
                        <Stack direction={'column'} sx={{width:1000}}>    
                            <FormGroup>
                            <Grid container spacing={2} sx={{ py:2, OAnimationPlayState:2, px:3}}>
                                <Grid item xs={2}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="3D프린터" />
                                        <BtCheckbox label="광고/마케팅" />
                                        <BtCheckbox label="물류/유통" />
                                        <BtCheckbox label="부동산" />
                                        <BtCheckbox label="엔터테인먼트" />
                                        <BtCheckbox label="제조업" />
                                        <BtCheckbox label="항공기/드론" />
                                    </Stack>
                                </Grid>
                                <Grid item xs={2}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="B2B" />
                                        <BtCheckbox label="교육" />
                                        <BtCheckbox label="바이오/의료" />
                                        <BtCheckbox label="뷰티" />
                                        <BtCheckbox label="여행" />
                                        <BtCheckbox label="주거" />
                                        <BtCheckbox label="헬스케어" />      
                                    </Stack>
                                </Grid>
                                <Grid item xs={2}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="HR" />
                                        <BtCheckbox label="금융" />
                                        <BtCheckbox label="반려동물" />
                                        <BtCheckbox label="소셜네트워크" />
                                        <BtCheckbox label="유아" />
                                        <BtCheckbox label="커뮤니티" />
                                        <BtCheckbox label="화학" />        
                                    </Stack>
                                </Grid>
                                <Grid item xs={2}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="SaaS" />
                                        <BtCheckbox label="농축수산업" />
                                        <BtCheckbox label="방송/통신" />
                                        <BtCheckbox label="소셜임팩트" />
                                        <BtCheckbox label="음식" />
                                        <BtCheckbox label="컨설팅" />
                                        <BtCheckbox label="환경/에너지" />       
                                    </Stack>
                                </Grid>
                                <Grid item xs={2}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="건설" />
                                        <BtCheckbox label="라이프스타일" />
                                        <BtCheckbox label="법률" />
                                        <BtCheckbox label="쇼핑" />
                                        <BtCheckbox label="자동차" />
                                        <BtCheckbox label="콘텐츠" />
                                        <BtEctCheckbox/>      
                                    </Stack>
                                </Grid>
                                <Grid item xs={2}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="게임" />
                                        <BtCheckbox label="모빌리티" />
                                        <BtCheckbox label="보안" />
                                        <BtCheckbox label="스포츠" />
                                        <BtCheckbox label="전자제품" />
                                        <BtCheckbox label="패션" />      
                                    </Stack>
                                </Grid>
                            </Grid>
                            </FormGroup>
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="contained" disableElevation sx={{backgroundColor:theme.palette.disabled.light, color:theme.palette.text.sub,'&:hover':{backgroundColor:theme.palette.disabled.main } }}>취소</Button>
                                <Button variant="contained" color="primary" disableElevation>선택 완료</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                    <BtModal modalTitle={'활용기술'} multiSelect={true} buttonTitle={'BA10102 - modal 4'}>
                        <Stack direction={'column'} sx={{width:800}}>    
                            <FormGroup>
                            <Grid container spacing={2} sx={{ pb:2, px:3}}>
                                <Grid item xs={3}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="AI" />
                                        <BtCheckbox label="로봇/드론" />
                                        <BtCheckbox label="전자상거래" />
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="VR/AR" />
                                        <BtCheckbox label="블록체인" />
                                        <BtCheckbox label="클라우드" />     
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="결제" />
                                        <BtCheckbox label="빅데이터" />
                                        <BtCheckbox label="플랫폼" />       
                                    </Stack>
                                </Grid>

                                <Grid item xs={3}>
                                    <Stack direction={'column'}>
                                        <BtCheckbox label="데이터솔루션" />
                                        <BtCheckbox label="사물인터넷" />
                                        <BtEctCheckbox/>      
                                    </Stack>
                                </Grid>

                            </Grid>
                            </FormGroup>
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="contained" disableElevation sx={{backgroundColor:theme.palette.disabled.light, color:theme.palette.text.sub,'&:hover':{backgroundColor:theme.palette.disabled.main } }}>취소</Button>
                                <Button variant="contained" color="primary" disableElevation>선택 완료</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>

                    <BtModal buttonTitle={'BA10102 - modal 5'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack spacing={2} direction={'column'} alignItems={'center'}  sx={{px:2, pb:2}}>
                                
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>투자사 전환요청이 등록되었습니다.<br/>
                                승인 완료시까지 조금만 기다려 주세요.
                                </Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                
                                <Button variant="contained" color="primary" disableElevation>확인</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                    
                </Stack>

                <MenuItem>
                    <ListItemText>IBK 제안센터</ListItemText>
                </MenuItem>
                <Link color={'primary'} href="/BA10202">
                    <MenuItem >
                        <ListItemText inset>BA10202 IBK 제안센터</ListItemText>
                    </MenuItem>
                </Link>

                <MenuItem>
                    <ListItemText>IBK 제안센터 - 펀드 제안</ListItemText>
                </MenuItem>


                <Link color={'primary'} href="/BA10301">
                    <MenuItem >
                        <ListItemText inset>BA10301 - IBK 제안센터 - 펀드 제안_이력</ListItemText>
                    </MenuItem>
                </Link>
                <Stack direction={'row'} sx={{px:10}}>
                    <BtModal buttonTitle={'BA10301 - modal 1'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack direction={'column'} spacing={2} sx={{px:2, pb:2}}>
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>마지막으로 작성한 펀드 제안서 내용을 불러오시겠습니까?<br/>(내용은 수정할 수 있습니다.)</Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="outlined" color="primary" disableElevation>신규 작성</Button>

                                <Button variant="contained" color="primary" disableElevation>불러오기</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                </Stack>
                <Link color={'primary'} href="/BA10302">
                    <MenuItem >
                        <ListItemText inset>BA10302 - IBK 제안센터 - 펀드 제안 - 신규 펀드 제안_1. 제안 펀드 정보 등록</ListItemText>
                    </MenuItem>
                </Link>
                <Stack direction={'row'} sx={{px:10}}>
                    <BtModal buttonTitle={'BA10302 - modal 1'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack direction={'column'} spacing={2} sx={{px:2, pb:2}}>
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>%펀드명%은(는) 필수 입력 항목입니다.</Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>

                                <Button variant="contained" color="primary" disableElevation>확인</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                </Stack>
                <Link color={'primary'} href="/BA10303">
                    <MenuItem >
                        <ListItemText inset>BA10303 - IBK 제안센터 - 펀드 제안 - 신규 펀드 제안_2. 운용사 상세 정보 등록</ListItemText>
                    </MenuItem>
                </Link>
                <Link color={'primary'} href="/BA10304">
                    <MenuItem >
                        <ListItemText inset>BA10304 - IBK 제안센터 - 펀드 제안 - 신규 펀드 제안_3. 제출 완료</ListItemText>
                    </MenuItem>
                </Link>
                <Link color={'primary'} href="/BA10305">
                    <MenuItem >
                        <ListItemText inset>BA10305 - IBK 제안센터 - 펀드 제안 - 제안 펀드 정보 조회_1. 제안 펀드 정보</ListItemText>
                    </MenuItem>
                </Link>
                <Link color={'primary'} href="/BA10306">
                    <MenuItem >
                        <ListItemText inset>BA10306 - IBK 제안센터 - 펀드 제안 - 제안 펀드 정보 조회_2. 운용사 상세 정보</ListItemText>
                    </MenuItem>
                </Link>
                <Link color={'primary'} href="/BA10307">
                    <MenuItem >
                        <ListItemText inset>BA10307 - IBK 제안센터 - 펀드 제안 - 제안 펀드 정보 조회_3. 답변 확인</ListItemText>
                    </MenuItem>
                </Link>


                <MenuItem>
                    <ListItemText>IBK 제안센터 - 투자기업 추천</ListItemText>
                </MenuItem>

                <Link color={'primary'} href="/BA10401">
                    <MenuItem >
                        <ListItemText inset>BA10401 - IBK 제안센터 - 투자기업 추천_이력</ListItemText>
                    </MenuItem>
                </Link>

                <Link color={'primary'} href="/BA10402">
                    <MenuItem >
                        <ListItemText inset>BA10402 - IBK 제안센터 - 투자기업 추천</ListItemText>
                    </MenuItem>
                </Link>
                <Stack direction={'row'} sx={{px:10}}>
                    <BtModal buttonTitle={'BA10402 - modal 1'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack direction={'column'} spacing={2} sx={{px:2, pb:2}}>
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>투자기업 추천이 완료되지 않았습니다.<br/> 추천을 그만 하시겠습니까?</Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>

                                <Button variant="contained" disableElevation sx={{backgroundColor:theme.palette.disabled.light, color:theme.palette.text.sub,'&:hover':{backgroundColor:theme.palette.disabled.main } }}>그만하기</Button>

                                <Button variant="contained" color="primary" disableElevation>계속하기</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                    <BtModal buttonTitle={'BA10402 - modal 2'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack direction={'column'} spacing={2} sx={{px:2, pb:2}}>
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>%운용사명%은(는) 필수 입력 항목입니다. </Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="contained" color="primary" disableElevation>확인</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                </Stack>

                <Link color={'primary'} href="/BA10403">
                    <MenuItem >
                        <ListItemText inset>BA10403 - IBK 제안센터 - 투자기업 추천 - 추천기업 상세</ListItemText>
                    </MenuItem>
                </Link>
                <Stack direction={'row'} sx={{px:10}}>
                    <BtModal buttonTitle={'BA10403 - modal 1'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack direction={'column'} spacing={2} sx={{px:2, pb:2}}>
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>제출 완료된 투자기업 추천을 정말 취소하시겠습니까?</Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>


                                <Button variant="contained" disableElevation sx={{backgroundColor:theme.palette.disabled.light, color:theme.palette.text.sub,'&:hover':{backgroundColor:theme.palette.disabled.main } }}>그만하기</Button>

                                <Button variant="contained" color="primary" disableElevation>계속하기</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                </Stack>
                
                <MenuItem>
                    <ListItemText>IBK 제안센터 - IBK 벤처대출 신청</ListItemText>
                </MenuItem>

                <Link color={'primary'} href="/BA10501">
                    <MenuItem >
                        <ListItemText inset>BA10501 - IBK 제안센터 - IBK 벤처대출 안내</ListItemText>
                    </MenuItem>
                </Link>

                <Link color={'primary'} href="/BA10502">
                    <MenuItem >
                        <ListItemText inset>BA10502 - IBK 제안센터 - IBK 벤처대출 추천서 제출</ListItemText>
                    </MenuItem>
                </Link>
                <Stack direction={'row'} sx={{px:10}}>
                    <BtModal buttonTitle={'BA10502 - modal 1'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack direction={'column'} spacing={2} sx={{px:2, pb:2}}>
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>대출 추천서 작성이 완료되지 않았습니다.<br/> 작성을 그만 하시겠습니까?</Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="contained" disableElevation sx={{backgroundColor:theme.palette.disabled.light, color:theme.palette.text.sub,'&:hover':{backgroundColor:theme.palette.disabled.main } }}>그만하기</Button>



                                <Button variant="contained" color="primary" disableElevation>계속하기</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>

                    <BtModal buttonTitle={'BA10502 - modal 2'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack direction={'column'} spacing={2} sx={{px:2, pb:2}}>
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>%운용사명%은(는) 필수 입력 항목입니다. </Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="contained" color="primary" disableElevation>확인</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>

                    <BtModal buttonTitle={'BA10502 - modal 3'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack direction={'column'} spacing={2} sx={{px:2, pb:2}}>
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>대출 추천하신 기업이 직접 IBK 투자도 받을 수 있도록 투자 추천을 함께 진행 하시겠어요?</Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="contained" color="primary" disableElevation>투자 추천 신청</Button>
                                <Button variant="contained" color="primary" disableElevation>다음에 할게요</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                </Stack>

                <Link color={'primary'} href="/BA10503">
                    <MenuItem >
                        <ListItemText inset>BA10503 - IBK 제안센터 - IBK 벤처대출 추천 내역</ListItemText>
                    </MenuItem>
                </Link>

                <MenuItem>
                    <ListItemText>IBK 제안센터 - IBK 추천기업 리스트</ListItemText>
                </MenuItem>

                <Link color={'primary'} href="/BA10601">
                    <MenuItem >
                        <ListItemText inset>BA10601 - IBK 제안센터 - IBK 벤처대출 추천 내역</ListItemText>
                    </MenuItem>
                </Link>

                <MenuItem>
                    <ListItemText>마이페이지 - 내 정보</ListItemText>
                </MenuItem>

                <Link color={'primary'} href="/BA10701">
                    <MenuItem >
                        <ListItemText inset>BA10701 - 마이페이지 - 내 정보(VC)</ListItemText>
                    </MenuItem>
                </Link>
                <Stack direction={'row'} sx={{px:10}}>
                    <BtModal modalTitle={'투자 운용 보고서 등록'} buttonTitle={'BA10101 - modal 1'}>
                        <Stack direction={'column'} sx={{ width:400}}>
                            <Stack direction={'column'} spacing={2} sx={{px:3, py:2}}>
                                <Stack direction={'column'} spacing={2}>
                                    <Stack direction={'row'} alignItems={'center'}>
                                        <Typography variant="body1" sx={{width:'5rem', color:theme.palette.text.sub}}>
                                            구분
                                        </Typography>
                                        
                                        <BtSelect flexGrow={1} defaultValue={1} sx={{width:'100%'}}>
                                            <MenuItem disabled value={0}>선택하세요</MenuItem>
                                            <MenuItem value={1}>2023년 4분기</MenuItem>
                                            <MenuItem value={2}>2023년 3분기</MenuItem>
                                            <MenuItem value={3}>2023년 2분기</MenuItem>
                                            <MenuItem value={4}>2023년 1분기</MenuItem>
                                        </BtSelect>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'center'}>
                                        <Typography variant="body1" sx={{width:'5rem', color:theme.palette.text.sub}}>
                                            첨부파일
                                        </Typography>
                                        
                                        <Button variant="outlined" sx={{width:'100%'}}>파일첨부</Button>
                                    </Stack>
                                </Stack>
                                
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="contained" disableElevation sx={{backgroundColor:theme.palette.disabled.light, color:theme.palette.text.sub,'&:hover':{backgroundColor:theme.palette.disabled.main } }}>취소</Button>
                                <Button variant="contained" color="primary" disableElevation>등록</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                    <BtModal modalTitle={'투자 운용 보고서 등록'}  buttonTitle={'BA10101 - modal 2'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack direction={'column'} spacing={2} sx={{px:3, py:2}}>

                                <Stack direction={'column'} spacing={2}>
                                    <Stack direction={'row'} alignItems={'center'}>
                                        <Typography variant="body1" sx={{width:'5rem', color:theme.palette.text.sub}}>
                                            구분
                                        </Typography>
                                        
                                        <BtSelect flexGrow={1} defaultValue={1} sx={{width:'100%'}}>
                                            <MenuItem disabled value={0}>선택하세요</MenuItem>
                                            <MenuItem value={1}>2023년 4분기</MenuItem>
                                            <MenuItem value={2}>2023년 3분기</MenuItem>
                                            <MenuItem value={3}>2023년 2분기</MenuItem>
                                            <MenuItem value={4}>2023년 1분기</MenuItem>
                                        </BtSelect>
                                    </Stack>
                                    <Stack direction={'row'} alignItems={'center'}>
                                        <Typography variant="body1" sx={{width:'5rem', color:theme.palette.text.sub}}>
                                            첨부파일
                                        </Typography>
                                        
                                        <Stack direction={'row'} alignItems={'center'}  sx={{borderRadius:1, width:'100%', pl:2, border:`1px solid ${theme.palette.divider}`}}>
                                            <Typography flexGrow={1}>
                                                202306_(투자팀)_(조합명)_간…
                                            </Typography>
                                            <IconButton size="small">
                                                <CloseOutlined/>
                                            </IconButton>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="contained" disableElevation sx={{backgroundColor:theme.palette.disabled.light, color:theme.palette.text.sub,'&:hover':{backgroundColor:theme.palette.disabled.main } }}>취소</Button>
                                <Button variant="contained" color="primary" disableElevation>저장</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                </Stack>

                <MenuItem>
                    <ListItemText>마이페이지(기업) - 내정보 - IBK벤처대출(대출 받을 기업의 대출 신청 정보 입력)</ListItemText>
                </MenuItem>

                <Link color={'primary'} href="/BA10801">
                    <MenuItem >
                        <ListItemText inset>BA10801 - 마이페이지(기업) - 내정보 - IBK벤처대출</ListItemText>
                    </MenuItem>
                </Link>

                <Stack direction={'row'} sx={{px:10}}>
                    <BtModal buttonTitle={'BA10801 - modal 1'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack direction={'column'} spacing={2} sx={{px:2, pb:2}}>
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>IBK 벤처대출 신청이 진행 중입니다.<br/>내용 확인 후 필요 서류를 제출해 주세요.</Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>
                                <Button variant="contained" disableElevation sx={{backgroundColor:theme.palette.disabled.light, color:theme.palette.text.sub,'&:hover':{backgroundColor:theme.palette.disabled.main } }}>취소</Button>

                                <Button variant="contained" color="primary" disableElevation>확인</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                </Stack>

                <Link color={'primary'} href="/BA10802">
                    <MenuItem >
                        <ListItemText inset>BA10802 - 마이페이지(기업) - 내정보 - IBK벤처대출 신청 등록</ListItemText>
                    </MenuItem>
                </Link>
                <Stack direction={'row'} sx={{px:10}}>
                    <BtModal buttonTitle={'BA10802 - modal 1'}>
                        <Stack direction={'column'} sx={{width:400}}>
                            <Stack direction={'column'} spacing={2} sx={{px:2, pb:2}}>
                                <Typography variant="body1" align="center" sx={{color:theme.palette.text.sub}}>제출되었습니다.</Typography>
                            </Stack>
                            
                            <Divider/>
                            <Stack direction={'row'} spacing={1} justifyContent="center" alignItems="center" sx={{px:2, py:2}}>

                                <Button variant="contained" color="primary" disableElevation>확인</Button>
                            </Stack>
                        </Stack>
                        
                    </BtModal>
                </Stack>
                <Link color={'primary'} href="/BA10803">
                    <MenuItem >
                        <ListItemText inset>BA10803 - 마이페이지(기업) - 내정보 - IBK벤처대출 신청 상세</ListItemText>
                    </MenuItem>
                </Link>
            </MenuList>
        </Paper>
    </Stack>
    </>
};
  
export default Home;