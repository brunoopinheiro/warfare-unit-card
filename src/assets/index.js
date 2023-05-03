import infantry from './infantry.svg';
import aerial from './aerial.svg';
import artillery from './artillery.svg';
import cavalry from './cavalry.svg';
import levy from './levy.svg';
import siege from './siege.svg';
import unitCard from './UnitCard.png'

const getUnitIcon = (unitType) => {
  if(unitType === 'infantry') return infantry;
  if(unitType === 'aerial') return aerial;
  if(unitType === 'artillery') return artillery;
  if(unitType === 'cavalry') return cavalry;
  if(unitType === 'levy') return levy;
  if(unitType === 'siege') return siege;
  console.log('Returning default image.')
  return infantry;
}

export default getUnitIcon;
export { infantry, aerial, artillery, cavalry, levy, siege, unitCard };