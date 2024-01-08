import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
	return (
		<header className='max-w-c-full m-auto w-full'>
			<div className='_container h-[70px] flex justify-between items-center'>
				<div>
					<Image src='/logo.svg' alt='Asiafy' width={110} height={23} />
				</div>
				<nav>
					<ul className='flex font-semibold font-raleway text-sm text-[#6C6C6C]'>
						<li className=' mr-12 hover:text-black transition-colors duration-300 cursor-pointer'>
							<Link active-class='text-black' href='/'>
								Главная
							</Link>
						</li>
						<li className=' mr-12 hover:text-black transition-colors duration-300 cursor-pointer'>
							<Link active-class='text-black' href='/'>
								Маркет
							</Link>
						</li>
						<li className=' mr-12 hover:text-black transition-colors duration-300 cursor-pointer'>
							<Link active-class='text-black' href='/'>
								Карго
							</Link>
						</li>
						<li className=' mr-12 hover:text-black transition-colors duration-300 cursor-pointer'>
							<Link active-class='text-black' href='/'>
								О компании
							</Link>
						</li>
						<li className=' mr-12 hover:text-black transition-colors duration-300 cursor-pointer flex items-center'>
							<div className='mr-2'>Информация</div>
							<div>
								<svg
									width='11'
									height='7'
									viewBox='0 0 11 7'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10.1666 1.16667L5.49992 5.83334L0.833252 1.16667'
										stroke='currentColor'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</div>
						</li>
						<li className=' mr-12 hover:text-black transition-colors duration-300 cursor-pointer'>
							<Link active-class='text-black' href='/'>
								Услуги
							</Link>
						</li>
						<li className=' mr-12 hover:text-black transition-colors duration-300 cursor-pointer'>
							<Link active-class='text-black' href='/'>
								Контакты
							</Link>
						</li>
						<li className=' hover:text-black transition-colors duration-300 cursor-pointer'>
							<Link active-class='text-black' href='/'>
								Блог
							</Link>
						</li>
					</ul>
				</nav>
				<button>
					<Link active-class='text-black' href='/'>
						<div className=' font-semibold text-[14px]'>Войти</div>
					</Link>
				</button>
			</div>
		</header>
	)
}

export default Header
