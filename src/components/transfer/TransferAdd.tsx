import AlertDialog from 'components/AlertDialog'

const TransferAdd = ({ open, setOpen, handleAccept }) => {
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
                    <h4>DESDE SU TíTULO :</h4>
                    <h4>A TÍTULO DE TRANSPORTE : </h4>
                    <h4>MONTO :</h4>
                </div>
            </AlertDialog>
        </>
    )
}

export default TransferAdd
