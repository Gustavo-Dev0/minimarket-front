import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import { Avatar, Icon, ListItemIcon, Menu, MenuItem, Tooltip, useTheme } from '@mui/material';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import AvatarImage from '../../../assets/avatar.png'

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactNode
}

const drawerWidth = 240;
//const navItems = ['Home', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const SideAndTopMenu = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const { drawerOptions } = useDrawerContext();
    const { toggleTheme } = useAppThemeContext();
    const theme = useTheme();

    const navItems = drawerOptions

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate();

    const handleClick = (to: string) => {
        navigate(to);
        //onClick?.();
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', }}>
            <Box display='flex' flexDirection='row' flexGrow={1} padding={1} marginX={2} flex={0}>
                <Icon fontSize='large'>assignment</Icon>
                <Divider orientation='vertical' flexItem sx={{ flex: 1 }} />
                <Typography variant='h6' sx={{ flex: 8 }} display='flex' flexDirection='column' justifyContent='center' >Tienda</Typography>
            </Box>
            <Divider />
            <List style={{ flex: 1, padding: 0, display: 'flex', flexDirection: 'column', }}>
                {navItems.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleClick(item.path)}>
                            <ListItemIcon>
                                <Icon>{item.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Box flex={1}></Box>
                <ListItem disablePadding>
                    <ListItemButton onClick={toggleTheme} sx={{ textAlign: 'center' }} >
                        <ListItemIcon>
                            <Icon>dark_mode</Icon>
                        </ListItemIcon>
                        <ListItemText>
                            Toggle theme
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: 'white' }}
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                    <Box display='flex' flexDirection='row' flexGrow={1} padding={1} marginX={2} flex={1}>
                        <Icon fontSize='large'>assignment</Icon>
                        <Divider orientation='vertical' flexItem sx={{ flex: 1 }} />
                        <Divider orientation='vertical' sx={{ flex: 1 }} />
                        <Typography variant='h6' sx={{ flex: 8 }} display='flex' flexDirection='column' justifyContent='center' >Tienda</Typography>
                    </Box>
                    <Box flex={1}></Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight: 1 }}>
                        <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>

                            {navItems.map((item) => (
                                <ListItem key={item.path} disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleClick(item.path)}>
                                        <ListItemIcon sx={{ minWidth: theme.spacing(4), color: 'white' }}>
                                            <Icon>{item.icon}</Icon>
                                        </ListItemIcon>
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <ListItem disablePadding>
                                <ListItemButton onClick={toggleTheme}>
                                    <ListItemIcon sx={{ minWidth: theme.spacing(4), color: 'white' }}>
                                        <Icon>dark_mode</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary='Toggle theme'
                                        primaryTypographyProps={{
                                            style: {
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }
                                        }} />
                                </ListItemButton>
                            </ListItem>
                        </List>



                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Aemy Sharp" src={AvatarImage} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ pX: 3, width: '100%' }}  marginX={{sm: 0 | 16}}>
                {props.children}
            </Box>
        </Box>
    );
}

export default SideAndTopMenu;