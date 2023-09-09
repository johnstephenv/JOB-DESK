import React, { useState } from "react";


const Login = () => {
  const [activeTab, setActiveTab] = useState("user");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="login-container">
      <div className="login-tabs">
        <button
          className={`login-tab ${activeTab === "user" ? "active" : ""}`}
          onClick={() => handleTabClick("user")}
        >
          User Login
        </button>
        <button
          className={`login-tab ${activeTab === "admin" ? "active" : ""}`}
          onClick={() => handleTabClick("admin")}
        >
          Admin Login
        </button>
      </div>
      <div className="login-form">
        {activeTab === "user" && (
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        )}
        {activeTab === "admin" && (
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;