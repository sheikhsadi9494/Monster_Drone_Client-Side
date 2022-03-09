import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PlaceOrderModal from "../PlaceOrderModal/PlaceOrderModal";
import Navbar from "../Shered/Navbar/Navbar";

const PlaceOrder = () => {
  const { productId } = useParams();
  const [product, setPorduct] = useState([]);
  const { img, _id, productName, discription, price } = product;

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setPorduct(data));
  }, []);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  
  return (
    <div>
        <Navbar></Navbar>
      <Card sx={{ maxWidth: 545, mx: 'auto', mt: 5}}>
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

          <Button
            sx={{ backgroundColor: "black", mx: 2, mb: 2 }}
            variant="contained"
            onClick={handleOpenModal}
          >
            Place Order
          </Button>
      </Card>

      <PlaceOrderModal
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      openModal={openModal}
      product={product}
      >

      </PlaceOrderModal>
    </div>
  );
};

export default PlaceOrder;
