import { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import EstateQoutes from './components/Estate/EstateQoutes';
function App() {
  const [isMenu, setIsMenu] = useState(false);

  const openMenu = ( ) => {
    setIsMenu(true);
  }
  return (
    <>
     <Header onMenu={openMenu}/>
     {isMenu && <Sidebar/>}
     <EstateQoutes/>
    </>
  );
}

export default App;
