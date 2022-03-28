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
import { useDispatch, useSelector } from 'react-redux'
import { SNACKBAR_OPEN } from 'store/actions'
import { DefaultRootStateProps } from 'types'
import { useMutation } from '@apollo/client'
import { CREATE_CARD } from 'graphql/Mutations'
import { CardRegional } from 'types/types'

// import { createCardsRequest } from 'store/cards/cardsActions'

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
    search: yup
        .string()
        .max(17, 'Debe tener 17 dígitos')
        .required('Este campo es obligatorio'),
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
        // setValue,
        getValues,
    } = useForm({
        resolver: yupResolver(Schema),
    })
    const searchForm = useForm({
        resolver: yupResolver(SchemaSearch),
    })
    const dispatch = useDispatch()
    const login = useSelector((state: DefaultRootStateProps) => state.login)
    //mutation
    const [addCard, { loading }] = useMutation(CREATE_CARD)
    const [cardData, setCardData] = React.useState<CardRegional[] | any>([])

    const [validCode, setValidCode] = React.useState(false)

    const onSubmit = async (data) => {
        setValidCode(true)
        try {
            const response = await addCard({
                variables: {
                    data: {
                        card_no: data.search,
                        card_alias: getValues('name'),
                        include_transits: false,
                    },
                    user: login.user._id,
                },
            })
            setCardData(response.data.createCard)
        } catch (error) {
            dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'Error de conexión',
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                variant: 'alert',
                alertSeverity: 'error',
            })
            setOpen(false)
        }
    }

    const handleAccept = (data) => {
        const { name } = data
        console.log('accept', name)

        setOpen(false)
        setCardData('')

        // searchForm.setValue('search', '')
        // setValue('name', '')
        setValidCode(false)
        // setData({})
    }
    return (
        <>
            {!loading ? (
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
                                        onSubmit={searchForm.handleSubmit(
                                            onSubmit
                                        )}
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
                                                        searchForm.formState
                                                            .errors?.message
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
                                        card_money={cardData?.card_money}
                                        init_time={cardData?.init_time}
                                        issue_time={cardData?.issue_time}
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
                                                helperText={
                                                    errors.name?.message
                                                }
                                                // disabled={readOnlyState}
                                            />
                                        )}
                                    />
                                </div>
                            ) : null}
                        </div>
                    </AlertDialog>
                </form>
            ) : null}
        </>
    )
}

export default RechargeCardForm
