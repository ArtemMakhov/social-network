

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';





const root = ReactDOM.createRoot(document.getElementById('root'));

 let rerenderEntireTree = (state) => {
    root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}> 
                    <App
                        state={state}
                        addPost={store.addPost.bind(store)}
                        updateNewPostText={store.updateNewPostText.bind(store)}
                        addMessage={store.addMessage.bind(store)}
                        updateNewMessageText={store.updateNewMessageText.bind(store)}
                    />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ThemeProvider theme={theme}>
//         <App state={state}  />
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

