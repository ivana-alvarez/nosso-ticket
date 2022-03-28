import React from 'react'
import Accordion from 'ui-component/extended/Accordion'
import SubCard from 'ui-component/cards/SubCard'
import TableStickyHead from '../../components/TableStickyHead'
import CardsActions from 'components/cards/CardsActions'
import CardsInfo from 'components/cards/CardsInfo'
import RechargeCardForm from 'components/cards/RechargeCardForm'
import AddCardForm from 'components/cards/AddCardForm'
import RemoveCardForm from 'components/cards/RemoveCardForm'
import BlockCardForm from 'components/cards/BlockCardForm'
import Card1 from 'components/icons/Card1'

import { useDispatch, useSelector } from 'react-redux'
import { DefaultRootStateProps } from 'types'
import { Fab, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { useQuery } from '@apollo/client'
import { USER_CARD } from 'graphql/Querys'
import { CardRegional } from 'types/types'
import { SNACKBAR_OPEN } from 'store/actions'

const basicData = [
    {
        id: 'basic1',
        title: 'Ultimos movimientos',
        content: <TableStickyHead />,
    },
]

const ViewSystem = () => {
    const dispatch = useDispatch()
    const login = useSelector((state: DefaultRootStateProps) => state.login)
    const { data, loading, error } = useQuery(USER_CARD, {
        fetchPolicy: 'network-only',
        variables: { user: login.user._id },
    })

    const [selectedCardId, setSelectedCardId] = React.useState('')
    const [open, setOpen] = React.useState<boolean>(false)
    const [modal, setModal] = React.useState<string>('')

    const updateHandle = () => {
        console.log('u')
    }
    const rechargeHandle = () => {
        setOpen(true)
        setModal('recharge')
    }
    const blockHandle = (e) => {
        setSelectedCardId(e.currentTarget.dataset.id)
        setOpen(true)
        setModal('block')
    }
    const deleteHandle = (e) => {
        setSelectedCardId(e.currentTarget.dataset.id)
        setOpen(true)
        setModal('remove')
    }
    const handleAdd = () => {
        setOpen(true)
        setModal('add')
    }

    React.useEffect(() => {
        if (error) {
            dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'Error de conexión',
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                variant: 'alert',
                alertSeverity: 'error',
            })
        }
    }, [error])

    return (
        <>
            {!loading ? (
                <div className="flex flex-wrap">
                    {data?.UsersCards.map((data: CardRegional) => (
                        <div className="w-full xl:w-1/2 p-4">
                            <SubCard>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-1/3 my-4">
                                        <div className="flex justify-center">
                                            <Card1 className="max-h-48" />
                                        </div>
                                        <p className="text-center my-4">
                                            {data.card_alias}
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-2/3">
                                        <CardsActions
                                            updateHandle={updateHandle}
                                            rechargeHandle={rechargeHandle}
                                            blockHandle={blockHandle}
                                            deleteHandle={deleteHandle}
                                            cardId={data._id}
                                        />
                                        <CardsInfo
                                            card_status={data.card_status}
                                            card_money={data.card_money}
                                            init_time={data.init_time}
                                            issue_time={data.issue_time}
                                            card_type={data.card_type}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Accordion data={basicData} />
                                </div>
                            </SubCard>
                        </div>
                    ))}
                </div>
            ) : null}
            <div className="fixed right-12 bottom-12">
                <Tooltip title="Agregar Tarjeta" placement="top">
                    <Fab aria-label="add" onClick={handleAdd} color="primary">
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </div>
            {modal === 'recharge' ? (
                <RechargeCardForm open={open} setOpen={setOpen} />
            ) : null}
            {modal === 'add' ? (
                <AddCardForm open={open} setOpen={setOpen} />
            ) : null}
            {modal === 'block' ? (
                <BlockCardForm
                    open={open}
                    setOpen={setOpen}
                    selectedCardId={selectedCardId}
                />
            ) : null}
            {modal === 'remove' ? (
                <RemoveCardForm
                    open={open}
                    setOpen={setOpen}
                    selectedCardId={selectedCardId}
                />
            ) : null}
        </>
    )
}

export default ViewSystem
