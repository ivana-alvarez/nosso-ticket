// material-ui
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { 
    Container, 
    Grid, 
    // Link, 
    // Typography, 
    Theme 
} from '@material-ui/core';

// project imports
import { gridSpacing } from 'store/constant';

// assets
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FadeInWhenVisible from './Animation';
// import AnimateButton from 'ui-component/extended/AnimateButton';
// import logoDark from 'assets/images/logo-white.svg';
import Cintillo_3 from 'components/icons/Cintillo_3';
import Cintillo_4 from 'components/icons/Cintillo_4';

// style constant
const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        padding: '20px ',
        color: '#fff',
        height: "100px",
        marginTop:"19px",
        // marginBottom:0,
        background: "#5D299F" , // theme.palette.secondary.main,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    footerLink: {
        color: '#b89797',
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none !important',
        opacity: '0.8',
        '& svg': {
            fontsize: '18px',
            marginRight: '8px'
        },
        '&:hover': {
            opacity: '1'
        }
    },
    footerSub: {
        padding: '20px 0',
        color: '#fff',
        background: "#FBFAFF", // theme.palette.secondary.dark,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    }
}));
// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterPage = () => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <>
            <div className={classes.footer}>
                <Container>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                    <Grid item xs={12} sm={4}>
                                         {/* <img src={Cintillo_3} alt="Berry" width="100" /> */}
                                        <Cintillo_4 />
                                </Grid>
                        <Grid item xs={12} sm={8}>
                            <Grid
                                container
                                alignItems="center"
                                spacing={2}
                                sx={{ justifyContent: 'flex-end', [theme.breakpoints.down('sm')]: { justifyContent: 'center' } }}
                            >

                                
                                <Grid item xs={12} sm={4}>
                                        {/* <img src={Cintillo_3} alt="Berry" width="100" /> */}
                                        <Cintillo_3 />
                                </Grid>
                                {/* <Grid item>
                                    {/* <Link
                                        href="https://blog.berrydashboard.io/"
                                        target="_blank"
                                        className={classes.footerLink}
                                        underline="hover"
                                    >
                                        <InstagramIcon />
                                        Blog
                                    </Link> 
                                     
                                    <Grid item xs={12} sm={4}>
                                        <img src={logoDark} alt="Berry" width="100" />
                                    </Grid>
                        
                                </Grid>
                                <Grid item>
                                    <Link
                                        href="https://www.facebook.com/codedthemes"
                                        target="_blank"
                                        className={classes.footerLink}
                                        underline="hover"
                                    >
                                        <FacebookIcon />
                                        Facebook
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        href="https://twitter.com/codedthemes"
                                        target="_blank"
                                        className={classes.footerLink}
                                        underline="hover"
                                    >
                                        <TwitterIcon />
                                        Twitter
                                    </Link>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            {/* <div className={classes.footerSub}>
                <Container>
                    <Typography variant="subtitle2" component="div" color="inherit">
                        &#169; CodedThemes
                    </Typography>
                </Container>
            </div> */}
        </>
    );
};

export default FooterPage;
