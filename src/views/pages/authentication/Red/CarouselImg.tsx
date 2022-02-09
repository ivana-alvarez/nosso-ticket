import * as React from 'react';
import { useTheme } from '@mui/material/styles';
// import Box from '@material-ui/core/Box';
import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import home from '../../../../assets/images/landing/LOGOS_METROS_BLANCOS_Barinas.png';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  // {
  //   label: 'San Francisco – Oakland Bay Bridge, United States',
  //   imgPath:'https://www.bing.com/images/search?view=detailV2&ccid=hj9jN3hu&id=B531B59A2C47E2EB9DDBAD91BB089F4ED977B73C&thid=OIP.hj9jN3huKVAK8FxC4vAI6gHaDt&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.863f6337786e29500af05c42e2f008ea%3frik%3dPLd32U6fCLuRrQ%26riu%3dhttp%253a%252f%252fwww.caf.net%252fimg%252fall%252fproductos_servicios%252fsoluciones_integrales%252fcasos_estudio%252fmetros%252fcaracas%252fmetro-caracas-destacado.jpg%26ehk%3dSJJedIJt2V5Xyz5vKY9B%252bJscIwJqmiD4Tqn5G8iDUm0%253d%26risl%3d%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d651%26srw%3d1300&exph=389&expw=776&q=metro+caracas&simid=608004542827216813&FORM=IRPRST&ck=9E0E7933F04B20D991ACE0476C861CF8&selectedIndex=1&ajaxhist=0&ajaxserp=0' ,
      
  // },
  {
    index:0,
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: home,
  },
  // {
  //   index:1,
  //   label: 'Bird',  
  //   imgPath:
  //     'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  // },
  // {
  //   index:2,
  //   label: 'Bali, Indonesia',
  //   imgPath:
  //     'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  // },
  // {
  //   index:3,
  //   label: 'Goč, Serbia',
  //   imgPath:
  //     'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  // },
];

const CarouselImg = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 750, flexGrow: 1, }}>
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
        {images.map(({ imgPath , label , index}) => (
          <div key={label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                    top:10,
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
  );
}

export default CarouselImg;
