import {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    if (!user) {
        return <div>Not Logged in</div>
    }
    else{
        return <div> Welcome ! {user.username}</div>
    }


}

export default Profile
