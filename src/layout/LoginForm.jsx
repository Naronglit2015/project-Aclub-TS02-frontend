import axios from 'axios'
import { useState } from "react";
import useAuth from '../hooks/useAuth';
import './LoginForm.css'; // Import custom styles

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: '', 
    password: ''
  });

  const handleChange = e => {
    setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      // validation
      const response = await axios.post('http://localhost:8889/auth/login', input);
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
      const userResponse = await axios.get('http://localhost:8889/auth/me', {
        headers: { Authorization: `Bearer ${response.data.token}` }
      });
      console.log(userResponse.data);
      setUser(userResponse.data);
      
    } catch(err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="login-container">
        <div className='text-3xl mb-4 text-center'>Login Form</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label">
            Username or Email
            <input
              type="text"
              placeholder="Username or Email"
              className="login-input"
              name="username"
              value={input.username}
              onChange={handleChange}
            />
          </label>

          <label className="login-label">
            Password
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
