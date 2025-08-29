
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/login/Login";
import CreateOperador from "../components/createOperator/CreateOperador";
import CreateCitizen from "../components/createCitizen/CreateCitizen";
import CitizenDetails from "../components/citizenDetails/CitizenDetails";


const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/operators/new" element={<CreateOperador />} />
        <Route path="/citizens/new" element={<CreateCitizen />} />
        <Route path="/citizens/:id" element={<CitizenDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPrincipal;
