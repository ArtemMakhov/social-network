

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from './theme';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';




const root = ReactDOM.createRoot(document.getElementById('root'));

 let rerenderEntireTree = () => {
   root.render(
     <React.StrictMode>
       <BrowserRouter>
         <ThemeProvider theme={theme}>
           <Provider store={store}>
             <App />
           </Provider>
         </ThemeProvider>
       </BrowserRouter>
     </React.StrictMode>
   );
}


rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});


reportWebVitals();

