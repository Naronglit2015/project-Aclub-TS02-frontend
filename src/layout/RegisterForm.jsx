import axios from 'axios';
import { useState } from 'react';
import './RegisterForm.css'; // Import custom styles

export default function RegisterForm() {
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Validation
      if (input.password !== input.confirmPassword) {
        return alert('Please check confirm password');
      }

      const response = await axios.post('http://localhost:8889/auth/register', input);
      console.log(response);

      if (response.status === 200) {
        alert('Register Successful');
        // You may choose to redirect the user to the login page or perform any other action after successful registration.
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleReset = () => {
    setInput({
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="register-container">
        <div className="text-3xl mb-4 text-center">Register Form</div>
        <form className="mb-4" onSubmit={handleSubmit}>
          <label className="form-control">
            <span className="label-text">Username</span>
            <input
              type="text"
              placeholder="Username"
              className="input"
              name="username"
              value={input.username}
              onChange={handleChange}
            />
          </label>

          <label className="form-control">
            <span className="label-text">Email</span>
            <input
              type="email"
              placeholder="Email"
              className="input"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </label>

          <label className="form-control">
            <span className="label-text">Password</span>
            <input
              type="password"
              placeholder="Password"
              className="input"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </label>

          <label className="form-control">
            <span className="label-text">Confirm password</span>
            <input
              type="password"
              placeholder="Confirm password"
              className="input"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={handleChange}
            />
          </label>

          <div className="flex flex-col gap-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
