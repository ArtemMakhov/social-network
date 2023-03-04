import profileReduser, { addPostActionCreator } from "./src/redux/profile-reduser";
// import { render, screen } from '@testing-library/react';
// import App from './App';

test('length of posts should be increment', () => {
    // 1. test data
    const action = addPostActionCreator("it-kamasutra.com");
    const state = {
    posts: [
        { id: 1, message: "Hi, how are you?", like: 20 },
        { id: 2, message: "It's my first post", like: 12 },
        { id: 3, message: "Hi!", like: 8 },
        { id: 4, message: "How are you?", like: 23 },
    ]
    };
    // 2. action
    const newState = profileReduser(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(5);
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});

