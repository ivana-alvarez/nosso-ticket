// import React from 'react'
// import ButtonUnstyled from '../Button/Button'
import {
    useForm,
    Controller,
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
// import AnimateButton from 'ui-component/extended/AnimateButton'
import * as yup from 'yup'

// material-ui
import {
    Grid,
    // Chip,
    // TextField,
    Theme,
    Typography,
    // CardActions,
    // Divider,
    // Button,
    // Stack,
    // IconButton,
} from '@material-ui/core'

import Chip from 'ui-component/extended/Chip'

// project imports
// import { DefaultRootStateProps } from 'types'
import { SUMMARY } from '../../_mockApis/summary/summary'

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
    first_name: string
    second_name: string
    last_name: string
    sex: string
    document_type: string
    personal_id: number
    email: string
    department: string
    user_id: string
    role: string
    username: string
    cellphone_code: string
    contact_number: number
    login_password: string
    current_password: string
    password: string
    password_confirm: string
    employee_code?: string
    company_code?: string
    second_last_name?: string
    permissions: Array<string>
    department_no: number
    operator_card: string
    user: string
}

const Schema = yup.object().shape({
    first_name: yup
        .string()
        .required('Este campo es requerido')
        .min(3, 'Mínimo 8 caracteres')
        .max(20, 'Máximo 50 caracteres'),
    second_name: yup
        .string()
        .required('Este campo es requerido')
        .min(3, 'Mínimo 4 caracteres')
        .max(10, 'Máximo 6 caracteres'),
    last_name: yup.string().required('Este campo es requerido'),
    email: yup
        .string()
        .email('Debe ser un email válido')
        .required('Este campo es requerido'),
    username: yup
        .string()
        .required('Este campo es requerido')
        .notOneOf(
            [
                yup.ref('first_name'),
                yup.ref('second_name'),
                yup.ref('last_name'),
            ],
            'El usuario debe ser unico'
        ),
    password: yup
        .string()
        .min(4, 'Mínimo 4 caracteres')
        .max(20, 'Máximo 20 caracteres')
        .required('Este campo es requerido'),
    password_confirm: yup
        .string()
        .required('Este campo es requerido')
        .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
})

const AffiliateTitles = () => {
    const classes = useStyles()
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const userData = useSelector((state: DefaultRootStateProps) => state.profile)
    // const company_info = useSelector((state: DefaultRootStateProps) => state.login.user?.content?.company_info)
    // const [department] = React.useState<any>(DEPARTMENTS.find((department) => department.value === 1005))// ---->>>> department.value === userData.department_no
    // const [showPassword, setShowPassword] = React.useState<boolean>(false)
    // const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(false)
    const {
        control,
        // formState: { errors },
        // setValue,
        // getValues,
    } = useForm<Inputs>({
        resolver: yupResolver(Schema),
    })

    return (
        <form>
            {SUMMARY.map((summ) => {
                return (
                    <>
                        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                            <Grid item xs={12}>
                                <Typography variant="h4">
                                    {summ.title}
                                </Typography>
                            </Grid>
                            <Controller
                                name="user_id"
                                control={control}
                                // defaultValue={userData?.employee_code}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="Id del usuario">
                                            Estado actual
                                        </label>
                                        {/* <TextField
                                fullWidth
                                size="small"
                                autoComplete="off"
                                {...field}
                                error={!!errors.user_id}
                                helperText={errors.user_id?.message}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                  }}
                                variant="standard"
                            /> */}
                                    </Grid>
                                )}
                            />

                            <Controller
                                name="first_name"
                                control={control}
                                // defaultValue={userData?.first_name}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">
                                            {summ.current_state}
                                        </label>
                                        {summ.current_state ? (
                                            <>
                                                <Chip
                                                    label="Activo"
                                                    size="small"
                                                    chipcolor="success"
                                                    sx={{ width: '96px' }}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <Chip
                                                    label="Bloqueado"
                                                    size="small"
                                                    chipcolor="orange"
                                                    sx={{ width: '96px' }}
                                                />
                                            </>
                                        )}

                                        {/* <TextField
                                fullWidth
                                size="small"
                                autoComplete="off"
                                error={!!errors.first_name}
                                {...field}
                                helperText={errors.first_name?.message}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                }}
                                variant="standard"
                            /> */}
                                    </Grid>
                                )}
                            />

                            <Controller
                                name="second_name"
                                control={control}
                                // defaultValue={userData?.second_name}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">Saldo actual</label>
                                        {/* <TextField
                                fullWidth
                                size="small"
                                autoComplete="off"
                                {...field}
                                error={!!errors.second_name?.message}
                                helperText={errors.second_name?.message}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                  }}
                                variant="standard"
                            /> */}
                                    </Grid>
                                )}
                            />

                            <Controller
                                name="last_name"
                                control={control}
                                // defaultValue={userData?.last_name}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        lg={4}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">
                                            {summ.current_balance}
                                        </label>
                                        {/* <TextField
                                fullWidth
                                size="small"
                                autoComplete="off"
                                {...field}
                                error={!!errors.last_name}
                                helperText={errors.last_name?.message}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                }}
                                variant="standard"
                            /> */}
                                    </Grid>
                                )}
                            />

                            <Controller
                                name="personal_id"
                                control={control}
                                // defaultValue={userData?.personal_id?.replace(/\D/g, '')}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">Ultimo uso</label>
                                        {/* <TextField
                                fullWidth
                                size="small"
                                autoComplete="off"
                                {...field}
                                error={!!errors.personal_id}
                                helperText={errors.personal_id?.message}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                }}
                                variant="standard"
                            /> */}
                                    </Grid>
                                )}
                            />

                            <Controller
                                name="contact_number"
                                control={control}
                                // defaultValue={userData?.mobile}
                                render={({ field }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        className={classes.searchControl}
                                    >
                                        <label htmlFor="">
                                            {summ.last_use}
                                        </label>
                                        {/* <TextField
                                type="number"
                                fullWidth                    
                                size="small"
                                autoComplete="off"
                                {...field}
                                error={!!errors.contact_number}
                                helperText={errors.contact_number?.message}
                                InputProps={{
                                    readOnly: true,
                                    disableUnderline: true,
                                }}
                                variant="standard"
                            /> */}
                                    </Grid>
                                )}
                            />
                        </Grid>

                        {/* <Divider sx={{ marginTop: '70px' }} /> */}
                        {/* <CardActions>
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
            </CardActions> */}
                    </>
                )
            })}
        </form>
    )
}

export default AffiliateTitles
