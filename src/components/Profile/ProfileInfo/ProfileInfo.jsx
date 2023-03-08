import { Box } from '../../Box';
import { Loader } from '../../common/Loader/Loader';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import userPhoto from '../../../images/avatar.png';

const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto}) => {
    if (!profile) {
        return <Loader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="hero" width="100%"  />
            </div>
            <Box p="10px">
                <img src={profile.photos.large || userPhoto} alt='phot' width="100" height="100" />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                <p>{profile.fullName}</p>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </Box>
        </div>
    )
};

export default ProfileInfo;