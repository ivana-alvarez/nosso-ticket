// ==============================|| SAMPLE PAGE ||============================== //

import { Button, MenuItem, TextField } from '@material-ui/core'
import Accordion from 'ui-component/extended/Accordion'

import SyncAltIcon from '@mui/icons-material/SyncAlt'
import SubCard from 'ui-component/cards/SubCard'

import TableStickyHead from '../../components/TableStickyHead'
import React from 'react'
import AlertDialog from 'components/AlertDialog'
import {
    useForm,
    // SubmitHandler,
    Controller,
    // SubmitErrorHandler,
} from 'react-hook-form'
import CardsActions from 'components/cards/CardsActions'
const basicData = [
    {
        id: 'basic1',
        title: 'Ultimos movimientos',
        content: <TableStickyHead />,
    },
]

const typesCompany = [
    {
        id: 'as123',
        name: 'as123',
    },
]

const ViewSystem = () => {
    const {
        // handleSubmit,
        control,
        // formState: { errors, dirtyFields },
        // setValue,
        // getValues,
    } = useForm({
        // resolver: yupResolver(Schema),
    })
    const [open, setOpen] = React.useState<boolean>(false)
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
                            <CardsActions setOpen={setOpen} />
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
            <AlertDialog
                open={open}
                setOpen={setOpen}
                handleAccept={() => console.log('hola')}
                title="Recarga de Saldo"
                acceptButtonText="Aceptar"
            >
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="w-full h-36 bg-black rounded-md"></div>
                        <p className="text-center my-4">Tarjeta RSC</p>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="my4">
                            <Controller
                                name="company_type"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        select
                                        fullWidth
                                        label="Monto a Recargar"
                                        size="small"
                                        autoComplete="off"
                                        // error={!!errors.company_type}
                                        // helperText={errors.company_type?.message}
                                        // disabled={readOnly}
                                    >
                                        {typesCompany.map((option) => (
                                            <MenuItem
                                                key={option.id}
                                                value={option.id}
                                            >
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            />
                        </div>
                        <div className="my-4">
                            <Controller
                                name="company_type"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        select
                                        fullWidth
                                        label="Medio de Pago"
                                        size="small"
                                        autoComplete="off"
                                        // error={!!errors.company_type}
                                        // helperText={errors.company_type?.message}
                                        // disabled={readOnly}
                                    >
                                        {typesCompany.map((option) => (
                                            <MenuItem
                                                key={option.id}
                                                value={option.id}
                                            >
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </AlertDialog>
        </div>
    )
}

export default ViewSystem
