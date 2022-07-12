import logo from '../../assets/img/dsmeta-logo.svg'

import "./style.css";
function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta Logo" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.linkedin.com/in/galvaofs/">@galvaofs</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
