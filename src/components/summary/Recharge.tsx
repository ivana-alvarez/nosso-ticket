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

import { RECHARGE } from '_mockApis/summary/recharge'

const columns = [
    {
        Header: 'Fechas',
        accessor: 'date',
    },
    {
        Header: 'Titulo',
        accessor: 'title',
    },
    {
        Header: 'Operacion',
        accessor: 'operation',
    },
    {
        Header: 'Equipo',
        accessor: 'equipment',
    },
    {
        Header: 'Referencia',
        accessor: 'reference',
    },
    {
        Header: 'Monto',
        accessor: 'amount',
    },
    {
        Header: 'Estatus',
        accessor: 'status',
        disableFilters: true,
    },
]

const Recharge = () => {
    // States
    const [rowsInitial, setRowsInitial] = React.useState<Array<any>>([])
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

    const handleChip = (active) => {
        return active ? (
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

    React.useEffect(() => {
        // dispatch(getCardsRequest())
    }, [])

    //EFFECTS
    React.useEffect(() => {
        const rows = RECHARGE.map(
            ({
                date,
                title,
                operation,
                equipment,
                reference,
                amount,
                status,
            }) => ({
                date,
                title,
                operation,
                equipment,
                reference,
                amount,
                status: status ? handleChip(true) : handleChip(false),
            })
        )
        setRowsInitial(rows)
    }, [])

    return (
        <div>
            <TableCustom
                columns={columns}
                data={rowsInitial}
                title="Gestión de Tarjetas"
                addIconTooltip="Crear Tarjeta"
                // handleCreate={handleCreate}
            />
        </div>
    )
}

export default Recharge
