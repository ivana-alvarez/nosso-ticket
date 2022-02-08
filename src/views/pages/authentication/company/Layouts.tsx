// material-ui
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { Box, Container, Grid, Typography, Theme } from '@material-ui/core';

// project imports
import Slider from './Slider';
import { gridSpacing } from 'store/constant';

// assets
// import imgLayout1 from 'assets/images/landing/demo-dark.png';
// import imgLayout2 from 'assets/images/landing/demo-rtl.png';
// import imgLayout3 from 'assets/images/landing/demo-multi.png';
// import imgLayoutGrid from 'assets/images/landing/img-lay-grid.png';
// import imgLayoutDarkGrid from 'assets/images/landing/img-bg-grid-dark.svg';
import metroValencia from 'assets/images/landing/LOGOS_METROS_BLANCOS-02.png';
import metroCaracas from 'assets/images/landing/LOGOS_METROS-04.png';
import metroAragua from 'assets/images/landing/LOGOS_METROS_BLANCOS-05.png';
import busBarinas from 'assets/images/landing/LOGOS_METROS_BLANCOS_Barinas.png';
import ife from 'assets/images/landing/LOGOS_METROS-IFE.png';
// import metroValencia from 'assets/images/landing/LOGOS_METROS_BLANCOS-02.png';
import blank from 'assets/images/landing/blank.png';


// style constant
const useStyles = makeStyles((theme: Theme) => ({
    layoutImage: {
        width: '100%',
        // left: "200px",
        position: 'relative',
        margin: '-70px 0px',
        [theme.breakpoints.down('md')]: {
            margin: '-30px 0px'
        }
    },
    layoutImageCaracas: {
        width: '100%',
        right: "30px",
        position: 'relative',
        margin: '-70px 0px',
        [theme.breakpoints.down('md')]: {
            margin: '-30px 0px'
        }
    },
    layoutGridImgValencia: {
        width: '90%'
    },
    layoutGridImg: {
        width: '60%',
        left: "200px",
    },
    layoutGridImgCaracas: {
        width: '90%',
        // height: "60px",
    },
    
    layoutImgAnimate: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        animation: '5s wings ease-in-out infinite'
    },
    layoutGrid: {
        [theme.breakpoints.down(960)]: {
            width: '768px'
        }
    },
    layoutContent: {
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            background: theme.palette.mode === 'dark' ? theme.palette.dark.dark : '#FFFFFF',
            border: `6px solid${theme.palette.secondary.main}`,
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            top: '13px',
            left: '-20px'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            background: theme.palette.mode === 'dark' ? theme.palette.dark.main : '#9E9E9E',
            width: '1px',
            height: '390px',
            top: '13px',
            left: '-8px'
        },
        [theme.breakpoints.down(1250)]: {
            '&:before': {
                height: '290px'
            }
        },
        [theme.breakpoints.down('md')]: {
            '&:after': {
                left: '-12px'
            },
            '&:before': {
                left: '0px',
                height: '290px'
            }
        }
    },
    layoutContentRight: {
        position: 'relative',
        paddingRight: '25px',
        '&:after': {
            content: '""',
            position: 'absolute',
            background: theme.palette.mode === 'dark' ? theme.palette.dark.dark : '#FFFFFF',
            border: `6px solid${theme.palette.secondary.main}`,
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            top: '13px',
            right: '-12px'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            background: theme.palette.mode === 'dark' ? theme.palette.dark.main : '#9E9E9E',
            width: '1px',
            height: '300px',
            top: '13px',
            right: '-1px'
        },
        [theme.breakpoints.down(1300)]: {
            '&:before': {
                height: '400%'
            }
        },
        [theme.breakpoints.down('md')]: {
            '&:after': {
                right: '-4px'
            },
            '&:before': {
                right: '7px'
            }
        },
        [theme.breakpoints.down('sm')]: {
            '&:after': {
                right: 'auto',
                left: '-12px'
            },
            '&:before': {
                right: 'auto',
                left: '0px',
                height: '160px'
            }
        }
    }
}));

// =============================|| LANDING - LAYOUTS PAGE ||============================= //

