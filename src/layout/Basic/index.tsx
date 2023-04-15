import React, { useState } from "react";
import beraLogo from "../../assets/bera.jpg";

type BasicLayoutProps = {
  children?: any;
};
export default function (props: BasicLayoutProps) {
  const { children } = props;
  const [isEnlarged, setIsEnlarged] = useState(false)
  return (
    <div className={"min-h-screen h-screen max-h-screen box-border"}>
      <div className={`fixed left-1/2 top-0 ${isEnlarged ? `w-40 h-10` : `w-16 h-8`} -translate-x-1/2 bg-white rounded-bl-lg rounded-br-lg border-slate-400 border-t-0 drop-shadow-lg z-[1] transition-all flex justify-center items-center`}
        onMouseEnter={() => { setIsEnlarged(true) }}
        onMouseLeave={() => { setIsEnlarged(false) }}>
        <div className={`flex justify-center items-center transition ${isEnlarged ? `opacity-0` : `opacity-100`}`}>
          <img className="h-5 w-11" src={beraLogo} alt="logo" />
        </div>
      </div>
      <div className={"flex flex-col items-center justify-center w-full h-full overflow-auto relative"}>
        {children}
      </div>
    </div>
  );
}
