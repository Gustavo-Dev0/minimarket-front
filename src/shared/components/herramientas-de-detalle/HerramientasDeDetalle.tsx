import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { SaveSplitButton } from './components/SaveSplitButton';

interface IHerramientasDeDetalleProps {
    textNewButton?: string;

    showNewButton?: boolean;
    showSaveButton?: boolean;
    showDeleteButton?: boolean;
    showCancelButton?: boolean;
    showSaveAndNewButton?: boolean;

    showNewButtonLoading?: boolean;
    showSaveButtonLoading?: boolean;
    showDeleteButtonLoading?: boolean;
    showCancelButtonLoading?: boolean;
    showSaveAndNewButtonLoading?: boolean;

    onClickNewButton?: () => void;
    onClickSaveButton?: () => void;
    onClickSaveAndNewButton?: () => void;
    onClickCancelButton?: () => void;
    onClickDeleteButton?: () => void;

}


export const HerramientasDeDetalle: React.FC<IHerramientasDeDetalleProps> = ({
    onClickCancelButton,
    onClickDeleteButton,
    onClickNewButton,
    onClickSaveAndNewButton,
    onClickSaveButton,
    showCancelButton = true,
    showDeleteButton = true,
    showNewButton = true,
    showSaveAndNewButton = false,
    showSaveButton = true,
    textNewButton = 'New',

    showCancelButtonLoading = false,
    showDeleteButtonLoading = false,
    showNewButtonLoading = false,
    showSaveAndNewButtonLoading = false,
    showSaveButtonLoading = false
}: IHerramientasDeDetalleProps) => {

    const theme = useTheme();
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const optionsSaveButtonPopper = [
        {
            textButton: 'Save',
            onClickButton: onClickSaveButton
        },
        {
            textButton: 'Save and new',
            onClickButton: onClickSaveAndNewButton
        }
    ];

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
            {((!mdDown && !smDown) || smDown) ? (
                <>
                    {showSaveButtonLoading && (
                        <Skeleton width={smDown ? 55 : 110} height={60} />
                    )}
                    {(showSaveButton && !showSaveButtonLoading) && (
                        <Button
                            variant='contained'
                            color='success'
                            disableElevation
                            startIcon={
                                !smDown && (
                                    <Icon>save</Icon>
                                )
                            }
                            onClick={onClickSaveButton}
                        >
                            {!smDown ? (
                                <Typography variant='button' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
                                    Save
                                </Typography>
                            ) : (
                                <Icon>save</Icon>
                            )}
                        </Button>
                    )}

                    {showSaveAndNewButtonLoading && (
                        <Skeleton width={smDown ? 90 : 180} height={60} />
                    )}
                    {(showSaveAndNewButton && !showSaveAndNewButtonLoading && !smDown) && (
                        <Button
                            variant='outlined'
                            color='success'
                            disableElevation
                            startIcon={
                                !smDown && (
                                    <Icon>save</Icon>
                                )
                            }
                            onClick={onClickSaveAndNewButton}
                        >

                            {!smDown ? (
                                <Typography variant='button' noWrap>
                                    Save and new
                                </Typography>
                            ) : (
                                <>
                                    <Icon>save</Icon>
                                    <Icon>add</Icon>
                                </>
                            )}
                        </Button>
                    )}

                </>

            ) : (
                <SaveSplitButton optionsSaveButtonPopper={optionsSaveButtonPopper}/>
            )}

            {showDeleteButtonLoading && (
                <Skeleton width={smDown ? 55 : 110} height={60} />
            )}
            {(showDeleteButton && !showDeleteButtonLoading) && (
                <Button
                    variant='outlined'
                    color='error'
                    disableElevation
                    startIcon={
                        !smDown && (
                            <Icon>delete</Icon>
                        )
                    }
                    onClick={onClickDeleteButton}
                >

                    {!smDown ? (
                        <Typography variant='button' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
                            Delete
                        </Typography>
                    ) : (
                        <Icon>delete</Icon>
                    )}
                </Button>
            )}

            {showNewButtonLoading && (
                <Skeleton width={smDown ? 55 : 110} height={60} />
            )}
            {(showNewButton && !showNewButtonLoading) && (
                <Button
                    variant='outlined'
                    color='primary'
                    disableElevation
                    startIcon={
                        !smDown && (
                            <Icon>add</Icon>
                        )
                    }
                    onClick={onClickNewButton}
                >

                    {!smDown ? (
                        <Typography variant='button' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
                            {textNewButton}
                        </Typography>
                    ) : (
                        <Icon>add</Icon>
                    )}
                </Button>
            )}


            {(showCancelButton &&
                (showSaveButton || showSaveAndNewButton || showNewButton || showCancelButton)
            ) &&
                (
                    <Divider variant='middle' orientation='vertical' />

                )}

            {showCancelButtonLoading && (
                <Skeleton width={smDown ? 55 : 110} height={60} />
            )}
            {(showCancelButton && !showCancelButtonLoading) && (
                <Button
                    variant='outlined'
                    color='warning'
                    disableElevation
                    startIcon={
                        !smDown && (
                            <Icon>arrow_back</Icon>
                        )
                    }
                    onClick={onClickCancelButton}
                >

                    {!smDown ? (
                        <Typography variant='button' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
                            Cancel
                        </Typography>
                    ) : (
                        <Icon>arrow_back</Icon>
                    )}
                </Button>
            )}


        </Box>
    );
};