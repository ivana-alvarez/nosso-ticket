import React from 'react'
// import ButtonUnstyled from '../Button/Button'
import {
    useForm,
    Controller,
    SubmitHandler,
    SubmitErrorHandler,
    // SubmitErrorHandler,
    // SubmitHandler,
} from 'react-hook-form'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import // SEX,
// RIF_OPTIONS,
// DEPARTMENTS,
// NUMBER_CODE,
// ROLES,
'store/constant'
import { makeStyles } from '@material-ui/styles'
import { yupResolver } from '@hookform/resolvers/yup'
import AnimateButton from 'ui-component/extended/AnimateButton'
import * as yup from 'yup'

// material-ui
import {
    // Divider,
    FormControlLabel,
    Grid,
    Switch,
    TextField,
    // Chip,
    // TextField,
    Theme,
    Typography,
    CardActions,
    // Divider,
    Button,
    Stack,
    // IconButton,
} from '@material-ui/core'

// import Chip from 'ui-component/extended/Chip'

// project imports
// import { DefaultRootStateProps } from 'types'
import { PAYMENTMANAGEMENT } from '../../_mockApis/payment_management/paymentManagement'

const useStyles = makeStyles((theme: Theme) => ({
    searchControl: {
        width: '100%',
        paddingRight: '16px',
        paddingLeft: '16px',
        '& input': {
            background: 'transparent !important',
            paddingLeft: '5px !important',
        },
        '& .Mui-focused input': {
            boxShadow: 'none',
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
    account_holder: string
    identification: string
    bank: string
    operation: string
    amount: string
    declaimer: boolean
    code: string
}

const Schema = yup.object().shape({
    declaimer: yup.bool(),
    code: yup.string().when('declaimer', {
        is: true,
        then: (value) => value.required('Este campo es requerido'),
    }),
})

const PaymentManagement = () => {
    const classes = useStyles()
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        // getValues,
    } = useForm<Inputs>({
        resolver: yupResolver(Schema),
    })
    const [declaimer, setDeclaimer] = React.useState(false)

    const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('aqui')
        setDeclaimer(!declaimer)
        setValue('declaimer', !declaimer)
    }
    const handleCancelEdit = () => {
        setValue('code', '', { shouldValidate: true })
    }
    const onInvalid: SubmitErrorHandler<Inputs> = (data, e) => {
        console.log(data)
    }
    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        const { code } = data

        console.log(code)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
            {PAYMENTMANAGEMENT.map((payment) => {
                return (
                    <>
                        <Grid
                            container
                            spacing={2}
                            sx={{ marginTop: '20px', marginLeft: 1 }}
                        >
                            <Grid item xs={12}>
                                <Typography variant="h4">
                                    Datos Bancarios
                                </Typography>
                            </Grid>
                            <Controller
                                name="account_holder"
                                control={control}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="Id del usuario">
                                            Titular de la cuenta{' '}
                                        </label>
                                    </Grid>
                                )}
                            />

                            <Controller
                                name="account_holder"
                                control={control}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">
                                            {payment.account_holder}{' '}
                                        </label>
                                    </Grid>
                                )}
                            />

                            <Controller
                                name="identification"
                                control={control}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">
                                            Cedula de identidad
                                        </label>
                                    </Grid>
                                )}
                            />

                            <Controller
                                name="identification"
                                control={control}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        lg={4}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">
                                            {payment.identification}
                                        </label>
                                    </Grid>
                                )}
                            />

                            <Controller
                                name="bank"
                                control={control}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">Banco</label>
                                    </Grid>
                                )}
                            />
                            <Controller
                                name="bank"
                                control={control}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        lg={4}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">{payment.bank}</label>
                                    </Grid>
                                )}
                            />

                            <Controller
                                name="operation"
                                control={control}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">Operacion</label>
                                    </Grid>
                                )}
                            />
                            <Controller
                                name="operation"
                                control={control}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">
                                            {payment.operation}
                                        </label>
                                    </Grid>
                                )}
                            />
                            <Controller
                                name="amount"
                                control={control}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">Monto</label>
                                    </Grid>
                                )}
                            />

                            <Controller
                                name="amount"
                                control={control}
                                defaultValue={payment.amount}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">
                                            {payment.amount}
                                        </label>
                                    </Grid>
                                )}
                            />

                            <Controller
                                name="declaimer"
                                control={control}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <FormControlLabel
                                            {...field}
                                            value={declaimer || ''}
                                            name="used_title"
                                            style={{ marginLeft: 1 }}
                                            control={
                                                <Switch
                                                    color="primary"
                                                    onChange={handleSwitch}
                                                    value={declaimer}
                                                    checked={declaimer}
                                                />
                                            }
                                            label="Declaimer"
                                            labelPlacement="start"
                                        />
                                    </Grid>
                                )}
                            />
                        </Grid>

                        <Grid
                            container
                            spacing={2}
                            sx={{ marginTop: '20px', marginLeft: 1 }}
                        >
                            {declaimer && (
                                <>
                                    <Grid item xs={12}>
                                        <Typography variant="h4">
                                            Código de confirmación
                                        </Typography>
                                    </Grid>

                                    <Controller
                                        name="code"
                                        control={control}
                                        render={({ field }) => (
                                            <Grid
                                                item
                                                xs={12}
                                                md={6}
                                                className={
                                                    classes.searchControl
                                                }
                                            >
                                                <TextField
                                                    label="Codigo"
                                                    // type="text"
                                                    fullWidth
                                                    size="small"
                                                    autoComplete="off"
                                                    {...field}
                                                    error={!!errors.code}
                                                    helperText={
                                                        errors.code?.message
                                                    }
                                                />
                                            </Grid>
                                        )}
                                    />
                                </>
                            )}
                        </Grid>
                    </>
                )
            })}
            {/* <Divider sx={{ marginTop: '70px', marginLeft: 0 }} /> */}
            <CardActions>
                <Grid container justifyContent="flex-end" spacing={0}>
                    <Grid item>
                        <Grid item sx={{ display: 'flex' }}>
                            <Stack>
                                <Button
                                    color="error"
                                    className="mx-4"
                                    onClick={handleCancelEdit}
                                >
                                    cancelar
                                </Button>
                            </Stack>
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
                    </Grid>
                </Grid>
            </CardActions>
        </form>
    )
}

export default PaymentManagement
