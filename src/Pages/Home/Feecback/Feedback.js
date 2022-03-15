import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleFeedback from "../SingleFeedback/SingleFeedback";

const Feedback = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://stormy-retreat-92575.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", mb: 5 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Our Customer's Says
      </Typography>
      {reviews.length <= 0 ? (
        <Box sx={{ width: "3.5%", mx: "auto", mt: 10 }}>
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <Container>
          <Grid sx={{ mt: 5, mb: 10 }} container spacing={2}>
            {reviews.map((review) => (
              <SingleFeedback key={review._id} review={review}></SingleFeedback>
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Feedback;
