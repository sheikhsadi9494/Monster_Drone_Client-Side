import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid gray",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function PlaceOrderModal({
  handleCloseModal,
  openModal,
  product,
}) {
  const { user } = useAuth();
  const { img, _id, productName, discription, price } = product;

  const initialInfo = { name: user.displayName, email: user.email };
  const [orderDetails, setOrderDetails] = React.useState(initialInfo);

  const handleBlur = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...orderDetails };
    newDetails[field] = value;
    setOrderDetails(newDetails);
  };

  const handleSubmit = e => {
      e.preventDefault();
    //   collact data 
    const order = {
        ...orderDetails,
        img, 
        productName,
        discription,
        price,
        status: 'pending'
    }
    // post data to the server
    console.log(order);
    fetch('http://localhost:5000/orders', {
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)

    })
    .then(res => res.json())
    .then(data => {
        if (data.insertedId) {
            handleCloseModal();
          }
    });
  }

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ fontWeight: "bold" }}
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            {productName}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Email"
              defaultValue={user.email}
              typ="email"
              size="small"
              sx={{ my: 2, width: "100%" }}
              name="email"
              onBlur={handleBlur}
            />
            <TextField
              label="Your Name"
              defaultValue={user.displayName}
              size="small"
              sx={{ mb: 2, width: "100%" }}
              name="name"
              onBlur={handleBlur}
            />
            <TextField
              label="Your PhoneNumber"
              defaultValue=""
              size="small"
              sx={{ mb: 2, width: "100%" }}
              name="phoneNumber"
              onBlur={handleBlur}
            />
            <TextField
              label="Your Address"
              defaultValue=""
              size="small"
              sx={{ mb: 2, width: "100%" }}
              name="address"
              onBlur={handleBlur}
            />
            <TextField
              label="Price"
              defaultValue={price}
              size="small"
              sx={{ mb: 2, width: "100%" }}
              name="price"
              onBlur={handleBlur}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-multiline-static"
              label="About this product"
              sx={{ width: "100%" }}
              multiline
              rows={4}
              defaultValue={discription}
              name="discription"
              onBlur={handleBlur}
              InputProps={{
                readOnly: true,
              }}
            />
            <Button type="submit" sx={{ mt: 2 }} variant="contained">
              Order Confrom
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
