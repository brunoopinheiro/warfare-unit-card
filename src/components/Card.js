import React from 'react';
import './Card.css';
import stringToArray from '../utils/stringToArray';
import getUnitIcon from '../assets';
import StatsDisplay from './StatsDisplay';

export default function Card({ formValues }) {
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

  const tags = `${unitExperience.toUpperCase()}, ${unitEquipment.toUpperCase()}, ${ancestry.toUpperCase()}, ${unitType.toUpperCase()}`;
  const traitsArr = stringToArray(traits);
  const unitIcon = getUnitIcon(unitType);
  

  return (
    <div className="card-container">
      <div className="unit-card">
        <div className="left-column">
          <div className="big-number-display">{ tier }</div>
          <img src={ unitIcon } alt="unit type icon" className="type-icon" />
          <div className="big-number-display">{ numberAtks }</div>
          <div className="big-number-display">{ dmg }</div>
        </div>
        <div className="right-column">
          <div className="top-right-container">
            <div className="names-tags">
              <p className="unit-name">{unitName}</p>
              <p className="unit-commander">{commanderName}</p>
              <p className="tags">{tags}</p>
            </div>
            <div className="big-number-display">{ unitSize }</div>
          </div>
          <div className="stats-container">
            <StatsDisplay value={`+${atk}`} label="ATK" />
            <StatsDisplay value={ def } label="DEF" />
            <StatsDisplay value={ `+${pow}` } label="POW" />
            <StatsDisplay value={ tou } label="TOU" />
            <StatsDisplay value={ `+${mor}` } label="MOR" />
            <StatsDisplay value={ `+${com}` } label="COM" />
          </div>
          <ul className="traits">
            {
              traitsArr.map((trait, index) => (
                <li key={`${trait}-${index}`}>{trait}</li>
              ))
            }
          </ul>
        </div>
        {/* <img src={ unitCard} alt="unit card background" className="card-background" /> */}
      </div>
      <button
        onClick={ () => console.log(document.getElementsByClassName('unit-card')[0]) }
      >
        Download Card!
      </button>
    </div>
  );
}