export default function TopDisplay({ value, label }) {
  return (
    <div className="top-display">
      <span className="top-value">{ value }</span>
      <span className="card-caption">{ label }</span>
    </div>
  );
}
