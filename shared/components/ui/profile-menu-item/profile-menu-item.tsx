import { ProfileMenuItemUIProps } from "./types";

export const ProfileMenuItemUI: React.FC<ProfileMenuItemUIProps> = ({ text }) => {
  return (
    <li className='py-2.5 pr-4'>
      <span className='cursor-pointer hover:text-orange-500 transition-colors duration-150'>{text}</span>
    </li>
  );
}