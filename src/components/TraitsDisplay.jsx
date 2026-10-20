export default function TraitsDisplay({ traits }) {
  return (
    <div className="traits-box">
      <span className="traits-caption">Traits</span>
      {
        traits.length === 0
          ? <p className="trait trait-empty">Add traits in the form, one per line.</p>
          : traits.map(({ name, text }, index) => (
            <p className="trait" key={ `${name}-${index}` }>
              { name && <strong>{ name }. </strong> }
              { text }
            </p>
          ))
      }
    </div>
  );
}
