"use client"
import React, {useEffect} from 'react'
import './carousel.css'


export default function Carousel({data, setter, active}: any) {
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
            <div className="carousel-buttons">
                {data?.map((item: any, index: any) => {
                    return (
                        <button
                            key={index}
                            className={`carousel-button ${active === index ? 'active' : ''}`}
                            onClick={() => handleButtonClick(index)}
                            style={{width: `calc(100% / ${data.length})`}}
                        >
                            {item.title}
                        </button>
                    )
                })}
            </div>
            <div className="carousel-line">
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
            </div>
        </>
    )
}
