import { useEffect, useMemo, useState } from 'react';
import { Icon, IconButton, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Box, Button, useMediaQuery, Theme, Typography } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { ExampleService } from '../../shared/services/api/example/ExampleService';
import { HerramientasDeDetalle, HerramientasDeListado } from '../../shared/components';


export const ExampleTable: React.FC = () => {

    const [rows, setRows] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    useEffect(() => {
        setIsLoading(true);

        ExampleService.getAll()
            .then((result: any) => {
                setIsLoading(false);

                if (result instanceof Error) {
                    alert(result.message);
                } else {
                    console.log(result);
                    setRows(result.data.results);
                }
            });

    }, []);

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
            <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>

                            <TableCell align='center'>Id</TableCell>
                            <TableCell align='center'>Nombre</TableCell>
                            <TableCell align='center'>Ubicacion</TableCell>
                            <TableCell align='center'>Tel??fono</TableCell>
                            <TableCell align='center'>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>

                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell sx={{
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                }}>
                                    <IconButton size="small" onClick={() => { }}>
                                        <Icon color='primary' fontSize='large'>visibility</Icon>
                                    </IconButton>
                                    <IconButton size="small" onClick={() => { }}>
                                        <Icon sx={{ color: '#c8a03a' }} fontSize='large'>edit_square</Icon>
                                    </IconButton>
                                    <IconButton size="small" onClick={() => { }}>
                                        <Icon sx={{ color: 'red' }} fontSize='large'>delete</Icon>
                                    </IconButton>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    <TableFooter>
                        {isLoading && (
                            <TableRow>
                                <TableCell colSpan={3}>
                                    <LinearProgress variant='indeterminate' />
                                </TableCell>
                            </TableRow>
                        )}
                        {(true) && (
                            <TableRow>
                                <TableCell colSpan={3}>
                                    <Pagination
                                        page={10}
                                        count={50}
                                        onChange={(_, newPage) => { }}
                                    />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableFooter>
                </Table>
            </TableContainer>
        </LayoutBaseDePagina>
    );
};