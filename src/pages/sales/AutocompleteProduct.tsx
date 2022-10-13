import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@material-ui/core';
import { Product } from './Sales';
import { Dispatch, SetStateAction } from 'react';


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

interface IAutoompleteProductProps {
    items: Product[]
    setValue: Dispatch<SetStateAction<any>>
}

export default function AutocompleteProduct({ items, setValue }: IAutoompleteProductProps) {

    const classes = useStyles()
    const handleChangueAutocomplete = (_: React.SyntheticEvent<Element, Event>, value: Product | null) => {
        if(value == null) {
            setValue(undefined)
            return
        }

        setValue(value)
    }

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={items}
            sx={{ width: 300 }}
            onChange={handleChangueAutocomplete}
            renderInput={(params) => <TextField className={classes.root} {...params} />}
        />
    );
}
