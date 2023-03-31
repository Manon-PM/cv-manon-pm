import './Header.scss';

function Header({ toggleDarkMode }) {
  return (
    <header className="header">
        <div className="dark-mode-container">
            <input onChange={() => toggleDarkMode()} type="checkbox" className="dark-mode-toggle" id="toggle" />
            <label htmlFor="toggle"></label>
        </div>
        <div className="header-titles">
          <h1>Manon Pons-Mazars</h1>
          <h2>Développeuse Web</h2>
        </div>
    </header>
  );
}

export default Header;
