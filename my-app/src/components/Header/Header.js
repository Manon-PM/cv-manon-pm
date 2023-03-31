import './Header.scss';

function Header({ toggleDarkMode }) {
  return (
    <header>
        <div className="dark-mode-container">
            <input onChange={() => toggleDarkMode()} type="checkbox" className="dark-mode-toggle" id="toggle" />
            <label htmlFor="toggle"></label>
        </div>
    </header>
  );
}

export default Header;
