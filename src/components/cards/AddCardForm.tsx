import {
    useForm,
    // SubmitHandler,
    Controller,
    // SubmitErrorHandler,
} from 'react-hook-form'
import { Button, TextField, Theme } from '@material-ui/core'
import AlertDialog from 'components/AlertDialog'
import CardsInfo from './CardsInfo'
import { makeStyles } from '@material-ui/styles'
import Card1 from 'components/icons/Card1'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React from 'react'
import AddCard from '../../components/icons/AddCard'
import { useDispatch } from 'react-redux'
import { createCardsRequest } from 'store/cards/cardsActions'

const useStyles = makeStyles((theme: Theme) => ({
    alertIcon: {
        height: '16px',
        width: '16px',
        marginRight: '5px',
        verticalAlign: 'text-bottom',
        marginTop: '15px',
        marginLeft: '-15px',
    },
    userAvatar: {
        height: '80px',
        width: '80px',
    },
    searchControl: {
        width: '100%',
        '& input': {
            background: 'transparent !important',
        },
        '& .Mui-focused input': {
            boxShadow: 'none',
        },
    },
    ButtonControl: {
        width: '50%',
        '& input': {
            color: ' transparent !important',
            marginLeft: '5px',
        },
        [theme.breakpoints.down('md')]: {},
    },
    borderDebug: {
        border: '1px solid red',
    },
    input: {
        opacity: 0,
        position: 'absolute',
        zIndex: 1,
        padding: 0.5,
        cursor: 'pointer',
        width: '30%',
    },
}))

const SchemaSearch = yup.object().shape({
    search: yup.string().required('Este campo es obligatorio'),
})
const Schema = yup.object().shape({
    name: yup.string().required('Este campo es obligatorio'),
})

const RechargeCardForm = ({ open, setOpen }) => {
    const classes = useStyles()

    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        // getValues,
    } = useForm({
        resolver: yupResolver(Schema),
    })
    const searchForm = useForm({
        resolver: yupResolver(SchemaSearch),
    })
    const dispatch = useDispatch()

    const [validCode, setValidCode] = React.useState(false)
    const [data, setData] = React.useState<any>({
        card_money: '',
        init_time: '',
        issue_time: '',
    })

    const onSubmit = (data) => {
        setValidCode(true)
        setData({
            card_no: data.search,
            card_money: 120,
            init_time: '2022-01-24T12:24:42.903092',
            issue_time: '2022-01-24T12:24:42.903092',
        })
    }

    const handleAccept = (data) => {
        console.log('accept', data)
        dispatch(
            createCardsRequest({
                card_description: 'Tarjeta TSC',
                card_no: '1001020002985261',
                dept_no: 25,
                card_serial: 'CC681AEF',
                card_type: 0,
                card_status: 1,
                order_no: 6746,
                init_time: '2022-01-24T12:24:42.903092',
                opcard_no: '2543',
                issue_time: '2022-01-24T13:33:29',
                cash_serial: 10,
                bt_time: '2022-02-05T00:25:13',
                last_supply_time: '2022-01-24T13:33:29',
                last_riding_time: '2022-02-03T17:28:20',
                ss_times: 1,
                supply_money: '500000.00',
                paid: '100000.00',
                card_money: '400000.00',
                card_deposit: '0.00',
                name1: 'YELMARY',
                name2: '',
                surname1: 'HERNANDEZ',
                surname2: 'VELASQUEZ',
                id_no: 'V20698370',
            })
        )
        setOpen(false)
        searchForm.setValue('search', '')
        setValue('name', '')
        setValidCode(false)
        setData({})
    }
    return (
        <>
            <form>
                <AlertDialog
                    open={open}
                    setOpen={setOpen}
                    handleAccept={handleSubmit(handleAccept)}
                    title="Agregar Tarjeta"
                    acceptButtonText="Aceptar"
                >
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 p-2">
                            <div className="flex justify-center">
                                {validCode ? (
                                    <Card1 className="max-h-48" />
                                ) : (
                                    <AddCard className="max-h-48" />
                                )}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 py-2">
                            <div className={classes.searchControl}>
                                <form
                                    className="flex items-center"
                                    onSubmit={searchForm.handleSubmit(onSubmit)}
                                >
                                    <Controller
                                        name="search"
                                        control={searchForm.control}
                                        // defaultValue={cardsData?.description || ''}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                className="mr-4"
                                                fullWidth
                                                label="Código del Titular"
                                                size="small"
                                                autoComplete="off"
                                                error={
                                                    !!searchForm.formState
                                                        .errors.search
                                                }
                                                helperText={
                                                    searchForm.formState.errors
                                                        ?.message
                                                }
                                                // disabled={readOnlyState}
                                            />
                                        )}
                                    />
                                    <Button
                                        variant="contained"
                                        className="h-8"
                                        size="small"
                                        type="submit"
                                        autoFocus
                                    >
                                        Buscar
                                    </Button>
                                </form>
                                <CardsInfo
                                    card_money={data?.card_money}
                                    init_time={data?.init_time}
                                    issue_time={data?.issue_time}
                                />
                            </div>
                        </div>
                        {validCode ? (
                            <div className={`w-full md:w-1/2 mt-4`}>
                                <Controller
                                    name="name"
                                    control={control}
                                    // defaultValue={cardsData?.description || ''}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            className={`${classes.searchControl}`}
                                            fullWidth
                                            label="Nombre del Titular"
                                            size="small"
                                            autoComplete="off"
                                            error={!!errors.name}
                                            helperText={errors.name?.message}
                                            // disabled={readOnlyState}
                                        />
                                    )}
                                />
                            </div>
                        ) : null}
                    </div>
                </AlertDialog>
            </form>
        </>
    )
}

export default RechargeCardForm
