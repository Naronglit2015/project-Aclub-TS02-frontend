import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UserHomeContainer = styled.div`
padding: 10px;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(20, 206, 217);
  background: radial-gradient(
    circle,
    rgba(20, 206, 217, 1) 0%,
    rgba(68, 0, 140, 1) 76%,
    rgba(105, 38, 164, 1) 100%
  );
`;
 
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 50px;
  color: white;
  font-weight: bold;
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 30px;
`;

const TodoItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
`;

const UserHome = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8889/todos', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTodos(response.data.todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
        // Handle error (e.g., redirect to login page)
      }
    };

    fetchData();
  }, []);

  return (
    <UserHomeContainer>
      <Title>User Home</Title>
      <TodoList>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem key={todo.id}>
              {todo.title}
            </TodoItem>
          ))
        ) : (
          <p>No todos available.</p>
        )}
      </TodoList>
    </UserHomeContainer>
  );
};

export default UserHome;
