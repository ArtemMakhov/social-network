import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
// import Dialogs from './components/Dialogs/Dialogs';
import Header  from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/UserSettings/Settings';
import Friends from './components/Friends/Friends';
import { Wrapper,Content } from './App.styled';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
   
    <Wrapper>
      <Header />
      <Navbar />
      <Content>
        <Routes>
          <Route path='/profile' element={
            <Profile
              // store={props.store}
            />}
          />
          <Route path='/dialog/*' element={
            <DialogsContainer
              // store={props.store}
            />}
          />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/friends' element={<Friends />} />
        </Routes>
      </Content>
      <GlobalStyle />
    </Wrapper>
     
  );
};


export default App;
