import AlertDialog from 'components/AlertDialog'

const handleAccept = () => {
    console.log('accept')
}
const RemoveCardForm = ({ open, setOpen }) => {
    return (
        <>
            <AlertDialog
                open={open}
                setOpen={setOpen}
                handleAccept={handleAccept}
                title="Eliminar Tarjeta"
                acceptButtonText="Aceptar"
            >
                <p>¿Estas seguro que quieres eliminar la tarjeta?</p>
            </AlertDialog>
        </>
    )
}

export default RemoveCardForm
