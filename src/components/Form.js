import useFormState from "use-form-state/dist/useFormState";
import formInitialValues from "../utils/formInitialValues";

export default function Form({ getFormValues }) {
  const { getNativeInputProps, values } = useFormState(formInitialValues);

  const returnValues = () => {
    const formValues = values;
    getFormValues(formValues);
  }

  return(
    <div>
      <form>
        <label>
          <span>Unit Name: </span>
          <input
            type="text"
            placeholder="Unit Name"
            { ...getNativeInputProps('unitName') }
            required
          />
        </label>
        <label>
          <span>Commander: </span>
          <input
            type="text"
            placeholder="Commander Name"
            { ...getNativeInputProps('commanderName') }
          />
        </label>
        <label>
          <span>Type: </span>
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
          <span>Ancestry: </span>
          <input
            type="text"
            placeholder="Ancestry"
            { ...getNativeInputProps('ancestry') }
            required
          />
        </label>
        <label>
          <span>Unit Size: </span>
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
          <span>Experience: </span>
          <select
            name="unitExperience"
            { ...getNativeInputProps('unitExperience') }
          >
            <option value="levies">Levies</option>
            <option value="regular">Regular</option>
            <option value="veteran">Veteran</option>
            <option value="elite">Elite</option>
            <option value="superElite">Super Elite</option>
          </select>
        </label>
        <label>
          <span>Equipment: </span>
          <select
            name="unitEquipment"
            { ...getNativeInputProps('unitEquipment') }
          >
            <option value="light">Light</option>
            <option value="medium">Medium</option>
            <option value="heavy">Heavy</option>
            <option value="superHeavy">Super-Heavy</option>
          </select>
        </label>
        <div>
          <span>Unit Statistics</span>
          <label>
            <span>ATK: </span>
            <input
              type="number"
              { ...getNativeInputProps('atk') }
            />
          </label>
          <label>
            <span>DEF: </span>
            <input
              type="number"
              { ...getNativeInputProps('def') }
            />
          </label>
          <label>
            <span>POW: </span>
            <input
              type="number"
              { ...getNativeInputProps('pow') }
            />
          </label>
          <label>
            <span>TOU: </span>
            <input
              type="number"
              { ...getNativeInputProps('tou') }
            />
          </label>
          <label>
            <span>MOR: </span>
            <input
              type="number"
              { ...getNativeInputProps('mor') }
            />
          </label>
          <label>
            <span>COM: </span>
            <input
              type="number"
              { ...getNativeInputProps('com') }
            />
          </label>
        </div>
        <label>
          <span>Number of Attacks: </span>
          <input
            type="number"
            { ...getNativeInputProps('numberAtks') }
          />
        </label>
        <label>
          <span>Damage: </span>
          <input
            type="number"
            { ...getNativeInputProps('dmg') }
          />
        </label>
        <label>
          <span>Tier: </span>
          <input
            type="number"
            max="5"
            { ...getNativeInputProps('tier') }
          />
        </label>
        <label>
          <span>Traits: </span>
          <textarea
            { ...getNativeInputProps('traits') }
          />
        </label>
        <button
          type="button"
          onClick={ returnValues }
        >Submit</button>
      </form>
    </div>
  );
}
