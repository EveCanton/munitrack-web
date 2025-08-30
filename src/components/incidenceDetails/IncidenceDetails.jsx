import {ciudadanos} from '../../Citizen.js'
import CitizenProfile from '../citizenDetails/CitizenProfile';
import CreateIncidence from './CreateIncidence';

const IncidenceDetails = () => {
    const ciudadano = ciudadanos[0]
  return (
    <div>
      <CitizenProfile ciudadano={ciudadano} />
      <CreateIncidence/>
    </div>
  )
}

export default IncidenceDetails
