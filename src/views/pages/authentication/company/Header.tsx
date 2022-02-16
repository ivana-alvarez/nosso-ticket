// import { Link as RouterLink } from 'react-router-dom';

// material-ui
// import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles'
import { Box, Container, Grid, Typography } from '@material-ui/core'

// third party
import { motion } from 'framer-motion'

// project imports
// project imports
// import Avatar from 'ui-component/extended/Avatar';
// import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant'

// assets
// import dashboard from 'assets/images/landing/dashboard.png';
// import widget1 from 'assets/images/landing/widget-1.png';
// import widget2 from 'assets/images/landing/widget-2.png';
// import home from 'assets/images/landing/Home_Mesa_de_trabajo.png';
// import CarouselImg from './CarouselImg';
import CompanyImg from 'assets/images/landing/Imagen_para_empresas_Mesa_de_trabajo.png'
import { useNavigate } from 'react-router'

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
    const theme = useTheme()
    // const classes = useStyles();
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <Container>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={gridSpacing}
                sx={{
                    mt: '10px',
                    [theme.breakpoints.down('sm')]: {
                        mt: { xs: '116px', sm: '32px' },
                        mb: '20px',
                    },
                }}
            >
                {/* <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'flex' } }}> */}
                <Box sx={{ position: 'relative', mb: 2 }}>
                    <img src={CompanyImg} alt="company" className="w-auto" />
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
                        damping: 30,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            // marginTop: 1,
                            fontSize: { xs: '36px', sm: '48px', md: '64px' },
                            fontWeight: '900',
                            lineHeight: { xs: '42px', sm: '56px', md: '80px' },
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        ¡Vive una nueva experiencia,
                        <Typography
                            // component="span"
                            sx={{
                                ml: 2,
                                color: theme.palette.primary.main,
                                fontSize: {
                                    xs: '36px',
                                    sm: '48px',
                                    md: '64px',
                                },
                                fontWeight: '900',
                                lineHeight: {
                                    xs: '42px',
                                    sm: '56px',
                                    md: '80px',
                                },
                                textTransform: 'none',
                            }}
                            onClick={handleLogin}
                            className="cursor-pointer hover:text-sky-500 "
                        >
                            unete!
                        </Typography>
                    </Typography>
                </motion.div>
            </Grid>
            {/* <Grid item xs={12}>
                <motion.div
                    initial={{ opacity: 0, translateY: 550 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 30,
                        delay: 0.2,
                    }}
                >
                    <Typography
                        variant="h2"
                        component="div"
                        color="inherit"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            fontWeight: '400',
                            lineHeight: { xs: '24px', md: '32px' },
                        }}
                    >
                        ¡Olvida el efectivo y solo toma tu tarjeta!
                    </Typography>

                    <Typography
                        variant="h3"
                        component="div"
                        color="inherit"
                        sx={{
                            marginTop: 1,
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            fontWeight: '400',
                            lineHeight: { xs: '24px', md: '32px' },
                        }}
                    >
                        <Box
                            component="span"
                            sx={{ color: theme.palette.primary.main }}
                        >
                            T-TICKET
                        </Box>
                        {
                            ' te lleva por todas las rutas a través de nuestros 5 sistemas aliados'
                        }
                    </Typography>
                </motion.div>
            </Grid>*/}

            <Grid
                container
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '25px',
                }}
            >
                <Grid
                    item
                    className="border-8 rounded-full w-56 h-56 border-amber-500 mt-2 animate-pulse "
                >
                    <Box
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '40px',
                            textAlign: 'center',
                            my: '40px',
                        }}
                    >
                        5
                        <br />
                        <br />
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: '24px',
                                    sm: '24px',
                                    md: '32px',
                                },
                            }}
                        >
                            Sistemas asociados
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    className="border-8 rounded-full w-56 h-56 border-blue-700 mt-2 animate-pulse"
                >
                    <Box
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '40px',
                            textAlign: 'center',
                            my: '40px',
                        }}
                    >
                        2M
                        <br />
                        <br />
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: '24px',
                                    sm: '24px',
                                    md: '32px',
                                },
                            }}
                        >
                            Usuarios diarios
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    className="border-8 rounded-full w-56 h-56 border-red-700 mt-2 animate-pulse"
                >
                    <Box
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '40px',
                            textAlign: 'center',
                            my: '40px',
                        }}
                    >
                        +80 M
                        <br />
                        <br />
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: '24px',
                                    sm: '24px',
                                    md: '32px',
                                },
                            }}
                        >
                            Kilometros recorridos
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HeaderPage
