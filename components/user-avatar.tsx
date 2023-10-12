import { useUser } from '@clerk/nextjs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const UserAvatar = () => {
  const { user } = useUser();
  return (
    <div className='flex justify-end last:mb-0 text-sm'>
      <Avatar className='h8 w-8'>
        <AvatarImage src={user?.profileImageUrl} sizes='icon' />
        <AvatarFallback>
          {user?.firstName?.charAt(0)}
          {user?.lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default UserAvatar;

//아이콘으로 바꾸기