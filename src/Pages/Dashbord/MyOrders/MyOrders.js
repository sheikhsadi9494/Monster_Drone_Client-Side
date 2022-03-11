import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MyOrder from "../MyOrder/MyOrder";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://stormy-retreat-92575.herokuapp.com/orders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);
  return (
    <div>
      <Typography
        sx={{ fontWeight: "bold", textAlign: "center" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        My Orders
      </Typography>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          {orders.map((order) => (
            <MyOrder
              key={order._id}
              order={order}
              orders={orders}
              setOrders={setOrders}
            ></MyOrder>
          ))}
        </Grid>
      </Container>
      <Outlet />
    </div>
  );
};

export default MyOrders;
