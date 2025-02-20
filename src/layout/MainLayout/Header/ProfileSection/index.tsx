import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// material-ui
import { makeStyles } from '@material-ui/styles'
import { useTheme, Theme } from '@material-ui/core/styles'
import IconAccountCircle from '../../../../components/icons/AccountCircle'
import {
    // Avatar,
    // Card,
    CardContent,
    Chip,
    ClickAwayListener,
    Divider,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Popper,
    // Switch,
    Typography,
} from '@material-ui/core'

// third-party
// import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard'
import Transitions from 'ui-component/extended/Transitions'
import { DefaultRootStateProps } from 'types'
// import User1 from 'assets/images/users/user-round.svg';

// assets
import { IconLogout, IconSettings } from '@tabler/icons'
import { LOGOUT_REQUEST } from 'store/actions'

// style const
const useStyles = makeStyles((theme: Theme) => ({
    navContainer: {
        width: '100%',
        maxWidth: '350px',
        minWidth: '300px',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            minWidth: '100%',
        },
    },
    headerAvatar: {
        cursor: 'pointer',
        ...theme.typography.mediumAvatar,
        margin: '8px 0 8px 8px !important',
    },
    profileChip: {
        height: '48px',
        alignItems: 'center',
        borderRadius: '27px',
        transition: 'all .2s ease-in-out',
        borderColor:
            theme.palette.mode === 'dark'
                ? theme.palette.dark.main
                : theme.palette.primary.light,
        backgroundColor:
            theme.palette.mode === 'dark'
                ? theme.palette.dark.main
                : theme.palette.primary.light,
        // '&[aria-controls="menu-list-grow"], &:hover': {
        //     borderColor: '#5D299F',
        //     background: `'#5D299F'!important`,
        //     color: '#5D299F',
        //     '& svg': {
        //         stroke: '#5D299F',
        //     },
        // },
    },
    profileLabel: {
        lineHeight: 0,
        padding: '12px',
    },
    listItem: {
        marginTop: '5px',
    },
    cardContent: {
        padding: '16px !important',
    },
    card: {
        backgroundColor:
            theme.palette.mode === 'dark'
                ? theme.palette.dark[800]
                : theme.palette.primary.light,
        marginBottom: '16px',
        marginTop: '16px',
    },
    searchControl: {
        width: '100%',
        paddingRight: '8px',
        paddingLeft: '16px',
        marginBottom: '16px',
        marginTop: '16px',
    },
    startAdornment: {
        fontSize: '1rem',
        color: theme.palette.grey[500],
    },
    flex: {
        display: 'flex',
    },
    name: {
        marginLeft: '2px',
        fontWeight: 400,
    },
    ScrollHeight: {
        height: '100%',
        maxHeight: 'calc(100vh - 250px)',
        overflowX: 'hidden',
    },
    badgeWarning: {
        backgroundColor:
            theme.palette.mode === 'dark'
                ? theme.palette.dark.dark
                : theme.palette.warning.dark,
        color: '#fff',
    },
}))

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
    const classes = useStyles()
    const theme = useTheme()
    const navigate = useNavigate()
    const customization = useSelector(
        (state: DefaultRootStateProps) => state.customization
    )
    const user = useSelector(
        (state: DefaultRootStateProps) => state.login?.user?.content
    )
    // const userInfo = useSelector(
    //     (state: DefaultRootStateProps) => state.login
    // )
    // const user = useSelector((state: DefaultRootStateProps) => state.login.user);
    const dispatch = useDispatch()
    // const [userData] = React.useState(
    //     userInfo ? userInfo?.user?.content : ''
    // )
    // const [value, setValue] = React.useState('');
    // const [notification, setNotification] = React.useState(false)
    const [selectedIndex] = React.useState(1)
    const [open, setOpen] = React.useState(false)
    const [greeting, setGreeting] = React.useState<String>('')
    /**
     * anchorRef is used on different componets and specifying one type leads to other components throwing an error
     * */
    const anchorRef = React.useRef<any>(null)
    const handleLogout = async () => {
        try {
            dispatch({
                type: LOGOUT_REQUEST,
            })
            window.location.reload()
        } catch (err) {
            console.error(err)
        }
    }
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }
    const handleClose = (
        event: React.MouseEvent<HTMLDivElement> | MouseEvent | TouchEvent
    ) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }

        setOpen(false)
    }

    const handleProfile = () => {
        setOpen(false)
        navigate('/profile')
    }
    const handleGreeting = () => {
        const date = new Date()
        const hours = date.getHours()
        if (hours >= 0 && hours < 12) setGreeting('Buenos dias')
        if (hours >= 12 && hours < 18) setGreeting('Buenas tardes')
        if (hours >= 18 && hours < 24) setGreeting('Buenas noches')
    }
    const prevOpen = React.useRef(open)
    React.useEffect(() => {
        handleGreeting()
    }, [])

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = open
    }, [open])

    return (
        <>
            <Chip
                classes={{ label: classes.profileLabel }}
                className={classes.profileChip}
                // icon={
                //     <Avatar
                //         src={User1}
                //         className={classes.headerAvatar}
                //         ref={anchorRef}
                //         aria-controls={open ? 'menu-list-grow' : undefined}
                //         aria-haspopup="true"
                //         color="inherit"
                //     />
                // }
                label={<IconSettings stroke={1.5} size="1.5rem" />}
                variant="outlined"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="primary"
                sx={{ marginRight: '30px' }}
            />
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 14],
                            },
                        },
                    ],
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard
                                    border={false}
                                    elevation={16}
                                    content={false}
                                    boxShadow
                                    shadow={theme.shadows[16]}
                                >
                                    <CardContent
                                        className={classes.cardContent}
                                    >
                                        <Grid
                                            container
                                            direction="column"
                                            spacing={0}
                                        >
                                            <Grid item className={classes.flex}>
                                                <Typography variant="h4">
                                                    {/* Good Morning, {`${userData.first_name} ${userData.last_name}`} */}
                                                    {/* Good Morning, */}
                                                    {`${greeting},  ${user?.first_name} ${user?.last_name}`}
                                                </Typography>
                                                <Typography
                                                    component="span"
                                                    variant="h4"
                                                    className={classes.name}
                                                ></Typography>
                                            </Grid>
                                            <Grid item>
                                                {/* <Typography variant="subtitle2">
                                                    Project Admin
                                                </Typography> */}
                                            </Grid>
                                        </Grid>
                                        {/* <OutlinedInput
                                            className={classes.searchControl}
                                            id="input-search-profile"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            placeholder="Search profile options"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <IconSearch stroke={1.5} size="1.3rem" className={classes.startAdornment} />
                                                </InputAdornment>
                                            }
                                            aria-describedby="search-helper-text"
                                            inputProps={{
                                                'aria-label': 'weight'
                                            }}
                                        /> */}
                                        <Divider />
                                        {/* <PerfectScrollbar className={classes.ScrollHeight}> */}

                                        {/* <Card className={classes.card}>
                                            <CardContent>
                                                <Grid
                                                    container
                                                    spacing={3}
                                                    direction="column"
                                                >
                                                    <Grid item>
                                                        <Grid
                                                            item
                                                            container
                                                            alignItems="center"
                                                            justifyContent="space-between"
                                                        >
                                                            <Grid item>
                                                                <Typography variant="subtitle1">
                                                                    Allow
                                                                    Notifications
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Switch
                                                                    checked={
                                                                        notification
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setNotification(
                                                                            e
                                                                                .target
                                                                                .checked
                                                                        )
                                                                    }
                                                                    name="sdm"
                                                                    size="small"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card> */}
                                        <Divider />
                                        <List
                                            component="nav"
                                            className={classes.navContainer}
                                        >
                                            <ListItemButton
                                                className={classes.listItem}
                                                sx={{
                                                    borderRadius: `${customization.borderRadius}px`,
                                                }}
                                                selected={selectedIndex === 4}
                                                onClick={handleProfile}
                                            >
                                                <ListItemIcon>
                                                    {/* <AccountCircle sx={{color:pick[500]}} /> */}
                                                    <IconAccountCircle className="w-6 fill-current" />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Typography variant="body2">
                                                            Perfil
                                                        </Typography>
                                                    }
                                                />
                                            </ListItemButton>
                                            <ListItemButton
                                                className={classes.listItem}
                                                sx={{
                                                    borderRadius: `${customization.borderRadius}px`,
                                                }}
                                                selected={selectedIndex === 4}
                                                onClick={handleLogout}
                                            >
                                                <ListItemIcon>
                                                    <IconLogout
                                                        stroke={1.5}
                                                        size="1.3rem"
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Typography variant="body2">
                                                            {/* Logout */}
                                                            Cerrar sesión
                                                        </Typography>
                                                    }
                                                />
                                            </ListItemButton>
                                        </List>
                                        {/* </PerfectScrollbar> */}
                                    </CardContent>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </>
    )
}

export default ProfileSection
