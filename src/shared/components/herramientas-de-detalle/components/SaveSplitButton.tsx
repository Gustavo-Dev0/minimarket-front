import { Button, ButtonGroup, ClickAwayListener, Grow, Icon, MenuItem, MenuList, Paper, Popper, Typography } from '@mui/material';
import { useRef, useState } from 'react';

interface IOptionSave {
    textButton: string;
    onClickButton?: () => void
}

interface ISaveSplitButtonProps {
    optionsSaveButtonPopper: IOptionSave[]
}

export const SaveSplitButton: React.FC<ISaveSplitButtonProps> = ({ optionsSaveButtonPopper }: ISaveSplitButtonProps) => {

    const [openPopper, setOpenPopper] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);
    const [selectedIndexButtonSave, setSelectedIndexButtonSave] = useState(0);

    const handleOpenPopper = () => {
        setOpenPopper((prevOpenPopper) => !prevOpenPopper);
    };

    const handleClose = (event: Event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        setOpenPopper(false);
    };

    const handleSetSelectedIndexButtonSave = (index: number) => {
        setSelectedIndexButtonSave(index);
        setOpenPopper(false);
    };

    return (
        <>
            <ButtonGroup variant="contained" color='success' ref={anchorRef} aria-label="split button">

                <Button
                    variant='contained'
                    color='success'
                    disableElevation
                    startIcon={<Icon>save</Icon>}
                    onClick={optionsSaveButtonPopper[selectedIndexButtonSave].onClickButton}
                >
                    <Typography variant='button' noWrap>
                        {optionsSaveButtonPopper[selectedIndexButtonSave].textButton}
                    </Typography>
                </Button>

                <Button
                    onClick={handleOpenPopper}
                    size="small"
                    aria-controls={openPopper ? 'split-button-menu' : undefined}
                    aria-expanded={openPopper ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                >
                    <Icon>arrow_drop_down</Icon>
                </Button>
            </ButtonGroup>
            <Popper
                sx={{
                    zIndex: 1,
                }}
                open={openPopper}
                transition
                anchorEl={anchorRef.current}
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {optionsSaveButtonPopper.map((option, index) => (
                                        <MenuItem
                                            selected={(index == selectedIndexButtonSave)}
                                            key={index}
                                            onClick={() => handleSetSelectedIndexButtonSave(index)}
                                        >
                                            {option.textButton}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};