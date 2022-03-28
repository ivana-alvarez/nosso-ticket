import React from 'react'
import * as yup from 'yup'
// import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
// import { DefaultRootStateProps } from 'types'

//REDUX
// import { useSelector } from 'react-redux'
// import {
//     createFleetRequest,
//     updateFleetRequest,
// } from 'store/fleetCompany/FleetCompanyActions'
// material-ui
import {
    Grid,
    // TextField,
    Theme,
    Typography,
    CardActions,
    Button,
    MenuItem,
    FormControlLabel,
    Switch,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AnimateButton from 'ui-component/extended/AnimateButton'
// import { BANKS } from 'store/constant'

// import { gridSpacing } from 'store/constant'

import TextField from '@mui/material/TextField'
import { amounts } from '_mockApis/amounts/amounts'
import TransferAdd from './TransferAdd'
// import { CardRegional } from 'types/types'
import { useMutation, useQuery } from '@apollo/client'
import { USER_CARD } from 'graphql/Querys'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultRootStateProps } from 'types'
import { MY_TRANSFER, OTHER_TRANSFER } from 'graphql/Mutations'
import { SNACKBAR_OPEN } from 'store/actions'

const useStyles = makeStyles((theme: Theme) => ({
    searchControl: {
        width: '100%',
        '& input': {
            background: 'transparent !important',
        },
        '& .Mui-focused input': {
            boxShadow: 'none',
        },
        ' & .css-1xu5ovs-MuiInputBase-input-MuiOutlinedInput-input': {
            color: '#6473a8',
        },

        [theme.breakpoints.down('lg')]: {
            width: '250px',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: '4px',
        },
    },
}))

// ==============================|| PROFILE 1 - PROFILE ACCOUNT ||============================== //
interface Inputs {
    from_card: string
    card_my_account: boolean
    card_other_account: boolean
    to_card: string
    amount_transfer: number
    code_card: string
    to2_card: number
}

const Schema = yup.object().shape({
    from_card: yup.string().required('Este campo es requerido'),
    card_my_account: yup.boolean(),
    card_other_account: yup.boolean(),
    to_card: yup.string().optional(),
    amount_transfer: yup.number().optional(),
    code_card: yup.string().optional(),
    to2_card: yup.number().optional(),
})

interface FleetProfileProps {
    fleetId?: string
    readOnly?: boolean
    onlyView?: boolean
}
// const getCards = (userId: string): Promise<CardRegional[]> => {
//     return new Promise((resolve, reject) => {
//         const { data, loading, error } = useQuery(USER_CARD, {
//             onError: (err: ApolloError) => reject(err),
//             fetchPolicy: 'network-only',
//             variables: { user: userId },
//         })
//         if (error) {
//             reject(error)
//         }
//         if (!loading) {
//             resolve(data.UsersCards)
//         }
//     })
// }

