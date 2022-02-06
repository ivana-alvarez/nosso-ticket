// import React from 'react';

import { Button, Grid, Stack, Typography } from '@material-ui/core'
import MainCard from 'ui-component/cards/MainCard'
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone'
import Card1 from 'components/icons/Card1'
import CheckIcon from '@mui/icons-material/Check'

const ProductCard = () => {
    return (
        <MainCard
            content={false}
            boxShadow
            sx={{
                '&:hover': {
                    transform: 'scale3d(1.02, 1.02, 1)',
                    transition: 'all .4s ease-in-out',
                },
            }}
        >
            <div className="flex justify-center">
                <Card1 className="max-h-40 mt-4" />
            </div>
            <div className="m-4">
                <Typography variant="h4">Boleto Monedero TSC</Typography>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/3 text-center px-2">
                    <CheckIcon className="w-10 h-10" />
                    <p className="text-xs">Recarga en MATT</p>
                </div>
            </div>
            <Grid item xs={12} className="m-4">
                <Typography
                    variant="body2"
                    // sx={{
                    //     overflow: 'hidden',
                    //     height: 45,
                    // }}
                >
                    Este soporte incluye 10 viajes luego de lo cual, el usuario
                    deberá realizar su recarga en las Boleterias habilitadas en
                    las Estaciones del Sistema Ferroviario Ezequiel Zamora. El
                    Titulo de Transporte deberá ser retirado en las Oficinas de
                    Atención Nosso Ticket ubicadas en la Estación de Charallave
                    Norte en horario Comercial...
                </Typography>
            </Grid>

            <Grid item xs={12} className="m-4">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid container spacing={1}>
                        <Grid item>
                            <Typography variant="h4">10 Bolívares</Typography>
                        </Grid>
                        {/* <Grid item>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'grey.500',
                                    textDecoration: 'line-through',
                                }}
                            >
                                2133
                            </Typography>
                        </Grid> */}
                    </Grid>
                    <Button
                        variant="contained"
                        sx={{ minWidth: 0 }}
                        // onClick={addCart}
                    >
                        <ShoppingCartTwoToneIcon fontSize="small" />
                    </Button>
                </Stack>
            </Grid>
        </MainCard>
    )
}

export default ProductCard
