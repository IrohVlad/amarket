'use client'
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import './carousel.css'

// @ts-ignore
const Carousel = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 100000000000);

        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = (index: React.SetStateAction<number>) => {
        setActiveIndex(index);
    };

    return (
        <div className="carousel-container pb-6">
            <div className="carousel-buttons">
                {data.map((item: any, index: any) => {
                    return (
                        <button
                            key={index}
                            className={`carousel-button ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleButtonClick(index)}
                            style={{width: `calc(100% / ${data.length})`}}
                        >
                            {item.title}
                        </button>
                    )
                })}
            </div>
            <div className="carousel-line">
                {data.map((_: any, index: any) => {
                    return (
                        <div
                            key={index}
                            className={`carousel-line-item ${activeIndex === index ? 'active' : ''}`}
                            style={{width: `calc(100% / ${data.length})`}}
                        >
                        </div>
                    )
                })}
            </div>
            <div className="carousel-content">
                {data.map((item: any, index: any) => {
                    return (
                        <div
                            key={index}
                            className={`carousel-item ${activeIndex === index ? 'active' : ''} pt-14`}
                        >
                            <div className={'flex justify-between'}>
                                <div className={'flex flex-col items-start w-4/12'}>
                                    <span className={'text-h-grey'}>{item.description}</span>
                                    <ul className={'pt-10 pb-20'}>
                                        <Image src={"/img/rec.svg"} alt={"he"} width={2} height={2}/>
                                        {item.points.map((point: any) => (
                                            <li key={point} className={'pb-6 font-semibold text-[18px] last:pb-0 flex items-center before:rotate-45 before:rounded-[2px] before:mr-3 before:min-h-[8px] before:min-w-[8px] before:h-[8px] before:w-[8px] before:bg-red ml-0.5'}>{point}</li>
                                        ))}
                                    </ul>
                                    <button
                                        className={'bg-red text-white w-32 h-10 rounded font-semibold text-sm'}>{item.buttonText}</button>
                                </div>
                                {item.imageUrl && (
                                    <Image src={item.imageUrl} alt={`${index}`} width={740} height={470}/>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Carousel;