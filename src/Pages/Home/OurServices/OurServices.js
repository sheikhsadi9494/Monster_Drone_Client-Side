import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import OurService from "../OurService/OurService";

const OurServices = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(3)));
  }, []);

  return (
    <Box sx={{mb: 10}}>
      <Typography
        sx={{ my: 5, fontWeight: "bold", textAlign: "center" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Our Best Products
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {
              products.map(product => 
                <OurService
                key={product._id}
                product={product}
                ></OurService>
                )
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServices;
