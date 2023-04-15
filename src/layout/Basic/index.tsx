import React, { useState } from "react";
import { Link } from "react-router-dom";
import beraLogo from "../../assets/bera.jpg";
import cx from 'classnames';

type BasicLayoutProps = {
  children?: any;
};
export default function (props: BasicLayoutProps) {
  const { children } = props;
  const [isEnlarged, setIsEnlarged] = useState(false)
  return (
    <div className={"min-h-screen h-screen max-h-screen box-border"}>
      <div className={cx("fixed left-1/2 top-0 -translate-x-1/2 bg-white rounded-bl-lg rounded-br-lg border-slate-400 border-t-0 drop-shadow-lg z-[1]", {
        " w-72 h-40": isEnlarged
      })}
        onMouseEnter={() => { setIsEnlarged(true) }}
        onMouseLeave={() => { setIsEnlarged(false) }}>
        {!isEnlarged && <div className={"flex justify-center items-center my-1 mx-3"}>
          <Link to="/">
            <img className="h-5 w-11" src={beraLogo} alt="logo" />
          </Link>
        </div>
        }
      </div>
      <div className={"flex flex-col items-center justify-center w-full h-full overflow-auto relative"}>
        {children}
      </div>
    </div>
  );
}
