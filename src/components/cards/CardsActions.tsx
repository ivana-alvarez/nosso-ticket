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
}) => {
    return (
        <>
            <div className="flex justify-around">
                <Button variant="text" size="large" onClick={updateHandle}>
                    <div className="flex flex-col items-center">
                        <PublishedWithChangesIcon className="w-10 h-10 mt-2" />
                        <p>Actualizar</p>
                    </div>
                </Button>
                <Button variant="text" size="small" onClick={rechargeHandle}>
                    <div className="flex flex-col items-center">
                        <RecargasIcon className="w-10 h-10 mt-2" />
                        <p>Recargar</p>
                    </div>
                </Button>
                <Button variant="text" size="small" onClick={blockHandle}>
                    <div className="flex flex-col items-center">
                        <LockOutlinedIcon className="w-10 h-10 mt-2" />
                        <p>Bloquear</p>
                    </div>
                </Button>
                <Button variant="text" size="small" onClick={deleteHandle}>
                    <div className="flex flex-col items-center">
                        <DeleteForeverIcon className="w-10 h-10 mt-2" />
                        <p>Eliminar</p>
                    </div>
                </Button>
            </div>
        </>
    )
}

export default CardsActions
