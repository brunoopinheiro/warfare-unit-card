import html2canvas from "html2canvas";

export default async function downloadAsPng(domElement, cardName) {
  try {
    const canva = await html2canvas(domElement);
    const link = document.createElement('a');
    link.href = canva.toDataURL();
    link.download = `${cardName}.png`;
    link.click();
  } catch (e) {
    console.error(e);
  }
}