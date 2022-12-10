
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import reportWebVitals from './reportWebVitals';
// 
import { addPost,updateNewPostText,addMessage,updateNewMessageText } from './redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
    root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
                    <App
                        state={state}
                        addPost={addPost}
                        updateNewPostText={updateNewPostText}
                        addMessage={addMessage}
                        updateNewMessageText={updateNewMessageText}
                    />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
}


reportWebVitals();



