
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/login/Login";
import CreateOperador from "../components/createOperator/CreateOperador";
import CreateCitizen from "../components/createCitizen/CreateCitizen";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/operator" element={<CreateOperador />} />
        <Route path="/ciudadano" element={<CreateCitizen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPrincipal;
