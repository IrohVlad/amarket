import React from 'react'
import Path from '../path/path';

interface IServiceHeroProps{
    title: string;
    routes: Array<string>
    img_url?: string;
    className?: string;
}

export default function ServiceHero({title, routes, img_url, className}: IServiceHeroProps ) {
  return (
    <section className={" relative text-white bg-cover bg-center bg-no-repeat px-6 py-10 lg:px-10 " + className} style={ img_url ? {backgroundImage: `url(${img_url})`} : {}}>
        <div className=" max-w-c-full m-auto h-[362px] lg:h-40 flex flex-col justify-center relative z-10 sshort:h-fit">
            <h1 className=" ss:text-lg sm:text-[25px] lg:text-2xl font-title font-bold text-3xl mb-5">{ title }</h1>
            <Path routes={routes}/>
        </div>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#202020] opacity-50"></div>
    </section>
  )
}
