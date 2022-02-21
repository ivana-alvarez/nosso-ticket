import * as React from 'react'
import { useTheme } from '@mui/material/styles'
// import Box from '@material-ui/core/Box';
import Box from '@mui/material/Box'
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

// import mapRed from 'assets/images/landing/IMAGEN_PARA_RED_NEW.png'
import red1 from 'assets/images/landing/red1.png'
import red2 from 'assets/images/landing/red2.png'
import red3 from 'assets/images/landing/red3.png'
import red4 from 'assets/images/landing/red4.png'
import red5 from 'assets/images/landing/red5.png'
import red6 from 'assets/images/landing/red6.png'

import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
    // {
    //     index: 0,
    //     label: 'mapa de red',
    //     imgPath: mapRed,
    // },
    {
        index: 1,
        label: 'metro valencia',
        imgPath: red1,
    },
    {
        index: 2,
        label: 'tren valencia',
        imgPath: red2,
    },
    {
        index: 3,
        label: 'via valencia',
        imgPath: red3,
    },
    {
        index: 4,
        label: 'autobus valencia',
        imgPath: red4,
    },
    {
        index: 5,
        label: 'pasillo valencia',
        imgPath: red5,
    },
    {
        index: 6,
        label: 'vista aerea ',
        imgPath: red6,
    },
]

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

    return (
        <Box sx={{ maxWidth: 560, flexGrow: 1, margin: 'auto' }}>
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
