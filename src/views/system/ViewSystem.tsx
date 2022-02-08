import React from 'react'
import Accordion from 'ui-component/extended/Accordion'
import SubCard from 'ui-component/cards/SubCard'
import TableStickyHead from '../../components/TableStickyHead'
import CardsActions from 'components/cards/CardsActions'
import CardsInfo from 'components/cards/CardsInfo'
import RechargeCardForm from 'components/cards/RechargeCardForm'
import AddCardForm from 'components/cards/AddCardForm'
import Card1 from 'components/icons/Card1'
import BlockCardForm from 'components/cards/BlockCardForm'
import { useSelector } from 'react-redux'
import { DefaultRootStateProps } from 'types'
import { Fab, Tooltip } from '@material-ui/core'
import AddCard from '../../components/icons/AddCard'
import dayjs from 'dayjs'

const basicData = [
    {
        id: 'basic1',
        title: 'Ultimos movimientos',
        content: <TableStickyHead />,
    },
]

const ViewSystem = () => {
    const cards = useSelector((state: DefaultRootStateProps) => state.cards)
    const [open, setOpen] = React.useState<boolean>(false)
    const [modal, setModal] = React.useState<string>('')

    const updateHandle = () => {
        console.log('u')
    }
    const rechargeHandle = () => {
        setOpen(true)
        setModal('recharge')
    }
    const blockHandle = () => {
        setOpen(true)
        setModal('block')
    }
    const deleteHandle = () => {
        console.log('d')
    }
    const handleAdd = () => {
        setOpen(true)
        setModal('add')
    }

    return (
        <div className="flex flex-wrap">
            {cards.map(
                ({
                    card_description,
                    card_status,
                    card_money,
                    init_time,
                    issue_time,
                    card_type,
                }) => (
                    <div className="w-full xl:w-1/2 p-4">
                        <SubCard>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-1/3 my-4">
                                    <div className="flex justify-center">
                                        <Card1 className="max-h-48" />
                                    </div>
                                    <p className="text-center my-4">
                                        {card_description}
                                    </p>
                                </div>
                                <div className="w-full lg:w-2/3">
                                    <CardsActions
                                        updateHandle={updateHandle}
                                        rechargeHandle={rechargeHandle}
                                        blockHandle={blockHandle}
                                        deleteHandle={deleteHandle}
                                    />
                                    <CardsInfo
                                        card_status={card_status}
                                        card_money={card_money}
                                        init_time={dayjs(init_time).format(
                                            'DD/MM/YYYY'
                                        )}
                                        issue_time={dayjs(issue_time).format(
                                            'DD/MM/YYYY'
                                        )}
                                        card_type={card_type}
                                    />
                                </div>
                            </div>
                            <div>
                                <Accordion data={basicData} />
                            </div>
                        </SubCard>
                    </div>
                )
            )}
            <div className="fixed right-12 bottom-12">
                <Tooltip title="Agregar Tarjeta" placement="top">
                    <Fab aria-label="add" onClick={handleAdd}>
                        <AddCard />
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
                <BlockCardForm open={open} setOpen={setOpen} />
            ) : null}
        </div>
    )
}

export default ViewSystem
