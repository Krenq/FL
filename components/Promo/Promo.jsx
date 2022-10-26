import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTimerHook } from '../../hooks/useTimerHook';
import bg from '../../images/templates/bgL.jpg';
import itemleas from '../../images/templates/itemleas.png';

const Promo = ({ refL }) => {
	const [time, setTime] = useState({
		days: '00',
		hours: '00',
		minutes: '00',
		seconds: '00'
	})

	const [showProducts, setShowProducts] = useState({
		central: false
	})
	const showCentral = () => {
		if (window.innerWidth > 450) return
		setShowProducts({ ...showProducts, central: !showProducts.central })
	}
	useEffect(() => {
		setInterval(() => {
			const timeLocal = useTimerHook('Thu Oct 30 2022 17:43:29 GMT+0300 (Москва, стандартное время)') // Пример присылаемой даты с бека
			setTime(timeLocal)
		}, 1000)
	}, [])


	return (
		<div className="relative promo " ref={refL} id='sec-7'>
			<div className="absolute ">
				<Image
					className="object-cover ..5x3:!hidden"
					src={bg}
					width={1920}
					height={727}
					alt="specialOffersImg"
				/>
			</div>
			<section className={`${showProducts.central ? '!block' : ""} bg-white w-full z-50 absolute bottom-2 left-0   hidden flex-col justify-between text-black   font-montserrat    h-200px p-6 info cursor-default`}>
				<button onClick={showCentral} className='absolute right-4 top-4'>
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L1 9M1 1L9 9" stroke="black" strokeWidth="1.5" strokeLinecap="round"></path></svg>

				</button>
				<span className="flex">
					<svg
						width="16"
						height="15"
						viewBox="0 0 16 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
							stroke="#337202"
						/>
					</svg>
					<svg
						width="16"
						height="15"
						viewBox="0 0 16 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
							stroke="#337202"
						/>
					</svg>
					<svg
						width="16"
						height="15"
						viewBox="0 0 16 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
							stroke="#337202"
						/>
					</svg>
					<svg
						width="16"
						height="15"
						viewBox="0 0 16 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
							stroke="#337202"
						/>
					</svg>
					<svg
						width="16"
						height="15"
						viewBox="0 0 16 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
							stroke="#337202"
						/>
					</svg>
				</span>
				<div className="flex flex-row justify-between">
					<p className=" font-semibold font-montserrat text-13px leading-140% w-250px mt-3">
						Шампунь - активатор роста Bio Rehab
					</p>
					<div>
						<p className=" text-label-pink-2 font-medium text-11px mt-3 whitespace-nowrap">
							₽ 764.00
						</p>
						<p className=" text-black font-medium text-11px line-through whitespace-nowrap">
							₽ 764.00
						</p>
					</div>
				</div>
				<div className="flex justify-between">
					<p className=" text-gray-quick-silver font-montserrat font-normal leading-140% text-11px">
						Сила - в длине
					</p>
					<p className=" text-11px font-normal font-lora leading-140% text-label-orange">
						64 De
					</p>
				</div>
				<div className="flex justify-between items-center mt-3 ">
					<button className="font-medium font-montserrat text-black text-xs px-2 flex justify-center leading-100% relative z-10 hover:text-primary transition-all">
						Подробнее
						<div className="bg-primary absolute bottom-0 opacity-40 h-6px w-full" />
					</button>
					<button className="  font-medium  text-xs font-montserrat leading-100% px-6 py-2.5 text-primary bg-gray-light2 flex items-center transition-all hover:opacity-50">
						<svg className='-mt-0.5 mr-1' width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M6 1.74998C5.19458 1.74998 4.54167 2.4029 4.54167 3.20831V3.49998H7.45833V3.20831C7.45833 2.4029 6.80542 1.74998 6 1.74998ZM8.625 3.49998V3.20831C8.625 1.75857 7.44975 0.583313 6 0.583313C4.55025 0.583313 3.375 1.75857 3.375 3.20831V3.49998H1.91667C1.27233 3.49998 0.75 4.02231 0.75 4.66665V12.25C0.75 12.8943 1.27233 13.4166 1.91667 13.4166H10.0833C10.7277 13.4166 11.25 12.8943 11.25 12.25V4.66665C11.25 4.02231 10.7277 3.49998 10.0833 3.49998H8.625ZM7.45833 4.66665V5.24998C7.45833 5.57215 7.7195 5.83331 8.04167 5.83331C8.36383 5.83331 8.625 5.57215 8.625 5.24998V4.66665H10.0833V12.25H1.91667V4.66665H3.375V5.24998C3.375 5.57215 3.63617 5.83331 3.95833 5.83331C4.2805 5.83331 4.54167 5.57215 4.54167 5.24998V4.66665H7.45833Z" stroke="#337202" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>{' '}
						Добавить
					</button>
				</div>
			</section>
			<div className="absolute ..5x3:relative  ..5x3:left-0 top-20 left-40 .4x1:top-7 .4x1:left-20 ..5x3:flex ..5x3:flex-col  ..5x3:items-center  text-white">
				<p className="text-6xl .2x1:text-5xl ..5x1:text-4xl ..6x3:text-22px ..5x2:px-8 leading-120 font-montserrat  ..5x2:w-full">
					Скидка 20% по <br /> промокоду «Click»
				</p>
				<p className="mt-6 font-medium text-xl .2x1:text-lg  leading-120 font-montserrat ..5x2:px-8 ..5x1:text-base  ..5x2:w-full .2x1:mt-2">
					На аквагель для лица серии «FreshClick»
				</p>
				<div>
					<button className="font-montserrat border ..7x001:px-15 .2x1:py-3 ..7x2:px-12 .2x1:px-16 border-gray bg-gray mt-8 text-gray-quick-silver px-24 py-5 transition-all hover:border-primary hover:text-white hover:bg-primary">
						CLICK
					</button>
					<button className="font-montserrat ..7x001:pr-8 border border-gray ..7x2:px-9 ..7x2:pr-5 px-10 .2x1:py-3 py-5 relative ">
						{' '}
						<svg
							className="absolute .2x1:top-4 top-6 left-4"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_2388_695761)">
								<mask
									id="mask0_2388_695761"
									maskUnits="userSpaceOnUse"
									x="2"
									y="2"
									width="16"
									height="16"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M8.50031 2.5H16.0003C16.8646 2.5 17.5004 3.13579 17.5004 4.00001V11.5C17.5004 12.3643 16.8646 13 16.0003 13H13V16C13 16.8642 12.3643 17.5 11.5 17.5H4.00001C3.13579 17.5 2.5 16.8642 2.5 16V8.49993C2.5 7.63571 3.13579 6.99992 4.00001 6.99992H7.0003V4.00001C7.0003 3.13579 7.63609 2.5 8.50031 2.5ZM7.0003 8.49993H4.00001V16H11.5V13H8.50031C7.63609 13 7.0003 12.3643 7.0003 11.5V8.49993ZM8.49959 3.9999V11.4999H15.9996V3.9999H8.49959Z"
										fill="white"
									/>
								</mask>
								<g mask="url(#mask0_2388_695761)">
									<rect
										x="0.999603"
										y="1.0001"
										width="18.0001"
										height="18.0001"
										fill="white"
									/>
								</g>
							</g>
							<defs>
								<clipPath id="clip0_2388_695761">
									<rect width="20" height="20" fill="white" />
								</clipPath>
							</defs>
						</svg>
						Copy <span className='..5x2:hidden'>HTML</span>
					</button>
				</div>
				<div className="flex mt-20 ..5x2:p-1 ..5x2:mt-8 ..5x2:!h-auto  ..6x04:pr-5 ..6x04:justify-center  ..5x3:pl-0 ..5x3:translate-x-0  .5x1:mt-5 timer pl-80  pr-40 .2x1:pr-20 pt-6 pb-6 timer__wrapper">
					<div className="mr-3 ..7x2:mr-4 ..5x2:mr-8 flex flex-col items-center">
						<div className="..5x2:mb-0 font-montserrat ..5x2:text-22px font-bold text-5xl ..6x04:mr-5  ..5x1:text-3xl mr-20 mb-4">
							{time.days}
						</div>
						<div className="mr-20 font-montserrat text-white-80pe ..5x2:text-11px ..6x04:mr-5 ..5x1:text-sm">DAYS</div>
					</div>
					<div className="mr-3 ..7x2:mr-4 ..5x2:mr-8 flex flex-col items-center">
						<div className="..5x2:mb-0 font-montserrat ..5x2:text-22px font-bold text-5xl mr-20 mb-4 ..6x04:mr-5 ..5x1:text-3xl">
							{time.hours}
						</div>
						<div className="mr-20 font-montserrat text-white-80pe ..5x2:text-11px ..6x04:mr-5 ..5x1:text-sm">HOURS</div>
					</div>
					<div className="mr-3 ..7x2:mr-4 ..5x2:mr-8 flex  flex-col items-center">
						<div className="..5x2:mb-0 font-montserrat ..5x2:text-22px   font-bold text-5xl mr-20 mb-4 ..5x1:text-3xl ..6x04:mr-5">
							{time.minutes}
						</div>
						<div className=" mr-20 font-montserrat text-white-80pe ..5x2:text-11px ..6x04:mr-5 ..5x1:text-sm">MINS</div>
					</div>
					<div className="mr-3   flex flex-col items-center">
						<div className="..5x2:mb-0 font-montserrat ..5x2:text-22px font-bold text-5xl mb-4 ..5x1:text-3xl">{time.seconds}</div>
						<div className="..5x1:text-sm font-montserrat text-white-80pe ..5x2:text-11px">SECS</div>
					</div>
				</div>
				<div className="absolute ..6x1:h-72 ..6x1:w-72 ..6x1:-mt-2 ..5x3:-mt-8  ..5x3min:hidden  ..5x3:relative  ..5x3:-top-16 ..5x3:right-0 right-40 top-40 ..5x1:top-7 .4x1:right-0 .2x1:w-1/3 .5x1:top-16">
					<div onClick={showCentral} className=" bg-gray px-4 ..6x3:top-52 left-1/2 ability .1x1:top-36 ..5x2:p-3 ..5x2:h-8 ..5x2:w-8  py-2 .2x1:top-56 text-lg moreP rounded-full absolute cursor-pointer hover:text-white hover:bg-nude-3">
						<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
						</svg>
						<section className="absolute ..6x6:!hidden ..7x2:w-72 ..7x2:-left-16 ..7x001:w-80 ..7x001:-left-20  hidden flex-col justify-between text-black .1x1:-left-100px -left-60 -top-44 font-montserrat rounded-lg w-390px h-200px p-4 info cursor-default">
							<span className="flex">
								<svg
									width="16"
									height="15"
									viewBox="0 0 16 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
										stroke="#337202"
									/>
								</svg>
								<svg
									width="16"
									height="15"
									viewBox="0 0 16 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
										stroke="#337202"
									/>
								</svg>
								<svg
									width="16"
									height="15"
									viewBox="0 0 16 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
										stroke="#337202"
									/>
								</svg>
								<svg
									width="16"
									height="15"
									viewBox="0 0 16 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
										stroke="#337202"
									/>
								</svg>
								<svg
									width="16"
									height="15"
									viewBox="0 0 16 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
										stroke="#337202"
									/>
								</svg>
							</span>
							<div className="flex flex-row justify-between">
								<p className=" font-semibold text-sm leading-140% w-250px mt-3">
									Аквагель для глаз и лица
								</p>
								<div>
									<p className=" text-label-pink-2 font-medium text-base mt-3 whitespace-nowrap">
										₽ 764.00
									</p>
									<p className=" text-black font-medium text-base line-through whitespace-nowrap">
										₽ 764.00
									</p>
								</div>
							</div>
							<div className="flex justify-between">
								<p className=" text-gray-quick-silver font-normal -mt-7 w-76% leading-140% text-13px">
									Гель успокоит кожу, устранит чувство стянутости и предотвратит шелушение
								</p>
								<p className=" text-base font-normal leading-140% text-label-orange">
									64 De
								</p>
							</div>
							<div className="flex justify-between items-center mt-3 ">
								<button className="font-medium text-black text-13px leading-100% relative z-10 hover:text-primary transition-all">
									Подробнее
									<div className="bg-primary absolute bottom-0 opacity-40 h-6px w-full" />
								</button>
								<button className="..7x2:w-36 font-medium text-xs leading-100% px-4 py-3 text-primary bg-gray flex items-center transition-all hover:opacity-50">
									<svg
										className="mr-2"
										width="16"
										height="20"
										viewBox="0 0 16 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M8 2.50016C6.8494 2.50016 5.91667 3.4329 5.91667 4.5835V5.00016H10.0833V4.5835C10.0833 3.4329 9.1506 2.50016 8 2.50016ZM11.75 5.00016V4.5835C11.75 2.51243 10.0711 0.833496 8 0.833496C5.92893 0.833496 4.25 2.51243 4.25 4.5835V5.00016H2.16667C1.24619 5.00016 0.5 5.74635 0.5 6.66683V17.5002C0.5 18.4206 1.24619 19.1668 2.16667 19.1668H13.8333C14.7538 19.1668 15.5 18.4206 15.5 17.5002V6.66683C15.5 5.74635 14.7538 5.00016 13.8333 5.00016H11.75ZM10.0833 6.66683V7.50016C10.0833 7.9604 10.4564 8.3335 10.9167 8.3335C11.3769 8.3335 11.75 7.9604 11.75 7.50016V6.66683H13.8333V17.5002H2.16667V6.66683H4.25V7.50016C4.25 7.9604 4.6231 8.3335 5.08333 8.3335C5.54357 8.3335 5.91667 7.9604 5.91667 7.50016V6.66683H10.0833Z"
											fill="#337202"
										/>
									</svg>{' '}
									Добавить в корзину
								</button>
							</div>
						</section>
					</div>
					<div className='.1x1:mt-4 m-auto ..6x3:h-56 ..6x3:w-56 ..5x4:mt-7 ..6x3:mt-24 ..6x1:mt-6'>
						<Image
							className="object-cover z-20 "
							src={itemleas}
							width={497}
							height={497}
							alt="specialOffersImg"
						/>
					</div>
				</div>
			</div>
			<div className="absolute ..5x3:hidden ..5x3:relative  ..5x3:-top-16 ..5x3:right-0 right-40 top-40 ..5x1:top-7 .4x1:right-0 .2x1:w-1/3 .5x1:top-16">

				<div className=" bg-gray px-4 .1x1:top-48 py-2 .2x1:top-56 text-lg moreP rounded-full absolute cursor-pointer hover:text-white hover:bg-nude-3">
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333C5.41422 9.08333 5.75 8.74755 5.75 8.33333V5.75H8.33333C8.74755 5.75 9.08333 5.41421 9.08333 5C9.08333 4.58579 8.74755 4.25 8.33333 4.25H5.75V1.66667C5.75 1.25245 5.41422 0.916668 5 0.916668C4.58579 0.916668 4.25 1.25245 4.25 1.66667V4.25H1.66667C1.25245 4.25 0.916668 4.58579 0.916668 5C0.916668 5.41421 1.25245 5.75 1.66667 5.75H4.25V8.33333Z" fill="black" />
					</svg>
					<section className="  absolute hidden flex-col justify-between text-black -left-60 -top-44 font-montserrat rounded-lg w-390px h-200px p-4 info cursor-default">
						<span className="flex">
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z"
									stroke="#337202"
								/>
							</svg>
						</span>
						<div className="flex flex-row justify-between">
							<p className=" font-semibold text-sm leading-140% w-250px mt-3">
								Аквагель для глаз и лица
							</p>
							<div>
								<p className=" text-label-pink-2 font-medium text-base mt-3 whitespace-nowrap">
									₽ 764.00
								</p>
								<p className=" text-black font-medium text-base line-through whitespace-nowrap">
									₽ 764.00
								</p>
							</div>
						</div>
						<div className="flex justify-between">
							<p className="..7x001:w-20 text-gray-quick-silver font-normal -mt-7 w-76% leading-140% text-13px">
								Гель успокоит кожу, устранит чувство стянутости и предотвратит шелушение
							</p>
							<p className=" text-base font-normal leading-140% text-label-orange">
								64 De
							</p>
						</div>
						<div className="flex justify-between items-center mt-3 ">
							<button className=" font-medium text-black text-13px leading-100% relative z-10 hover:text-primary transition-all">
								Подробнее
								<div className="bg-primary absolute bottom-0 opacity-40 h-6px w-full" />
							</button>
							<button className="..7x01:w-40 font-medium text-xs leading-100% px-4 py-3 text-primary bg-gray flex items-center transition-all hover:opacity-50">
								<svg
									className="mr-2"
									width="16"
									height="20"
									viewBox="0 0 16 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M8 2.50016C6.8494 2.50016 5.91667 3.4329 5.91667 4.5835V5.00016H10.0833V4.5835C10.0833 3.4329 9.1506 2.50016 8 2.50016ZM11.75 5.00016V4.5835C11.75 2.51243 10.0711 0.833496 8 0.833496C5.92893 0.833496 4.25 2.51243 4.25 4.5835V5.00016H2.16667C1.24619 5.00016 0.5 5.74635 0.5 6.66683V17.5002C0.5 18.4206 1.24619 19.1668 2.16667 19.1668H13.8333C14.7538 19.1668 15.5 18.4206 15.5 17.5002V6.66683C15.5 5.74635 14.7538 5.00016 13.8333 5.00016H11.75ZM10.0833 6.66683V7.50016C10.0833 7.9604 10.4564 8.3335 10.9167 8.3335C11.3769 8.3335 11.75 7.9604 11.75 7.50016V6.66683H13.8333V17.5002H2.16667V6.66683H4.25V7.50016C4.25 7.9604 4.6231 8.3335 5.08333 8.3335C5.54357 8.3335 5.91667 7.9604 5.91667 7.50016V6.66683H10.0833Z"
										fill="#337202"
									/>
								</svg>{' '}
								Добавить в корзину
							</button>
						</div>
					</section>
				</div>
				<div>
					<Image
						className="object-cover z-20"
						src={itemleas}
						alt="specialOffersImg"
						width={497}
						height={497}
					/>
				</div>
			</div>
		</div>
	);
};
export default Promo;
