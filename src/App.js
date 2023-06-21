import { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import EstateQoutes from './components/Estate/EstateQoutes';
function App() {
  const [isMenu, setIsMenu] = useState(false);
  const [isVisible, setVisible] = useState(true);

  const openMenu = () => {
    setIsMenu(true);
    setVisible(false);
  }

  const closeMenu = () => {
    setIsMenu(false);
    setVisible(true);
  }
  return (
    <>
     <Header onConfirm={isVisible} onClose={closeMenu} onMenu={openMenu}/>
     {isMenu && <Sidebar/>}
     <EstateQoutes/>
    </>
  );
}

export default App;
