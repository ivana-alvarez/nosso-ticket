import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger,
    ButtonBase
} from '@material-ui/core';

// project imports
// import Logo from 'ui-component/Logo';
import LogoGobDark from 'components/icons/LogoGobDark'
import LogoGobLight from 'components/icons/LogoGobLight'
import CompanyIcon from 'components/icons/CompanyIcon'
import ProductsIcon from 'components/icons/ProductsIcon'
import RedIcon from 'components/icons/RedIcon'
import CheckAccountIcon from 'components/icons/CheckAccountIcon'
import CreateAccountIcon from 'components/icons/CreateAccountIcon'

// assets
// import { IconCreditCard} from '@tabler/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { DefaultRootStateProps } from 'types';
import { useSelector } from 'react-redux';

// elevation scroll
export interface ElevationScrollProps {
    children: ReactElement;
    window?: Window | Node;
}
function ElevationScroll(props: ElevationScrollProps) {
    const { children, window } = props;
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window!
    });
    const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

    return React.cloneElement(children, {
        elevation: trigger ? 2 : 0,
        style: {
            backgroundColor: theme.palette.background.default,
            borderBottom: trigger ? 'none' : '1px solid',
            borderColor: trigger ? '' : darkBorder,
            color: theme.palette.text.dark
        }
    });
}

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = React.useState<boolean>(false);
    /** Method called on multiple components with different event types */
    const drawerToggler = (open: boolean) => (event: any) => {
        if (event.type! === 'keydown' && (event.key! === 'Tab' || event.key! === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };
    const themeState = useSelector(
        (state: DefaultRootStateProps) => state.customization.navType
    )

    return (
        <ElevationScroll {...others}>
            <MuiAppBar>
                <Container>
                    <Toolbar>
                        <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            {/* <Logo /> */}
                            <ButtonBase component={RouterLink} to="/">
                                <div className="flex justify-between w-full">
                                    <div className="mx-4 w-80">
                                        {themeState === 'dark' ? (
                                            <LogoGobDark className="w-full" />
                                        ) : (
                                            <LogoGobLight className="w-full" />
                                        )}
                                    </div>
                                </div>
                            </ButtonBase>
                        </Typography>
                        <Stack direction="row" sx={{ display: { xs: 'none', sm: 'none' , md:'none'  , lg:'block'} }} spacing={2}>
                            <Button color="inherit" component={Link} href="/products">
                                Productos
                            </Button>
                            <Button color="inherit" component={RouterLink} to="/company" >
                                Empresa
                            </Button>
                            <Button color="inherit" component={RouterLink} to="/red">
                                Red
                            </Button>
                            <Button
                                component={Link}
                                href="/login"
                                disableElevation
                                variant="outlined"
                                color="secondary"
                            >
                                Consulta tu cuenta
                            </Button>
                            <Button
                                component={Link}
                                href="/register"
                                disableElevation
                                variant="contained"
                                color="secondary"
                            >
                                Crear tu cuenta 
                            </Button>
                        </Stack>
                        <Box sx={{ display: { sm: 'block' , md:'block' , lg:'none' } }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                <Box
                                    sx={{
                                        width: 'auto'
                                    }}
                                    role="presentation"
                                    onClick={drawerToggler(false)}
                                    onKeyDown={drawerToggler(false)}
                                >
                                    <List>
                                        <Link style={{ textDecoration: 'none' }} href="/products">
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <ProductsIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Productos" />
                                            </ListItemButton>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} href="/company">
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <CompanyIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Empresa" />
                                            </ListItemButton>
                                        </Link>
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            href="/red"
                                        >
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <RedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Red" />
                                            </ListItemButton>
                                        </Link>
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            href="/login"
                                        >
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <CheckAccountIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Consulta tu cuenta" />
                                            </ListItemButton>
                                        </Link>
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            href="/register"
                                        >
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <CreateAccountIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Crea tu cuenta" />
                                            </ListItemButton>
                                        </Link>
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;
