import {
    useForm,
    // SubmitHandler,
    Controller,
    // SubmitErrorHandler,
} from 'react-hook-form'
import { MenuItem, TextField } from '@material-ui/core'
import AlertDialog from 'components/AlertDialog'
import Card1 from 'components/icons/Card1'

const typesCompany = [
    {
        id: 'as123',
        name: 'as123',
    },
]

const handleAccept = () => {
    console.log('accept')
}
const RechargeCardForm = ({ open, setOpen }) => {
    const {
        // handleSubmit,
        control,
        // formState: { errors, dirtyFields },
        // setValue,
        // getValues,
    } = useForm({
        // resolver: yupResolver(Schema),
    })
    return (
        <>
            <AlertDialog
                open={open}
                setOpen={setOpen}
                handleAccept={handleAccept}
                title="Recarga de Saldo"
                acceptButtonText="Aceptar"
            >
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="flex justify-center">
                            <Card1 className="max-h-48 w-full" />
                        </div>
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
        </>
    )
}

export default RechargeCardForm
