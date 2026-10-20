export default function Nameplate({ unitName, commanderName, tags }) {
  return (
    <div className="nameplate">
      <div className="title-plate">
        <span className="title-text">{ unitName || 'Unit Name' }</span>
      </div>
      <div className="commander-line">
        <span className="commander-label">Commander</span>
        <span className="commander-name">{ commanderName || 'Commander Name' }</span>
      </div>
      <div className="tags-line">{ tags }</div>
    </div>
  );
}
