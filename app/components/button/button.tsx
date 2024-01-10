"use client"
import { ReactNode } from "react";

interface IButton {
    children: ReactNode,
    rounded?: boolean,
    className?: string
}

export default function Button({children, rounded, className}: IButton) {
  return (
    <div onClick={(e)=>{console.log(e)}} className={' bg-red hover:bg-light-red transition-colors duration-300 cursor-pointer w-fit rounded-[4px] ' + className}>{children}</div>
  )
}
