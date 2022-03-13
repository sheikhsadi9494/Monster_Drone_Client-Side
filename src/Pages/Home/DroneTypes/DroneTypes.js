import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const DroneTypes = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography sx={{fontWeight: 'bold'}} variant="h4" gutterBottom component="div">
          We Sell The Best Drones
        </Typography>
        <Typography variant="body2" gutterBottom component="div">
          If you’re looking for a portable drone or a pro tool, we <br /> have a
          drone for you!
        </Typography>
      </Box>
      <Grid sx={{mt: 3}} container spacing={2}>
        <Grid item xs={12} lg={4}>
          <img style={{width: '100%'}} src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/slider-2-copyright.jpg" alt="" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <img style={{width: '100%'}} src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/slider-1-copyright.jpg" alt="" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <img style={{width: '100%'}} src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/slider-3-copyright.jpg" alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DroneTypes;
