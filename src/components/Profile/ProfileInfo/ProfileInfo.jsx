import { Box } from '../../Box';
import { Loader } from '../../common/Loader/Loader';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile) {
        return <Loader/>
    }
    return (
        <div>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="hero" width="100%"  />
            </div>
            <Box p="10px">
                <img src={profile.photos.large} alt='phot'/>
                <p>{profile.fullName}</p>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </Box>
        </div>
    )
};

export default ProfileInfo;