import { async } from "@firebase/util";
import { Button, Rating, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();

  const initialInfo = { name: user?.displayName, email: user?.email };
  const [reviewDetails, setReviewDetails] = React.useState(initialInfo);

  const handleBlur = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newDetails = { ...reviewDetails };
    newDetails[field] = value;
    console.log(newDetails);
    setReviewDetails(newDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      ...reviewDetails,
      ...initialInfo,
    };
    //  post data to the databaes
    console.log(review);
    fetch("https://stormy-retreat-92575.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <Box>
        <Typography
          sx={{ textAlign: "center" }}
          variant="h3"
          gutterBottom
          component="div"
        >
          Review
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "60%", margin: "auto" }}>
          <TextField
            label="Image url"
            sx={{ width: "100%" }}
            id="outlined-size-small"
            name="imageUrl"
            defaultValue=""
            onBlur={handleBlur}
            size="small"
          />{" "}
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Your Feedback"
            sx={{ my: 2, width: "100%" }}
            multiline
            rows={4}
            name="feedback"
            defaultValue=""
            onBlur={handleBlur}
          />
          <Rating sx={{ mb: 2 }} name="star" onBlur={handleBlur} /> <br />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Box>
      <Outlet />
    </div>
  );
};

export default Review;

// if(!img){
//   return;
// }
// // collect data
// const formData = new FormData();
// formData.append('productName', productName);
// formData.append('price', price);
// formData.append('discription', discription);
// formData.append('img', img);

// //  post data to the server
// fetch('https://stormy-retreat-92575.herokuapp.com/products', {
//   method: 'POST',
//   body: formData
// })
// .then(res => res.json())
// .then(data => {
//   if(data.insertedId){
//     console.log('doctor added successfully')
//   }
// })
// .catch(error => {
//   console.error('Error:', error);
// });
// };

{
  /* <Input
            sx={{ mt: 4, width: "100%" }}
            accept="image/*"
            type="file"
            onChange={e => setImg(e.target.files[0])}
          /> */
}

// onChange={e => setProductName(e.target.value)}
