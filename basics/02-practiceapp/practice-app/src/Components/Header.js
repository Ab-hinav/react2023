import "./Header.css";
import keyConceptsImage from "./../assets/images/key-concepts.png";

export function Header(props) {
  return (
    <>
      <header id="header">
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
    </>
  );
}
