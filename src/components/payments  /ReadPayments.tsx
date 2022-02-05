import React from 'react'
// import { useNavigate } from 'react-router-dom'
import Chip from 'ui-component/extended/Chip'
import TableCustom from 'components/Table'
import { payments } from '../../_mockApis/payments/payments'

// import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone'
// import EditIcon from '@material-ui/icons/Edit'
// import VisibilityIcon from '@material-ui/icons/Visibility'
// import SelectColumnFilter from "components/Table/Filters/SelectColumnFilter";
// import { IconButton } from '@material-ui/core'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { DefaultRootStateProps } from 'types/index'

// import { getNodeRequest } from 'store/nodes/nodeActions'

const columns = [
    {
        Header: 'Fechas',
        accessor: 'fecha',
    },
    {
        Header: 'Titulo',
        accessor: 'titulo',
    },
    {
        Header: 'Operación',
        accessor: 'operacion',
    },
    {
        Header: 'Equipo',
        accessor: 'equipo',
    },
    {
        Header: 'Referencia',
        accessor: 'referencia',
    },
    {
        Header: 'Monto',
        accessor: 'monto',
    },
    {
        Header: 'Status',
        accessor: 'active',
    },
    // {
    //     Header: 'Acciones',
    //     accessor: 'edit',
    //     disableFilters: true,
    // },
]

const ReadPayments = () => {
    // States
    const [rowsInitial, setRowsInitial] = React.useState<Array<any>>([])
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

    // React.useEffect(() => {
    //     dispatch(getNodeRequest())
    // }, [])

    //EFFECTS
    React.useEffect(() => {
        const rows = payments.map(
            ({
                fecha,
                titulo,
                operacion,
                equipo,
                referencia,
                monto,
                active,
            }) => ({
                fecha,
                titulo,
                operacion,
                equipo,
                referencia,
                monto,
                active: active ? handleChip(true) : handleChip(false),

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
        )
        setRowsInitial(rows)
    }, [payments])

    return (
        <>
            <TableCustom
                columns={columns}
                data={rowsInitial}
                title="Histórico de pagos y recargass"
                // addIconTooltip="Añadir nodo"
                // handleCreate={handleCreate}
            />
        </>
    )
}

export default ReadPayments
