import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
// import Header  from './components/Header/Header';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/UserSettings/Settings';
import Friends from './components/Friends/Friends';
import { Wrapper,Content } from './App.styled';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

const App = () => {
  return (
   
    <Wrapper>
      <HeaderContainer />
      <Navbar />
      <Content>
        <Routes>
          <Route path='/profile' element={<ProfileContainer />}>
            <Route path=":userId" element={<ProfileContainer />} />
          </Route>
          <Route path='/login' element={<Login/>} />
          <Route path='/dialog/*' element={<DialogsContainer />} />
          <Route path='/users' element={<UsersContainer/>} />
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
