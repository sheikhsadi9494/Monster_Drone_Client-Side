import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const ManageProduct = ({ product, products, setProducts }) => {
  const { productName, img, discription, price, _id } = product;

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you want to sure to delete this file");
    if (proceed) {
      const url = `https://stormy-retreat-92575.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("cancle order successfully");
            const remaining = products?.filter(
              (product) => product?._id !== id
            );
            setProducts(remaining);
          }
        });
    }
  };

  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold" }}
            gutterBottom
            variant="h6"
            component="div"
          >
            Price: $ {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {discription}
          </Typography>
          <Button
            onClick={() => handleDeleteProduct(_id)}
            sx={{ mt: 2 }}
            variant="contained"
          >
            Delete Product
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ManageProduct;
