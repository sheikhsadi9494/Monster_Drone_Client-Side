import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

const ProductPageBanner = () => {
  return (
    <Box>
        <Box>
        <Grid container spacing={2} sx={{alignItems: 'center', justifyContent: 'space-evenly'}}>
        <Grid item xs={12} md={4}>
         <Box sx={{mx: 2, mt: 2}}>
         <Typography variant="h3" sx={{fontWeight: 'bold'}} gutterBottom component="div">
            Get Your Dream Drone with DroneMonster
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Our drons can do extream photography and video recoading in extream session and many more tings can do 
          </Typography>
         </Box>
        </Grid>
        <Grid sx={{mt: 5}} item xs={12} md={6}>
         <img style={{width: '100%'}} src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_02-768x461.png" alt="" />
        </Grid>
      </Grid>
        </Box>
    </Box>
  );
};

export default ProductPageBanner;
