import './StatsDisplay.css';

export default function StatsDisplay({ value, label }) {
  return (
    <div className="big-stat-display">
      <div className="stats-frame">
        <span className="number">{ value }</span>
      </div>
      <span className="label">{ label }</span>
    </div>
  );
}
