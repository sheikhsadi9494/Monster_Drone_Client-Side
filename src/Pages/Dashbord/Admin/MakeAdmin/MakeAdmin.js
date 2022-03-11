import { async } from "@firebase/util";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://stormy-retreat-92575.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
  };
  return (
    <div>
      <Typography
        sx={{ textAlign: "center", mb: 5, fontWeight: "bold", mt: 5 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Make Admin
      </Typography>
      <Box sx={{ width: "50%", mx: "auto" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Eamil"
            sx={{ width: "100%", mx: "auto" }}
            defaultValue=""
            size="small"
            onBlur={handleBlur}
          />
          <Box sx={{ mt: 2 }}>
            <Button
              type="submit"
              style={{ margin: "auto" }}
              variant="contained"
            >
              Make Admin
            </Button>
          </Box>
        </form>
        {success && (
          <Alert className="w-25 my-3 mx-auto" variant="success">
            Promoted To Admin Successfully !!
          </Alert>
        )}
      </Box>
    </div>
  );
};

export default MakeAdmin;
