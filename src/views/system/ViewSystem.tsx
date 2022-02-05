// ==============================|| SAMPLE PAGE ||============================== //

import { Button } from '@material-ui/core'
import Accordion from 'ui-component/extended/Accordion'

import SyncAltIcon from '@mui/icons-material/SyncAlt'
import SubCard from 'ui-component/cards/SubCard'

import TableStickyHead from '../../components/TableStickyHead'
const basicData = [
    {
        id: 'basic1',
        title: 'Ultimos movimientos',
        content: <TableStickyHead />,
    },
]

const ViewSystem = () => {
    return (
        <div className="flex flex-wrap">
            <div className="w-full xl:w-1/2 p-4">
                <SubCard>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/3 my-4">
                            <div className="w-full h-36 bg-black rounded-md"></div>
                            <p className="text-center my-4">Tarjeta RSC</p>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <div className="flex justify-around">
                                <Button variant="text" size="large">
                                    <div className="flex flex-col items-center">
                                        <SyncAltIcon className="w-12 h-12" />
                                        <p>Actualizar</p>
                                    </div>
                                </Button>
                                <Button variant="text" size="small">
                                    <div className="flex flex-col items-center">
                                        <SyncAltIcon className="w-12 h-12" />
                                        <p>Recargar</p>
                                    </div>
                                </Button>
                                <Button variant="text" size="small">
                                    <div className="flex flex-col items-center">
                                        <SyncAltIcon className="w-12 h-12" />
                                        <p>Bloquear</p>
                                    </div>
                                </Button>
                                <Button variant="text" size="small">
                                    <div className="flex flex-col items-center">
                                        <SyncAltIcon className="w-12 h-12" />
                                        <p>Eliminar</p>
                                    </div>
                                </Button>
                            </div>
                            <div className="w-full my-5 px-10">
                                <div className="flex my-4 ">
                                    <p className="w-1/2">Saldo Actual</p>
                                    <p className="w-1/2">Saldo Actual</p>
                                </div>
                                <div className="flex my-4">
                                    <p className="w-1/2">Fecha de Venta</p>
                                    <p className="w-1/2">Saldo Actual</p>
                                </div>
                                <div className="flex my-4">
                                    <p className="w-1/2">Fecha de Expiración</p>
                                    <p className="w-1/2">Saldo Actual</p>
                                </div>
                                <div className="flex my-4">
                                    <p className="w-1/2">Tipo de Tarjeta</p>
                                    <p className="w-1/2">Saldo Actual</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Accordion data={basicData} />
                    </div>
                </SubCard>
            </div>
            <div className="w-full xl:w-1/2 p-4">
                <SubCard>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/3 my-4">
                            <div className="w-full h-36 bg-black rounded-md"></div>
                            <p className="text-center my-4">Tarjeta RSC</p>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <div className="flex justify-around">
                                <Button variant="text" size="large">
                                    <div className="flex flex-col items-center">
                                        <SyncAltIcon className="w-12 h-12" />
                                        <p>Actualizar</p>
                                    </div>
                                </Button>
                                <Button variant="text" size="small">
                                    <div className="flex flex-col items-center">
                                        <SyncAltIcon className="w-12 h-12" />
                                        <p>Recargar</p>
                                    </div>
                                </Button>
                                <Button variant="text" size="small">
                                    <div className="flex flex-col items-center">
                                        <SyncAltIcon className="w-12 h-12" />
                                        <p>Bloquear</p>
                                    </div>
                                </Button>
                                <Button variant="text" size="small">
                                    <div className="flex flex-col items-center">
                                        <SyncAltIcon className="w-12 h-12" />
                                        <p>Eliminar</p>
                                    </div>
                                </Button>
                            </div>
                            <div className="w-full my-5 px-10">
                                <div className="flex my-4 ">
                                    <p className="w-1/2">Saldo Actual</p>
                                    <p className="w-1/2">Saldo Actual</p>
                                </div>
                                <div className="flex my-4">
                                    <p className="w-1/2">Fecha de Venta</p>
                                    <p className="w-1/2">Saldo Actual</p>
                                </div>
                                <div className="flex my-4">
                                    <p className="w-1/2">Fecha de Expiración</p>
                                    <p className="w-1/2">Saldo Actual</p>
                                </div>
                                <div className="flex my-4">
                                    <p className="w-1/2">Tipo de Tarjeta</p>
                                    <p className="w-1/2">Saldo Actual</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Accordion data={basicData} />
                    </div>
                </SubCard>
            </div>
        </div>
    )
}

export default ViewSystem
