import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import { Environment } from '../../enviroment';

interface IHerramientasDeListadoProps {
    textToSearch?: string;
    showInputToSearch?: boolean;
    onChangueTextToSearch?: (newText: string) => void;
    textNewButton?: string;
    showNewButton?: boolean;
    onClickNewButton?: () => void
}

export const HerramientasDeListado: React.FC<IHerramientasDeListadoProps> = ({
    textToSearch = '',
    onChangueTextToSearch,
    showInputToSearch = false,
    onClickNewButton,
    showNewButton = true,
    textNewButton = 'New'
}: IHerramientasDeListadoProps) => {

    const theme = useTheme();

    return (
        <Box
            display='flex'
            alignItems='center'
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            height={theme.spacing(5)}
            component={Paper}

        >
            {showInputToSearch &&
                <TextField
                    size='small'
                    placeholder={Environment.INPUT_SEARCH}
                    value={textToSearch}
                    onChange={(e) => onChangueTextToSearch?.(e.target.value)}
                />
            }
            <Box flex={1} display='flex' justifyContent='end'>
                {showNewButton && (
                    <Button
                        variant='contained'
                        color='primary'
                        disableElevation
                        endIcon={<Icon>add</Icon>}
                        onClick={onClickNewButton}
                    >
                        {textNewButton}
                    </Button>
                )}
            </Box>

        </Box>
    );
};