import { linkedIn, github, knw } from "../utils/links";
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <p>This project was made to work with <a href={knw}>Kingdoms & Warfare</a>, by MCDM.</p>
      <p>Let's connect on <a href={linkedIn}>Linkedin</a></p>
      <p>Check my other projects on <a href={github}>Github</a></p>
      {/* <p>Access the <a href={}>repository</a> for this project!</p> */}
    </footer>
  );
}