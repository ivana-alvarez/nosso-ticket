// import { Link as RouterLink } from 'react-router-dom';

// material-ui
// import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { Box, Container, Grid,  Typography, Divider} from '@material-ui/core';

// third party
import { motion } from 'framer-motion';

// project imports
// project imports
// import Avatar from 'ui-component/extended/Avatar';
// import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
// import dashboard from 'assets/images/landing/dashboard.png';
// import widget1 from 'assets/images/landing/widget-1.png';
// import widget2 from 'assets/images/landing/widget-2.png';
// import home from 'assets/images/landing/Home_Mesa_de_trabajo.png';
// import CarouselImg from './CarouselImg';
import CompanyImg from 'assets/images/landing/Imagen_para_empresas_Mesa_de_trabajo.png'

// style constant
// const useStyles = makeStyles((theme: Theme) => ({
//     technoImg: {
//         width: '50px',
//         height: '50px',
//         padding: '5px',
//         background: theme.palette.mode === 'dark' ? theme.palette.dark.light : theme.palette.primary.light
//     },
//     headerMain: {
//         marginLeft:"200px",
//         width: '40%',
//         height: "auto",
//         borderRadius: '20px',
//         transform: 'scale(1.6)',
//         transformOrigin: '0 50%'
//     },
//     headerImg: {
//         maxWidth: '100%',
//         filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
//     },
//     btnLight: {
//         background: '#E3F2FD',
//         color: theme.palette.primary.main,
//         borderColor: '#E3F2FD',
//         boxShadow: 'none',
//         '&:hover ': {
//             background: theme.palette.primary.main,
//             borderColor: theme.palette.primary.main,
//             color: '#fff'
//         }
//     }
// }));

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderPage = () => {
    const theme = useTheme();
    // const classes = useStyles();

    return (
        <Container>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={gridSpacing}
                sx={{ mt: '150px',  [theme.breakpoints.down('sm')]: { mt: { xs: '116px', sm: '32px' }, mb: '20px' } }}
            >
                {/* <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'flex' } }}> */}
                    <Box sx={{ position: 'relative', mb:10}}>
                        <img src={CompanyImg} alt="company" className='w-auto' />
                    </Box>
                {/* </Grid> */}
            </Grid>

            <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        marginTop:1,
                                        fontSize: { xs: '36px', sm: '48px', md: '64px' },
                                        fontWeight: '900',
                                        lineHeight: { xs: '42px', sm: '56px', md: '80px' }
                                    }}
                                >
                                    ¡Una sola tarjeta para
                                    <Box component="span" sx={{ ml: 2, color: theme.palette.primary.main }}>
                                        TODOS LOS SISTEMAS!
                                    </Box>
                                    <Divider  />
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.2
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="div"
                                    color="inherit"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                        fontWeight: '400',
                                        lineHeight: { xs: '24px', md: '32px' }
                                    }}
                                >
                                    Sin importar donde te encuentres con tu 
                                    <Box component="span" sx={{ ml: 2, color: theme.palette.primary.main }}>
                                        T-TICKET   
                                    </Box> 
                                    {" podrás viajar con tranquilidad."}
                                    {/* Berry is React based admin template which helps you to build faster and beautiful web applications. */}
                                </Typography>
                            </motion.div>
                        </Grid>
        </Container>
    );
};

export default HeaderPage;