const TransferForm = ({ fleetId, onlyView, readOnly }: FleetProfileProps) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        getValues,
    } = useForm<Inputs>({
        resolver: yupResolver(Schema),
    })
    const login = useSelector((state: DefaultRootStateProps) => state.login)
    //query
    const { data, loading, error } = useQuery(USER_CARD, {
        fetchPolicy: 'network-only',
        variables: { user: login.user._id },
    })

    //mutations (transfe en mi cuenta)
    const [safeTransfer] = useMutation(MY_TRANSFER)
    //mutations ( transfe cuentas externas)
    const [otherTransfer] = useMutation(OTHER_TRANSFER)

    const [readOnlyState, setReadOnlyState] = React.useState<
        boolean | undefined
    >(readOnly)

    const [editable, setEditable] = React.useState<boolean>(false)

    const [myAccount, setMyAccount] = React.useState<boolean>()
    // !!companyData?.filial_company
    const [equalMyAccount, setEqualMyAccount] = React.useState<boolean>(false)

    const [otherAccount, setOtherAccount] = React.useState<boolean>()
    const [equalOtherAccount, setEqualOtherAccount] =
        React.useState<boolean>(false)

    const [open, setOpen] = React.useState<boolean>(false)
    const [modal, setModal] = React.useState<string>('')
    const [dataForm, setDataForm] = React.useState<any>({
        amount: '',
        fromCard: '',
        toOwnCard: '',
        toCardSerial: '',
    })

    const handleTransfer = () => {
        setDataForm({
            amount: myAccount
                ? getValues('amount_transfer')
                : getValues('to2_card'),
            fromCard: myAccount
                ? getValues('from_card')
                : getValues('from_card'),
            toOwnCard: myAccount ? getValues('to_card') : null,
            toCardSerial: otherAccount ? getValues('code_card') : null,
        })
        setOpen(true)
        setModal('transfer')
    }

    const handleAbleToEdit = () => {
        setReadOnlyState(!readOnlyState)
        setEditable(!editable)
    }

    const handleCancelEdit = () => {
        setReadOnlyState(!readOnlyState)
        setEditable(!editable)
    }
    // const onChangeToCard = (event) => {
    //     const name = event.target.name

    //     if (name === 'to_card') {
    //         setMyAccount(!myAccount)
    //         setValue(name, !myAccount)
    //     }
    // }

    // const onChangeFromCard = (event) => {
    //     const name = event.target.name

    //     if (name === 'from_card') {
    //         setOtherAccount(!otherAccount)
    //         setValue(name, !otherAccount)
    //     }
    // }
    const handleMyAccount = () => {
        setValue('card_my_account', !myAccount, {
            shouldValidate: true,
        })
        setMyAccount(!myAccount)
        setEqualMyAccount(false)
    }

    const handleOtherAccount = () => {
        setValue('card_other_account', !otherAccount, {
            shouldValidate: true,
        })

        setOtherAccount(!otherAccount)
        setEqualOtherAccount(false)
    }

    React.useEffect(() => {
        if (error) {
            dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'Error de conexión',
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                variant: 'alert',
                alertSeverity: 'error',
            })
        }
    }, [error])

    React.useLayoutEffect(() => {
        if (equalMyAccount) {
            console.log('ok')
        }

        if (equalOtherAccount) {
            console.log('click')
        }
    }, [equalMyAccount, equalOtherAccount])

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (myAccount === true) {
            try {
                const response = await safeTransfer({
                    variables: {
                        data: {
                            amount: data.amount_transfer,
                            fromCard: data.from_card,
                            payer: login.user._id,
                            regionalStatus: 'Pending',
                            toOwnCard: data.to_card,
                            toCardSerial: '',
                            externalTransfer: false,
                        },
                    },
                })

                console.log(response.data.SafeTransfer)

                setOpen(false)
                dispatch({
                    type: SNACKBAR_OPEN,
                    open: true,
                    message: 'Transferencia realizada',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alertSeverity: 'success',
                })
            } catch (error) {
                dispatch({
                    type: SNACKBAR_OPEN,
                    open: true,
                    message: 'Error de conexión',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alertSeverity: 'error',
                })
            }
            setOpen(false)
        }

        if (otherAccount === true) {
            try {
                const response = await otherTransfer({
                    variables: {
                        data: {
                            amount: data.to2_card,
                            fromCard: data.from_card,
                            payer: login.user._id,
                            toOwnCard: data.from_card,
                            regionalStatus: 'Pending',
                            toCardSerial: data.code_card.toUpperCase(),
                            externalTransfer: true,
                        },
                    },
                })
                console.log(response.data.createSafeTransfer)

                setOpen(false)
                dispatch({
                    type: SNACKBAR_OPEN,
                    open: true,
                    message: 'Transferencia realizada',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alertSeverity: 'success',
                })
            } catch (error) {
                dispatch({
                    type: SNACKBAR_OPEN,
                    open: true,
                    message: 'Error de conexión',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alertSeverity: 'error',
                })
            }
            setOpen(false)
        }
    }

    return (
        <>
            <form>
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h4">
                        Transferencia entre títulos de transporte
                    </Typography>
                    {!onlyView && readOnlyState ? (
                        <Grid item sx={{ marginRight: '16px' }}>
                            <AnimateButton>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={handleAbleToEdit}
                                >
                                    Editar
                                </Button>
                            </AnimateButton>
                        </Grid>
                    ) : null}
                </Grid>
                {!loading ? (
                    <Grid container spacing={2} sx={{ marginTop: '5px' }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">
                                Seleccione la tarjeta desde la cual transferirá
                                saldo
                            </Typography>
                        </Grid>

                        <Controller
                            name="from_card"
                            control={control}
                            // defaultValue={fleetData?.plate}
                            render={({ field }) => (
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    className={classes.searchControl}
                                >
                                    <TextField
                                        select
                                        fullWidth
                                        label="Tarjetas asociadas"
                                        size="small"
                                        autoComplete="off"
                                        {...field}
                                        disabled={readOnly}
                                        error={!!errors.from_card}
                                        helperText={errors.from_card?.message}
                                    >
                                        {data?.UsersCards.map((option) => (
                                            <MenuItem
                                                key={option._id}
                                                value={option._id}
                                            >
                                                {option.card_no}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            )}
                        />

                        <Grid item xs={12} md={6}>
                            <Controller
                                name="card_my_account"
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        {...field}
                                        value="top"
                                        name="card_my_account"
                                        control={
                                            <Switch
                                                color="primary"
                                                onChange={handleMyAccount}
                                                checked={myAccount}
                                            />
                                        }
                                        label="A tarjetas asociadas a mi cuenta"
                                        labelPlacement="start"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller
                                name="card_other_account"
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        {...field}
                                        value="top"
                                        name="card_other_account"
                                        control={
                                            <Switch
                                                color="primary"
                                                onChange={handleOtherAccount}
                                                checked={otherAccount}
                                                disabled={readOnly}
                                            />
                                        }
                                        label="A tarjetas asociadas a otras cuentas"
                                        labelPlacement="start"
                                    />
                                )}
                            />
                        </Grid>
                        {myAccount ? (
                            <>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6">
                                        Seleccione la tarjeta a transferir saldo
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    className={classes.searchControl}
                                >
                                    <Controller
                                        name="to_card"
                                        control={control}
                                        // defaultValue={companyData?.filial_company}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                select
                                                fullWidth
                                                label="Tarjetas asociadas"
                                                size="small"
                                                autoComplete="off"
                                                // onChange={onChangeToCard}
                                                error={!!errors.to_card}
                                                helperText={
                                                    errors.to_card?.message
                                                }
                                                disabled={readOnly}
                                            >
                                                {data?.UsersCards.map(
                                                    (option) => (
                                                        <MenuItem
                                                            key={option._id}
                                                            value={option._id}
                                                        >
                                                            {option.card_no}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </TextField>
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6">
                                        Monto a transferir
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    className={classes.searchControl}
                                >
                                    <Controller
                                        name="amount_transfer"
                                        control={control}
                                        // defaultValue={companyData?.filial_company}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                select
                                                fullWidth
                                                label="Monto a transferir"
                                                size="small"
                                                autoComplete="off"
                                                // onChange={onChangeToCard}
                                                error={!!errors.amount_transfer}
                                                helperText={
                                                    errors.amount_transfer
                                                        ?.message
                                                }
                                                disabled={readOnly}
                                            >
                                                {amounts.map((option) => (
                                                    <MenuItem
                                                        key={option.id}
                                                        value={option.monto}
                                                    >
                                                        {option.monto}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        )}
                                    />
                                </Grid>
                            </>
                        ) : null}

                        {otherAccount ? (
                            <>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6">
                                        Introduzca el código de la tarjeta a
                                        transferir saldo
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    className={classes.searchControl}
                                >
                                    <Controller
                                        name="code_card"
                                        control={control}
                                        // defaultValue={companyData?.filial_company}

                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                label="Código de tarjeta"
                                                size="small"
                                                autoComplete="off"
                                                // onChange={onChangeFromCard}
                                                error={!!errors.code_card}
                                                helperText={
                                                    errors.code_card?.message
                                                }
                                                disabled={readOnly}
                                            />
                                        )}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6">
                                        Monto a transferir
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    className={classes.searchControl}
                                >
                                    <Controller
                                        name="to2_card"
                                        control={control}
                                        // defaultValue={companyData?.filial_company}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                select
                                                fullWidth
                                                label="Montos posibles a transferir"
                                                size="small"
                                                autoComplete="off"
                                                // onChange={onChangeFromCard}
                                                error={!!errors.to2_card}
                                                helperText={
                                                    errors.to2_card?.message
                                                }
                                                disabled={readOnly}
                                            >
                                                {amounts.map((option) => (
                                                    <MenuItem
                                                        key={option.id}
                                                        value={option.monto}
                                                    >
                                                        {option.monto}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        )}
                                    />
                                </Grid>
                            </>
                        ) : null}
                    </Grid>
                ) : null}
                <CardActions>
                    <Grid container justifyContent="flex-end" spacing={0}>
                        <Grid item>
                            {editable ? (
                                <Grid item sx={{ display: 'flex' }}>
                                    <AnimateButton>
                                        <Button
                                            // variant="contained"
                                            size="medium"
                                            onClick={handleCancelEdit}
                                            className="mx-4"
                                            color="error"
                                        >
                                            Cancelar
                                        </Button>
                                    </AnimateButton>
                                    <AnimateButton>
                                        <Button
                                            variant="contained"
                                            size="medium"
                                            type="submit"
                                        >
                                            Aceptar
                                        </Button>
                                    </AnimateButton>
                                </Grid>
                            ) : null}
                            {readOnly ? null : (
                                <Grid item>
                                    <AnimateButton>
                                        <Button
                                            variant="contained"
                                            size="medium"
                                            type="button"
                                            className="mt-2"
                                            onClick={handleTransfer}
                                        >
                                            Transferir
                                        </Button>
                                    </AnimateButton>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>

                    {modal === 'transfer' ? (
                        <TransferAdd
                            open={open}
                            setOpen={setOpen}
                            handleAccept={handleSubmit(onSubmit)}
                            dataForm={dataForm}
                        />
                    ) : null}
                    {/* {modal === 'add' ? (
                        <AddCardForm open={open} setOpen={setOpen} />
                    ) : null} */}
                </CardActions>
            </form>
        </>
    )
}

export default TransferForm
