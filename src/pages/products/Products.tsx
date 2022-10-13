import { Button, Icon, Theme, Typography, useMediaQuery, Box, styled, alpha, InputBase, useTheme } from '@mui/material';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { ProductsTable } from './ProductsTable';


const Search = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: alpha(theme.palette.secondary.contrastText, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.secondary.contrastText, 0.25),
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        color: theme.palette.secondary.contrastText,
        paddingLeft: theme.spacing(2),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


export const Products = () => {

    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const theme = useTheme();


    return (
        <LayoutBaseDePagina
            title='Mis productos'
            buttonAdd={
                <Button variant='contained' size={smDown ? 'small' : 'large'}
                    startIcon={<Icon fontSize={smDown ? 'small' : 'large'}>add_circle</Icon>}
                    onClick={() => console.log("click")} >
                    <Typography
                        variant={smDown ? 'caption' : 'h6'}
                    >
                        Agregar producto
                    </Typography>
                </Button>}
        >
            <Box display='flex' flexDirection='row' gap={2} paddingLeft={2}>
                
                <Search>
                    <StyledInputBase
                        placeholder="Buscar..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Button color='success' variant='contained' size={smDown ? 'small' : 'small'} sx={{borderRadius: 30}}
                    startIcon={<Icon fontSize='small'>search</Icon>}
                    onClick={() => console.log("click")} >
                    <Typography
                        variant='caption'
                    >
                        {!smDown && 'Buscar producto'}
                    </Typography> 
                </Button>
            </Box>
            <ProductsTable />
        </LayoutBaseDePagina>
    );
};