import './Form.css';
import Stepper from './Stepper';
import Segmented from './Segmented';
import { TIER_ROMAN, toTitle } from '../utils/cardFormat';

const toOptions = (values) => values.map((value) => ({ value, label: toTitle(value) }));

const UNIT_TYPES = toOptions(['infantry', 'artillery', 'cavalry', 'aerial', 'siege', 'levy']);
const UNIT_SIZES = toOptions(['4', '6', '8', '10', '12']);
const TIERS = TIER_ROMAN.map((label, index) => ({ value: String(index + 1), label }));
const EXPERIENCE = [
  ['levies', 'Levies'], ['regular', 'Regular'], ['veteran', 'Veteran'], ['elite', 'Elite'], ['super-elite', 'Super Elite'],
];
const EQUIPMENT = [
  ['light', 'Light'], ['medium', 'Medium'], ['heavy', 'Heavy'], ['super-heavy', 'Super-Heavy'],
];

// Ranges are placeholders until confirmed against the K&W rules
const STATS = [
  { key: 'atk', label: 'ATK', hint: 'Attack', min: -9, max: 99 },
  { key: 'def', label: 'DEF', hint: 'Defense', min: 0, max: 99 },
  { key: 'pow', label: 'POW', hint: 'Power', min: -9, max: 99 },
  { key: 'tou', label: 'TOU', hint: 'Toughness', min: 0, max: 99 },
  { key: 'mor', label: 'MOR', hint: 'Morale', min: -9, max: 99 },
  { key: 'com', label: 'COM', hint: 'Command', min: -9, max: 99 },
];

function TextField({ id, label, value, maxLength, placeholder, onChange }) {
  return (
    <div className="field">
      <label className="field-label" htmlFor={ id }>
        { label }
        <small>{ value.length }/{ maxLength }</small>
      </label>
      <input
        id={ id }
        className="input"
        type="text"
        maxLength={ maxLength }
        placeholder={ placeholder }
        value={ value }
        onChange={ ({ target }) => onChange(target.value) }
      />
    </div>
  );
}

function SelectField({ id, label, value, options, onChange }) {
  return (
    <div className="field">
      <label className="field-label" htmlFor={ id }>{ label }</label>
      <select id={ id } className="input" value={ value } onChange={ ({ target }) => onChange(target.value) }>
        { options.map(([optionValue, optionLabel]) => <option key={ optionValue } value={ optionValue }>{ optionLabel }</option>) }
      </select>
    </div>
  );
}

export default function Form({ values, onFieldChange }) {
  const bind = (key) => ({ value: values[key], onChange: (value) => onFieldChange(key, value) });

  return (
    <form className="unit-form" aria-label="Unit details" onSubmit={ (event) => event.preventDefault() }>
      <fieldset className="form-section">
        <legend>Identity</legend>
        <TextField id="unit-name" label="Unit name" maxLength={ 20 } placeholder="Human Infantry" { ...bind('unitName') } />
        <div className="field-row field-row-2-1">
          <TextField id="commander" label="Commander" maxLength={ 37 } placeholder="Lord Saxton" { ...bind('commanderName') } />
          <TextField id="ancestry" label="Ancestry" maxLength={ 12 } placeholder="Human" { ...bind('ancestry') } />
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>Classification</legend>
        <Segmented label="Type" options={ UNIT_TYPES } { ...bind('unitType') } />
        <Segmented label="Unit size" options={ UNIT_SIZES } chipClassName="chip-narrow" { ...bind('unitSize') } />
        <div className="field-row">
          <SelectField id="experience" label="Experience" options={ EXPERIENCE } { ...bind('unitExperience') } />
          <SelectField id="equipment" label="Equipment" options={ EQUIPMENT } { ...bind('unitEquipment') } />
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>Statistics</legend>
        <div className="field-grid">
          {
            STATS.map(({ key, ...stat }) => (
              <Stepper key={ key } id={ `stat-${key}` } { ...stat } { ...bind(key) } />
            ))
          }
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>Attacks and tier</legend>
        <div className="field-row">
          <Stepper id="number-atks" label="Number of attacks" min={ 1 } max={ 9 } { ...bind('numberAtks') } />
          <Stepper id="damage" label="Damage" min={ 1 } max={ 9 } { ...bind('dmg') } />
        </div>
        <Segmented label="Tier" options={ TIERS } chipClassName="chip-narrow chip-display" { ...bind('tier') } />
      </fieldset>

      <fieldset className="form-section">
        <legend>Traits</legend>
        <div className="field">
          <label className="field-label" htmlFor="traits">
            Traits
            <small>{ values.traits.length }/500</small>
          </label>
          <textarea
            id="traits"
            className="input"
            rows="5"
            maxLength={ 500 }
            aria-describedby="traits-hint"
            value={ values.traits }
            onChange={ ({ target }) => onFieldChange('traits', target.value) }
          />
          <p className="hint" id="traits-hint">One trait per line. Text before a colon prints in bold on the card.</p>
        </div>
      </fieldset>
    </form>
  );
}
