import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import reportWebVitals from './reportWebVitals';
import { nanoid } from 'nanoid';

let posts = [
  { id: nanoid(),avatar: "https://cdn.vox-cdn.com/thumbor/LWlI3ImRc5l27CTiBR7ihrPq6RU=/0x0:1080x718/1400x933/filters:focal(477x288:649x460):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71263353/300017093_10114630004939621_5854109382330704814_n.0.jpg", message: "Hi, how are you?", like: 20 },
  { id: nanoid(), avatar: "https://www.kindpng.com/picc/m/137-1370686_anime-avatar-png-transparent-avatar-gaming-logo-png.png", message: "It's my first post", like: 12 },
  { id: nanoid(), avatar: "https://media-cdn.tripadvisor.com/media/photo-p/25/c3/d1/13/maks991.jpg", message: "Hi!", like: 8 },
  { id: nanoid(),avatar: "https://www.zastavki.com//pictures/640x480/2013/Anime_Anime_girl_with_green_eyes_042616_29.png", message: "How are you?", like: 23 },

];
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App posts={posts} dialogsData={ dialogsData} messagesData={messagesData} />
      </ThemeProvider>  
    </BrowserRouter>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

