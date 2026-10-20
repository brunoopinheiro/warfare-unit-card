import { forwardRef } from 'react';
import './Card.css';
import getUnitIcon from '../assets';
import { toTitle, formatPlain, formatSigned, toRoman, parseTraits } from '../utils/cardFormat';
import StatsDisplay from './StatsDisplay';
import DamageDisplay from './DamageDisplay';
import TopDisplay from './TopDisplay';
import Nameplate from './Nameplate';
import TraitsDisplay from './TraitsDisplay';

const Card = forwardRef(function Card({ formValues, inkSaver = false }, ref) {
  const {
    unitName,
    commanderName,
    unitType,
    ancestry,
    unitSize,
    unitExperience,
    unitEquipment,
    atk,
    def,
    pow,
    tou,
    mor,
    com,
    numberAtks,
    dmg,
    tier,
    traits,
  } = formValues;

  const tags = [toTitle(unitExperience), toTitle(unitEquipment), ancestry || 'Human', toTitle(unitType)].join(' · ');

  return (
    <div
      ref={ ref }
      className={ `unit-card${inkSaver ? ' ink-saver' : ''}` }
      role="img"
      aria-label={ `Unit card for ${unitName || 'an unnamed unit'}` }
    >
      <div className="banner">
        <TopDisplay value={ toRoman(tier) } label="Tier" />
        <img src={ getUnitIcon(unitType) } alt="" className="type-icon" />
        <span className="type-label">{ toTitle(unitType) }</span>
        <DamageDisplay numberAtks={ formatPlain(numberAtks) } dmg={ formatPlain(dmg) } />
      </div>
      <div className="card-body">
        <div className="card-header">
          <Nameplate unitName={ unitName } commanderName={ commanderName } tags={ tags } />
          <TopDisplay value={ unitSize } label="Size" />
        </div>
        <div className="stats-row">
          <StatsDisplay value={ formatSigned(atk) } label="ATK" />
          <StatsDisplay value={ formatPlain(def) } label="DEF" />
          <StatsDisplay value={ formatSigned(pow) } label="POW" />
          <StatsDisplay value={ formatPlain(tou) } label="TOU" />
          <StatsDisplay value={ formatSigned(mor) } label="MOR" />
          <StatsDisplay value={ formatSigned(com) } label="COM" />
        </div>
        <TraitsDisplay traits={ parseTraits(traits) } />
      </div>
    </div>
  );
});

export default Card;
