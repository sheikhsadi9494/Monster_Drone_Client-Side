import { DataObject } from "@mui/icons-material";
import { Alert, Button, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AddProducts = () => {
 
  const [product, setProduct] = useState({});
  const [addSuccessfully, setAddSuccessfully] = useState(false);

  const handleBlur = e => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...product };
    newDetails[field] = value;
    setProduct(newDetails);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    // collect data 
    const addProduct = {
      ...product,
    }
    // post data to the server 
    // console.log(addProduct);
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(addProduct)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        setAddSuccessfully(true);
      }
    })
  }
  

  return (
    <div>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Add Product
      </Typography>
      <Box>
        <form
          onSubmit={handleOnSubmit}
          style={{ width: "50%", margin: "auto" }}
        >
          <TextField
            label="Product Name"
            id="standard-size-small"
            defaultValue=""
            sx={{ width: "100%", mt: 2 }}
            size="small"
            name='productName'
            onBlur={handleBlur}
            variant="standard"
          />
          <TextField
            label="Price"
            id="standard-size-small"
            defaultValue=""
            sx={{ width: "100%", mt: 2 }}
            size="small"
            name="price"
            onBlur={handleBlur}
            variant="standard"
          />
          <TextField
            label="Image Url"
            id="standard-size-small"
            defaultValue=""
            sx={{ width: "100%", mt: 2 }}
            size="small"
            name="img"
            onBlur={handleBlur}
            variant="standard"
          />
          <TextField
            label="Product Details"
            sx={{ width: "100%", mt: 2 }}
            multiline
            rows={4}
            defaultValue=""
            name="discription"
            onBlur={handleBlur}
            variant="standard"
          />
          <Button
            sx={{ mt: 2, backgroundColor: "black" }}
            type="submit"
            variant="contained"
          >
            Add To Shop
          </Button>
        </form>
        {addSuccessfully && (
          <Alert sx={{ my: 4, width: "60%", mx: "auto" }} severity="success">
            Service Add Successfully !
          </Alert>
        )}
      </Box>
    </div>
  );
};

export default AddProducts;
