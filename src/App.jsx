import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import { nanoid } from 'nanoid';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header  from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/UserSettings/Settings';

const App = () => {
  
       let dialogsData = [
        { id: nanoid(), name: "Mango" },
        { id: nanoid(), name: "Poli" },
        { id: nanoid(), name: "Leon" },
        { id: nanoid(), name: "Nick" },
        { id: nanoid(), name: "Samanta" },
    ];


      let messagesData = [
        { id: nanoid(), message: "Hello!!!" },
        { id: nanoid(), message: "How are you?" },
        { id: nanoid(), message: "What is your name?" },
        { id: nanoid(), message: "Hi!" },
        { id: nanoid(), message: "Yo" },
      ];
  
      let postsData = [
        { id: nanoid(), message: "Hi, how are you?", like: 20 , test:1},
        { id: nanoid(), message: "It's my first post", like: 12,test:2 },

    ];
  return (
   
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      
      <div className='content'>
        <Routes>
          <Route path='/profile' element={<Profile postsData={postsData} />} />
          <Route path='/dialog/*' element={<Dialogs dialogsData={dialogsData} messagesData={messagesData} />} />
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
