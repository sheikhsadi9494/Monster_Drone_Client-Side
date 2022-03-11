import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Rating from '@mui/material/Rating';

const SingleFeedback = ({ review }) => {
  const { name, email, imageUrl, feedback, star} = review;
  return (
    <Grid item xs={12} lg={4}>
      <Paper elevation={3}>


       <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
         <Box>
            <img style={{marginTop: '25px', marginButtom: '50px',  borderRadius: '50%', width: '90%'}} src={imageUrl} alt="" />
         </Box>
         <Box>
         <Typography sx={{fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
          {name}
        </Typography>
         <Typography variant="body2" sx={{fontWeight: 'light'}} gutterBottom component="div">
          {email}
        </Typography>
         </Box>
       </Box>


        <Box sx={{mt: 2}}>
            <Box sx={{mx: 3, pb: 1}}>
                {feedback}
            </Box>
            <Box sx={{mx: 2, pb: 3}}>
            <Rating name="size-medium" defaultValue={parseInt(star)}  />
            </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SingleFeedback;
