import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MyOrder = ({ order, orders, setOrders }) => {
  const { productName, discription, img, price, _id, email, status } = order;

  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Are you want to sure to delete this file");
    if (proceed) {
      const url = `https://stormy-retreat-92575.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("cancle order successfully");
            const remaining = orders?.filter((order) => order?._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <Grid item xs={12} lg={4}>
      <Card>
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
          <Typography sx={{ fontWeight: "bold" }} variant="body1" color="text">
            Price: {price}
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="body1" color="text">
            Status: {status}
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="body1" color="text">
            email: {email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {discription}
          </Typography>
        </CardContent>

        <Button
          onClick={() => handleDeleteBooking(_id)}
          sx={{ mx: 2, mb: 2 }}
          variant="contained"
        >
          Cancle Order
        </Button>
      </Card>
    </Grid>
  );
};

export default MyOrder;
