import Image from 'next/image';
import { useRef } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import * as icons from '../../images/constsIcons';

export default function SpecialOfferItem({ obj }) {
	const [currentColor, setCurrentColor] = useState('1');
	const divBlock = useRef(null)
	const currentColorHandler = (num) => {
		setCurrentColor(num);
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		swipe: false,
		slidesToScroll: 1,
		dotsClass: 'slick-dots slick-thumb',
		appendDots: (dots) => {
			return (
				<div
					ref={divBlock}
					style={{
						display: 'flex',

						justifyContent: 'center',
						position: 'absolute',
						bottom: -5,


					}}
				>
					<div
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',

						}}
					>
						<ul
							style={{
								margin: '0px',
								display: 'flex',
								alignItems: 'flex-end',
								justifyContent: 'center',

							}}
						>
							{dots}
						</ul>
					</div>
				</div>
			);
		},


	};


	return (
		<div className=" min-h-317px ..6x03:h-317px h-428px flex justify-center  relative mt-2 p-2 border border-white hover:border-gray active_card mx-3">
			<div className="flex flex-col  items-center max-w-252px mx-auto mt-5">
				<div className="absolute flex left-0 top-0 z-20 px-2 pt-2 gap-0.5">
					{obj.hit && (
						<small className=" bg-label-yellow  font-noto-sans font-medium text-xs ..6x03:text-9px leading-120% px-5 py-1 samples ..6x03:px-2.5 ..6x03:py-0.5">
							HIT!
						</small>
					)}

					{obj.new && (
						<small className="mr-1 samples font-noto-sans font-medium text-xs ..6x03:text-9px border flex items-center   px-3 py-0.5 ..6x03:py-0 ..6x03:px-1.5 leading-120% border-gray-quick-silver">
							NEW
						</small>
					)}

					{obj.sale && (
						<small className="samples bg-label-pink-2  border-2 border-label-pink-2 text-white font-noto-sans font-medium ..6x03:text-9px text-xs leading-120% ..6x03:px-1.5 ..6x03:py-0 px-3 py-0.5 ">
							-15%
						</small>
					)}
				</div>

				{obj.pDay && (
					<>
						<div className="absolute flex ..6x03:hidden items-center justify-center top-6 left-2 z-20 border-3.5px border-double border-label-green bg-white rounded-56px mt-2.5 p-px w-60px h-60px">
							<p className=" text-center text-label-green text-10px p-10">
								ТОВАР ДНЯ
							</p>
						</div>
						<div className="absolute hidden z-20 ..6x03:flex items-center justify-center top-6 left-2  border border-label-green bg-white rounded-56px mt-0.5 p-px w-9 h-9">
							<p className=" text-center text-label-green text-7px p-10">
								ТОВАР ДНЯ
							</p>
						</div>
					</>
				)}

				<div className="absolute top-5 right-3 ..6x03:right-1 z-10 cursor-pointer">
					<Image src={icons.ICON_HEART_GRAY} width="22" height="18" />
				</div>

				<div className=" ..6x03:hidden">
					<Image
						className=" object-cover"
						src={obj.img}
						width={218}
						height={218}
					/>
				</div>
				{obj.isSlider ? <div className=" hidden z-0  w-32 h-32 ..6x03:block">
					<Slider {...settings} className='specialItemSliderDots'>
						<Image
							className=" object-cover"
							src={obj.img}
							width={130}
							height={130}
						/>

						<Image
							className=" object-cover"
							src={obj.img}
							width={130}
							height={130}
						/>
						<Image
							className=" object-cover"
							src={obj.img}
							width={130}
							height={130}
						/>
						<Image
							className=" object-cover"
							src={obj.img}
							width={130}
							height={130}
						/>
					</Slider>
				</div> : <div className="z-0 hidden  w-32 h-32 ..6x03:block">
					<Image
						className=" object-cover"
						src={obj.img}
						width={130}
						height={130}
					/>
				</div>}

				<div className=" absolute bottom-36 flex flex-row justify-between items-end w-full mb-2 px-3 ..6x03:bottom-110px ..6x03:px-1">
					<div className="flex items-center cursor-pointer">
						{obj.iTab && (
							<p className=" ..6x03:text-11px text-13px font-normal font-montserrat flex   leading-140% text-black-70pe">
								<svg
									className=" mr-0.5"
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
								Акции
							</p>
						)}
					</div>
					{obj.balls ? <div className="flex flex-row items-center">

						<p className="mr-1 font-montserrat font-medium ..6x03:text-10px text-13px leading-140% text-gray-quick-silver">
							1.4 Б
						</p>
						<svg className='..5x2:h-3 ..5x2:w-3'
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

					</div> : ""

					}

				</div>
				<div className=" absolute bottom-20 px-2 ..6x03:px-0 ..6x03:bottom-70px">
					<p className=" ..6x03:text-10px text-13px font-montserrat font-normal leading-150% text-center text-gray-quick-silver tracking-widest card_text uppercase">
						{obj.text}
					</p>
				</div>

				{obj.colors && (
					<div className=" absolute bottom-36 flex flex-row justify-center items-center mt-0.5 ..6x03:bottom-14">
						<div
							onClick={() => currentColorHandler('1')}
							className={` bg-label-pink cursor-pointer ${currentColor === '1'
								? 'w-2 h-2 border border-gray-border'
								: 'w-1.5 h-1.5'
								}  rounded-56px mx-1 `}
						></div>
						<div
							onClick={() => currentColorHandler('2')}
							className={` bg-label-orange cursor-pointer ${currentColor === '2'
								? 'w-2 h-2 border border-gray-border'
								: 'w-1.5 h-1.5'
								}  rounded-56px mx-1 `}
						></div>
						<div
							onClick={() => currentColorHandler('3')}
							className={` bg-label-green cursor-pointer ${currentColor === '3'
								? 'w-2 h-2 border border-gray-border'
								: 'w-1.5 h-1.5'
								}  rounded-56px mx-1 `}
						></div>
					</div>
				)}

				{obj.priceDe && (
					<div className=" absolute bottom-11 flex">
						<p className="text-label-orange text-center text-sm my-4 ..6x03:hidden">
							{obj.priceDe}
						</p>
						<p className=" ml-1 text-label-orange font-lora text-center text-sm my-4 ..6x03:hidden">
							De
						</p>
					</div>
				)}

				{obj.priceSale && (
					<div className="flex flex-col absolute bottom-8 ..6x03:bottom-6">
						<div className=" flex flex-row font-montserrat font-normal text-base ..6x03:text-11px mb-2 mt-1">
							<p className="text-center mr-2 text-gray-quick-silver line-through">
								₽ {obj.priceSale.old}
							</p>
							<p className="text-center text-label-pink-2">
								₽ {obj.priceSale.new}
							</p>
						</div>
					</div>
				)}

				{obj.price && (
					<div className="flex flex-col absolute bottom-8 ..6x03:bottom-6">
						<div className=" flex flex-row font-montserrat font-normal text-base ..6x03:text-11px mb-2 mt-1">
							<p className="text-center">₽ {obj.price}</p>
						</div>
					</div>
				)}

				{obj.priceDe && (
					<div className="sect_buttons absolute bottom-0 flex-row hidden w-full">
						<button className="w-1/2 border hover:border-primary border-gray-light2 px-3 py-2.5 font-montserrat font-normal text-13px text-primary leading-150% hover:bg-primary hover:text-white ..5x03:text-10px">
							КУПИТЬ
						</button>
						<button className="w-1/2 border border-gray-light2 px-3 py-2.5 font-montserrat leading-150% text-label-orange font-normal text-13px whitespace-nowrap hover:bg-label-orange hover:border-label-orange hover:text-white ..5x03:text-10px">
							КУПИТЬ ЗА <span className="font-lora">DE</span>
						</button>
					</div>
				)}

				{!obj.priceDe && (
					<div className="sect_buttons absolute bottom-0 flex-row hidden w-full">
						<button className="w-full border hover:border-primary border-gray-light2 px-3 py-2.5 font-montserrat font-normal text-13px text-primary leading-150% hover:bg-primary hover:text-white">
							КУПИТЬ
						</button>
					</div>
				)}

				{obj.priceDe && (
					<div className=" absolute bottom-0 flex-row hidden ..6x03:flex w-full">
						<button className="w-1/2 border hover:border-primary border-r-0 border-gray-light2 px-3 py-2.5 font-montserrat font-medium text-xs text-primary leading-100%  hover:bg-primary hover:text-white">
							Купить
						</button>
						<button className="w-1/2 border hover:border-label-orange border-gray-light2 px-3 py-2.5 font-lora leading-100% text-label-orange font-medium text-xs whitespace-nowrap  hover:bg-label-orange hover:text-white">
							374 De
						</button>
					</div>
				)}

				{!obj.priceDe && (
					<div className=" absolute bottom-0 hidden ..6x03:block w-full">
						<button className="w-full hover:border-primary border border-gray-light2 px-3 py-2.5 font-montserrat font-medium text-xs text-primary leading-100% hover:bg-primary hover:text-white">
							Купить
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
