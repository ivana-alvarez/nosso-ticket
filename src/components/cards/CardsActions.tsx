import { Button } from '@material-ui/core'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import RecargasIcon from '../icons/RecargasIcon'

const CardsActions = ({
    updateHandle,
    rechargeHandle,
    blockHandle,
    deleteHandle,
    cardId,
}) => {
    return (
        <>
            <div className="flex justify-around">
                <Button
                    variant="text"
                    size="large"
                    onClick={updateHandle}
                    className="hover:bg-hover rounded-full w-1/4"
                >
                    <div className="flex flex-col items-center">
                        <PublishedWithChangesIcon className="w-8 h-8 mt-3" />
                        <p>Actualizar</p>
                    </div>
                </Button>
                <Button
                    variant="text"
                    size="small"
                    onClick={rechargeHandle}
                    className="hover:bg-hover rounded-full w-1/4"
                >
                    <div className="flex flex-col items-center">
                        <RecargasIcon className="w-8 h-8 mt-3" />
                        <p>Recargar</p>
                    </div>
                </Button>
                <Button
                    variant="text"
                    size="small"
                    onClick={blockHandle}
                    className="hover:bg-hover rounded-full w-1/4"
                >
                    <div className="flex flex-col items-center">
                        <LockOutlinedIcon className="w-8 h-8 mt-3" />
                        <p>Bloquear</p>
                    </div>
                </Button>
                <Button
                    variant="text"
                    size="small"
                    onClick={deleteHandle}
                    className="hover:bg-hover rounded-full w-1/4"
                    data-id={cardId}
                >
                    <div className="flex flex-col items-center">
                        <DeleteForeverIcon className="w-8 h-8 mt-3" />
                        <p>Eliminar</p>
                    </div>
                </Button>
            </div>
        </>
    )
}

export default CardsActions
