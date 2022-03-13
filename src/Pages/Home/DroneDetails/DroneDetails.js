import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";


const DroneDetails = () => {

  return (
    <Box sx={{mb: 10, mt: 15}}>
        <Typography sx={{mb: 3, textAlign: 'center', fontWeight: 'bold'}} variant="h4">Drones and Octocopters Are Perfectly Suited For <br /> The Purposes Of Aerial Inspections</Typography>
        <Typography sx={{mb: 3, textAlign: 'center', color: 'gray'}} variant="body1">Information highway will close the loop on focusing <br />
        solely on the bottom line.</Typography>
      <Grid sx={{justifyContent: 'space-evenly', alignItems: 'center', px: 10}} container spacing={2}>
        <Grid item xs={12} lg={3}>
          <Box sx={{textAlign: 'right'}}>
              <Box sx={{mb: 5}}>
                 <Typography sx={{mb: 1, fontWeight: 'bold'}} variant="h6">AERIAL PHOTOGRAPHY</Typography>
                 <Typography sx={{color: 'gray'}} variant="body2">
                 A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment including photography and videography leverage agile frameworks.
                 </Typography>
              </Box>
              <Box>
              <Typography sx={{mb: 1, fontWeight: 'bold'}} variant="h6">RESOLUTION</Typography>
                 <Typography sx={{color: 'gray'}} variant="body2">
                 These devices can hover and maneuver above your event capturing images and video of not just individuals iterative approaches to corporate strategy.
                 </Typography>
              </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
            <img style={{width: '100%'}} src="https://drone-media.ancorathemes.com/wp-content/uploads/2021/10/drone-landing-2-copyright-1520x950.jpg" alt="" />
            <Box sx={{ width: '25%', mx: 'auto'}}>
                <Link style={{textDecoration: 'none'}} to="/expolre">
                <Button sx={{width: '100%', px: 3}} color="info" variant="contained">expolre</Button>
                </Link>
            </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box>
              <Box sx={{mb: 5}}>
              <Typography sx={{mb: 1, fontWeight: 'bold'}} variant="h6">PROPELLERS</Typography>
                 <Typography sx={{color: 'gray'}} variant="body2">
                 Our drone event services provide you with a skilled UAV pilot that will provide drone event photography or good videography a robust synopsis for high level.
                 </Typography>
              </Box>
              <Box>
              <Typography sx={{mb: 1, fontWeight: 'bold'}} variant="h6">POWERFUL & PORTABLE</Typography>
                 <Typography sx={{color: 'gray'}} variant="body2">
                 Drone event videographers can record all the activities (in the water too) throughout the event and record from inaccessible foster collaborative proposition.
                 </Typography>
              </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DroneDetails;
