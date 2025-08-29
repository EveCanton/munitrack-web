import React from "react";
import RouterPrincipal from "./routers/RouterPrincipal";
import 'bootstrap/dist/css/bootstrap.min.css';
import CitizenIncidents from "./components/citizenDetails/CitizenIncidents";

const App = () => {
  return (
    <div className="App">
      <RouterPrincipal />
    </div>
  );
};

export default App;