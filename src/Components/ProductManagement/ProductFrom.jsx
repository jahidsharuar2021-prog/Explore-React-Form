import React, { useState } from 'react';

const ProductFrom = ({ handleAddProduct }) => {

    const[error,setError]=useState('')

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    
    // validation
    if(name.length===0){
        setError('please provide a product name');
        return;
    }
    else if(price.length===0){
        setError("please provide a price");
        return;
    }
    else if(price<0){
        setError('price can not be negative');
        return;
    }
    else if(quantity.length===0){
        setError('you dont have select any product');
        return;
    }
    else{
        setError('');
        
    }

    // Make of object
    const newProduct = {
      name,
      price,
      quantity,
    };
    // console.log(newProduct);
   
        handleAddProduct(newProduct);
    
   
  };

  return (
    <div>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="product name" />
        <br />
        <input type="text" name="price" placeholder="product price" />
        <br />
        <input type="text" name="quantity" placeholder="product quantity" />
        <br />
        <input type="submit" value="submit" />
      </form>
      <p style={{color:'red'}}><small>{error}</small></p>
    </div>
  );
};

export default ProductFrom;