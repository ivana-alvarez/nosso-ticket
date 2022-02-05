import React from 'react'
import Accordion from 'ui-component/extended/Accordion'
import SubCard from 'ui-component/cards/SubCard'
import TableStickyHead from '../../components/TableStickyHead'
import CardsActions from 'components/cards/CardsActions'
import CardsInfo from 'components/cards/CardsInfo'
import RechargeCardForm from 'components/cards/RechargeCardForm'
import BlockCardForm from 'components/cards/BlockCardForm'

const basicData = [
    {
        id: 'basic1',
        title: 'Ultimos movimientos',
        content: <TableStickyHead />,
    },
]

const ViewSystem = () => {
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
            <div className="w-full xl:w-1/2 p-4">
                <SubCard>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/3 my-4">
                            <div className="w-full h-36 bg-black rounded-md"></div>
                            <p className="text-center my-4">Tarjeta RSC</p>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <CardsActions
                                updateHandle={updateHandle}
                                rechargeHandle={rechargeHandle}
                                blockHandle={blockHandle}
                                deleteHandle={deleteHandle}
                            />
                            <CardsInfo />
                        </div>
                    </div>
                    <div>
                        <Accordion data={basicData} />
                    </div>
                </SubCard>
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
