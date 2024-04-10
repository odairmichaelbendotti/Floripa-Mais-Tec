import { useState } from 'react';
import userProfiles from './styles/userProfiles.module.css'

export const UserProfile = ({name, phone, linkedin}) => {
    
    const [followText, setFollowText] = useState('Follow')

    function following (){
        setFollowText('Following')
    }

    return (
        <div className={userProfiles.odair}>
            <div className={userProfiles.profileImg}></div>      
            <div className='text-side'>
                <h1>
                    <i class="fa-regular fa-user"></i>{name}
                </h1>

                <p>
                <i class="fa-solid fa-phone"></i>{phone}
                </p>

                <p>
                <i class="fa-brands fa-linkedin"></i> {linkedin}
                </p>

                <div className={userProfiles.btnContainer}>
                    <div className={userProfiles.btnContact} onClick={following}>
                        {followText}
                    </div>
                </div>
            </div>
        </div>
    )
}