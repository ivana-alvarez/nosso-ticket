import AlertDialog from 'components/AlertDialog'

const TransferAdd = ({ open, setOpen, handleAccept, dataForm }) => {
    return (
        <>
            <AlertDialog
                open={open}
                setOpen={setOpen}
                handleAccept={handleAccept}
                title="Confirmación de transferencia"
                acceptButtonText="Acepto"
            >
                <div className="flex flex-col  ">
                    <p className="text-yellow-500">
                        ¿Está usted seguro que desea realizar la siguiente
                        operación?
                    </p>
                    <br />
                    <h4>
                        DESDE SU TíTULO :{''}
                        {dataForm.fromCard}
                    </h4>
                    <h4>
                        A TÍTULO DE TRANSPORTE :{''}
                        {dataForm.toOwnCard} || {dataForm.toCardSerial}
                    </h4>
                    <h4>
                        MONTO :{''}
                        {dataForm.amount} {''}Bs
                    </h4>
                </div>
            </AlertDialog>
        </>
    )
}

export default TransferAdd
