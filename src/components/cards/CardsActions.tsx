import SyncAltIcon from '@mui/icons-material/SyncAlt'
import { Button } from '@material-ui/core'

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
                        <SyncAltIcon className="w-12 h-12" />
                        <p>Actualizar</p>
                    </div>
                </Button>
                <Button variant="text" size="small" onClick={rechargeHandle}>
                    <div className="flex flex-col items-center">
                        <SyncAltIcon className="w-12 h-12" />
                        <p>Recargar</p>
                    </div>
                </Button>
                <Button variant="text" size="small" onClick={blockHandle}>
                    <div className="flex flex-col items-center">
                        <SyncAltIcon className="w-12 h-12" />
                        <p>Bloquear</p>
                    </div>
                </Button>
                <Button variant="text" size="small" onClick={deleteHandle}>
                    <div className="flex flex-col items-center">
                        <SyncAltIcon className="w-12 h-12" />
                        <p>Eliminar</p>
                    </div>
                </Button>
            </div>
        </>
    )
}

export default CardsActions
