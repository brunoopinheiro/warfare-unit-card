import './DamageDisplay.css';

export default function DamageDisplay({ dmg, numberAtks }) {
  return (
    <div className="dmg-container">
      <span className="dmg-number">{ numberAtks }</span>
      <span className="dmg-label">Nº ATKs</span>
      <span className="dmg-label">DMG</span>
      <span className="dmg-number">{ dmg }</span>
    </div>
  );
}