import { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import HomeIcon from './components/Layout/HomeIcon'
import More from './components/Layout/More'
import styles from './components/Layout/Header.module.css'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Signup from './components/Forms/Signup';
import { Routes, Route } from 'react-router-dom';
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
    <header className={styles.header}>
        <span className={styles.icon}>{isVisible ? <MenuIcon  onClick={openMenu} /> : <CloseIcon onClick={closeMenu}/>}</span>
        
     <div className={styles.logo}>
     <span className={styles.icon1}><HomeIcon/></span>
    
        <h1>Estate<span className={styles.text}>PRO</span></h1>
     </div>
       <span className={styles.icon2}><More/></span>
       
    </header>
     {isMenu && <Sidebar/>}
     <Routes>

     <Route path='/' element={<Header/>}/>
    
   
     <Route path='/signup' element={<Signup/>}/>
     
     </Routes>
    </>
  );
}

export default App;
