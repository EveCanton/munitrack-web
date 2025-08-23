import React from "react";

const CreateOperador = () => {
  return (
    <div className="container mt-5">
      <h1>Create Operator</h1>
      <p>This is the page where you can create a new operator.</p>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Default
        </span>
        <h1>Create Operator</h1>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
    </div>
  );
};

export default CreateOperador;
