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
import { BANKS } from 'store/constant'
// import { gridSpacing } from 'store/constant'

import TextField from '@mui/material/TextField'

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
    bank: string
    type_document: string
    document_type: string
    names: string
    phone_active: boolean
    phone_number: number
}

const Schema = yup.object().shape({
    bank: yup.string().required('Este campo es requerido'),
    type_document: yup.string().required('Este campo es obligatorio'),
    document_type: yup.string().required('Este campo es obligatorio'),
    names: yup.string().required('Este campo es obligatorio'),
    phone_active: yup.boolean(),
    phone_number: yup.number().required('Este campo es requerido'),
})

interface FleetProfileProps {
    fleetId?: string
    readOnly?: boolean
    onlyView?: boolean
}

const typesDocument = [
    {
        label: 'J',
        value: 'J',
    },
    {
        label: 'V',
        value: 'V',
    },
    {
        label: 'G',
        value: 'G',
    },
    {
        label: 'E',
        value: 'E',
    },
]
const ProfileBank = ({ fleetId, onlyView, readOnly }: FleetProfileProps) => {
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

    const [phoneActive, setPhoneActive] = React.useState<boolean>()
    // !!companyData?.filial_company
    const [equalNumberInfo, setEqualNumberInfo] = React.useState<boolean>(false)

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
    const onChangeFilialCompany = (event) => {
        const name = event.target.name

        if (name == 'phone_active') {
            setPhoneActive(!phoneActive)
            setValue(name, !phoneActive)
        }
    }
    const handlePhoneActive = () => {
        setValue('phone_active', !phoneActive, {
            shouldValidate: true,
        })
        setPhoneActive(!phoneActive)
        setEqualNumberInfo(false)
    }

    React.useLayoutEffect(() => {
        if (equalNumberInfo) {
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
    }, [equalNumberInfo])

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
                    <Typography variant="h4">Bancos</Typography>
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
                    <Controller
                        name="bank"
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
                                    label="Banco"
                                    size="small"
                                    autoComplete="off"
                                    {...field}
                                    disabled={readOnlyState}
                                    error={!!errors.bank}
                                    helperText={errors.bank?.message}
                                >
                                    {BANKS.map((option) => (
                                        <MenuItem
                                            key={option.bank_code}
                                            value={option.bank_code}
                                        >
                                            {option.bank_name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        )}
                    />

                    <Controller
                        name="type_document"
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
                                    label="Tipo de documento"
                                    size="small"
                                    autoComplete="off"
                                    {...field}
                                    disabled={readOnlyState}
                                    error={!!errors.type_document}
                                    helperText={errors.type_document?.message}
                                >
                                    {typesDocument.map((option) => (
                                        <MenuItem
                                            key={option.label}
                                            value={option.label}
                                        >
                                            {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        )}
                    />

                    <Controller
                        name="document_type"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                className={classes.searchControl}
                            >
                                <TextField
                                    fullWidth
                                    label="Documento de indentidad"
                                    size="small"
                                    {...field}
                                    error={!!errors.document_type}
                                    helperText={errors.document_type?.message}
                                />
                            </Grid>
                        )}
                    />

                    <Controller
                        name="names"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                className={classes.searchControl}
                            >
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Nombre y apellido del titular de la cuenta"
                                    size="small"
                                    {...field}
                                    error={!!errors.names}
                                    helperText={errors.names?.message}
                                />
                            </Grid>
                        )}
                    />

                    <Grid item xs={6} md={6}>
                        <Controller
                            name="phone_active"
                            control={control}
                            render={({ field }) => (
                                <FormControlLabel
                                    {...field}
                                    value="top"
                                    name="filialCompanySwitch"
                                    control={
                                        <Switch
                                            color="primary"
                                            onChange={handlePhoneActive}
                                            checked={phoneActive}
                                            disabled={readOnly}
                                        />
                                    }
                                    label="Utilizar otro número de teléfono"
                                    labelPlacement="start"
                                />
                            )}
                        />
                    </Grid>
                    {phoneActive ? (
                        <Grid
                            item
                            xs={6}
                            md={6}
                            className={classes.searchControl}
                        >
                            <Controller
                                name="phone_number"
                                control={control}
                                // defaultValue={companyData?.filial_company}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        label="Número de teléfono asociado a la cuenta"
                                        size="small"
                                        autoComplete="off"
                                        onChange={onChangeFilialCompany}
                                        error={!!errors.phone_number}
                                        helperText={
                                            errors.phone_number?.message
                                        }
                                        disabled={readOnly}
                                    />
                                )}
                            />
                        </Grid>
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
                                            Confirmar
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

export default ProfileBank
