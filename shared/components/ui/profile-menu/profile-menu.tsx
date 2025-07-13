import { ProfileMenuItemUI } from "../profile-menu-item";
import { ProfileMenuUIProps } from "./types";

export const ProfileMenuUI: React.FC<ProfileMenuUIProps> = ({ isShown }) => {
  return (
    <div className={`bg-white absolute top-8 left-0 mt-2 z-10 transition-all linear duration-150 delay-300 ${isShown ? 'opacity-100 visible top-10' : 'opacity-0 invisible'}`}>
      <ul className='list-none flex flex-col text-[14px]'>
        <ProfileMenuItemUI text="Настройки" />
        <ProfileMenuItemUI text="Заказы" />
        <ProfileMenuItemUI text="Выйти" />
      </ul>
    </div>
  );
}