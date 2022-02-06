interface CardsInfoProps {
    card_status?: number
    card_money?: string
    init_time?: string
    issue_time?: string
    card_type?: number
}

const CardsInfo = ({
    card_status,
    card_money,
    init_time,
    issue_time,
    card_type,
}: CardsInfoProps) => {
    return (
        <>
            <div className="w-full my-5 px-10">
                {card_status ? (
                    <div className="flex my-4 ">
                        <p className="w-1/2">Estado</p>
                        <p className="w-1/2 text-green-500 font-bold">
                            {card_status}
                        </p>
                    </div>
                ) : null}
                {card_money ? (
                    <div className="flex my-4 ">
                        <p className="w-1/2">Saldo Actual</p>
                        <p className="w-1/2">{card_money}</p>
                    </div>
                ) : null}
                {init_time ? (
                    <div className="flex my-4">
                        <p className="w-1/2">Fecha de Venta</p>
                        <p className="w-1/2">{init_time}</p>
                    </div>
                ) : null}
                {issue_time ? (
                    <div className="flex my-4">
                        <p className="w-1/2">Fecha de Expiración</p>
                        <p className="w-1/2">{issue_time}</p>
                    </div>
                ) : null}
                {card_type ? (
                    <div className="flex my-4">
                        <p className="w-1/2">Tipo de Tarjeta</p>
                        <p className="w-1/2">{card_type}</p>
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default CardsInfo
