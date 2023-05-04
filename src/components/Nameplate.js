import './Nameplate.css';

// type should receive one of the following:1 'labeled' | 'title' | 'tags'
export default function Nameplate({ text, type, label }) {
  return (
    type === 'labeled' ?
      (
        <div className={ type }>
          <div className="text-container">
            <p className="small-text">{ text || 'Commander Name' }</p>
          </div>
          <span className="text-label">{ label }</span>
        </div>
      ) 
      : (
        <div className={`${type}-text-container`}>
          <span className={`${type}-label`}>{ text || 'Unit Name' }</span>
        </div>
      )
  );
}