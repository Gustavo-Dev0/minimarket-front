import { createTheme } from '@mui/material';
import { cyan, yellow, teal } from '@mui/material/colors';


export const LightTheme = createTheme({
    palette: {
        primary: {
            main: cyan[900],
            dark: cyan[900],
            light: cyan[600],
            contrastText: '#ffffff',
        },
        secondary: {
            main: yellow[500],
            dark: yellow[400],
            light: yellow[300],
            contrastText: '#000000',
        },
        background: {
            paper: '#ffffff',
            default: '#f7f6f3',

        }
    },
    typography: {
    },
    components: {
        MuiButton: {
            defaultProps: {
                // The props to change the default for.
                onFocus: (t) => { t.target.disabled = false }
            },
        },
        MuiIconButton: {
            defaultProps: {
                // The props to change the default for.
                onFocus: (t) => { t.target.disabled = true },
            },
        },
    }

});