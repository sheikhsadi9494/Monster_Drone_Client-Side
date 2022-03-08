import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
    const bg = {
        background: `url('http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/decor.png')`,

    }
  return (
    <Grid  sx={{justifyContent: 'space-evenly', alignItems: 'center'}} container spacing={2}>
      <Grid item xs={12} lg={7}>
        <img
          style={{ width: "100%" }}
          src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/dron-landing-1-copyright.png"
          alt=""
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Typography sx={{fontWeight: 'bold'}} variant="h2" gutterBottom component="div">
         Many Great <br /> Ways To Use <br />  Drons
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Banner;
