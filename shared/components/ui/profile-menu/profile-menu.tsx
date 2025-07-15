import { ProfileMenuItemUI } from "../profile-menu-item";
import { ProfileMenuUIProps } from "./types";

export const ProfileMenuUI: React.FC<ProfileMenuUIProps> = ({ isShown }) => {
  return (
    <div className={`bg-white border border-gray-100 rounded-xl absolute top-10 w-full left-0 mt-2 z-50 transition-all linear duration-150 delay-300 ${isShown ? 'opacity-100 visible top-12' : 'opacity-0 invisible'}`}>
      <ul className='list-none flex flex-col px-4 text-[14px]'>
        <ProfileMenuItemUI text="Настройки" />
        <ProfileMenuItemUI text="Заказы" />
        <ProfileMenuItemUI text="Выйти" />
      </ul>
    </div>
  );
}