import React, { memo } from "react";

const Footer = memo(() => {
  return (
    <div className="grid grid-rows-custom min-h-[100dvh] w-full bg-blue-500 text-white text-center">
      <ul className="flex flex-row justify-center items-center space-x-4">
        <li className="flex flex-col border-2 border-white text-start text-bold text-xl ">
            
          <a href="/"></a>
        </li>
        <li className="flex flex-col border-2 border-white text-start text-bold text-xl ">
          <a href="/"></a>
        </li>
        <li className="flex flex-col border-2 border-white text-start text-bold text-xl ">
          <a href="/"></a>
        </li>
        <li className="flex flex-col border-2 border-white text-start text-bold text-xl ">
          <a href="/"></a>
        </li>
      </ul>
    </div>
  );
});

export default Footer;
