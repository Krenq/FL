import Image from 'next/image';

import * as icons from '../../images/constsIcons';

export default function SeaActItem({ img, mb }) {
	return (
		<div
			className={`flex justify-center items-center ${mb}   hover:opacity-70 transition-all `}
		>
			<div className="flex flex-col bg-white relative p-4 justify-around items-center max-w-278px mx-auto">
				<div className="absolute flex left-2 top-2 z-10">
					<svg
						width="26"
						height="26"
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.13551 13.062H3.25V9.29094C3.25 8.34819 4.19275 7.40543 5.13551 7.40543H22.1051C23.0478 7.40543 23.9906 8.34819 23.9906 9.29094V13.062H22.1051M5.13551 13.062V22.4895C5.13551 23.4322 6.07826 24.375 7.02101 24.375H20.2196C21.1623 24.375 22.1051 23.4322 22.1051 22.4895V13.062M5.13551 13.062H22.1051M13.6203 7.40543L13.6203 24.375M13.6203 7.40543C12.3633 4.7343 9.755 0.429038 7.49239 2.69165C5.22978 4.95426 10.3207 7.40543 13.6203 7.40543ZM13.6203 7.40543C13.6203 3.16313 17.8627 0.334789 19.7482 2.22026C22.1051 4.5771 17.3913 7.40533 13.6203 7.40543Z"
							stroke="#C5C1AB"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<small className="font-bold text-2xl ml-2 text-gray-quick-silver">
						4=5
					</small>
				</div>

				<div className="absolute top-4 right-5 z-10">
					<Image src={icons.ICON_HEART_GRAY} width="22" height="18" />
				</div>

				<div className=" mt-10">
					<Image className=" object-cover" src={img} width={218} height={218} />
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
								stroke="#337202"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
								stroke="#337202"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.66667 9.33333L9 5"
								stroke="#337202"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.66666 9.33333L5.33333 9"
								stroke="#337202"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<p className="text-xs text-gray-quick-silver">1.4 Б</p>
					</div>
				</div>
				<p className="text-xs text-center text-black-70pe tracking-widest">
					До 15.06.22
				</p>
				<div className="">
					<p className="text-xs text-center text-black tracking-widest">
						УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ
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

				<button className=" ..6x04:text-xs bg-gray-light2 text-primary py-3 px-16 font-montserrat whitespace-nowrap text-xs hover:text-white hover:bg-primary transition-all cursor-pointer">
					+ Добавить в заказ
				</button>
			</div>
		</div>
	);
}
