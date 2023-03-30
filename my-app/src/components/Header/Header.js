import './Header.scss';

function Header() {
  return (
    <header className="header">
        <div className="dark-mode-container">
            <input type="checkbox" className="dark-mode-toggle" id="toggle" />
            <label htmlFor="toggle"></label>
        </div>

        <h1>Manon Pons-Mazars</h1>
        <h2>Développeuse Web</h2>
    </header>
  );
}

export default Header;
