'use client'
import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from "next/navigation";

const Header = () => {
    const pathname = usePathname()

    return (
        <header className='px-6 h-16 flex items-center sticky z-50 top-0 left-0 w-full bg-white'>
            <div className="max-w-c-full m-auto flex items-center justify-between w-full">
                <Image src="/logo.svg" alt="logo" width={110} height={23}/>
                <div className="font-semibold text-h-grey text-sm max-w-3xl w-full flex justify-between">
                    <Link href="/" className={`link ${pathname === '/' ? 'text-black' : ''} "hover:text-black"`}><span>Главная</span></Link>
                    <Link href="/about" className={`link ${pathname === '/about' ? 'text-black' : ''} "hover:text-black"`}><span>О компании</span></Link>
                    <Link href="/market" className={`link ${pathname === '/market' ? 'text-black' : ''} "hover:text-black"`}><span>Маркет</span></Link>
                    <Link href="/logistic" className={`link ${pathname === '/logistic' ? 'text-black' : ''} "hover:text-black"`}><span>Логистика</span></Link>
                    <Link href="/information" className={`link ${pathname === '/information' ? 'text-black' : ''} "hover:text-black"`}><span>Информация</span></Link>
                    <Link href="/services" className={`link ${pathname === '/services' ? 'text-black' : ''} "hover:text-black"`}><span>Услуги</span></Link>
                    <Link href="/blog" className={`link ${pathname === '/blog' ? 'text-black' : ''} "hover:text-black"`}><span>Блог</span></Link>
                </div>
                <button className="bg-light-red text-white w-24 h-9 rounded-lg font-semibold text-sm">Войти</button>
            </div>
        </header>
    )
}

export default Header
