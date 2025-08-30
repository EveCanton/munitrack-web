import { ciudadanos } from "./Citizen.js";

import CitizenProfile from "./CitizenProfile";
import CitizenIncidents from "./CitizenIncidents";

const CitizenDetails = () => {
  const ciudadano = ciudadanos[0]; // Simulamos que mostramos el primer ciudadano
  return (
    <div className="bg-violet min-vh-100 p-4">
      <CitizenProfile ciudadano={ciudadano} />
      <CitizenIncidents ciudadano={ciudadano} />
    </div>
  );
};

export default CitizenDetails;
