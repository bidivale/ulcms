import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
// import centreImage from '../../../assets/images/gai-background.png';

// ../../assets/images/

const HeroBox = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const appBarHeight = 50;
    
    return (
    <div>
      <Box
        sx={{

          height: `calc(100vh - ${appBarHeight + 200}px)`,
         
        //   backgroundImage: `url(${centreImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: isMobile ? theme.spacing(2) : theme.spacing(3),
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            UNILECAMS
          </Typography>
          <Typography variant="h5">
            {/* Empowering minds with AI: Future is Now! */}
            Empowering minds with all things AI
          </Typography>  
        </Container>

        <Container maxWidth="sm">   
          {/* <Typography variant="body1">
            Global AI Hub is the world's leading resource for all things AI. We carefully evaluate and aggregate the best generative AI and LLM tools, extensions, and courses, so you can find everything you need to leverage the benefits of the AI revolution.
        </Typography> */}
            Find the best generative AI and LLM tools, extensions, and courses to get started with AI today.
        </Container>
        
      </Box>
      <br />
      </div>
    );
  };
  
  export default HeroBox;
  