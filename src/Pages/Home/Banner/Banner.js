import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Banner = () => {
  return (
    <Grid sx={{justifyContent: 'space-evenly', alignItems: 'center', border: '1px solid gray', mt: 0.1}} container spacing={2}>
      <Grid item xs={12} lg={7}>
        <img
          style={{ width: "100%" }}
          src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/dron-landing-1-copyright.png"
          alt=""
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Box sx={{mx: 5}}>
        <Typography sx={{fontWeight: 'bold'}} variant="h2" gutterBottom component="div">
         Many Great <br /> Ways To Use <br />  Drons
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          Our every drone is costom modified and we have the <br /> best drons in the world. Our every costomer <br /> is happy costomer
        </Typography>
        <Button sx={{backgroundColor: 'black', mt: 1}} variant="contained">Buy Now</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
