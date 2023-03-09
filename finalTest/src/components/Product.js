import React, { Component } from "react";
import {} from './product.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Sidebar  from './sidebar';

export class Product extends Component {
  render() {
    let { title, description, imageUrl, price } = this.props;
    return (
      <>
        <Sidebar />
        <div>
        
          <img src={imageUrl} alt="product" height={200} width={300} />
          <h5>{title}</h5>
          <p>{description}</p>
          <p>{price}</p>
          <Stack direction="row" spacing={5} justifyContent="center">
        <Button type='submit' variant="contained" color="success">Edit</Button>
        <Button type='submit' variant="contained" color="success">Delete</Button>
          </Stack>
        </div>
      </>
    );
  }
}

export default Product;