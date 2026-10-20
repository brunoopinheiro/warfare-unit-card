import html2canvas from "html2canvas";

// Card is authored at 50em x 38.4em; 19px per em gives the original 950 x 730 px card
const EXPORT_FONT_SIZE = 19;
const CARD_WIDTH = 950;
const CARD_HEIGHT = 730;

const exportSize = (scale) => ({ width: CARD_WIDTH * scale, height: CARD_HEIGHT * scale });

// Renders a fixed-size clone so the PNG never depends on the preview's screen width
export default async function downloadAsPng(domElement, fileName, scale = 2) {
  const stage = document.createElement('div');
  stage.style.cssText = 'position:fixed;left:-10000px;top:0;pointer-events:none;';
  const clone = domElement.cloneNode(true);
  clone.removeAttribute('id');
  clone.style.fontSize = `${EXPORT_FONT_SIZE}px`;
  stage.appendChild(clone);
  document.body.appendChild(stage);

  try {
    const canvas = await html2canvas(clone, { scale, backgroundColor: null });
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = fileName;
    link.click();
  } finally {
    stage.remove();
  }
}

export { exportSize };
