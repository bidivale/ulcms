import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

const Numbers = () => {
  return (
    <div>
      {/* Section Header */}
        <Container>
            <Typography align="center" variant="h4"  > Numbers </Typography>
            <Typography align="center" variant="subtitle1" paragraph> proven track records </Typography>
            {/* <br /> */}

        </Container>

        <Container>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
            {/* Grid item 1 - years of expertise */}
            <Grid item xs={12} sm={6} md={3} >
              <Typography align="center" variant="h6"  > 20+ </Typography>
              <Typography align="center" variant="subtitle1" paragraph> Years of expertise </Typography>

            </Grid>

            {/* Grid item 2 - Users */}
            <Grid item xs={12} sm={6} md={3} >
              <Typography align="center" variant="h6"  > 13,000+ </Typography>
              <Typography align="center" variant="subtitle1" paragraph> Users </Typography>

            </Grid>

            {/* Grid item 3 - non-stop run */}
            <Grid item xs={12} sm={6} md={3} >
              <Typography align="center" variant="h6"  > 12+ Years </Typography>
              <Typography align="center" variant="subtitle1" paragraph> Non-stop run</Typography>

            </Grid>

            {/* Grid item 4 - man-months */}
            <Grid item xs={12} sm={6} md={3} >
              <Typography align="center" variant="h6"  > 1,200+ </Typography>
              <Typography align="center" variant="subtitle1" paragraph> Consulting man-months </Typography>

            </Grid>

          </Grid> {/* Grid container ends */}
          
        </Container>
        <br /> 
    </div>
  )
}

export default Numbers