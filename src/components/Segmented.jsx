import { useId } from 'react';

// options: [{ value, label }]
export default function Segmented({ label, options, value, onChange, hint, chipClassName = '' }) {
  const labelId = useId();

  return (
    <div className="field" role="group" aria-labelledby={ labelId }>
      <span className="field-label" id={ labelId }>{ label }</span>
      <div className="chips">
        {
          options.map((option) => (
            <button
              key={ option.value }
              type="button"
              className={ `chip ${chipClassName}` }
              aria-pressed={ String(value) === String(option.value) }
              onClick={ () => onChange(String(option.value)) }
            >
              { option.label }
            </button>
          ))
        }
      </div>
      { hint && <p className="hint">{ hint }</p> }
    </div>
  );
}
