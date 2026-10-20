import './TopDisplay.css';

export default function TopDisplay({ number, label}) {
  return (
    <div className="top-display">
      <div className="t-display-frame">
        <span className="t-number">{ number }</span>
      </div>
      <span className="t-label">{ label }</span>
    </div>
  );
}