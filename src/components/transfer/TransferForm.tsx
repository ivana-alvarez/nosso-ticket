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
import { cardsData } from '../../_mockApis/cards/cardsData'
// import { gridSpacing } from 'store/constant'

import TextField from '@mui/material/TextField'
import { amounts } from '_mockApis/amounts/amounts'

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
        ' & .css-1xu5ovs-MuiInputBase-input-MuiOutlinedInput-input': {
            color: '#6473a8',
        },

        [theme.breakpoints.down('lg')]: {
            width: '250px',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: '4px',
            background:
                theme.palette.mode === 'dark'
                    ? theme.palette.dark[800]
                    : '#fff',
        },
    },
}))

// ==============================|| PROFILE 1 - PROFILE ACCOUNT ||============================== //
interface Inputs {
    from_card: string
    card_my_account: boolean
    card_other_account: boolean
    to_card: string
    amount_transfer: string
    code_card: number
    to2_card: string
}

const Schema = yup.object().shape({
    from_card: yup.string().required('Este campo es requerido'),
    card_my_account: yup.boolean(),
    card_other_account: yup.boolean(),
    to_card: yup.string().optional(),
    amount_transfer: yup.string().optional(),
    code_card: yup.number().optional(),
    to2_card: yup.string().optional(),
})

interface FleetProfileProps {
    fleetId?: string
    readOnly?: boolean
    onlyView?: boolean
}

const TransferForm = ({ fleetId, onlyView, readOnly }: FleetProfileProps) => {
    const classes = useStyles()

    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
    } = useForm<Inputs>({
        resolver: yupResolver(Schema),
    })

    const [readOnlyState, setReadOnlyState] = React.useState<
        boolean | undefined
    >(readOnly)

    const [editable, setEditable] = React.useState<boolean>(false)

    // const [fleetData] = React.useState<FleetDataProps | undefined>(
    //     fleets?.find((fleet) => fleet.id === fleetId)
    // )

    const [myAccount, setMyAccount] = React.useState<boolean>()
    // !!companyData?.filial_company
    const [equalMyAccount, setEqualMyAccount] = React.useState<boolean>(false)

    const [otherAccount, setOtherAccount] = React.useState<boolean>()
    const [equalOtherAccount, setEqualOtherAccount] =
        React.useState<boolean>(false)

    const handleAbleToEdit = () => {
        setReadOnlyState(!readOnlyState)
        setEditable(!editable)
    }

    const handleCancelEdit = () => {
        setReadOnlyState(!readOnlyState)
        setEditable(!editable)
        //     setValue('transportation_mean', fleetData?.transportation_mean, {
        //         shouldValidate: true,
        //     })
        //     setValue('unit_id', fleetData?.unit_id, {
        //         shouldValidate: true,
        //     })
        //     setValue('capacity', fleetData?.capacity, {
        //         shouldValidate: true,
        //     })
        //     setValue('make', fleetData?.make, {
        //         shouldValidate: true,
        //     })
        //     setValue('model', fleetData?.model, {
        //         shouldValidate: true,
        //     })
        //     setValue('plate', fleetData?.plate, {
        //         shouldValidate: true,
        //     })
        //     setValue('vin', fleetData?.vin, {
        //         shouldValidate: true,
        //     })
        //     setValue('manfucture_date', fleetData?.manfucture_date, {
        //         shouldValidate: true,
        //     })
        //     setValue('fuel_type', fleetData?.fuel_type, {
        //         shouldValidate: true,
        //     })
        //     setValue('tank_capacity', fleetData?.tank_capacity, {
        //         shouldValidate: true,
        //     })
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

    React.useLayoutEffect(() => {
        if (equalMyAccount) {
            console.log('ok')
            // const findValue = companies.find(
            //     (company) => company.company_code === getValues('filialCompany')
            // )?.bank_details
            // if (findValue) {
            //     banks.map((item) => {
            //         if (findValue?.[0].bank === item.id)
            //             findValue[0].bank = item.bank_code
            //     })
            //     accountTypes.map((item) => {
            //         if (findValue?.[0].account_type === item.id)
            //             findValue[0].account_type = item.account_code
            //     })
            // }
        }

        if (equalOtherAccount) {
            console.log('click')
        }
    }, [equalMyAccount, equalOtherAccount])

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        //     const {
        //         unit_id,
        //         transportation_mean,
        //         plate,
        //         // vin,
        //         make,
        //         model,
        //         capacity,
        //         fuel_type,
        //         tank_capacity,
        //         company_code,
        //         // manfucture_date,
        //     } = data
        //     if (!editable) {
        //         dispatch(
        //             createFleetRequest({
        //                 unit_id,
        //                 transportation_mean,
        //                 plate,
        //                 make,
        //                 model,
        //                 capacity,
        //                 fuel_type,
        //                 tank_capacity,
        //                 company_code,
        //             })
        //         )
        //         navigate(`/gestion-flota/listar`)
        //     }
        //     if (editable) {
        //         dispatch(
        //             updateFleetRequest({
        //                 id: fleetId,
        //                 unit_id,
        //                 transportation_mean,
        //                 plate,
        //                 make,
        //                 model,
        //                 capacity,
        //                 fuel_type,
        //                 tank_capacity,
        //                 company_code,
        //             })
        //         )
        //         navigate('/gestion-flota/listar')
        //     }
        // }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        Tranferencia entre títulos de transporte
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
                                    {cardsData.map((option) => (
                                        <MenuItem
                                            key={option.card_serial}
                                            value={option.card_serial}
                                        >
                                            {option.card_description}
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
                                            disabled={readOnly}
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
                                            helperText={errors.to_card?.message}
                                            disabled={readOnly}
                                        >
                                            {cardsData.map((option) => (
                                                <MenuItem
                                                    key={option.card_serial}
                                                    value={option.card_serial}
                                                >
                                                    {option.card_description}
                                                </MenuItem>
                                            ))}
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
                                                errors.amount_transfer?.message
                                            }
                                            disabled={readOnly}
                                        >
                                            {amounts.map((option) => (
                                                <MenuItem
                                                    key={option.id}
                                                    value={option.id}
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
                                                    value={option.id}
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
                                            type="submit"
                                            className="mt-2"
                                        >
                                            Transferir
                                        </Button>
                                    </AnimateButton>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </CardActions>
            </form>
        </>
    )
}

export default TransferForm
