import './TraitsDisplay.css';

export default function TraitsDisplay({ traits }) {
  return (
    <div className="traits-container">
      <ul className="traits-list">
        {
          traits.map((trait, index) => (
            <li key={`${trait}-${index}`}>{trait}</li>
          ))
        }
      </ul>
    </div>
  );
}