import React from 'react'
import { useSelector } from 'react-redux'

// material-ui
import { makeStyles } from '@material-ui/styles'

import {
    CardContent,
    Grid,
    Tab,
    Tabs,
    Theme,
    Typography,
    // CardActions,
    // Divider,
} from '@material-ui/core'

// project imports
import MainCard from 'ui-component/cards/MainCard'
import { gridSpacing } from 'store/constant'


// assets
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone'
// import AltRouteIcon from '@mui/icons-material/AltRoute';
import { DefaultRootStateProps } from 'types'
import PaymentManagement from './PaymentManagementForm'

// style constant
const useStyles = makeStyles((theme: Theme) => ({
    profileTab: {
        '& .MuiTabs-flexContainer': {
            borderBottom: 'none',
        },
        '& button': {
            color:
                theme.palette.mode === 'dark'
                    ? theme.palette.grey[600]
                    : theme.palette.grey[600],
            minHeight: 'auto',
            minWidth: '100%',
            padding: '12px 16px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            textAlign: 'left',
            justifyContent: 'flex-start',
        },
        '& button.Mui-selected': {
            color: theme.palette.primary.main,
            background:
                theme.palette.mode === 'dark'
                    ? theme.palette.dark.main
                    : theme.palette.grey[50],
        },
        '& button > svg': {
            marginBottom: '0px !important',
            marginRight: '10px',
            marginTop: '10px',
            height: '20px',
            width: '20px',
        },
        '& button > div > span': {
            display: 'block',
        },
        '& > div > span': {
            display: 'none',
        },
    },
    cardPanels: {
        borderLeft: '1px solid',
        borderLeftColor: theme.palette.mode === 'dark' ? '#333d5e' : '#eeeeee',
        height: '100%',
    },
}))

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

// ==============================|| PROFILE 2 ||============================== //

// interface CompanyProfileProps {
//     companyIdParam?: string
//     readOnly?: boolean
//     onlyView?: boolean 
// }
// const SummaryIndex = ({ companyIdParam, onlyView, readOnly  }: CompanyProfileProps) => {
    const PaymentManagementIndex = () => {
    // tabs
    function TabPanel(props: {
        children: React.ReactElement
        value: number
        index: number
    }) {
        const { children, value, index, ...other } = props

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <div>{children}</div>}
            </div>
        )
    }

    // tabs option

    const classes = useStyles()
    const customization = useSelector(
        (state: DefaultRootStateProps) => state.customization
    )

    const [value, setValue] = React.useState<number>(0)

    const handleChange = (event: React.SyntheticEvent) => {

        if(value === 1) setValue(0)
        if(value === 0) setValue(1)
    }
    const tabsOption = [
        {
            label: 'Gestion de pagos',
            icon: <PersonOutlineTwoToneIcon />,
            caption: 'Datos Bancarios asociados al pago del servicio',
            disabled: false,
        },
        // {
        //     label: 'Recargas',
        //     icon: <PersonOutlineTwoToneIcon />,
        //     caption: 'Estado de cuentade recargas realizadas',
        //     disabled: false,
        // },
        // {
        //     label: 'Representante legal',
        //     icon:<VpnKeyTwoToneIcon /> ,
        //     caption: 'datos del representante legal'
        // },
        // {
        //     label: 'Datos bancarios',
        //     icon: <CreditCardTwoToneIcon />,
        //     caption: 'datos bancarios de la empresa'
        // }
    ]

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard sx={{ padding: '15px' }} content={false}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} lg={4}>
                            <CardContent>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    orientation="vertical"
                                    className={classes.profileTab}
                                    variant="scrollable"
                                    sx={{
                                        '& button': {
                                            borderRadius: `${customization.borderRadius}px`,
                                        },
                                    }}
                                >
                                    {tabsOption.map((tab, index) => (
                                        <Tab
                                            disabled={tab.disabled}
                                            key={index}
                                            icon={tab.icon}
                                            label={
                                                <Grid
                                                    container
                                                    direction="column"
                                                >
                                                    <Typography
                                                        variant="subtitle1"
                                                        color="inherit"
                                                    >
                                                        {tab.label}
                                                    </Typography>
                                                    <Typography
                                                        component="div"
                                                        variant="caption"
                                                        sx={{
                                                            textTransform:
                                                                'none',
                                                        }}
                                                    >
                                                        {tab.caption}
                                                    </Typography>
                                                </Grid>
                                            }
                                            {...a11yProps(index)}
                                        />
                                    ))}
                                </Tabs>
                            </CardContent>
                        </Grid>
                            <>
                                <Grid item xs={12} lg={8}>
                                    <CardContent className={classes.cardPanels}>
                                        <TabPanel value={value} index={0}>
                                            <PaymentManagement />
                                        </TabPanel>
                                    </CardContent>
                                </Grid>
                            </>
                        
                    </Grid>
                    {/* <Divider />
                    <CardActions>
                        <Grid
                            container
                            justifyContent="space-between"
                            spacing={0}
                        > */}
                             {/* <Grid item>
                                {value > 0 && (
                                    <AnimateButton>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            onClick={(e) =>
                                                handleChange(e, value - 1)
                                            }
                                        >
                                            Atrás
                                        </Button>
                                    </AnimateButton>
                                )}
                            </Grid>  */}
                        {/* </Grid>
                    </CardActions> */}
                </MainCard>
            </Grid>
        </Grid>
    )
}

export default PaymentManagementIndex
