import { Button, Icon, Theme, Typography, useMediaQuery } from '@mui/material';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { ProvidersTable } from './ProvidersTable';


export const Providers = () => {

    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));


    return (
        <LayoutBaseDePagina
            title='Mis proveedores'
            buttonAdd={
                <Button variant='contained' size={smDown ? 'small' : 'large'} 
                    startIcon={<Icon fontSize={smDown ? 'small' : 'large'}>add_circle</Icon>} 
                    onClick={()=>console.log("click")} >
                    <Typography
                        variant={smDown ? 'caption' : 'h6'}
                    >
                        Agregar proveedor
                    </Typography>
                </Button>}
        >
            <ProvidersTable />
        </LayoutBaseDePagina>
    );
};