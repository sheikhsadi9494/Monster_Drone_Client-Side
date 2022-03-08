import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Fetures = () => {
    const bg = {
        background: `url('https://cdn.shopify.com/s/files/1/0074/2126/3962/files/top-policy_1920x1920.png?v=1578728289')`,
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',

    }
  return (
    <Box style={bg} sx={{ mt: 10 , py: 8}}>
      <Typography
        sx={{ fontWeight: "bold", textAlign: "center", mb: 5}}
        variant="h4"
        component="div"
        gutterBottom
      >
        Practical Drones
      </Typography>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{display: 'flex',  justifyContent: 'space-evenly', alignItems: 'center'}}>
              <Box sx={{mx: 4}}>
                <img src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/7_104x.png?v=1563163325" alt="" />
              </Box>
              <Box>
                <Typography sx={{fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                Filming, Photography
                </Typography>
                <Typography variant="body2" gutterBottom component="div">
                Drones can capture places where people cannot touch, dan gerous areas, broadcast sports matches, take photos of animals such as real time VR (virtual reality).
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{display: 'flex',  justifyContent: 'space-evenly', alignItems: 'center'}}>
              <Box sx={{mx: 4}}>
                <img src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/8_104x.png?v=1563163333" alt="" />
              </Box>
              <Box>
                <Typography sx={{fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                Used in Agriculture
                </Typography>
                <Typography variant="body2" gutterBottom component="div">
                Used for pesticide spraying equipment, monitoring, reinfor cing-checking and measuring damage from animals.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{display: 'flex',  justifyContent: 'space-evenly', alignItems: 'center'}}>
              <Box  sx={{mx: 4}}>
                <img src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/9_104x.png?v=1563163340" alt="" />
              </Box>
              <Box>
                <Typography sx={{fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                Used in Investigation
                </Typography>
                <Typography variant="body2" gutterBottom component="div">
                Using small Drones can also take pictures in the country or in space so small that people cannot enter.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{display: 'flex',  justifyContent: 'space-evenly', alignItems: 'center'}}>
              <Box  sx={{mx: 4}}>
                <img src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/10_104x.png?v=1563163346" alt="" />
              </Box>
              <Box>
                <Typography sx={{fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                Use when Disaster Strikes
                </Typography>
                <Typography variant="body2" gutterBottom component="div">
                Drones support searching, firefighting, use for areas where humans cannot come close like nuclear reactors, transport ing goods and objects.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Fetures;
