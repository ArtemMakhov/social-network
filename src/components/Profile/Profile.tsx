import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../types/types";

type PropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType)=> void
}

const Profile: React.FC<PropsType> = ({isOwner,profile,status,updateStatus,savePhoto,saveProfile}) => {

    return (
        <div>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
            />
            <MyPostsContainer />
        </div>
    )
};

export default Profile;