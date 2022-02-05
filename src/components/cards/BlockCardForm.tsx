import AlertDialog from 'components/AlertDialog'

const handleAccept = () => {
    console.log('accept')
}
const RechargeCardForm = ({ open, setOpen }) => {
    return (
        <>
            <AlertDialog
                open={open}
                setOpen={setOpen}
                handleAccept={handleAccept}
                title="Bloquear Tarjeta"
                acceptButtonText="Aceptar"
            >
                <p>¿Estas seguro que quieres bloquear la tarjeta?</p>
            </AlertDialog>
        </>
    )
}

export default RechargeCardForm
