import { Grid, Card, CardHeader, CardContent, Container, Box, Typography } from "@mui/material";


const roundBoxStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    color: 'text.primary',
    // alignItems: "center",
    // justify: "center",
    m: 1,
    border: 1,
    // width: '8rem',
    //text-align: 'center',
    width: '8rem',
    height: '8rem',
    // below 3 properties are putting the box contents at the centre
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };


const Pricing = () => {
  return (
    <>
    <Container>
        <Typography align="center" variant="h4"  > Pricing </Typography>
        <Typography align="center" variant="subtitle1" paragraph> take the price advantage </Typography>
        <br />

    </Container>
    
    <Container style={{ background: 'hsla(0,0%, 51%, 0.25)', paddingBottom: '20px'}}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>

        {/* Grid item 1 */}
        <Grid item xs={12} sm={4} md={4} >
            { /* Price card 1 */}
            <Card style={{
                // minHeight: '55vw',
            }} >
                <CardHeader
                    style={{ textAlign: 'center', display:"flex", alignItems: 'center', justifyContent: 'center' }}
                    
                    title="HANSA Cloud"
                    subheader="VPS / cloud hosted solution"
                />
                <CardContent sx={{ display:"flex", alignItems: 'center', justifyContent: 'center'}}>
                    <Box sx={{...roundBoxStyles, borderRadius: '50%'}}> 
                    <Typography variant="body1" align="center"> ₹ 24,999 <br /> / month <br /> + GST </Typography>
                    {/* <Typography variant="body2"> /month </Typography> */}
                    </Box>

                </CardContent>

                <CardContent sx={{ display:"flex", alignItems: 'center', justifyContent: 'center'}}>
                
                    <Typography variant="body1" align="center"> 
                    Application web-hosting<br /> 
                    Configuration support<br /> 
                    Online support<br /> 
                    Online training<br /> 
                    Online e-Invoice service<br />
                     <br />
                    <br />
                    Optional custom reports <br />
                    
                    </Typography>
                </CardContent>
               
                
            </Card>

        </Grid>

        {/* Grid item 2 */}
        <Grid item xs={12} sm={4} md={4} >
            { /* Price card 2 */}
            <Card style={{
                // minHeight: '55vw',
            }} >
                <CardHeader
                    style={{ textAlign: 'center', display:"flex", alignItems: 'center', justifyContent: 'center' }}
                    
                    title="HANSA Enterprise"
                    // subheader={ <Box sx={{...roundBoxStyles, borderRadius: '50%' }}> 
                    // <Typography variant="body1"> ₹ 1,49,999 </Typography>
                    // </Box>}
                    subheader="on-site web / cloud implementation"
                />
                <CardContent sx={{ display:"flex", alignItems: 'center', justifyContent: 'center'}}>
                    <Box sx={{...roundBoxStyles, borderRadius: '50%'}}> 
                    <Typography variant="body1" align="center"> ₹ 1,49,999 <br /> / month <br /> + GST </Typography>
                    {/* <Typography variant="body2"> /month </Typography> */}
                    </Box>

                </CardContent>

                <CardContent sx={{ display:"flex", alignItems: 'center', justifyContent: 'center'}}>
                
                    <Typography variant="body1" align="center"> 
                    Onsite ERP server setup <br /> 
                    Vanilla implementation <br /> 
                    Issue resolution <br /> 
                    Online training <br /> 
                    Database support <br />
                    Custom reports <br />
                    <br />
                    Optional KPI / Ops modules<br />
                    
                    </Typography>
                </CardContent>
               
                
            </Card>

        </Grid>

        {/* Grid item 3 */}
        <Grid item xs={12} sm={4} md={4} >
            { /* Price card 3 */}
            <Card style={{
                // minHeight: '55vw',
            }} >
                <CardHeader
                    style={{ textAlign: 'center', display:"flex", alignItems: 'center', justifyContent: 'center' }}
                    
                    title="HANSA e-Office"
                    subheader="for ULBs and departments"
                />
                <CardContent sx={{ display:"flex", alignItems: 'center', justifyContent: 'center'}}>
                    <Box sx={{...roundBoxStyles, borderRadius: '50%'}}> 
                    <Typography variant="body1" align="center"> ₹ 99,900 <br /> / month <br /> + GST </Typography>
                    </Box>

                </CardContent>

                <CardContent sx={{ display:"flex", alignItems: 'center', justifyContent: 'center'}}>
                
                    <Typography variant="body1" align="center"> 
                    Vanilla implentation <br /> 
                    Server setup <br /> 
                    Issue resolution <br /> 
                    Online training <br /> 
                    Database support <br />
                    Custom reports <br />
                    <br />
                    Optional modules<br />
                    
                    </Typography>
                </CardContent>
               
                
            </Card>

        </Grid>




      </Grid>
    </Container>
    <br />
    </>
  )
}

export default Pricing