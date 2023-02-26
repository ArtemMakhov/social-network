import { Box } from '../../Box';
import { Loader } from '../../Loader/Loader';
// import  ProfileStatus  from '../ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader/>
    }
    return (
        <div>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="hero" width="100%"  />
            </div>
            <Box p="10px">
                <img src={props.profile.photos.large} alt='phot'/>
                {/* <img src="https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=730&h=487&crop=1&quality=75" alt="avatar" width="150" height="150" /> */}
                <p>{props.profile.fullName}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </Box>
        </div>
    )
};

export default ProfileInfo;