"use client"
import React, {useEffect} from 'react'
import { useRouter } from 'next/router';
import './carousel.css'
import Image from 'next/image';


export default function Carousel({data, setter, active, column, link}: any) {
    useEffect(() => {
        const interval = setInterval(() => {
            setter((prevIndex: any) => (prevIndex + 1) % data.length);
        }, 2000000);

        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = (index: React.SetStateAction<number>) => {
        setter(index);
    };
    return (
        <>
            <div className={`carousel-buttons ${column && 'flex-col gap-10'}`}>
                {data?.map((item: any, index: any) => {
                    return (
                        <button
                            key={index}
                            className={`carousel-button flex gap-3 ${active === index ? 'active' : ''} ${column && 'w-full'}`}
                            onClick={() => handleButtonClick(index)}
                            style={column ? {} : {width: `calc(100% / ${data.length})`}}
                        >
                            { item.icon && <Image src={item.icon} width={28} height={28} alt='icon' />}
                            {item.title}
                        </button>
                    )
                })}
            </div>
            {/* <div className="carousel-line">
                {data?.map((_: any, index: any) => {
                    return (
                        <div
                            key={index}
                            className={`carousel-line-item ${active === index ? 'active' : ''}`}
                            style={{width: `calc(100% / ${data.length})`}}
                        >
                        </div>
                    )
                })}
            </div> */}
        </>
    )
}
