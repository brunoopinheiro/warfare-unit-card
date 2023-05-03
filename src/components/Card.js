import React from 'react';
import './Card.css';
import stringToArray from '../utils/stringToArray';
import getUnitIcon, { unitCard } from '../assets';

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
        <p className="unit-name">{unitName}</p>
        <p className="unit-commander">{commanderName}</p>
        <img src={ unitIcon } alt="unit type icon" />
        <div className="big-number-display">{ tier }</div>
        <div className="big-number-display">{ unitSize }</div>
        <div className="big-number-display">{ numberAtks }</div>
        <div className="big-number-display">{ dmg }</div>
        <div className="big-stat-display">{ `+${atk}` }</div>
        <div className="big-stat-display">{ def }</div>
        <div className="big-stat-display">{ `+${pow}` }</div>
        <div className="big-stat-display">{ tou }</div>
        <div className="big-stat-display">{ `+${mor}` }</div>
        <div className="big-stat-display">{ `+${com}` }</div>
        <span className="tags">{tags}</span>
        <ul className="traits">
          {
            traitsArr.map((trait, index) => (
              <li key={`${trait}-${index}`}>{trait}</li>
            ))
          }
        </ul>
        <img src={ unitCard} alt="unit card background" />
      </div>
      <button
        onClick={ () => console.log(document.getElementsByClassName('unit-card')[0]) }
      >
        Download Card!
      </button>
    </div>
  );
}