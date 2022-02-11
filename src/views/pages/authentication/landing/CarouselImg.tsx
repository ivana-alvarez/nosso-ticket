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
// import transaragua from '../../../../assets/images/landing/transaragua.png'
import valenciablanco from '../../../../assets/images/landing/valenciablanco.png'
import valencia from '../../../../assets/images/landing/valencia.png'
import ife from '../../../../assets/images/landing/ife.png'
import barinas from '../../../../assets/images/landing/barinas.png'
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
            label: 'metro de caracas',
            imgPath: metroccs,
        },
        {
            index: 1,
            label: 'metro de valencia',
            imgPath: theme.palette.mode === 'dark' ? valenciablanco : valencia,
        },
        {
            index: 2,
            label: 'sistema ferrroviario',
            imgPath: ife,
        },
        {
            index: 3,
            label: 'bus barinas',
            imgPath: barinas,
        },
    ]

    return (
        <Box sx={{ maxWidth: 750, flexGrow: 1 }}>
            {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                // sx={{
                //     marginTop:10,

                //   }}
            >
                {images.map(({ imgPath, label, index }) => (
                    <div key={label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    top: 10,
                                    height: 400,
                                    display: 'block',
                                    maxWidth: 900,
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={imgPath}
                                alt={label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            {/* </Box><MobileStepper 
         steps={maxSteps} 
         position="static" 
         activeStep={activeStep}
            nextButton={ 
           <Button
             size="small"
             onClick={handleNext}
             disabled={activeStep === maxSteps - 1}
           >
             Next
             {theme.direction === 'rtl' ? (
               <KeyboardArrowLeft />
             ) : (
               <KeyboardArrowRight />
             )}
           </Button>
         }
         backButton={
           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
             {theme.direction === 'rtl' ? (
               <KeyboardArrowRight />
             ) : (
               <KeyboardArrowLeft />
             )}
             Back
           </Button>
         }
      />*/}
        </Box>
    )
}

export default CarouselImg
