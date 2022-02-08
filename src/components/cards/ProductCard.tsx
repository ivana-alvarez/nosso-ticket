// import React from 'react';

import { Button, Grid, Stack, Typography } from '@material-ui/core'
import MainCard from 'ui-component/cards/MainCard'
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone'
import Card1 from 'components/icons/Card1'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

const ProductCard = ({ cardType, name, description, price, benefits }) => {
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
                <Typography variant="h4">{name}</Typography>
            </div>
            <div className="flex flex-wrap">
                {benefits.map((benefit) => (
                    <div className="w-1/3 text-center px-2 my-2">
                        {benefit.active ? (
                            <CheckIcon className="w-10 h-10 text-green-500" />
                        ) : (
                            <CloseIcon className="w-10 h-10 text-red-500" />
                        )}
                        <p className="text-xs">{benefit.name}</p>
                    </div>
                ))}
            </div>
            <Grid item xs={12} className="m-4">
                <Typography
                    variant="body2"
                    // sx={{
                    //     overflow: 'hidden',
                    //     height: 45,
                    // }}
                >
                    {description}
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
                            <Typography variant="h4">
                                {price} Bolívares
                            </Typography>
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
