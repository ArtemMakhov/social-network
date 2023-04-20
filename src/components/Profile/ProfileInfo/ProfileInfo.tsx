import { ChangeEvent, useState } from 'react';
import { Box } from '../../Box';
import { Loader } from '../../common/Loader/Loader';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import userPhoto from '../../../images/avatar.png';
import { ProfileDataForm } from './ProfileDataForm';
import { HeroImg } from './ProfileInfo.styled';
import { ContactsType, ProfileType } from '../../../types/types';

type PropsType = {
    profile: ProfileType
    status:string
    updateStatus:(status: string)=> void
    isOwner: boolean
    savePhoto:(file:File)=> void
    saveProfile: (profile:ProfileType) => void
}
const ProfileInfo: React.FC<PropsType> = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    const [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Loader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const handleSubmit = async (values:ProfileType ,{resetForm}:any) => {
        saveProfile(values);
       
        setEditMode(false);

        resetForm();
    }
    return (
        <div>
            <div>
                <HeroImg src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="hero"/>
            </div>
            <Box p="10px">
                <img src={profile.photos.large || userPhoto} alt='phot' width="100" height="100" />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

                {editMode
                    ? <ProfileDataForm initiaValues={profile} profile={profile} handleSubmit={handleSubmit} />
                    : <ProfileData profile={profile} isOwner={isOwner}
                        goToEditMode={()=> setEditMode(true) } />}
                            
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </Box>
        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode:()=> void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner,goToEditMode}) => {
    return <div>
                    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
                    <div><p>{profile.fullName}</p></div>
                    <div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
                    {profile.lookingForAJob && 
                    <div>
                        <b>My professional skills</b>: {profile.lookingForAJobDescription}
                    </div>}
                    <div><b>About me</b>: {profile.aboutMe}</div>
                    <div>
            <b>Contacts</b>:{
                Object
                    .keys(profile.contacts)
                    .map(key => {
                            return <Contact
                                key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key as keyof ContactsType]}
                            />
                        })}
                    </div>
                </div>
}


type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
    return <div>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;