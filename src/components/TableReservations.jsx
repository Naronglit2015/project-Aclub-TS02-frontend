import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  background: radial-gradient(circle, rgba(20,206,217,1) 0%, rgba(68,0,140,1) 76%, rgba(105,38,164,1) 100%);
  color: white; /* เปลี่ยนสีข้อความเป็นสีขาว */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const TableReservations = () => {
  const [userId, setUserId] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState(''); // แก้ไขตรงนี้เป็น date

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User ID:', userId);
    console.log('Table Number:', tableNumber);
    console.log('Status:', status);
    console.log('Date:', date); // เพิ่มการแสดงค่า date ใน console
  };

  return (
    <Container>
      <Title>Table Reservation</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="userId">Name:</Label>
          <Input
            type="text"
            id="userId"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="tableNumber">Table Number:</Label>
          <Input
            type="text"
            id="tableNumber"
            value={tableNumber}
            onChange={(event) => setTableNumber(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="status">Status:</Label>
          <Input
            type="text"
            id="status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Date:</Label> {/* แก้ไขตรงนี้เป็น date */}
          <Input
            type="text"
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </FormGroup>
        <Button type="submit">Reserve Table</Button>
      </Form>
    </Container>
  );
};

export default TableReservations;
