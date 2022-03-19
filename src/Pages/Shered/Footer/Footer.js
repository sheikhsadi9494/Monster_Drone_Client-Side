import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useInput } from "@mui/base";
import { styled } from "@mui/system";

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
    // border-radius: 8px;
    padding: 12px 12px;
  
    &:hover {
    //   background: ${theme.palette.mode === "dark" ? null : grey[100]};
    //   border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:focus {
      outline: 0px solid ${
        theme.palette.mode === "dark" ? blue[600] : blue[100]
      };
    }
  `
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props, ref);

  return (
    <div {...getRootProps()}>
      <StyledInputElement {...props} {...getInputProps()} />
    </div>
  );
});

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Container sx={{ pt: 15, pb: 15 }}>
        <Grid sx={{ pb: 5, px: 3 }} container spacing={2}>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography
                sx={{ color: "white", mb: 3 }}
                variant="h5"
                gutterBottom
                component="div"
              >
                INFO
              </Typography>
            </Box>
            <Box sx={{ color: "gray" }}>
              <Box sx={{ display: "flex", mb: 1 }}>
                <Box>
                  <img
                    style={{ width: "60%" }}
                    src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/decor.png"
                    alt=""
                  />
                </Box>
                <Box sx={{ mx: 1 }}>
                  <Typography variant="body2" gutterBottom component="div">
                    The Bird’s Eye View
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mb: 1 }}>
                <Box>
                  <img
                    style={{ width: "60%" }}
                    src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/decor.png"
                    alt=""
                  />
                </Box>
                <Box sx={{ mx: 1 }}>
                  <Typography variant="body2" gutterBottom component="div">
                    4K Video
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mb: 1 }}>
                <Box>
                  <img
                    style={{ width: "60%" }}
                    src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/decor.png"
                    alt=""
                  />
                </Box>
                <Box sx={{ mx: 1 }}>
                  <Typography variant="body2" gutterBottom component="div">
                    Contacts
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography
                sx={{ color: "white", mb: 3 }}
                variant="h5"
                gutterBottom
                component="div"
              >
                SERVICES
              </Typography>
            </Box>
            <Box sx={{ color: "gray" }}>
              <Box sx={{ display: "flex", mb: 1 }}>
                <Box>
                  <img
                    style={{ width: "60%" }}
                    src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/decor.png"
                    alt=""
                  />
                </Box>
                <Box sx={{ mx: 1 }}>
                  <Typography variant="body2" gutterBottom component="div">
                    Event Coverage
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mb: 1 }}>
                <Box>
                  <img
                    style={{ width: "60%" }}
                    src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/decor.png"
                    alt=""
                  />
                </Box>
                <Box sx={{ mx: 1 }}>
                  <Typography variant="body2" gutterBottom component="div">
                    Property Tours
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mb: 1 }}>
                <Box>
                  <img
                    style={{ width: "60%" }}
                    src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/decor.png"
                    alt=""
                  />
                </Box>
                <Box sx={{ mx: 1 }}>
                  <Typography variant="body2" gutterBottom component="div">
                    Multimedia
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography
                sx={{ color: "white", mb: 3 }}
                variant="h5"
                gutterBottom
                component="div"
              >
                LINKS
              </Typography>
            </Box>
            <Box sx={{ color: "gray" }}>
              <Box sx={{ display: "flex", mb: 1 }}>
                <Box>
                  <img
                    style={{ width: "60%" }}
                    src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/decor.png"
                    alt=""
                  />
                </Box>
                <Box sx={{ mx: 1 }}>
                  <Typography variant="body2" gutterBottom component="div">
                    Our Team
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mb: 1 }}>
                <Box>
                  <img
                    style={{ width: "60%" }}
                    src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/decor.png"
                    alt=""
                  />
                </Box>
                <Box sx={{ mx: 1 }}>
                  <Typography variant="body2" gutterBottom component="div">
                    Clients
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mb: 1 }}>
                <Box>
                  <img
                    style={{ width: "60%" }}
                    src="http://drone-media.ancorathemes.com/wp-content/uploads/2021/01/decor.png"
                    alt=""
                  />
                </Box>
                <Box sx={{ mx: 1 }}>
                  <Typography variant="body2" gutterBottom component="div">
                    Media
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ color: "white", mb: 3 }}
              variant="h5"
              gutterBottom
              component="div"
            >
              SIGNUP TO PLACEORDER
            </Typography>
            <Box sx={{ display: "flex", mb: 1 }}>
              <CustomInput
                aria-label="Demo input"
                placeholder="Enter Your Email Address"
              />
              <Box>
                <Button
                  sx={{ borderRadius: 0, py: "11px" }}
                  variant="contained"
                >
                  SignUp
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderBottom: "2px solid gray" }}></Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between',  mt: 4}}>
          <Box>
            <Typography
              sx={{ color: "white" }}
              variant="body1"
              gutterBottom
              component="div"
            >
              MonsterDrone{" "}
              <span style={{ color: "gray" }}>
                {" "}
                © 2022. All rights reserved.
              </span>
            </Typography>
          </Box>
          <Box>
            <Typography sx={{color: 'gray'}} variant="h6" gutterBottom>
            <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram"></i>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
