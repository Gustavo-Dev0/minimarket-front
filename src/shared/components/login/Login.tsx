import { Box, Button, Card, CardActions, CardContent, CircularProgress, FormLabel, Icon, InputAdornment, TextField, Typography, Divider, CardHeader, useTheme } from '@mui/material'
import React, { useState } from 'react'
import * as yup from 'yup';
import { useAuthContext } from '../../contexts';
import Image from '../../../assets/background.png'

import { makeStyles } from '@material-ui/core'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


interface LoginProps {
    children: React.ReactNode
}

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(5),
});

const useStyles = makeStyles((theme: any) => ({
    root: {
        [`& fieldset`]: {
            borderRadius: 30,
        },
        [`& input`]: {
            borderRadius: 30,
            padding: 6
        },
    },
}));


export default function Login({ children }: LoginProps) {

    const [isLoading, setIsLoading] = useState(false);

    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const { isAuthenticated, login } = useAuthContext();

    const theme = useTheme()


    const handleSubmit = () => {
        console.log("fwfwe")
        setIsLoading(true);

        loginSchema
            .validate({ email, password }, { abortEarly: false })
            .then(dadosValidados => {
                login(dadosValidados.email, dadosValidados.password)
                    .then(() => {
                        setIsLoading(false);
                    });
            })
            .catch((errors: yup.ValidationError) => {
                setIsLoading(false);

                errors.inner.forEach(error => {
                    if (error.path === 'email') {
                        setEmailError(error.message);
                    } else if (error.path === 'password') {
                        setPasswordError(error.message);
                    }
                });
            });
    };
    console.log(isAuthenticated)

    const classes = useStyles()



    if (isAuthenticated) return (
        <>{children}</>
    );

    return (
        <Box
            width='100vw'
            height='100vh'
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{
                backgroundImage: `url(${Image})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>

            <Card>
                <CardHeader
                    title={
                        <Box display='flex' flexDirection='row' flexGrow={1} padding={1} marginX={2} borderBottom={'0.1em solid'}>
                            <Icon sx={{ fontSize: 50, flex: 2 }}>assignment</Icon>
                            <Divider orientation='vertical' flexItem sx={{ flex: 1, marginY: 1 }} />
                            <Divider orientation='vertical' sx={{ flex: 1 }} />
                            <Typography variant='h5' sx={{ flex: 8 }} display='flex' flexDirection='column' justifyContent='center' >Tienda</Typography>
                        </Box>
                    }
                >
                </CardHeader>
                <CardContent sx={{ padding: 0 }}>
                    <Box display='flex' flexDirection='column' gap={1} width={260} paddingX={4} paddingY={0} marginX={4} >

                        <Typography sx={{ fontWeight: 'bold' }} variant='h4' align='center' color='primary' paddingBottom={4}>Inicio de Sesión</Typography>


                        <FormLabel>Usuario</FormLabel>
                        <TextField

                            className={classes.root}
                            fullWidth
                            type='email'
                            value={email}
                            disabled={isLoading}
                            error={!!emailError}
                            helperText={emailError}
                            onKeyDown={() => setEmailError('')}
                            onChange={e => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon>account_circle</Icon>
                                    </InputAdornment>
                                )
                            }}

                        />
                        <FormLabel>Contraseña</FormLabel>

                        <TextField
                            className={classes.root}
                            fullWidth
                            type='password'
                            value={password}
                            disabled={isLoading}
                            error={!!passwordError}
                            helperText={passwordError}
                            onKeyDown={() => setPasswordError('')}
                            onChange={e => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon sx={{ transform: 'rotate(135deg)' }} >key</Icon>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                </CardContent>
                <CardActions>
                    <Box width='100%' display='flex' justifyContent='center' paddingY={4}>

                        <Button
                            variant='contained'
                            disabled={isLoading}
                            onClick={handleSubmit}
                            endIcon={isLoading ? <CircularProgress variant='indeterminate' color='inherit' size={20} /> : undefined}
                        >
                            Ingresar
                        </Button>

                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
};
