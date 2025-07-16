import { AppHeaderUIProps } from "./types";
import { Button } from "@/shared/components/ui/button/button";
import { CartButton } from "@/shared/components/cart-button";
import { ProfileMenuUI } from "../profile-menu";
import { SearchInputUI } from "../search-input";
import { SearchInput } from "../../search-input";
import React from 'react';
import Link from "next/link";

export const AppHeaderUI: React.FC<AppHeaderUIProps> = ({ price, counter, isAuthorized, onHover, onLeave, isProfileMenuShown }) => {

  return (
    <>
    <header id="page-header" className="flex py-11">
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
      {/* <SearchInputUI /> */}
      <SearchInput />
      <div className="flex items-center gap-4 ml-[21px]">

        { isAuthorized ? 
        
        <div onMouseLeave={onLeave} onMouseEnter={onHover} className="relative">
          <Button variant='outline' className='flex items-center rounded-2xl h-[50px] gap-2.5 text-[16px] border border-orange-500 text-orange-500 font-[600]'>
            <img src="/user.svg" alt="cart" className="w-4 h-4" />
            <span>Профиль</span>
          </Button>
          <ProfileMenuUI isShown={isProfileMenuShown} />
        </div>

        :

        <Button variant='outline' className='flex items-center rounded-2xl gap-2.5 text-[16px] border border-orange-500 text-orange-500 font-[600]'>
          <img src="/user.svg" alt="cart" className="w-4 h-4" />
          <span>Войти</span>
        </Button>

        }
        
        <CartButton />
        
      </div>
    </header>
    <hr className="w-screen -mx-[calc(50vw-50%)]"/>
    </>
    
  )
}