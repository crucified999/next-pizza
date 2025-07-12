import { AppHeaderUIProps } from "./types";
import { Button } from "@/shared/components/ui/button/button";
import { Input } from "@/shared/components/ui/input/input";
import { ProfileMenuUI } from "../profile-menu";
import { SearchInputUI } from "../search-input";
import React from 'react';
import Link from "next/link";

export const AppHeaderUI: React.FC<AppHeaderUIProps> = ({ price, counter, isAuthorized, onHover, onLeave, isProfileMenuShown }) => {

  return (
    <>
    <header className="flex py-11 px-15">
      <Link href="/">
        <div className='flex items-center gap-3.75 mr-18'>
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          <div>
            <h3 className="text-2xl font-black">NEXT PIZZA</h3>
            <p className="text-sm text-gray-500">
              Вкусней уже не будет
            </p>
          </div>
        </div>
      </Link>
      {/* <div className="bg-white flex items-center rounded-[15px] py-2 px-5 flex-1 border border-transparent transition-colors duration-150 has-[:focus]:border-gray-300">
        <img src="/search.svg" alt="search" className="w-4 h-4" />
        <Input type="text" placeholder="Поиск пиццы" className="w-full focus:outline-none border-none" />
      </div> */}
      <SearchInputUI />
      <div className="flex items-center gap-4 ml-[21px]">

        { isAuthorized ? 
        
        <div onMouseLeave={onLeave} onMouseEnter={onHover} className="relative">
          <Button variant='outline' className='flex items-center gap-2.5 text-[16px] border border-orange-400 text-orange-400 font-[600]'>
            <img src="/user.svg" alt="cart" className="w-4 h-4" />
            <span>Профиль</span>
          </Button>
          <ProfileMenuUI isShown={isProfileMenuShown} />
        </div>

        :

        <Button variant='outline' className='flex items-center gap-2.5 text-[16px] border border-orange-400 text-orange-400 font-[600]'>
          <img src="/user.svg" alt="cart" className="w-4 h-4" />
          <span>Войти</span>
        </Button>

        }
        

        { counter ? 
                  <Button variant='default' className="bg-orange-400 font-bold text-[16px] w-[130px]">
                    <span>{price} ₽ | </span>
                    <img src="/cart.svg" alt="cart" className="w-4 h-4" />
                    <span>{counter}</span>
                  </Button> 
                  :

                  <div>

                    <Button variant='outline' className='border border-orange-400'>
                      <img src="/cart.svg" alt="cart" className="w-4 h-4 [filter:brightness(0)_saturate(100%)_invert(48%)_sepia(79%)_saturate(2476%)_hue-rotate(346deg)_brightness(118%)_contrast(119%)]" />
                    </Button> 

                  </div>
                  
        }
        
      </div>
    </header>
    <hr />
    
    </>
    
  )
}