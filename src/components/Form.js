import useFormState from "use-form-state/dist/useFormState";
import formInitialValues from "../utils/formInitialValues";
import './Form.css';

export default function Form({ getFormValues, formReloadedState }) {
  const { getNativeInputProps, values } = useFormState(formReloadedState || formInitialValues);

  const returnValues = () => {
    const formValues = values;
    getFormValues(formValues);
  }

  return(
    <div className="form-container">
      <form>
        <div className="text-inputs">
          <label>
          <span>Unit Name</span>
            <input
              type="text"
              className="text-input"
              placeholder="Human Infantry"
              maxLength="20"
              { ...getNativeInputProps('unitName') }
              required
            />
          </label>
          <label>
            <span>Commander</span>
            <input
              type="text"
              className="text-input"
              placeholder="Lord Saxton"
              maxLength="37"
              { ...getNativeInputProps('commanderName') }
            />
          </label>
          <label>
            <span>Ancestry</span>
            <input
              type="text"
              className="text-input"
              placeholder="Human"
              maxLength="12"
              { ...getNativeInputProps('ancestry') }
              required
            />
          </label>
        </div>
        <div className="select inputs">
          <label>
            <span>Type</span>
            <select
              name="unitType"
              {...getNativeInputProps('unitType') }
            >
              <option value="infantry">Infantry</option>
              <option value="artillery">Artillery</option>
              <option value="cavalry">Cavalry</option>
              <option value="aerial">Aerial</option>
              <option value="siege">Siege</option>
              <option value="levy">Levy</option>
            </select>
          </label>
          <label>
            <span>Unit Size</span>
            <select
              name="unitSize"
              { ...getNativeInputProps('unitSize') }
            >
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
            </select>
          </label>
          <label>
            <span>Experience</span>
            <select
              name="unitExperience"
              { ...getNativeInputProps('unitExperience') }
            >
              <option value="levies">Levies</option>
              <option value="regular">Regular</option>
              <option value="veteran">Veteran</option>
              <option value="elite">Elite</option>
              <option value="super-elite">Super Elite</option>
            </select>
          </label>
          <label>
            <span>Equipment</span>
            <select
              name="unitEquipment"
              { ...getNativeInputProps('unitEquipment') }
            >
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="heavy">Heavy</option>
              <option value="super-heavy">Super-Heavy</option>
            </select>
          </label>
        </div>
        <fieldset>
          <legend>Unit Statistics</legend>
          <label>
            <span>ATK</span>
            <input
              type="number"
              className="number-input"
              max="99"
              { ...getNativeInputProps('atk') }
            />
          </label>
          <label>
            <span>DEF</span>
            <input
              type="number"
              className="number-input"
              max="99"
              { ...getNativeInputProps('def') }
            />
          </label>
          <label>
            <span>POW</span>
            <input
              type="number"
              className="number-input"
              max="99"
              { ...getNativeInputProps('pow') }
            />
          </label>
          <label>
            <span>TOU</span>
            <input
              type="number"
              className="number-input"
              max="99"
              { ...getNativeInputProps('tou') }
            />
          </label>
          <label>
            <span>MOR</span>
            <input
              type="number"
              className="number-input"
              max="99"
              { ...getNativeInputProps('mor') }
            />
          </label>
          <label>
            <span>COM</span>
            <input
              type="number"
              className="number-input"
              max="99"
              { ...getNativeInputProps('com') }
            />
          </label>
        </fieldset>
        <div className="dmg-inputs">
          <label>
            <span>Number of Attacks</span>
            <input
              type="number"
              className="number-input"
              max="9"
              { ...getNativeInputProps('numberAtks') }
            />
          </label>
          <label>
            <span>Damage</span>
            <input
              type="number"
              max="9"
              className="number-input"
              { ...getNativeInputProps('dmg') }
            />
          </label>
          <label>
            <span>Tier</span>
            <input
              type="number"
              max="5"
              className="number-input"
              { ...getNativeInputProps('tier') }
            />
          </label>
        </div>
        <label className="textarea-label">
          <span>Traits</span>
          <textarea
            rows="5"
            maxLength="500"
            { ...getNativeInputProps('traits') }
          />
        </label>
      </form>
      <button
        type="button"
        className="standard-button"
        onClick={ returnValues }
      >
        Update Card
      </button>
    </div>
  );
}
