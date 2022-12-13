

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';


const root = ReactDOM.createRoot(document.getElementById('root'));

 let rerenderEntireTree = (state) => {
   root.render(
     <React.StrictMode>
       <BrowserRouter>
         <ThemeProvider theme={theme}>
           <App
             store={store}
             state={state}
             dispatch={store.dispatch.bind(store)}
           />
         </ThemeProvider>
       </BrowserRouter>
     </React.StrictMode>
   );
}


rerenderEntireTree(store.getState());

store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});


reportWebVitals();

