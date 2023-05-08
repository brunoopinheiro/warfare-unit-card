import React from 'react';
import './Card.css';
import stringToArray from '../utils/stringToArray';
import downloadAsPng from '../utils/downloadAsPng';
import saveCardToLocalStorage from '../utils/saveCardToLocalStorage';
import getUnitIcon from '../assets';
import StatsDisplay from './StatsDisplay';
import DamageDisplay from './DamageDisplay';
import TopDisplay from './TopDisplay';
import Nameplate from './Nameplate';
import TraitsDisplay from './TraitsDisplay';

export default function Card({ formValues }) {
  const storageKey = 'savedCards';
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

  const tags = `${unitExperience.toUpperCase()}, ${unitEquipment.toUpperCase()}, ${ancestry.toUpperCase() || 'HUMAN'}, ${unitType.toUpperCase()}`;
  const tierRoman = ['I', 'II', 'III', 'IV', 'V'];
  const traitsArr = stringToArray(traits);
  const unitIcon = getUnitIcon(unitType);

  const downloadHandler = () => {
    const domElement = document.getElementById('unit-card');
    const cardName = unitName;
    downloadAsPng(domElement, cardName);
  }

  const saveCardHandler = () => {
    saveCardToLocalStorage(formValues, storageKey);
  }
  

  return (
    <div className="card-container">
      <div className="unit-card" id="unit-card">
        <div className="left-column">
          <TopDisplay number={ tierRoman[tier - 1] } label="TIER" />
          <img src={ unitIcon } alt="unit type icon" className="type-icon" />
          <DamageDisplay dmg={ dmg } numberAtks={ numberAtks } />
        </div>
        <div className="right-column">
          <div className="top-right-container">
            <div className="names-tags">
              <Nameplate text={ unitName } type="title" />
              <Nameplate text={ commanderName} type="labeled" label="Commander" />
              <Nameplate text={ tags } type="tags" />
            </div>
            <TopDisplay number={ unitSize } label="SIZE" />
          </div>
          <div className="stats-container">
            <StatsDisplay value={`+${atk}`} label="ATK" />
            <StatsDisplay value={ def } label="DEF" />
            <StatsDisplay value={ `+${pow}` } label="POW" />
            <StatsDisplay value={ tou } label="TOU" />
            <StatsDisplay value={ `+${mor}` } label="MOR" />
            <StatsDisplay value={ `+${com}` } label="COM" />
          </div>
          <TraitsDisplay traits={ traitsArr } />
        </div>
      </div>
      <button
        onClick={ downloadHandler }
      >
        Download As Image
      </button>
      <button
        onClick={ saveCardHandler }
      >
        Save Card
      </button>
    </div>
  );
}