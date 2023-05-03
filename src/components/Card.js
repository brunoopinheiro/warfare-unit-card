import React from 'react';
import './Card.css';
import stringToArray from '../utils/stringToArray';
// import CardBackground from '../assets/unit_card_no-bg.svg';

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
  

  return (
    <div className="unit-card">
      <p className="unit-name">{unitName}</p>
      <p className="unit-commander">{commanderName}</p>
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
    </div>
  );
}