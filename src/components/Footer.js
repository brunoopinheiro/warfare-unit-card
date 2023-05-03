import { linkedIn, github } from "../utils/links";

export default function Footer() {
  return (
    <footer>
      <p>Let's connect on <a href={linkedIn}>Linkedin</a></p>
      <p>Check my other projects on <a href={github}>Github</a></p>
      {/* <p>Access the <a href={}>repository</a> for this project!</p> */}
    </footer>
  );
}