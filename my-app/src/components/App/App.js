import { useState } from 'react';

import './App.scss';
import './AppDark.scss';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "App App-dark" : "App"}>
        <Header toggleDarkMode={toggleDarkMode} />
        <Main darkMode={darkMode} />
        <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
