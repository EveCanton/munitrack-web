import {ciudadanos} from './Citizen.js'

import CitizenProfile from './CitizenProfile';
import CitizenIncidents from './CitizenIncidents';

const CitizenDetails = () => {
  const ciudadano = ciudadanos[0]; // Simulamos que mostramos el primer ciudadano
  return (
    <>
      <CitizenProfile ciudadano={ciudadano} />
      <CitizenIncidents ciudadano={ciudadano} />
    </>
  );
};

export default CitizenDetails;
