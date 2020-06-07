import React, { useState } from "react";
import Hello from "./Hello";

const RegistratonForm = () => {
  const [values, handleChange] = useState({ email: "", password: "" });
  const [showHello, setShowHello] = useState(true);
  return (
    <>
      <button onClick={() => setShowHello(!showHello)}>toggle hello</button>
      {showHello ? <Hello /> : null}
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </>
  );
};

export default RegistratonForm;
