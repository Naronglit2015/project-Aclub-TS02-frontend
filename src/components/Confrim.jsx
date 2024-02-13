import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: rgb(20,206,217);
  background: radial-gradient(circle, rgba(20,206,217,1) 0%, rgba(68,0,140,1) 76%, rgba(105,38,164,1) 100%);
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
`;

const CartContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const CartItem = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled.span`
  font-weight: bold;
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
`;

const Confirm = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Container>
      <Heading>Confirm Page</Heading>
      <h3>Shopping Cart</h3>
      <CartContainer>
        {cart.map((product, index) => (
          <CartItem key={index}>
            <ProductName>{product.name} - ${product.price}</ProductName>
            <RemoveButton onClick={() => removeFromCart(index)}>Remove</RemoveButton>
          </CartItem>
        ))}
      </CartContainer>
      <ConfirmButton>Confirm Order</ConfirmButton>
    </Container>
  );
};

export default Confirm;
