import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PlaceOrderModal from "../PlaceOrderModal/PlaceOrderModal";
import Navbar from "../Shered/Navbar/Navbar";

const PlaceOrder = () => {
  const { productId } = useParams();
  const [product, setPorduct] = useState([]);
  const { img, _id, productName, discription, price } = product;

  useEffect(() => {
    fetch(`https://stormy-retreat-92575.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setPorduct(data));
  }, []);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <Navbar></Navbar>
      <Card sx={{ width: "70%", mx: "auto", mt: 10, boxShadow: 0 }}>
        <Grid sx={{ alignItems: "center" }} container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              sx={{ borderRadius: "10px", py: 4 }}
              image={img}
              alt="Live from space album cover"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{ display: "flex", flexDirection: "column", marginLeft: 3 }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h4">
                  {productName}
                </Typography>
                <Box>
                  <Typography
                    sx={{ mt: 3, mb: 2 }}
                    component="div"
                    variant="h5"
                  >
                    Price: $ {price}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {discription}
                  </Typography>
                  <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    onClick={handleOpenModal}
                  >
                    Place Order
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <PlaceOrderModal
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        product={product}
      ></PlaceOrderModal>
    </div>
  );
};

export default PlaceOrder;
