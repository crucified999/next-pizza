import { ChooseFormUIProps } from './types';
import { ChooseFormButtonUI } from '../choose-form-button'; 
import React from 'react';


export const ChooseFormUI: React.FC<ChooseFormUIProps> = ({ buttons }) => {
  const map = new Map<string, boolean>();

  return (
    <ul className="flex p-2 w-full justify-between bg-[#ececee] rounded-xl mt-2 py-1">
      { buttons.map((button) => {
        if (!map.get(button)) {
          map.set(button, true);
          return <ChooseFormButtonUI key={button} children={button} onClick={() => {}} />
        }
        
      }) }
    </ul>
  );
}