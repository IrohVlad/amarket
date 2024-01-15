import Vision from "@/app/about/vision/vision";
import Image from "next/image";
import Advantages from "@/app/components/advantages/advantages";

const About = () => {
    return (
        <div>
            <div className="h-full flex flex-auto flex-col px-6 pt-9 pb-16 relative">
                <div className="max-w-c-full w-full mx-auto flex flex-auto justify-between">
                    <div className="w-1/2 pr-8 flex flex-col justify-between">
                        <div>
                            <span className="text-plus font-semibold">О компании</span>
                            <h1 className="text-xl font-bold max-w-[450px] pt-5 pb-4">Ведущий мировой бизнес</h1>
                            <p className="text-h-grey text-base font-text max-w-[520px] pb-7">Мы сформировали команду
                                сотрудников, прошедших профессиональное обучение, которые готовы
                                эффективно справляться с любыми возникающими ситуациями, обеспечивая спокойствие наших
                                клиентов.</p>
                            <span className="text-plus text-black font-semibold">CEO Zhang Xiaowey</span>
                        </div>
                        <div>
                            <Vision></Vision>
                        </div>
                    </div>
                    <div>
                        <Image src={"/about/cargo-ship.png"} alt={"ship"} width={630} height={847}/>
                    </div>
                    <div className="absolute bg-bg-grey max-w-screen w-full h-3/5 -z-10 bottom-0 left-0"/>
                </div>
            </div>
            <Advantages></Advantages>
            <div className="h-[80vh]">
                <iframe src="https://s3.timeweb.com/2b62ef54-neva-sport/Kage%20no%20Jitsuryokusha%20ni%20Naritakute%21/1.mp4" frameBorder="0" allowFullScreen className="w-full h-full"></iframe>
            </div>
        </div>
    )
}
export default About
