import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "../components/login/Login";
import CreateOperador from "../components/createOperator/CreateOperador";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/operator" element={<CreateOperador />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPrincipal;
