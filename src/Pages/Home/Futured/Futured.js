import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Futured = () => {
  return (
    <Box>
      <Box sx={{mx: 'auto', width: '70%'}}>
          <img style={{width: '100%'}} src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/17_1512x.jpg?v=1563163359" alt="" />
      </Box>
      <Box sx={{backgroundColor: '#f2f2f2', mt: '10px'}}>
      <Grid sx={{justifyContent: 'space-evenly', alignItems: 'center'}} container spacing={2}>
        <Grid item xs={12} lg={6}>
          <img style={{width: '100%'}} src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/11_900x.jpg?v=1563163375" alt="" />
        </Grid>
        <Grid sx={{mx: 5}} item xs={12} lg={3.5}>
          <Paper sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', py: 3}} elevation={3}>
                  <Box>
                      <img src="//cdn.shopify.com/s/files/1/0074/2126/3962/files/11_100x.png?v=1563163397" alt="" />
                  </Box>
                  <Box>
                  <Typography sx={{fontWeight: 'bold'}} variant="h6">HD Video 4K</Typography>
                  <Typography variant="body1">get the drone with a spectacular 4K <br /> camera. </Typography>
                  </Box>
          </Paper>
          <Paper sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', py: 3, my: 3}} elevation={3}>
                  <Box>
                      <img src="//cdn.shopify.com/s/files/1/0074/2126/3962/files/12_100x.png?v=1563163404" alt="" />
                  </Box>
                  <Box>
                  <Typography sx={{fontWeight: 'bold'}} variant="h6">Easy to contorl</Typography>
                  <Typography variant="body1">superior remote control sistem upto <br /> 2 km to 4km. </Typography>
                  </Box>
          </Paper>
          <Paper sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', py: 3}} elevation={3}>
                  <Box>
                      <img src="//cdn.shopify.com/s/files/1/0074/2126/3962/files/13_100x.png?v=1563163411" alt="" />
                  </Box>
                  <Box>
                  <Typography sx={{fontWeight: 'bold'}} variant="h6">Balance Control </Typography>
                  <Typography variant="body1">you control the drone angle or balace <br /> when is flying. </Typography>
                  </Box>
          </Paper>
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
};

export default Futured;
