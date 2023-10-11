import { useUser } from '@clerk/nextjs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const UserAvatar = () => {
  const { user } = useUser();
  return ( 
     <Avatar className='h8 w-8'>
       <AvatarImage src={user?.profileImageUrl} sizes='icon'/>
       <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
       </AvatarFallback>
     </Avatar>
   );
}
 
export default UserAvatar;