import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box>
            <Typography variant="h5" gutterBottom component="div">
              INFO
            </Typography>
          </Box>
          <Box>
            <ul style={{textAlign: 'center'}}>
              <li>
                <Typography variant="body2" gutterBottom component="div">
                  The Bird’s Eye View
                </Typography>
              </li>
              <li>
                <Typography variant="body2" gutterBottom component="div">
                  4K Video
                </Typography>
              </li>
              <li>
                <Typography variant="body2" gutterBottom component="div">
                  Contacts
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" gutterBottom component="div">
            SERVICES
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" gutterBottom component="div">
            LINKS
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" gutterBottom component="div">
            SIGNUP TO ORDER
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
