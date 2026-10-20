export default function StatsDisplay({ value, label }) {
  return (
    <div className="stat-box">
      <span className="stat-value">{ value }</span>
      <span className="card-caption">{ label }</span>
    </div>
  );
}
