import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://stormy-retreat-92575.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you want to sure to delete this file");
    if (proceed) {
      const url = `https://stormy-retreat-92575.herokuapp.com/allOrders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("cancle order successfully");
            const remaining = orders?.filter((row) => row?._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleUpdateOrder = (id) => {
    const url = `https://stormy-retreat-92575.herokuapp.com/allOrders/${id}`;
    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("cancle order successfully");
          const remaining = orders?.filter((row) => row?._id !== id);
          setOrders(remaining);
        }
      });
  };

  return (
    <div>
      <Typography
        sx={{ fontWeight: "bold", textAlign: "center", mb: 5 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Total Orders: {orders.length}
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Price
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Update
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Delete
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.productName}
                </TableCell>
                <TableCell align="center"> {row.email}</TableCell>
                <TableCell align="center"> ${row.price}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleUpdateOrder(row._id)}>
                    Update
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleDeleteOrder(row._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageAllOrders;
