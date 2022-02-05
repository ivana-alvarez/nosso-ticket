const CardsInfo = ({
    card_status,
    card_money,
    init_time,
    issue_time,
    card_type,
}) => {
    return (
        <>
            <div className="w-full my-5 px-10">
                <div className="flex my-4 ">
                    <p className="w-1/2">Estado</p>
                    <p className="w-1/2 text-green-500 font-bold">
                        {card_status}
                    </p>
                </div>
                <div className="flex my-4 ">
                    <p className="w-1/2">Saldo Actual</p>
                    <p className="w-1/2">{card_money}</p>
                </div>
                <div className="flex my-4">
                    <p className="w-1/2">Fecha de Venta</p>
                    <p className="w-1/2">{init_time}</p>
                </div>
                <div className="flex my-4">
                    <p className="w-1/2">Fecha de Expiración</p>
                    <p className="w-1/2">{issue_time}</p>
                </div>
                <div className="flex my-4">
                    <p className="w-1/2">Tipo de Tarjeta</p>
                    <p className="w-1/2">{card_type}</p>
                </div>
            </div>
        </>
    )
}

export default CardsInfo
