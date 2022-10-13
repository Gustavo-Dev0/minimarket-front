import { InputLabel } from '@material-ui/core';
import { Button, Card, Typography, CardActions, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, Icon, IconButton, Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { ExampleService } from '../../shared/services/api/example/ExampleService';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { display } from '@mui/system';
import { makeStyles } from '@material-ui/core'
import { Product } from './Sales';

const useStyles = makeStyles((theme: any) => ({
    root: {
        [`& fieldset`]: {
            borderRadius: 30,
        },
        [`& input`]: {
            borderRadius: 30,
            padding: 4,
            paddingLeft: 8
        },
    },
}));

interface IMakeSalesProps {
    itemList: Product[]
}

export const MakeSales = ({ itemList }: IMakeSalesProps) => {

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

    const classes = useStyles()

    return (
        <Card >
            <CardHeader title={'Productos seleccionados:'} />
            <CardContent sx={{}}>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }} disablePadding>
                    {/*<ListItem sx={{ width: '100%', display: 'flex' }} disablePadding>
                        <ListItemAvatar sx={{ flex: 1 }}>
                            <Avatar>
                                <ImageIcon fontSize='small' />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Gelatina Royal" secondary={

                            <Box>
                                <Typography>P.unit: S/ 8.00</Typography>
                                <Typography>Stock: 12</Typography>
                            </Box>

                        }
                            sx={{ flex: 2 }} />
                        <Box display='flex' flexDirection='row' gap={1}>

                        </Box>
                        <ListItemText sx={{ flex: 2 }}
                            primary={
                                <Box display='flex' flexDirection='row' gap={2} alignItems='center'>
                                    <InputLabel>Cant.</InputLabel>
                                    <TextField className={classes.root} type='number' sx={{ maxWidth: 80, borderRadius: 30, padding: 0, margin: 0 }} defaultValue='1' />
                                </Box>
                            }
                            secondary={
                                <Box>
                                    <Typography>Subtotal:</Typography>
                                    <Typography>S/ 45.00</Typography>
                                </Box>
                            }
                        />

                        <IconButton color='error'><Icon>delete</Icon></IconButton>

                        </ListItem>*/}


                    {itemList && itemList.map(item => (
                        <ListItem sx={{ width: '100%', display: 'flex' }} disablePadding key={item.label}>
                            <ListItemAvatar sx={{ flex: 1 }}>
                                <Avatar>
                                    <ImageIcon fontSize='small' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.label} secondary={

                                <Box>
                                    <Typography>P.unit: S/ 8.00</Typography>
                                    <Typography>Stock: 12</Typography>
                                </Box>

                            }
                                sx={{ flex: 2 }} />
                            <Box display='flex' flexDirection='row' gap={1}>

                            </Box>
                            <ListItemText sx={{ flex: 2 }}
                                primary={
                                    <Box display='flex' flexDirection='row' gap={2} alignItems='center'>
                                        <InputLabel>Cant.</InputLabel>
                                        <TextField className={classes.root} type='number' sx={{ maxWidth: 80, borderRadius: 30, padding: 0, margin: 0 }} defaultValue='1' />
                                    </Box>
                                }
                                secondary={
                                    <Box>
                                        <Typography>Subtotal:</Typography>
                                        <Typography>S/ 45.00</Typography>
                                    </Box>
                                }
                            />

                            <IconButton color='error'><Icon>delete</Icon></IconButton>

                        </ListItem>
                    ))}





                </List>
            </CardContent>
            <CardActions sx={{display: 'flex', flexDirection: 'column', marginX: 4}}>
                <Box width='100%' display='flex' justifyContent='end' >
                    <Typography sx={{backgroundColor: '#0E3785', color: 'white'}} variant='h5' >Total: S/ 00.00</Typography>
                    
                </Box>
                <Box width='100%' display='flex' justifyContent='end' paddingTop={2}>
                    
                    <Button variant='contained' color='success'>Realizar venta</Button>
                </Box>

            </CardActions>
        </Card>
    );
};