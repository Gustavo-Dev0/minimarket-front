import { Drawer, Box, useTheme, Divider, Avatar, List, ListItemText, ListItemButton, ListItemIcon, Icon, useMediaQuery } from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from '../../contexts';


interface IMenuLateralProps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }: IMenuLateralProps) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
    const { toggleTheme } = useAppThemeContext();

    return (
        <>
            <Drawer variant={smDown ? 'temporary' : 'permanent'} open={isDrawerOpen} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                    <Box display='flex' alignItems='center' justifyContent='center' height={theme.spacing(20)}>
                        <Avatar sx={{ width: theme.spacing(12), height: theme.spacing(12) }} src='https://static2.abc.es/media/play/2020/09/29/avatar-kE4H--1024x512@abc.jpeg'></Avatar>
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List component='nav'>
                            {drawerOptions.map(drawerOption => (
                                <ListItemLink
                                    key={drawerOption.path}
                                    icon={drawerOption.icon}
                                    to={drawerOption.path}
                                    label={drawerOption.label}
                                    onClick={smDown ? toggleDrawerOpen : undefined}
                                />
                            ))}

                        </List>
                    </Box>

                    <Box>
                        <List component='nav'>
                            <ListItemButton onClick={toggleTheme}>
                                <ListItemIcon>
                                    <Icon>dark_mode</Icon>
                                </ListItemIcon>
                                <ListItemText>
                                    Toggle theme
                                </ListItemText>
                            </ListItemButton>

                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box marginLeft={smDown ? 0 : theme.spacing(28)} height='100%'>
                {children}
            </Box>

        </>
    );
};

interface IListItemLinkProps {
    label: string
    icon: string
    to: string
    onClick: (() => void) | undefined
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }: IListItemLinkProps) => {

    const navigate = useNavigate();
    const resolvePath = useResolvedPath(to);
    const match = useMatch({ path: resolvePath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText>
                {label}
            </ListItemText>
        </ListItemButton>
    );
};