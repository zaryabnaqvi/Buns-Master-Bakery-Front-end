import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Account = () => {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="Account">
      {currentForm === "Login" ? (
        <Login onformSwitch={toggleForm} />
      ) : (
        <Register onformSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Account;
