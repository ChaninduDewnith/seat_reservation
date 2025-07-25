import React, { useState } from "react";
import "./signup.css";
import axios from "axios";

function SignupPage() {
  const [formData, setFormData] = useState({
    userId: "",
    role: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      setSuccessMessage("");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        id: formData.userId,
        userrole: formData.role,
        username: formData.name,
        email: formData.email,
        userpassword: formData.confirmPassword,
      });

      console.log("Response:", res.data);

      setSuccessMessage("Account created successfully!");
      setErrorMessage("");
      setFormData({
        userId: "",
        role: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      const msg = err.response?.data?.message || "Something went wrong!";
      setErrorMessage(msg);
      setSuccessMessage("");
    }
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signup-container">
        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Join our platform and get started today</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="userId" className="form-label">User ID</label>
              <input
                type="text"
                id="userId"
                name="userId"
                className="form-input"
                placeholder="Enter your ID"
                value={formData.userId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="role" className="form-label">Role</label>
              <select
                id="role"
                name="role"
                className="form-input"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select your role</option>
                <option value="admin">Admin</option>
                <option value="intern">Intern</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* ✅ Alert Messages */}
          {successMessage && (
            <div className="alert alert-success text-center">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger text-center">{errorMessage}</div>
          )}

          <button type="submit" className="signup-btn">Create Account</button>
        </form>

        <div className="login-link">
          Already have an account? <a href="/login">Sign in here</a>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
