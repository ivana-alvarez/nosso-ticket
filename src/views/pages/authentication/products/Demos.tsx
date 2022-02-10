// import { Link } from 'react-router-dom';

// material-ui
import { makeStyles } from '@material-ui/styles'
import {
    // Button,
    // ButtonBase,
    Container,
    Grid,
    Typography,
    Theme,
    Box,
    Divider,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

// project imports
import FadeInWhenVisible from './Animation'
// import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant'

// assets
import imgDemo1 from 'assets/images/landing/tarjtas_landing_Mesa_de_trabajo_1.png'
import imgDemo2 from 'assets/images/landing/tarjtas_landing-02.png'
import imgDemo3 from 'assets/images/landing/tarjtas_landing-03.png'
import imgDemo4 from 'assets/images/landing/tarjtas_landing-04.png'
import imgDemo5 from 'assets/images/landing/tarjtas_landing-05.png'

// style constant
const useStyles = makeStyles((theme: Theme) => ({
    demoImage: {
        width: '100%',
        borderRadius: '12px',
    },
    divide: {
        height: '20px',
    },
}))

// ==============================|| LANDING - DEMOS PAGE ||============================== //

const DemosPage = () => {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <Container>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} lg={5} md={10}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Typography variant="h1" color="primary">
                                        Productos
                                    </Typography>
                                    <Divider />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h2" component="div">
                                Personaliza
                                <Box
                                    component="span"
                                    sx={{
                                        ml: 2,
                                        color: theme.palette.primary.main,
                                    }}
                                >
                                    T-TICKET{' '}
                                </Box>
                                para que se adapte a tus necesidades de viaje.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={gridSpacing}
                        sx={{ textAlign: 'center' }}
                    >
                        <Grid
                            item
                            md={4}
                            sm={6}
                            className="animate-pulse duration-1000"
                        >
                            <FadeInWhenVisible>
                                {/* <ButtonBase component={Link} to="/dashboard/default" target="_blank"> */}
                                <img
                                    src={imgDemo1}
                                    alt="Berry Dashboard"
                                    className={classes.demoImage}
                                />
                                {/* </ButtonBase> */}
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid
                            item
                            md={4}
                            sm={6}
                            className="animate-pulse duration-1000"
                        >
                            <FadeInWhenVisible>
                                {/* <ButtonBase component={Link} to="/user/social-profile/posts" target="_blank"> */}
                                <img
                                    src={imgDemo2}
                                    alt="Berry Social App"
                                    className={classes.demoImage}
                                />
                                {/* </ButtonBase> */}
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid
                            item
                            md={4}
                            sm={6}
                            className="animate-pulse duration-1000"
                        >
                            <FadeInWhenVisible>
                                {/* <ButtonBase component={Link} to="/app/mail" target="_blank"> */}
                                <img
                                    src={imgDemo3}
                                    alt="Berry Mail App"
                                    className={classes.demoImage}
                                />
                                {/* </ButtonBase> */}
                            </FadeInWhenVisible>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={gridSpacing}
                        sx={{ textAlign: 'center' }}
                    >
                        <Grid
                            item
                            md={4}
                            sm={6}
                            className="animate-pulse duration-1000"
                        >
                            <FadeInWhenVisible>
                                {/* <ButtonBase component={Link} to="/dashboard/default" target="_blank"> */}
                                <img
                                    src={imgDemo4}
                                    alt="Berry Dashboard"
                                    className={classes.demoImage}
                                />
                                {/* </ButtonBase> */}
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid
                            item
                            md={4}
                            sm={6}
                            className="animate-pulse duration-1000"
                        >
                            <FadeInWhenVisible>
                                {/* <ButtonBase component={Link} to="/user/social-profile/posts" target="_blank"> */}
                                <img
                                    src={imgDemo5}
                                    alt="Berry Social App"
                                    className={classes.demoImage}
                                />
                                {/* </ButtonBase> */}
                            </FadeInWhenVisible>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DemosPage
