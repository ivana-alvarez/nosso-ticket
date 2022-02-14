// material-ui
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'

// project imports
import Header from './Header'
// import Feature from './Feature';
// import Demos from './Demos';
// import Layouts from './Layouts';
// import KeyFeature from './KeyFeature';
// import Subscribe from './Subscribe';
import Footer from '../footer/Footer'
// import Customization from 'layout/Customization';
import AppBar from 'ui-component/extended/AppBar'

// style constant
const useStyles = makeStyles((theme: Theme) => ({
    header: {
        paddingTop: '30px',
        overflowX: 'hidden',
        overflowY: 'clip',
        paddingBottom: '50px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '0px',
        },
    },
    sectionWhite: {
        paddingTop: '160px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '60px',
        },
    },
}))

// =============================|| LANDING MAIN ||============================= //

const Landing = () => {
    const classes = useStyles()

    return (
        <div className="flex flex-col justify-end min-h-screen">
            <div id="home" className={classes.header}>
                <AppBar />
                <Header />
            </div>
            {/* <div className={classes.sectionWhite}>
                <Feature />
            </div> */}
            {/* <div className={classes.sectionWhite}>
                <Demos />
            </div> */}
            {/* <div className={classes.sectionWhite}>
                <Layouts />
            </div> */}
            {/* <div className={classes.sectionWhite}>
                <KeyFeature />
            </div>
            <div className={classes.sectionWhite}>
                <Subscribe />
            </div> */}
            <Footer />
            {/* <Customization /> */}
        </div>
    )
}

export default Landing
