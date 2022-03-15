import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import ProductPageBanner from "../ProductPageBanner/ProductPageBanner";
import Navbar from "../Shered/Navbar/Navbar";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://stormy-retreat-92575.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Box>
        <Navbar></Navbar>
        <ProductPageBanner></ProductPageBanner>
      </Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center", mt: 10, mb: 10 }}
        gutterBottom
        component="div"
      >
        Our All Products
      </Typography>
      {products.length <= 0 ? (
        <Box sx={{ width: "3.5%", mx: "auto", my: 20}}>
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <Container sx={{ mt: 5, mb: 10 }}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default AllProducts;
