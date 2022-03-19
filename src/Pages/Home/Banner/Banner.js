import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Grid sx={{justifyContent: 'space-evenly', alignItems: 'center', mt: 0.1}} container spacing={2}>
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
         We sell the worlds' monst versatile commercial drone. Up to 60 minutes of flight time. High-level redundancy.
        </Typography>
        <Link style={{textDecoration: 'none'}} to="/expolre">
        <Button sx={{ backgroundColor: 'black', mt: 1, ":hover": {backgroundColor: "black"}}} variant="contained">Buy Now</Button>
        </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