const LayoutsPage = () => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        
    <Container>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Slider />
            </Grid>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, m: '0 auto' }}>
                <Grid item xs={12} className={classes.layoutGrid}>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                        <Grid item sm={6}>
                            <Box className={classes.layoutImage}>
                                <img
                                    // src={theme.palette.mode === 'dark' ? imgLayoutDarkGrid : imgLayoutGrid}
                                    src={blank}
                                    alt="Berry"
                                    className={classes.layoutGridImgValencia}
                                />
                                <img src={metroValencia} alt="Berry" className={classes.layoutImgAnimate} />
                            </Box>
                        </Grid>
                        <Grid item sm={6}>
                            <Grid container spacing={2} className={classes.layoutContent} sx={{ maxWidth: '400px' }}>
                                <Grid item sm={12}>
                                    <Typography variant="h4" component="div">
                                        Metro Valencia
                                    </Typography>
                                </Grid>
                                <Grid item sm={12}>
                                    {/* <Typography variant="body2">
                                        Modern, sleek and elegant dark color scheme that looks great in a dark variant.
                                    </Typography> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.layoutGrid}>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                        <Grid item sm={6}>
                            <Grid
                                container
                                spacing={2}
                                className={classes.layoutContentRight}
                                sx={{ maxWidth: '400px', textAlign: 'right', ml: 'auto' }}
                            >
                                <Grid item sm={12}>
                                    <Typography variant="h4" component="div">
                                        Trans Aragua
                                    </Typography>
                                </Grid>
                                <Grid item sm={12}>
                                    {/* <Typography variant="body2">Fully Support Right-to-left (RTL) design variant.</Typography> */}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6}>
                            <Box className={classes.layoutImage}>
                                <img
                                    // src={theme.palette.mode === 'dark' ? imgLayoutDarkGrid : imgLayoutGrid}
                                    src={blank}
                                    alt="Berry"
                                    className={classes.layoutGridImg}
                                />
                                <img
                                    src={metroAragua}
                                    alt="Berry"
                                    className={classes.layoutImgAnimate}
                                    style={{ animationDelay: '1.5s' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={gridSpacing}>
                    <Grid item sm={6}>
                        <Box className={classes.layoutImageCaracas}>
                                <img
                                    // src={theme.palette.mode === 'dark' ? imgLayoutDarkGrid : imgLayoutGrid}
                                    src={blank}
                                    alt="Berry"
                                    className={classes.layoutGridImgCaracas}
                                />
                                <img
                                    src={metroCaracas}
                                    alt="Berry"
                                    className={classes.layoutImgAnimate}
                                    style={{ animationDelay: '3s', }}
                                />
                        </Box>
                    </Grid>
                    <Grid item sm={6}>
                        <Grid container spacing={2} className={classes.layoutContent} sx={{ maxWidth: '400px' }}>
                            <Grid item sm={12}>
                                <Typography variant="h4" component="div">
                                    Metro Caracas
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                {/* <Typography variant="body2">
                                    Modern, sleek and elegant dark color scheme that looks great in a dark variant.
                                </Typography> */}
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.layoutGrid}>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                        <Grid item sm={6}>
                            <Grid
                                container
                                spacing={2}
                                className={classes.layoutContentRight}
                                sx={{ maxWidth: '400px', textAlign: 'right', ml: 'auto' }}
                            >
                                <Grid item sm={12}>
                                    <Typography variant="h4" component="div">
                                        Bus Barinas
                                    </Typography>
                                </Grid>
                                <Grid item sm={12}>
                                    {/* <Typography variant="body2">Fully Support Right-to-left (RTL) design variant.</Typography> */}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6}>
                            <Box className={classes.layoutImage}>
                                <img
                                    // src={theme.palette.mode === 'dark' ? imgLayoutDarkGrid : imgLayoutGrid}
                                    src={blank}
                                    alt="Berry"
                                    className={classes.layoutGridImg}
                                />
                                <img
                                    src={busBarinas}
                                    alt="Berry"
                                    className={classes.layoutImgAnimate}
                                    style={{ animationDelay: '1.5s' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.layoutGrid}>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                        <Grid item sm={6}>
                            <Box className={classes.layoutImageCaracas}>
                                <img
                                    // src={theme.palette.mode === 'dark' ? imgLayoutDarkGrid : imgLayoutGrid}
                                    src={blank}
                                    alt="Berry"
                                    className={classes.layoutGridImgCaracas}
                                />
                                <img
                                    src={ife}
                                    alt="Berry"
                                    className={classes.layoutImgAnimate}
                                    style={{ animationDelay: '1.5s', }}
                                />
                            </Box>
                        </Grid>
                        <Grid item sm={6}>
                            <Grid
                                container
                                spacing={2}
                                className={classes.layoutContent}
                                sx={{
                                    maxWidth: '400px',
                                    '&:before': {
                                        background: theme.palette.mode === 'dark' ? theme.palette.dark[900] : '#fff !important'
                                    }
                                }}
                            >
                                <Grid item sm={12}>
                                    <Typography variant="h4" component="div">
                                        Instituto de Ferrocarriles del Estado
                                    </Typography>
                                </Grid>
                                <Grid item sm={12}>
                                    {/* <Typography variant="body2">Support Multi-language. Added 4 pre-filled language.</Typography>*/}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Container>
    );
};

export default LayoutsPage;
