import React from 'react'
import Accordion from 'ui-component/extended/Accordion'
import SubCard from 'ui-component/cards/SubCard'
import TableStickyHead from '../../components/TableStickyHead'
import CardsActions from 'components/cards/CardsActions'
import CardsInfo from 'components/cards/CardsInfo'
import RechargeCardForm from 'components/cards/RechargeCardForm'
import BlockCardForm from 'components/cards/BlockCardForm'
import { useSelector } from 'react-redux'
import { DefaultRootStateProps } from 'types'
import { Fab, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

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
                                    <div className="w-full h-36 bg-black rounded-md"></div>
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
                                        init_time={init_time}
                                        issue_time={issue_time}
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
            <div className="fixed right-4 bottom-12 right-12">
                <Tooltip title="Agregar Tarjeta" placement="top">
                    <Fab
                        color="primary"
                        aria-label="add"
                        onClick={() => {
                            console.log('edit')
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </div>
            {modal === 'recharge' ? (
                <RechargeCardForm open={open} setOpen={setOpen} />
            ) : null}
            {modal === 'block' ? (
                <BlockCardForm open={open} setOpen={setOpen} />
            ) : null}
        </div>
    )
}

export default ViewSystem
