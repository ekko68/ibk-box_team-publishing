import { Add, AddOutlined, EmailOutlined, FiberManualRecordOutlined, HeadsetMicOutlined, HomeOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, Remove } from "@mui/icons-material";
import { Grid, AppBar, Badge, Box, Button, Chip, Container, Divider, IconButton, MenuItem, Paper, Select, Stack, Typography, useTheme, Pagination, PaginationItem, TableContainer, Table, TableBody, TableRow, TableHead, TableCell, Avatar, TextField, InputAdornment } from "@mui/material";
import { BtNavSelect } from "../components/BtNavSelect";
import { BtContentGrid } from "../components/BtContentGrid";
import { BtTabContext } from "../components/BtTabContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Grid from '@mui/material/Unstable_Grid2';

const BA10503 = () => {

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
                            <MenuItem value={10} sx={{fontSize:'1rem'}}>IBK 벤처대출 추천 내역</MenuItem>
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
                        <Box flexGrow={1}/>
                        <Button disableElevation color="primary" variant="contained">
                            투자기업 추천
                        </Button>
                    </Stack>
                    
                </Stack>

                <Paper  sx={{p:4}}>
                    <Stack direction={'column'} spacing={3}>
                        <TableContainer component={Paper} sx={{borderRadius:0, boxShadow:'none'}}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                                <TableHead sx={{borderTop:`1px solid ${theme.palette.divider}`}}>
                                    <TableRow>
                                        <TableCell align="center" sx={{color: theme.palette.text.sub}}>제출일</TableCell>
                                        <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`, color: theme.palette.text.sub}}>추천회사명</TableCell>
                                        <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`, color: theme.palette.text.sub}}>사업자번호</TableCell>

                                        <TableCell align="center" sx={{borderLeft:`1px solid ${theme.palette.divider}`, color: theme.palette.text.sub}}>상태</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow sx={{backgroundColor:theme.palette.background.tableOddRow}}>
                                        <TableCell align="center" component="th" scope="row">2023-04-27</TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>기은소프트
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>123-45-67890
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                            <Chip  label="제출 완료" color="primary" sx={{borderRadius:1, width:'10rem'}}/>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="center" component="th" scope="row">2023-04-24</TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>블링크
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>111-22-33333
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                            <Chip  label="보완 요청" sx={{borderRadius:1, width:'10rem', backgroundColor:theme.palette.error.light, color:theme.palette.text.contrastText}}/>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow  sx={{backgroundColor:theme.palette.background.tableOddRow}}>
                                        <TableCell align="center" component="th" scope="row">2023-04-24</TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>스페이스에이치
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>111-22-12121
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                            <Chip  label="심사중" sx={{borderRadius:1, width:'10rem', backgroundColor:theme.palette.inProgress.main, color:theme.palette.text.contrastText}}/>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="center" component="th" scope="row">2023-04-24</TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>테크스타
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>111-22-12121
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                            <Chip  label="대출 승인" sx={{borderRadius:1, width:'10rem', backgroundColor:theme.palette.info.main, color:theme.palette.text.contrastText}}/>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow  sx={{backgroundColor:theme.palette.background.tableOddRow}}>
                                        <TableCell align="center" component="th" scope="row">2023-04-24</TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>디앤지솔루션
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>456-78-90123
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                            <Chip  label="대출 거절" sx={{borderRadius:1, width:'10rem', backgroundColor:theme.palette.info.main, color:theme.palette.text.contrastText}}/>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="center" component="th" scope="row">2023-04-27</TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>기은소프트
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>123-45-67890
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                            <Chip  label="제출 완료" color="primary" sx={{borderRadius:1, width:'10rem'}}/>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow  sx={{backgroundColor:theme.palette.background.tableOddRow}}>
                                        <TableCell align="center" component="th" scope="row">2023-04-24</TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>블링크
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>111-22-33333
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                            <Chip  label="보완 요청" sx={{borderRadius:1, width:'10rem', backgroundColor:theme.palette.error.light, color:theme.palette.text.contrastText}}/>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow sx={{backgroundColor:theme.palette.background.tableOddRow}}>
                                        <TableCell align="center" component="th" scope="row">2023-04-24</TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>스페이스에이치
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>111-22-12121
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                            <Chip  label="심사중" sx={{borderRadius:1, width:'10rem', backgroundColor:theme.palette.inProgress.main, color:theme.palette.text.contrastText}}/>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="center" component="th" scope="row">2023-04-24</TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>테크스타
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>111-22-12121
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                            <Chip  label="대출 승인" sx={{borderRadius:1, width:'10rem', backgroundColor:theme.palette.info.main, color:theme.palette.text.contrastText}}/>
                                        </TableCell>

                                    </TableRow>

                                    <TableRow  sx={{backgroundColor:theme.palette.background.tableOddRow}}>
                                        <TableCell align="center" component="th" scope="row">2023-04-24</TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>디앤지솔루션
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>456-78-90123
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row" sx={{borderLeft:`1px solid ${theme.palette.divider}`}}>
                                            <Chip  label="대출 거절" sx={{borderRadius:1, width:'10rem', backgroundColor:theme.palette.info.main, color:theme.palette.text.contrastText}}/>
                                        </TableCell>

                                    </TableRow>




                                </TableBody> 
                            </Table>
                        </TableContainer> 
                        <Stack alignItems={'center'}>
                            <Pagination count={10} variant="outlined" shape="rounded"
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
            </Stack>


        </Container>
    </Stack>
    {/* End of Contents */}
    </>
};
  
export default BA10503;