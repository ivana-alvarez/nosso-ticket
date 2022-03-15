import React from 'react'
// import { useNavigate } from 'react-router-dom'
import Chip from 'ui-component/extended/Chip'
import TableCustom from 'components/Table'
import { SafeForeignTransfer } from 'types/types'
import { FIND_TRANSFER } from 'graphql/Querys'
import { ApolloError, useQuery } from '@apollo/client'
import { useSelector } from 'react-redux'
import { DefaultRootStateProps } from 'types'

// import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone'
// import EditIcon from '@material-ui/icons/Edit'
// import VisibilityIcon from '@material-ui/icons/Visibility'
// import SelectColumnFilter from "components/Table/Filters/SelectColumnFilter";
// import { IconButton } from '@material-ui/core'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { DefaultRootStateProps } from 'types/index'

const columns = [
    // {
    //     Header: 'Fechas',
    //     accessor: 'fecha',
    // },
    // {
    //     Header: 'Titulo',
    //     accessor: 'titulo',
    // },
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
    // {
    //     Header: 'Acciones',
    //     accessor: 'edit',
    //     disableFilters: true,
    // },
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

const ReadPayments = () => {
    // States
    const [rowsInitial, setRowsInitial] = React.useState<Array<any>>([])
    const login = useSelector((state: DefaultRootStateProps) => state.login)
    // Puede renderizar?
    const [canRender, setCanRender] = React.useState<boolean>(false)
    const [userTransfer, setUserTransfer] = React.useState<
        SafeForeignTransfer[] | any
    >([])

    // Llamo las transferencias
    geTransfer(login.user._id)
        .then((data: SafeForeignTransfer[]) => setUserTransfer(data))
        .catch(() => setUserTransfer(undefined))

    // React.useEffect(() => {
    //     if (userTransfer?.length >= 1 && userTransfer !== undefined) {
    //         setCanRender(true)
    //     }
    // }, [userTransfer])
    // Customs Hooks
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const permissions = useSelector(
    //     (state: DefaultRootStateProps) =>
    //         state.login?.user?.content?.permissions
    // )
    // const nodes = useSelector((state: DefaultRootStateProps) => state.node)

    // FUNCTIONS
    // const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     e.preventDefault()
    //     const id = e.currentTarget.dataset.id
    //     navigate(`/gestion-de-equipos-fijos/editar/${id}`)
    // }
    // const handleView = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     e.preventDefault()
    //     const id = e.currentTarget.dataset.id
    //     navigate(`/gestion-de-equipos-fijos/editar/${id}-view`)
    // }

    // const handleCreate = (e: React.MouseEvent<HTMLElement>) => {
    //     e.preventDefault()
    //    console.log('click');
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
            /*const rows = userTransfer.map(
                ({
                    completed,
                    amount,
                    fromCard,
                    txRef,
                    toCardSerial,
                }: SafeForeignTransfer) => ({
                    amount,
                    txRef,
                    toCardSerial,
                    fromCard,
                    active: completed ? handleChip(true) : handleChip(false),

                    // edit: permissions.includes('view_user') ? (
                    //     <div className="flex">
                    //         <button data-id={id} onClick={handleEdit}>
                    //             <IconButton color="primary">
                    //                 <EditIcon sx={{ fontSize: '1.3rem' }} />
                    //             </IconButton>
                    //         </button>
                    //     </div>
                    // ) : (
                    //     <div className="flex">
                    //         <button data-id={id} onClick={handleView}>
                    //             <IconButton color="primary">
                    //                 <VisibilityIcon sx={{ fontSize: '1.3rem' }} />
                    //             </IconButton>
                    //         </button>
                    //     </div>
                    // ),
                })
            )*/
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
                    title="Histórico de pagos y recargas"

                    // addIconTooltip="Añadir nodo"
                    // handleCreate={handleCreate}
                />
            )}
        </>
    )
}

export default ReadPayments
