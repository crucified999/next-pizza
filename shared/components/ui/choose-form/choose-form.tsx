import { ChooseFormUIProps } from "./types";
import { ChooseFormButtonUI } from "../choose-form-button";
import { ChooseFormButton } from "../../choose-form-button/choose-form-button";
import { pizzaSizeMapping, pizzaTypeMapping } from "../../../../lib/constants";
import React, { forwardRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { fromTheme } from "tailwind-merge";

export const ChooseFormUI: React.FC<ChooseFormUIProps> = ({
  items,
  className,
  value,
  onClick,
  formType,
}) => {
  const width = 100 / items.length;
  const translate = (items.length - 2) * 100;

  return (
    <ul className="relative flex p-1 w-full justify-between bg-[#ececee] rounded-xl mt-2 ">
      <div
        id={`active-${formType}`}
        style={{ width: `${width}%`, translate: `${translate}%` }}
        className={cn(
          `absolute transition-transform duration-200 rounded-xl bg-white top-0.75 left-1 shadow-sm  h-[calc(100%-6px)]`,
          className
        )}
      />
      {items.map((item, index) => (
        // <button
        //   key={item.name}
        //   onClick={() => onClick?.(item.value)}
        //   className={cn(
        //     "flex z-10 items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm",
        //     {
        //       "text-gray-500 opacity-50 pointer-events-none": item.disabled,
        //     }
        //   )}
        // >
        //   {item.name}
        // </button>
        <ChooseFormButton
          key={index}
          children={item.name}
          buttonType={formType}
          onClick={onClick}
          value={{
            id: index,
            value: +item.value,
          }}
        />
      ))}
    </ul>
  );
};

// export const ChooseFormUI: React.FC<ChooseFormUIProps> = ({ buttons }) => {
//   const map = new Map<number, boolean>();
//   const btns = buttons.filter((button) => {
//     if (!map.get(button.value)) {
//       map.set(button.value, true);

//       return button;
//     }
//   });

//   const width = 100 / btns.length;

//   return (
//     <ul className="relative flex p-1 w-full justify-between bg-[#ececee] rounded-xl mt-2 ">
//       <div
//         id={`active-${buttons[0].buttonType}`}
//         style={{ width: `${width}%` }}
//         className={cn(
//           `absolute transition-transform duration-200 rounded-xl bg-white top-0.75 left-1 shadow-sm  h-[calc(100%-6px)]`
//         )}
//       />
//       {/* "flex justify-center p-1.5 flex-1 text-sm cursor-pointer transition-colors duration-150", */}
//       {btns.map((button, index) => {
//         return (
//           <ChooseFormButton
//             key={index}
//             buttonType={button.buttonType}
//             value={{ value: button.value, id: index }}
//             children={`${
//               button.buttonType === "Теcто"
//                 ? pizzaTypeMapping[button.value]
//                 : pizzaSizeMapping[button.value]
//             }`}
//           />
//         );
//       })}
//     </ul>
//   );
// };
