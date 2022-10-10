import { useEffect, useMemo, useState } from 'react';
import { Icon, IconButton, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { ExampleService } from '../../shared/services/api/example/ExampleService';
import { HerramientasDeDetalle, HerramientasDeListado } from '../../shared/components';


export const ExampleTable: React.FC = () => {

  const [rows, setRows] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      title='Tabla ejemplo'
      toolsBar={<HerramientasDeDetalle showCancelButton showSaveAndNewButton />}
    >
      <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={100}>Acciones</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>
                  <IconButton size="small" onClick={() => {}}>
                    <Icon>delete</Icon>
                  </IconButton>
                  <IconButton size="small" onClick={() => {}}>
                    <Icon>edit</Icon>
                  </IconButton>
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.status}</TableCell>
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
                    onChange={(_, newPage) => {}}
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