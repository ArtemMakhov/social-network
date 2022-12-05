import { nanoid } from 'nanoid';


let state = {
    profilePage: {
        posts: [
            { id: nanoid(), avatar: "https://cdn.vox-cdn.com/thumbor/LWlI3ImRc5l27CTiBR7ihrPq6RU=/0x0:1080x718/1400x933/filters:focal(477x288:649x460):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71263353/300017093_10114630004939621_5854109382330704814_n.0.jpg", message: "Hi, how are you?", like: 20 },
            { id: nanoid(), avatar: "https://www.kindpng.com/picc/m/137-1370686_anime-avatar-png-transparent-avatar-gaming-logo-png.png", message: "It's my first post", like: 12 },
            { id: nanoid(), avatar: "https://media-cdn.tripadvisor.com/media/photo-p/25/c3/d1/13/maks991.jpg", message: "Hi!", like: 8 },
            { id: nanoid(), avatar: "https://www.zastavki.com//pictures/640x480/2013/Anime_Anime_girl_with_green_eyes_042616_29.png", message: "How are you?", like: 23 },

        ],
    },
    dialogPage: {
        dialogs: [
            { id: nanoid(), name: "Mango" , avatar:"https://thumbs.dreamstime.com/z/male-avatar-icon-portrait-handsome-young-man-face-businessman-suit-necktie-vector-illustration-%D0%B3%D1%9F%D0%B3%D2%91%D0%B3%C2%B7%D0%B3-%D0%B3%D1%96%D0%B3%D1%98-187127093.jpg",},
            { id: nanoid(), name: "Poli",avatar:"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png", },
            { id: nanoid(), name: "Leon",avatar:"https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png", },
            { id: nanoid(), name: "Nick",avatar:"https://cdn-icons-png.flaticon.com/512/168/168726.png", },
            { id: nanoid(), name: "Samanta",avatar:"https://img.freepik.com/premium-vector/businesswoman-woman-female-icon_24877-11464.jpg", },
        ],
        messages: [
            { id: nanoid(), message: "Hello!!!" },
            { id: nanoid(), message: "How are you?" },
            { id: nanoid(), message: "What is your name?" },
            { id: nanoid(), message: "Hi!" },
            { id: nanoid(), message: "Yo" },
        ],
    },
};

export default state;