import { Box, Typography, IconButton, Icon, Theme, useMediaQuery, useTheme, Toolbar } from '@mui/material';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaProps {
    children: React.ReactNode;
    title: string;
    toolsBar?: React.ReactNode
    buttonAdd?: React.ReactNode
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, title, toolsBar, buttonAdd }: ILayoutBaseDePaginaProps) => {

    const { toggleDrawerOpen } = useDrawerContext();

    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Toolbar></Toolbar>
            <Box padding={1} display='flex' gap={1} alignItems='center' height={theme.spacing(smDown ? 4 : mdDown ? 8 : 12)} justifyContent='space-between'>

                <Typography
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                    overflow='hidden'
                    whiteSpace='nowrap'
                    textOverflow='ellipsis'
                    color={theme.palette.secondary.contrastText}
                >
                    {title}
                </Typography>
                {buttonAdd && (
                    <Box>
                        {buttonAdd}
                    </Box>
                )}
            </Box>
            {toolsBar && (
                <Box>
                    {toolsBar}
                </Box>
            )}
            <Box flex={1} overflow='auto'>
                {children}

            </Box>
        </Box>
    );
};
