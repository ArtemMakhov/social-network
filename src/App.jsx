import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header  from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/UserSettings/Settings';

const App = () => {
  return (
   
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      
      <div className='content'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialog' element={<Dialogs />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
      <GlobalStyle />
    </div>
     
  );
};


export default App;
