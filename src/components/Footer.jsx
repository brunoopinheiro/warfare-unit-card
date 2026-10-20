import { linkedIn, github, knw, kofi } from "../utils/links";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>Made to work with <a href={ knw }>Kingdoms &amp; Warfare</a> by MCDM.</span>
      <a href={ linkedIn }>LinkedIn</a>
      <a href={ github }>GitHub</a>
      <a href={ kofi }>Support on Ko-fi</a>    </footer>
  );
}
