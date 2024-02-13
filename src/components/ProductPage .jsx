import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProductContainer = styled.div`
  margin: 20px;
  background: rgb(20,206,217);
  background: radial-gradient(circle, rgba(20,206,217,1) 0%, rgba(68,0,140,1) 76%, rgba(105,38,164,1) 100%);
  padding: 10px;
  min-height: 100vh; /* กำหนดความสูงของ ProductContainer เท่ากับความสูงของหน้าจอ */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductTitle = styled.h1`
  font-weight: bold;
  font-size: 32px;
  color: white; 
  text-align: center;
  margin-bottom: 20px;
  margin-top: -400px;
`;

const ProductListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row; /* เปลี่ยนเป็นแนวนอน */
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; /* เพิ่ม flex-wrap เพื่อให้รายการสินค้าเรียงต่อกันอย่างสวยงาม */
  gap: 20px; /* เพิ่มระยะห่างระหว่างรายการสินค้า */
`;

const ProductItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8); 
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.h2`
  font-weight: bold;
  color: black;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-weight: bold;
  color: black;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: black;
  font-size: 20px;
`;

const BuyButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
`;

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8889/auth/product', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Run only once when component mounts

  const handleBuyClick = (productId) => {
    // Add logic here for purchasing product
    console.log('Product with ID', productId, 'has been purchased');
  };

  return (
    <ProductContainer>
      <ProductTitle>Product List</ProductTitle>
      <ProductListContainer>
        {products.map(product => (
          <ProductItem key={product.id}>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>Price: ${product.price}</ProductPrice>
            </ProductInfo>
            <BuyButton onClick={() => handleBuyClick(product.id)}>Buy</BuyButton>
          </ProductItem>
        ))}
      </ProductListContainer>
    </ProductContainer>
  );
}

export default ProductList;
