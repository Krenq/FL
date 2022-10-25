
import Image from 'next/image';
import two from '../../images/templates/2seaAct.jpg';
import nabor from '../../images/templates/nabor.png'
import * as icons from '../../images/constsIcons';

import SearchWindowItem from './SearchWindowItem';

const SearchWindow = () => {
	return (
		<section className="absolute hidden border border-gray right-20 top-0 flex bg-white searchwindow">
			<div className="w-475px    ">
				<h3 className='text-22px text-center'>Предложения для вас</h3>
				<div className='flex justify-between border-b border-gray   mt-5'>
					<p className='ml-9 text-13px text-black-70pe font-medium transition-all cursor-pointer hover:text-black hover:border-b hover:pb-0 pb-1'>Акции и подарки</p>
					<p className='text-13px text-black-70pe font-medium transition-all cursor-pointer hover:text-black hover:border-b hover:pb-0 pb-1'>Идеи подарков</p>
					<p className='mr-9 text-13px text-black-70pe font-medium transition-all cursor-pointer hover:text-black hover:border-b hover:pb-0 pb-1'>Рекомендации</p>
				</div>
				<div className='flex justify-center foryou overflow-auto flex-wrap'>
					<div className='border border-gray mt-3 mb-3 overflow-hidden'>


						<div
							className={`flex justify-center w-52 h-80 items-center  hover:opacity-70 transition-all `}
						>
							<div className="flex flex-col bg-white relative p-3 justify-around items-center ">
								<div className="absolute top-2 left-3 z-10">
									<Image src={nabor} />
								</div>

								<div className="absolute top-2 right-3 z-10">
									<Image src={icons.ICON_HEART_GRAY} width="22" height="18" />
								</div>

								<div className=" mt-4">
									<Image className=" object-cover" src={two} width={146} height={146} />
								</div>
								<div className="flex flex-row justify-between items-end w-full mb-1">
									<p className="text-sm flex items-center text-gray-quick-silver cursor-pointer">
										<svg
											className="mr-2"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="8" cy="8" r="7.5" stroke="#DBDCDA" />
											<path
												d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
												fill="#DBDCDA"
											/>
										</svg>
										Состав
									</p>
									<div className="flex">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M8.66667 9.33333L9 5"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M8.66666 9.33333L5.33333 9"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<p className="text-xs text-gray-quick-silver">1.4 Б</p>
									</div>
								</div>

								<div className="">
									<p className="text-11px text-center text-black tracking-widest">
										Для сенсационного  увлажнения и восстановления кожи
									</p>
								</div>
								<div className="mb-1">
									<div className="flex flex-row">
										<p className="text-center text-sm mr-2 text-gray-quick-silver line-through">
											₽ 920.00
										</p>
										<p className="text-center text-sm text-label-pink-2">₽ 764.00</p>
									</div>
								</div>

								<button className=" ..6x04:text-xs bg-gray-light2 text-primary py-10px px-9 font-montserrat whitespace-nowrap text-xs hover:text-white hover:bg-primary transition-all cursor-pointer">
									+ Добавить в заказ
								</button>
							</div>
						</div>
					</div>
					<div className='border border-gray ml-3 mt-3 mb-3 overflow-hidden'>
						<div
							className={`flex justify-center w-52 h-80 items-center  hover:opacity-70 transition-all `}
						>
							<div className="flex flex-col bg-white relative p-3 justify-around items-center ">

								<div className="absolute top-2 left-3 z-10">
									<Image src={nabor} />
								</div>
								<div className="absolute top-2 right-3 z-10">
									<Image src={icons.ICON_HEART_GRAY} width="22" height="18" />
								</div>

								<div className=" mt-4">
									<Image className=" object-cover" src={two} width={146} height={146} />
								</div>
								<div className="flex flex-row justify-between items-end w-full mb-1">
									<p className="text-sm flex items-center text-gray-quick-silver cursor-pointer">
										<svg
											className="mr-2"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="8" cy="8" r="7.5" stroke="#DBDCDA" />
											<path
												d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
												fill="#DBDCDA"
											/>
										</svg>
										Состав
									</p>
									<div className="flex">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M8.66667 9.33333L9 5"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M8.66666 9.33333L5.33333 9"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<p className="text-xs text-gray-quick-silver">1.4 Б</p>
									</div>
								</div>

								<div className="">
									<p className="text-11px text-center text-black tracking-widest">
										Для сенсационного  увлажнения и восстановления кожи
									</p>
								</div>
								<div className="mb-1">
									<div className="flex flex-row">
										<p className="text-center text-sm mr-2 text-gray-quick-silver line-through">
											₽ 920.00
										</p>
										<p className="text-center text-sm text-label-pink-2">₽ 764.00</p>
									</div>
								</div>

								<button className=" ..6x04:text-xs bg-gray-light2 text-primary py-10px px-9 font-montserrat whitespace-nowrap text-xs hover:text-white hover:bg-primary transition-all cursor-pointer">
									+ Добавить в заказ
								</button>
							</div>
						</div>
					</div>
					<div className='border border-gray mt-3 mb-3 overflow-hidden'>


						<div
							className={`flex justify-center w-52 h-80 items-center  hover:opacity-70 transition-all `}
						>
							<div className="flex flex-col bg-white relative p-3 justify-around items-center ">
								<div className="absolute top-2 left-3 z-10">
									<Image src={nabor} />
								</div>

								<div className="absolute top-2 right-3 z-10">
									<Image src={icons.ICON_HEART_GRAY} width="22" height="18" />
								</div>

								<div className=" mt-4">
									<Image className=" object-cover" src={two} width={146} height={146} />
								</div>
								<div className="flex flex-row justify-between items-end w-full mb-1">
									<p className="text-sm flex items-center text-gray-quick-silver cursor-pointer">
										<svg
											className="mr-2"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="8" cy="8" r="7.5" stroke="#DBDCDA" />
											<path
												d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
												fill="#DBDCDA"
											/>
										</svg>
										Состав
									</p>
									<div className="flex">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M8.66667 9.33333L9 5"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M8.66666 9.33333L5.33333 9"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<p className="text-xs text-gray-quick-silver">1.4 Б</p>
									</div>
								</div>

								<div className="">
									<p className="text-11px text-center text-black tracking-widest">
										Для сенсационного  увлажнения и восстановления кожи
									</p>
								</div>
								<div className="mb-1">
									<div className="flex flex-row">
										<p className="text-center text-sm mr-2 text-gray-quick-silver line-through">
											₽ 920.00
										</p>
										<p className="text-center text-sm text-label-pink-2">₽ 764.00</p>
									</div>
								</div>

								<button className=" ..6x04:text-xs bg-gray-light2 text-primary py-10px px-9 font-montserrat whitespace-nowrap text-xs hover:text-white hover:bg-primary transition-all cursor-pointer">
									+ Добавить в заказ
								</button>
							</div>
						</div>
					</div>
					<div className='border border-gray ml-3 mt-3 mb-3 overflow-hidden'>
						<div
							className={`flex justify-center w-52 h-80 items-center  hover:opacity-70 transition-all `}
						>
							<div className="flex flex-col bg-white relative p-3 justify-around items-center ">

								<div className="absolute top-2 left-3 z-10">
									<Image src={nabor} />
								</div>
								<div className="absolute top-2 right-3 z-10">
									<Image src={icons.ICON_HEART_GRAY} width="22" height="18" />
								</div>

								<div className=" mt-4">
									<Image className=" object-cover" src={two} width={146} height={146} />
								</div>
								<div className="flex flex-row justify-between items-end w-full mb-1">
									<p className="text-sm flex items-center text-gray-quick-silver cursor-pointer">
										<svg
											className="mr-2"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="8" cy="8" r="7.5" stroke="#DBDCDA" />
											<path
												d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
												fill="#DBDCDA"
											/>
										</svg>
										Состав
									</p>
									<div className="flex">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M8.66667 9.33333L9 5"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M8.66666 9.33333L5.33333 9"
												stroke="#5D986A"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<p className="text-xs text-gray-quick-silver">1.4 Б</p>
									</div>
								</div>

								<div className="">
									<p className="text-11px text-center text-black tracking-widest">
										Для сенсационного  увлажнения и восстановления кожи
									</p>
								</div>
								<div className="mb-1">
									<div className="flex flex-row">
										<p className="text-center text-sm mr-2 text-gray-quick-silver line-through">
											₽ 920.00
										</p>
										<p className="text-center text-sm text-label-pink-2">₽ 764.00</p>
									</div>
								</div>

								<button className=" ..6x04:text-xs bg-gray-light2 text-primary py-10px px-9 font-montserrat whitespace-nowrap text-xs hover:text-white hover:bg-primary transition-all cursor-pointer">
									+ Добавить в заказ
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='searchsearchwindow border-l bg-gray-light border-gray '>
				<div className='relative'>
					<svg className='absolute left-2 top-5' width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.96934 1.1365C4.26224 0.843606 4.73711 0.843606 5.03 1.1365C5.3229 1.42939 5.3229 1.90427 5.03 2.19716L3.96934 1.1365ZM1.16634 5.00016L0.636009 5.53049L0.10568 5.00016L0.636009 4.46983L1.16634 5.00016ZM5.03 7.80317C5.3229 8.09606 5.3229 8.57093 5.03 8.86383C4.73711 9.15672 4.26224 9.15672 3.96934 8.86383L5.03 7.80317ZM12.833 4.25016C13.2472 4.25016 13.583 4.58595 13.583 5.00016C13.583 5.41438 13.2472 5.75016 12.833 5.75016V4.25016ZM5.03 2.19716L1.69667 5.53049L0.636009 4.46983L3.96934 1.1365L5.03 2.19716ZM1.69667 4.46983L5.03 7.80317L3.96934 8.86383L0.636009 5.53049L1.69667 4.46983ZM1.16634 4.25016L12.833 4.25016V5.75016H1.16634V4.25016Z" fill="black" />
					</svg>

					<input className='w-full border-gray border-b py-3 pl-8 pr-24 outline-none ' type="text" placeholder='Введите артикул' />
					<button className='text-xs py-2 px-5 bg-gray-light absolute top-2 right-2 cursor-pointer rounded text-primary font-medium'>Найти</button>
				</div>
				<div className='py-2 px-4 flex justify-between'>
					<p className='text-13px font-noto-sans'>Товары (4)</p>
					<button className='text-13px text-gray-quick-silver font-medium'>Очистить</button>
				</div>
				<div>
					<SearchWindowItem />
				</div>

			</div>
			<div></div>
		</section>
	)
}
export default SearchWindow