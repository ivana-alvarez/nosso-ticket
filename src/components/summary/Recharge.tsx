import React from 'react'
// import { useNavigate } from 'react-router-dom'
import Chip from 'ui-component/extended/Chip'
import TableCustom from '../Table/index'
// import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone'
// import EditIcon from '@material-ui/icons/Edit'
// import VisibilityIcon from '@material-ui/icons/Visibility'
// import SelectColumnFilter from "components/Table/Filters/SelectColumnFilter";
// import { IconButton } from '@material-ui/core'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { DefaultRootStateProps } from 'types/index'
// import { getCardsRequest } from 'store/cards/cardsActions'

import { SafeForeignTransfer } from 'types/types'
import { ApolloError, useQuery } from '@apollo/client'
import { FIND_TRANSFER } from 'graphql/Querys'
import { useSelector } from 'react-redux'
import { DefaultRootStateProps } from 'types'

const columns = [
    {
        Header: 'Tarjeta receptora',
        accessor: 'toCardSerial',
    },
    {
        Header: ' Tarjeta emisora',
        accessor: 'fromCard',
    },
    {
        Header: 'Referencia',
        accessor: 'txRef',
    },
    {
        Header: 'Monto  (Bs)',
        accessor: 'amount',
    },
    {
        Header: 'status',
        accessor: 'completed',
    },
]

const geTransfer = (userId: string): Promise<SafeForeignTransfer[]> => {
    return new Promise((resolve, reject) => {
        const { data, loading, error } = useQuery(FIND_TRANSFER, {
            onError: (err: ApolloError) => reject(err),
            fetchPolicy: 'network-only',
            variables: { userPayer: userId },
        })
        if (error) {
            reject(error)
        }
        if (!loading) {
            resolve(data.findAllTransfers)
        }
    })
}

const Recharge = () => {
    // States
    const [rowsInitial, setRowsInitial] = React.useState<Array<any>>([])
    const login = useSelector((state: DefaultRootStateProps) => state.login)
    const [canRender, setCanRender] = React.useState<boolean>(false)
    const [userTransfer, setUserTransfer] = React.useState<
        SafeForeignTransfer[] | any
    >([])

    // Llamo las transferencias
    geTransfer(login.user._id)
        .then((data: SafeForeignTransfer[]) => setUserTransfer(data))
        .catch(() => setUserTransfer(undefined))

    // Customs Hooks
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const permissions = useSelector(
    //     (state: DefaultRootStateProps) => state.login?.user?.content?.permissions
    // )
    // const operatingCards = useSelector(
    //     (state: DefaultRootStateProps) => state.cards
    // )
    // FUNCTIONS
    // const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     e.preventDefault()
    //     const id = e.currentTarget.dataset.id
    //     navigate(`/categoria-de-tarjetas/editar/${id}`)
    // }
    // const handleView = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     e.preventDefault()
    //     const id = e.currentTarget.dataset.id
    //     navigate(`/categoria-de-tarjetas/editar/${id}-view`)
    // }

    // const handleCreate = (e: React.MouseEvent<HTMLElement>) => {
    //     e.preventDefault()
    //     navigate(`/categoria-de-tarjetas/crear`)
    // }

    const handleChip = (completed) => {
        return completed ? (
            <Chip
                label="Aprobado"
                size="small"
                chipcolor="success"
                sx={{ width: '96px' }}
            />
        ) : (
            <Chip
                label="Denegado"
                size="small"
                chipcolor="orange"
                sx={{ width: '96px' }}
            />
        )
    }

    //EFFECTS
    React.useEffect(() => {
        if (userTransfer?.length >= 1 && userTransfer !== undefined) {
            let rows: SafeForeignTransfer[] = []
            userTransfer.map((data: SafeForeignTransfer | any) => {
                data.fromCard = data.fromCard.card_serial
                data.completed = data.completed
                    ? handleChip(true)
                    : handleChip(false)
                rows.push(data)
            })
            // const rows = RECHARGE.map(
            //     ({
            //         date,
            //         title,
            //         operation,
            //         equipment,
            //         reference,
            //         amount,
            //         status,
            //     }) => ({
            //         date,
            //         title,
            //         operation,
            //         equipment,
            //         reference,
            //         amount,
            //         status: status ? handleChip(true) : handleChip(false),
            //     })
            // )
            setRowsInitial(rows)
            setCanRender(true)
        }
    }, [userTransfer])

    return (
        <>
            {canRender && (
                <TableCustom
                    columns={columns}
                    data={rowsInitial}
                    title="Gestión de Tarjetas"
                    addIconTooltip="Crear Tarjeta"
                    // handleCreate={handleCreate}
                />
            )}
        </>
    )
}

export default Recharge
