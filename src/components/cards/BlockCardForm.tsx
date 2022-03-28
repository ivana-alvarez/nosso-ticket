import { useMutation } from '@apollo/client'
import AlertDialog from 'components/AlertDialog'
import { BLOCK_CARD } from 'graphql/Mutations'
import { useDispatch } from 'react-redux'
import { SNACKBAR_OPEN } from 'store/actions'

const RechargeCardForm = ({ open, setOpen, selectedCardId }) => {
    const dispatch = useDispatch()
    const [blockCard] = useMutation(BLOCK_CARD)

    const handleAccept = async () => {
        try {
            const response = await blockCard({
                variables: {
                    data: {
                        card: selectedCardId,
                    },
                },
            })
            setOpen(false)
            console.log(response.data.blockCard)
        } catch (error) {
            dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'Error de conexión',
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                variant: 'alert',
                alertSeverity: 'error',
            })
            setOpen(false)
        }
    }
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
