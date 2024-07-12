import React, { useState } from "react";

const TravelsLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/agent/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Optionally handle response
        window.location.href = "/"; // Redirect to dashboard on successful login
        alert('Login Successfull')
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container">
      <div className="card bg-danger col-md-6 mx-auto mt-5 p-0">
        <div className="card-header bg-white text-danger">
          <h1 className="login-head text-center">Travels Login</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="text-white" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group">
              <label className="text-white" htmlFor="pwd">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-light btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TravelsLogin;
