import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='bg-[#2B2B2B]'>
			<div className='_container h-[439px] py-[41px] flex flex-col justify-between max-w-c-full m-auto w-full'>
				<div className='flex items-center justify-between'>
					<div>
						<div className='h-[30px] w-[150px] mb-2'>
							<Image
								className='h-full w-full'
								src='/logo.svg'
								alt='Asiafy'
								width={110}
								height={23}
							/>
						</div>
						<div className=' mb-[29px] font-bold text-lg text-white'>
							ASIAFY
						</div>
						<div className=' font-semibold text-lg text-white mb-1'>
							Подпишитесь на рассылку
						</div>
						<div className=' mb-4 font-medium text-[#D7D7D7] text-base'>
							Мы будем отправлять вам полезную информаю раз в неделю
						</div>
						<div className='flex'>
							<input
								className=' h-12 w-[280px] rounded-lg px-4 py-3 font-medium text-[16px] mr-4'
								type='text'
								placeholder='Ваш email'
							/>
							<button>
								<div className=' font-semibold text-white text-base w-fit'>
									Отправить
								</div>
							</button>
						</div>
					</div>
					<div className='grid grid-cols-[1fr_1fr_1fr] gap-[100px]'>
						<div>
							<div className='mb-4 text-white font-semibold text-sm'>
								Компания
							</div>
							<nav>
								<ul>
									<li className=' font-medium text-[#AFAFAF] mb-4'>О нас</li>
									<li className=' font-medium text-[#AFAFAF] mb-4'>Карьера</li>
									<li className=' font-medium text-[#AFAFAF] mb-4'>Новости</li>
									<li className=' font-medium text-[#AFAFAF]'>Контакты</li>
								</ul>
							</nav>
						</div>
						<div>
							<div className='mb-4 text-white font-semibold text-sm'>
								Компания
							</div>
							<nav>
								<ul>
									<li className=' font-medium text-[#AFAFAF] mb-4'>О нас</li>
									<li className=' font-medium text-[#AFAFAF] mb-4'>Карьера</li>
									<li className=' font-medium text-[#AFAFAF] mb-4'>Новости</li>
									<li className=' font-medium text-[#AFAFAF]'>Контакты</li>
								</ul>
							</nav>
						</div>
						<div>
							<div className='mb-4 text-white font-semibold text-sm'>
								Компания
							</div>
							<nav>
								<ul>
									<li className=' font-medium text-[#AFAFAF] mb-4'>О нас</li>
									<li className=' font-medium text-[#AFAFAF] mb-4'>Карьера</li>
									<li className=' font-medium text-[#AFAFAF] mb-4'>Новости</li>
									<li className=' font-medium text-[#AFAFAF]'>Контакты</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className='p-[20px] border-t border-[#7A7A7A] flex items-center justify-between'>
					<div className='font-medium text-[#D7D7D7]'>
						© 2023 ASIAFY. Все права защищены.
					</div>
					<div>
						<ul className='flex'>
							<li className='mr-6'>
								<Image src='/logo.svg' alt='123' width={110}
								height={23}/>
							</li>
							<li className='mr-6'>
								<Image src='/logo.svg' alt='123' width={110}
								height={23}/>
							</li>
							<li>
								<Image src='/logo.svg' alt='123' width={110}
								height={23}/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
