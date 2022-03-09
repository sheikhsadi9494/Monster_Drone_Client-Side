import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Navbar from '../Shered/Navbar/Navbar';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <Container sx={{mt: 5}}>
            <Grid container spacing={2}>
          {
              products.map(product => 
                <Product
                key={product._id}
                product={product}
                ></Product>
                )
          }
        </Grid>
            </Container>
        </div>
    );
};

export default AllProducts;