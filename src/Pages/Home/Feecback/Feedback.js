import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleFeedback from "../SingleFeedback/SingleFeedback";

const Feedback = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
  return (
    <div>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Our Client Says
      </Typography>
      <Container>
        <Grid sx={{mt: 5, mb: 10}} container spacing={2}>
          {
              reviews.map(review => <SingleFeedback
              key={review._id}
              review={review}
              ></SingleFeedback>)
          }
        </Grid>
      </Container>
    </div>
  );
};

export default Feedback;
