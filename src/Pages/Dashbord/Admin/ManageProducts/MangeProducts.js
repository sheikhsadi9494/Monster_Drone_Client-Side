import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import ManageProduct from "../ManageProduct/ManageProduct";

const MangeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://stormy-retreat-92575.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Typography
        sx={{ fontWeight: "bold", textAlign: "center", mb: 5 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Manage Products
      </Typography>
      {
        products.length <= 0 ?
        <Box sx={{ width: "3.5%", mx: "auto", mt: 10 }}>
        <CircularProgress color="inherit" />
      </Box>
      :
      <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <ManageProduct
            key={product._id}
            product={product}
            setProducts={setProducts}
            products={products}
          ></ManageProduct>
        ))}
      </Grid>
    </Container>
      }
    </div>
  );
};

export default MangeProducts;
