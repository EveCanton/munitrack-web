import { ciudadanos } from "../../Citizen.js";

import CitizenProfile from "./CitizenProfile";
import CitizenIncidents from "./CitizenIncidents";
import TopBar from "../topBar/TopBar.jsx";

const CitizenDetails = () => {
  const ciudadano = ciudadanos[0]; // Simulamos que mostramos el primer ciudadano
  return (
    <div id="fondo">
      <TopBar />
      <CitizenProfile ciudadano={ciudadano} />
      <CitizenIncidents ciudadano={ciudadano} />
    </div>
  );
};

export default CitizenDetails;