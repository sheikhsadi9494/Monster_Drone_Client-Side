import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({product}) => {
    const { productName, discription, img, price, _id} = product;
  return (
    <Grid item xs={12} lg={4}>
      <Card sx={{boxShadow: 2}}>
        <CardMedia
          component="img"
          height="250"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="h6" color="text">
            Price: {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {discription}
          </Typography>
        </CardContent>
        <Link to={`/product/${_id}`} style={{textDecoration: 'none'}}>
          <Button
            sx={{ backgroundColor: "black", mx: 2, mb: 2}}
            variant="contained"
          >
            Buy Now
          </Button>
        </Link>
      </Card>
    </Grid>
  );
};

export default Product;
