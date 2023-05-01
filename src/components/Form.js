export default function Form() {
  return(
    <div>
      <form>
        <label>
          <span>Unit Name: </span>
          <input type="text" placeholder="Unit Name" />
        </label>
        <label>
          <span>Commander: </span>
          <input type="text" placeholder="Commander Name" />
        </label>
        <label>
          <span>Type: </span>
          <select name="unitType">
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
          <input type="text" placeholder="Ancestry" />
        </label>
        <label>
          <span>Unit Size: </span>
          <select name="unitSize">
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </select>
        </label>
        <label>
          <span>Experience: </span>
          <select name="unitExperience">
            <option value="levies">Levies</option>
            <option value="regular">Regular</option>
            <option value="veteran">Veteran</option>
            <option value="elite">Elite</option>
            <option value="superElite">Super Elite</option>
          </select>
        </label>
        <label>
          <span>Equipment: </span>
          <select name="unitEquipment">
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
            <input type="number" defaultValue="1" />
          </label>
          <label>
            <span>DEF: </span>
            <input type="number" defaultValue="10" />
          </label>
          <label>
            <span>POW: </span>
            <input type="number" defaultValue="1" />
          </label>
          <label>
            <span>TOU: </span>
            <input type="number" defaultValue="10" />
          </label>
          <label>
            <span>MOR: </span>
            <input type="number" defaultValue="1" />
          </label>
          <label>
            <span>COM: </span>
            <input type="number" defaultValue="1" />
          </label>
        </div>
        <label>
          <span>Number of Attacks: </span>
          <input type="number" defaultValue="1" />
        </label>
        <label>
          <span>Damage: </span>
          <input type="number" defaultValue="1" />
        </label>
        <label>
          <span>Tier: </span>
          <input type="number" max="5" defaultValue="1" />
        </label>
      </form>
    </div>
  );
}

// infantry, artillery, cavalry, aerial, siege, levy