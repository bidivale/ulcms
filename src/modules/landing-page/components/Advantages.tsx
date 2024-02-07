import React from 'react';
import { Grid, Container, Typography } from "@mui/material";

// icons
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';  // AI Resource
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined'; // curated content
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';  // leadership
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined'; // revolution



const Advantages = () => {


  // function for scrolling to the sections 
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }



  return (
    <div>

        <Container>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
            {/* Comprehensive AI Resoure */}
            <Grid item xs={12} sm={6} md={3} onClick={() => scrollToSection('featured-products-sec')} sx={{ cursor: 'pointer' }}>
              <Typography align="center"> <TravelExploreOutlinedIcon fontSize='large'/> </Typography>
              <Typography align="center" variant="h6"  >  Comprehensive AI Resource </Typography>
              <Typography align="center" variant="subtitle1" color={'GrayText'} paragraph>
              Access a wide range of AI tools, courses, and extensions in one place.
              </Typography>

            </Grid>

            {/* Grid item 2 - Curated Content: */}
            <Grid item xs={12} sm={6} md={3} onClick={() => scrollToSection('featured-courses-sec')} sx={{ cursor: 'pointer' }}>
               <Typography align="center" > <ContentPasteSearchOutlinedIcon fontSize='large'/>
               </Typography>
              <Typography align="center" variant="h6"  > Curated Content </Typography>
              <Typography align="center" variant="subtitle1" color={'GrayText'} paragraph>
              Benefit from carefully evaluated and aggregated content for top-notch AI learning.
              </Typography>

            </Grid>

            {/* Grid item 3 - Leadership in AI */}
            <Grid item xs={12} sm={6} md={3} onClick={() => scrollToSection('featured-skills-sec')} sx={{ cursor: 'pointer' }}>
              <Typography align="center" > <LeaderboardOutlinedIcon fontSize='large'/> </Typography>
              <Typography align="center" variant="h6"  > Leadership in AI</Typography>
              <Typography align="center" variant="subtitle1" color={'GrayText'} paragraph> 
              Stay ahead with the world's leading resource for all things AI.
              </Typography>

            </Grid>

            {/* Grid item 4 - AI Revolution Leveraging */}
            <Grid item xs={12} sm={6} md={3} onClick={() => scrollToSection('featured-channels-sec')} sx={{ cursor: 'pointer' }}>
              <Typography align="center" > <PublishedWithChangesOutlinedIcon fontSize='large'/> </Typography>
              <Typography align="center" variant="h6"  > Leveraging AI Revolution </Typography>
              <Typography align="center" variant="subtitle1" color={'GrayText'} paragraph> 
              Leverage the benefits of AI's transformative potential with Global AI Hub.
              </Typography>

            </Grid>

          </Grid> {/* Grid container ends */}
          
        </Container>
        
        <br />
      
    </div>
  )
}

export default Advantages