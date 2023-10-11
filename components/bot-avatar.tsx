import { Avatar, AvatarImage } from "./ui/avatar";

const BotAvatar = () => {
  return ( 
    <Avatar className='w-8 h-8'>
      <AvatarImage className='p-1' src='/logo.png' sizes='icon' />
    </Avatar>
   );
}
 
export default BotAvatar;