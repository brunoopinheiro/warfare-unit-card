export default function DamageDisplay({ dmg, numberAtks }) {
  return (
    <div className="dmg-box">
      <div className="dmg-cell">
        <span className="dmg-value">{ numberAtks }</span>
        <span className="card-caption">Attacks</span>
      </div>
      <div className="dmg-cell">
        <span className="dmg-value">{ dmg }</span>
        <span className="card-caption">Damage</span>
      </div>
    </div>
  );
}
