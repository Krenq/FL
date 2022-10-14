import Image from 'next/image';
import React, { useState } from 'react';
import * as icons from '../../images/constsIcons';
import SetLanguage from '../SetLanguage/SetLanguage';
import SetLocation from '../SetLocation/SetLocation';
import ru from '../../images/Icons/flag.png'
export default function SectionOverNavBar() {
	const [show, setShow] = useState(false),
		[showLang, setShowLang] = useState(false),
		[currentLang, setCurrentLang] = useState({ name: 'RU', src: ru }),
		[currentCity, setCurrentCity] = useState(false)



	const handleSetShow = () => setShow(!show),
		handleSetShowLang = () => setShowLang(!showLang)
	return (
		<>
			<article className=" ..5x2:hidden h-8 px-20 bg-white border-b border-gray-quick-silver border-opacity-50 .2x1:px-1">

				<div className="max-w-screen-overBar h-full mx-auto flex flex-row justify-between items-center ">
					<div className="flex flex-row justify-center items-center">
						<div onClick={handleSetShow} className="flex cursor-pointer hover:text-black transition-colors justify-center items-center mr-5 text-13px font-normal font-montserrat text-gray-quick-silver">
							<Image src={icons.ICON_LOCATION} width={10} height={14} />
							<span className=".1x1:text-xs ml-2 flex items-center">{currentCity?.name || 'Москва'}
								<svg className='ml-1' width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.875 0.75L4 3.875L7.125 0.75H0.875Z" fill="#18202B" />
								</svg>
							</span>

						</div>
						<div className="flex justify-center items-center mr-5 text-13px font-normal font-montserrat text-gray-quick-silver">
							<Image src={icons.ICON_PHONE} width={10} height={16} />
							<span className=".1x1:text-xs ml-2">8-800-700-70-95</span>
						</div>
						<div className=" flex flex-row justify-between items-center ml-2">
							<div className=" flex flex-row justify-between items-center mr-2">
								<Image src={icons.ICON_VK} width={18} height={11} />
							</div>
							<div className=" flex flex-row justify-between items-center mr-2">
								<Image src={icons.ICON_TIK_TOK} width={24} height={24} />
							</div>
							<div className=" flex flex-row justify-between items-center mr-2">
								<Image src={icons.ICON_TELEGRAM} width={14} height={12} />
							</div>
							<div className=" flex flex-row justify-between items-center mr-2">
								<Image src={icons.ICON_ODNOKLASNIKI} width={24} height={24} />
							</div>
						</div>
					</div>

					<div className=" .1x1:ml-0 text-13px font-normal .1x1:text-xs font-montserrat text-gray-quick-silver ml-10">
						Бесплатная доставка от Р 2.500 +
					</div>

					<div className="relative flex flex-row items-center h-full">
						<div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1">
							<Image src={icons.ICON_HEART} width={18} height={15} />
							<span className=".1x1:text-xs .1x1:ml-2 ml-2">Избранное</span>
						</div>
						<div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1">
							<Image src={icons.ICON_DOOR} width={18} height={17} />
							<span className=".1x1:text-xs .1x1:ml-2 ml-2">Вход</span>
						</div>
						<div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1">
							<Image src={icons.ICON_HUMAN} width={14} height={16} />
							<span className=".1x1:text-xs .1x1:ml-2 ml-2">Регистрация</span>
						</div>
						<div onClick={handleSetShowLang} className="w-16 relative overflow-visible flex cursor-pointer items-center h-full text-13px font-normal font-montserrat text-black-70pe border-x border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1">
							<Image
								className="object-cover rounded-full"
								src={currentLang.src}
								width={14}
								height={15}
							/>
							<span className=".1x1:text-xs .1x1:ml-2 ml-1">{currentLang.name}</span>

						</div>
						<SetLanguage setShow={setShowLang} show={showLang} currentLang={currentLang} setCurrentLang={setCurrentLang} />
					</div>
				</div>
			</article>

			<SetLocation showL={show} setShowL={setShow} setCurrentCity={setCurrentCity} currentCity={currentCity} />

		</>

	);
}
