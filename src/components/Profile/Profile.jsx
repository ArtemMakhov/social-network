import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="hero" width="100%" height="200" />
            </div>
            <div>
                <img src="https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=730&h=487&crop=1&quality=75" alt="avatar" width="150" height="150" />
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;