import { clamp } from '../utils/cardFormat';

export default function Stepper({ id, label, hint, value, min, max, onChange }) {
  const step = (delta) => onChange(String(clamp(clamp(value, min, max) + delta, min, max)));

  const handleInput = ({ target }) => {
    // Allow an empty or lone "-" while typing; clamp everything else
    if (target.value === '' || target.value === '-') {
      onChange(target.value);
      return;
    }
    onChange(String(clamp(target.value, min, max)));
  };

  return (
    <div className="field">
      <label className="field-label" htmlFor={ id }>
        { label }
        { hint && <small>{ hint }</small> }
      </label>
      <div className="stepper">
        <button type="button" className="step" aria-label={ `Decrease ${label}` } onClick={ () => step(-1) }>−</button>
        <input
          id={ id }
          type="number"
          inputMode="numeric"
          min={ min }
          max={ max }
          value={ value }
          onChange={ handleInput }
          onBlur={ () => onChange(String(clamp(value, min, max))) }
        />
        <button type="button" className="step" aria-label={ `Increase ${label}` } onClick={ () => step(1) }>+</button>
      </div>
    </div>
  );
}
