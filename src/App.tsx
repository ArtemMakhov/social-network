import React,{Suspense} from 'react';
import { compose } from 'redux';
import { connect } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import  { withRouter } from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/UserSettings/Settings';
import Friends from './components/Friends/Friends';
import { Wrapper,Content ,Preloader} from './App.styled';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reduser';
import { Loader } from './components/common/Loader/Loader';
import { AppStateType } from './redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: ()=> void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
    componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return (<Preloader>
        <Loader />
        </Preloader>)
    }
    return (
      <Wrapper>
        <HeaderContainer />
        <Navbar />
        <Content>
          <Routes>
            <Route path='/profile' element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <ProfileContainer />
              </Suspense>
            }>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/dialog/*' element={
              <Suspense fallback={<div><Loader/></div>}>
                <DialogsContainer />
              </Suspense>
            } />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/friends' element={<Friends />} />
          </Routes>
        </Content>
        <GlobalStyle />
      </Wrapper>
    );
}
};
const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
})   


export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
