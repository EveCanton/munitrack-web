import {ciudadanos} from '../../Citizen.js'
import CitizenProfile from '../citizenDetails/CitizenProfile';
import TopBar from '../topBar/TopBar.jsx';
import CreateIncidence from './CreateIncidence';

const IncidenceDetails = () => {
    const ciudadano = ciudadanos[0]
  return (
    <div>
      <TopBar/>
      <CitizenProfile ciudadano={ciudadano} />
      <CreateIncidence/>
    </div>
  )
}

export default IncidenceDetails
