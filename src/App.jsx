import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import Dialogs from './components/Dialogs/Dialogs';
import Header  from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/UserSettings/Settings';
import { Wrapper,Content } from './App.styled';


const App = ({state}) => {
  return (
   
    <Wrapper>
      <Header />
      <Navbar />
      
      <Content>
        <Routes>
          <Route path='/profile' element={<Profile state={state.profilePage} />} />
          <Route path='/dialog/*' element={<Dialogs state={state.dialogPage}  />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Content>
      <GlobalStyle />
    </Wrapper>
     
  );
};


export default App;
