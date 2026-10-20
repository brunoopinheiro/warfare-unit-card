import { useEffect, useRef } from 'react';
import './AdSlot.css';

const AD_CLIENT = 'ca-pub-1126063902318017';
const AD_SLOT = import.meta.env.VITE_ADSENSE_SLOT;

// A fixed, clearly separated ad area below the editor. Renders nothing until an ad unit id is configured.
export default function AdSlot() {
  const pushed = useRef(false);

  useEffect(() => {
    if (!AD_SLOT || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!AD_SLOT) return null;

  return (
    <aside className="ad-slot" aria-label="Advertisement">
      <span className="ad-slot-label">Advertisement</span>
      <ins
        className="adsbygoogle"
        style={ { display: 'block' } }
        data-ad-client={ AD_CLIENT }
        data-ad-slot={ AD_SLOT }
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
