import './ExportPanel.css';
import Segmented from './Segmented';
import { exportSize } from '../utils/downloadAsPng';

const SCALES = [1, 2, 3].map((n) => ({ value: String(n), label: `${n}×` }));
const CARD_STYLES = [{ value: 'parchment', label: 'Parchment' }, { value: 'ink-saver', label: 'Ink saver' }];

export default function ExportPanel({
  scale, onScaleChange, inkSaver, onInkSaverChange, fileName, busy, status, onDownload, onSave,
}) {
  const { width, height } = exportSize(scale);
  const inches = (px) => (px / 300).toFixed(1);

  return (
    <section className="export-panel" aria-labelledby="export-heading">
      <h3 id="export-heading">Export</h3>
      <div className="export-options">
        <Segmented
          label="Resolution"
          options={ SCALES }
          value={ scale }
          onChange={ (value) => onScaleChange(Number(value)) }
          chipClassName="chip-narrow"
          hint={ `${width} × ${height} px · prints ${inches(width)} × ${inches(height)} in at 300 dpi` }
        />
        <Segmented
          label="Card style"
          options={ CARD_STYLES }
          value={ inkSaver ? 'ink-saver' : 'parchment' }
          onChange={ (value) => onInkSaverChange(value === 'ink-saver') }
          hint="Ink saver drops the parchment fill for home printers."
        />
      </div>
      <div className="export-actions">
        <button type="button" className="btn btn-primary" onClick={ onDownload } disabled={ busy }>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
          { busy ? 'Rendering…' : 'Download PNG' }
        </button>
        <button type="button" className="btn" onClick={ onSave }>Save to library</button>
        <span className="file-name">{ fileName }</span>
      </div>
      <p className={ `status status-${status.tone}` } role="status" aria-live="polite">{ status.text }</p>
    </section>
  );
}
