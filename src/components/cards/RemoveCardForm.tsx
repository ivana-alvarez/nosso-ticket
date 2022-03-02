import { useMutation } from '@apollo/client'
import AlertDialog from 'components/AlertDialog'
import { REMOVE_CARD } from 'graphql/Mutations'
import { useDispatch } from 'react-redux'
import { SNACKBAR_OPEN } from 'store/actions'

const RemoveCardForm = ({ open, setOpen, selectedCardId }) => {
    const dispatch = useDispatch()

    //mutation
    const [removeCard] = useMutation(REMOVE_CARD)

    const handleAccept = async () => {
        try {
            const response = await removeCard({
                variables: {
                    id: selectedCardId,
                },
            })
            console.log(response.data.removeCard)
        } catch (error) {
            dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'Error de conexión',
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                variant: 'alert',
                alertSeverity: 'error',
            })
            console.log(error)
        }
    }

    return (
        <>
            <AlertDialog
                open={open}
                setOpen={setOpen}
                handleAccept={() => handleAccept()}
                title="Eliminar Tarjeta"
                acceptButtonText="Aceptar"
            >
                <p>¿Estas seguro que quieres eliminar la tarjeta?</p>
            </AlertDialog>
        </>
    )
}

export default RemoveCardForm
