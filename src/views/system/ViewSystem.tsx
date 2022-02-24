import React, { useEffect, useState } from 'react'
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

import { useSelector } from 'react-redux'
import { DefaultRootStateProps } from 'types'
import { Fab, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { ApolloError, useQuery } from '@apollo/client'
import { USER_CARD } from 'graphql/Querys'
import { CardRegional } from 'types/types'

const basicData = [
    {
        id: 'basic1',
        title: 'Ultimos movimientos',
        content: <TableStickyHead />,
    },
]

const getCards = (userId: string): Promise<CardRegional[]> => {
    return new Promise((resolve, reject) => {
        const { data, loading, error } = useQuery(USER_CARD, {
            onError: (err: ApolloError) => reject(err),
            fetchPolicy: 'network-only',
            variables: { user: userId },
        })
        if (error) {
            reject(error)
        }
        if (!loading) {
            resolve(data.UsersCards)
        }
    })
}

const ViewSystem = () => {
    const login = useSelector((state: DefaultRootStateProps) => state.login)
    // Puede renderizar?
    const [canRender, setCanRender] = useState<boolean>(false)
    const [userCards, setUserCards] = React.useState<CardRegional[] | any>([])

    // Llamo las tarjetas
    getCards(login.user._id)
        .then((data: CardRegional[]) => setUserCards(data))
        .catch(() => setUserCards(undefined))

    useEffect(() => {
        if (userCards?.length >= 1 && userCards !== undefined) {
            setCanRender(true)
        }
    }, [userCards])

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
        setOpen(true)
        setModal('remove')
    }
    const handleAdd = () => {
        setOpen(true)
        setModal('add')
    }

    return (
        <>
            {canRender && (
                <div className="flex flex-wrap">
                    {userCards.map((data: CardRegional) => (
                        <div className="w-full xl:w-1/2 p-4">
                            <SubCard>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-1/3 my-4">
                                        <div className="flex justify-center">
                                            <Card1 className="max-h-48" />
                                        </div>
                                        <p className="text-center my-4">
                                            {'Tarjeta TSC'}
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

                    <div className="fixed right-12 bottom-12">
                        <Tooltip title="Agregar Tarjeta" placement="top">
                            <Fab
                                aria-label="add"
                                onClick={handleAdd}
                                color="primary"
                            >
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
                        <BlockCardForm open={open} setOpen={setOpen} />
                    ) : null}
                    {modal === 'remove' ? (
                        <RemoveCardForm open={open} setOpen={setOpen} />
                    ) : null}
                </div>
            )}
        </>
    )
}

export default ViewSystem
