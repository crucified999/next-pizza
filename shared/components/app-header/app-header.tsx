'use client';

import React from 'react';
import { AppHeaderUI } from "../ui/app-header/app-header";


export const AppHeader = () => {
  const [isProfileMenuShown, setIsProfileMenuShown] = React.useState(false);

  const handleProfileMenuHover = () => {
    setIsProfileMenuShown(true);
  }

  const handleProfileMenuLeave = () => {
    setIsProfileMenuShown(false);
  }

  return (
    <AppHeaderUI
        price={0} 
        counter={0} 
        isAuthorized={true} 
        onHover={handleProfileMenuHover} 
        onLeave={handleProfileMenuLeave} 
        isProfileMenuShown={isProfileMenuShown} 
    />
  )
}