import { ProfileMenuItemUI } from "../profile-menu-item";
import { ProfileMenuUIProps } from "./types";

export const ProfileMenuUI: React.FC<ProfileMenuUIProps> = ({ isShown }) => {
  return (
    <div className={`absolute top-full left-0 mt-2 z-10 transition-all linear duration-150 delay-300 ${isShown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <ul className='list-none flex flex-col text-[14px]'>
        <ProfileMenuItemUI text="Настройки" />
        <ProfileMenuItemUI text="Заказы" />
        <ProfileMenuItemUI text="Выйти" />
      </ul>
    </div>
  );
}