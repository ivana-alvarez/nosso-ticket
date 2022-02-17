import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import metroccs from '../../../../assets/images/landing/metroccs.png'
import home1 from '../../../../assets/images/landing/home1.png'
import valenciablanco from '../../../../assets/images/landing/valenciablanco.png'
import valencia from '../../../../assets/images/landing/valencia.png'
import ife from '../../../../assets/images/landing/ife.png'
import barinas from '../../../../assets/images/landing/barinas.png'
import home6 from '../../../../assets/images/landing/home6.png'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const CarouselImg = () => {
    const theme = useTheme()
    const [activeStep, setActiveStep] = React.useState(0)
    //   const maxSteps = images.length;

    //   const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //   };

    //   const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    //   };

    const handleStepChange = (step: number) => {
        setActiveStep(step)
    }

    const images = [
        {
            index: 0,
            label: 'lector de tarjeta',
            imgPath: home1,
        },
        {
            index: 1,
            label: 'metro de caracas',
            imgPath: metroccs,
        },
        {
            index: 2,
            label: 'metro de valencia',
            imgPath: theme.palette.mode === 'dark' ? valenciablanco : valencia,
        },
        {
            index: 3,
            label: 'sistema ferroviario',
            imgPath: ife,
        },
        {
            index: 4,
            label: 'bus barinas',
            imgPath: barinas,
        },
        {
            index: 5,
            label: 'tarjeta movil',
            imgPath: home6,
        },
    ]

    return (
        <Box
            sx={{
                maxWidth: 500,
                flexGrow: 1,
                margin: 'auto',
            }}
        >
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {images.map(({ imgPath, label, index }) => (
                    <div key={label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    top: 10,
                                    width: '100%',
                                    display: 'flex',
                                    // maxWidth: 500,
                                    overflow: 'hidden',
                                    // width: '100%',
                                    justifyContent: 'end',
                                    justifyItems: 'center',
                                }}
                                src={imgPath}
                                alt={label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
        </Box>
    )
}

export default CarouselImg
