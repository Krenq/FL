import * as icons from '../../images/constsIcons';
import nabor from '../../images/templates/nabor.png'
import two from '../../images/templates/2seaAct.jpg';
import Image from 'next/image';
import one from '../../images/templates/oneItemSearchSlider.jpg'
import twoI from '../../images/templates/twoItemSearch.jpg'
import tree from '../../images/templates/treeItemSearch.jpg'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';


const SearchWindowItemSpec = ({ ml, isSearchItem, buttonDE, isActions }) => {
	const [showSost, setShowSost] = useState(false),
		[showAct, setShowAct] = useState(false)
	const slider = useRef(null)

	const nextSlide = () => {
		if (slider.current !== null && slider.current.swiper !== null) slider.current.swiper.slideNext();
	},
		prevSlide = () => {
			if (slider.current !== null && slider.current.swiper !== null) slider.current.swiper.slidePrev();
		},
		showSlide = () => setShowSost(!showSost),
		showActL = () => setShowAct(!showAct)


	return (<div className={`border ${isSearchItem ? '!mt-0 border-l-0 !border-t-0 mt1px' : ""} border-gray mt-3  overflow-hidden ${ml ? 'ml-3 .2x1:!ml-0' : ""}`}>


		<div
			className={`flex justify-center w-52 h-80 items-center   transition-all `}
		>
			<div className={`  flex flex-col bg-white relative p-3 justify-around items-center `}>
				{!isSearchItem && <div className="absolute top-10px left-3 z-10">
					<Image src={nabor} />
				</div>}


				<div className={`${isSearchItem ? '!top-6' : ""} absolute top-5 right-5 z-10`}>
					<Image src={icons.ICON_HEART_GRAY} width="22" height="18" />
				</div>

				<div className=" mt-4">
					<Image className=" object-cover" src={two} width={146} height={146} />
				</div>
				<div className={`flex flex-row justify-between items-end w-full mb-1 ${showSost ? 'transform20px' : ''}`}>
					{isActions ? <p onClick={showSlide} className="cursor-pointer text-sm flex items-center text-black-70pe font-montserrat">
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
						Акции
					</p> : <p onClick={showActL} className="cursor-pointer text-sm flex items-center text-black-70pe font-montserrat">
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
					</p>}

					<div className="flex">
						<svg
							width="16"
							className='mr-1'
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
						<p className="text-13px font-montserrat font-medium text-black-70pe ">1.4 Б</p>
					</div>
				</div>

				{showAct && <div className={`absolute -mb-0.5 bottom-14  left-0 right-0 ${isSearchItem ? '!bottom-9' : ""}`}>
					<div className='relative w-full  px-11 bg-gray-light2 py-3 pt-3'>
						<Swiper ref={slider} slidesPerView={2} navigation={true} modules={[Navigation]} className="mySwiperAct">

							<SwiperSlide>
								<div className='relative  rounded overflow-hidden itemSlideDrop'>


									<div className='absolute left-0 right-0 bottom-0 top-0 bg-white-60pe z-10 flex items-center justify-center'>
										<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z" stroke="#C5C1AB" strokeWidth="1.2" stroke-linecap="round" stroke-linejoin="round" />
										</svg>

									</div>
									<Image src={one} width={'100%'} height={'100%'} />
								</div></SwiperSlide>
							<SwiperSlide> <div className=' rounded overflow-hidden itemSlideDrop'>
								<Image width={'100%'} height={'100%'} src={twoI} />
							</div></SwiperSlide>
							<SwiperSlide> <div className='ml-1.5 rounded overflow-hidden itemSlideDrop'>
								<Image width={'100%'} height={'100%'} src={tree} />
							</div></SwiperSlide>
							<SwiperSlide> <div className=' ml-1.5 rounded overflow-hidden itemSlideDrop'>
								<Image src={one} width={'100%'} height={'100%'} />
							</div></SwiperSlide>
							<SwiperSlide> <div className='ml-1.5 rounded overflow-hidden itemSlideDrop'>
								<Image src={twoI} width={'100%'} height={'100%'} />
							</div></SwiperSlide>
							<SwiperSlide> <div className='ml-1.5 rounded overflow-hidden itemSlideDrop'>
								<Image src={tree} width={'100%'} height={'100%'} />
							</div></SwiperSlide>

						</Swiper>
						<button onClick={prevSlide} className='absolute left-5 top-7'>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11 11.8167L7.16788 8L11 4.175L9.82024 3L4.8 8L9.82024 13L11 11.8167Z" fill="black" />
							</svg>
						</button>
						<button onClick={nextSlide} className='absolute right-5 top-7'>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5 11.8167L8.83212 8L5 4.175L6.17976 3L11.2 8L6.17976 13L5 11.8167Z" fill="black" fillOpacity="0.7" />
							</svg>

						</button>
					</div>

				</div>}



				{showSost ?
					<div className={`absolute bottom-14 -mb-0.5  left-0 right-0 ${isSearchItem ? '!bottom-9' : ""}`}>
						<div className='relative w-full  px-3 bg-gray-light2 py-4 pt-6'>
							<small className='absolute right-0 font-medium left-0 text-9px text-center top-6px font-montserrat z-20'>Экономия при покупке в акции:</small>

							<Swiper ref={slider} slidesPerView={3} navigation={true} modules={[Navigation]} className="mySwiper">

								<SwiperSlide> <div className='relative ml-1.5    mt-1 itemSlideDrop'>
									<div className='absolute left-0 right-0 bottom-0 top-0 rounded bg-white-60pe z-10 flex items-center justify-center'>
										<small className='absolute -left-1 -top-1 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl'>400 ₽</small>

										<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z" stroke="#C5C1AB" strokeWidth="1.2" stroke-linecap="round" stroke-linejoin="round" />
										</svg>

									</div>
									<Image src={one} className='!rounded' width={'100%'} height={'100%'} />
								</div></SwiperSlide>
								<SwiperSlide> <div className='ml-1.5  marker: mt-1 itemSlideDrop'>
									<small className='absolute left-0.5 -top-0 z-10 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl'>700 ₽</small>

									<Image className='rounded' width={'100%'} height={'100%'} src={twoI} />
								</div></SwiperSlide>
								<SwiperSlide> <div className='ml-1.5   mt-1 itemSlideDrop'>
									<small className='absolute left-0.5 -top-0 z-10 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl'>300 ₽</small>

									<Image width={'100%'} className='rounded' height={'100%'} src={tree} />
								</div></SwiperSlide>
								<SwiperSlide> <div className=' ml-1.5  marker: mt-1 itemSlideDrop'>
									<Image src={one} width={'100%'} className='rounded' height={'100%'} />
								</div></SwiperSlide>
								<SwiperSlide> <div className='ml-1.5   mt-1 itemSlideDrop'>
									<Image src={twoI} width={'100%'} className='rounded' height={'100%'} />
								</div></SwiperSlide>
								<SwiperSlide> <div className='ml-1.5   mt-1 itemSlideDrop'>
									<Image className='rounded' src={tree} width={'100%'} height={'100%'} />
								</div></SwiperSlide>

							</Swiper>
							<button onClick={prevSlide} className='absolute left-0.5 top-11'>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11 11.8167L7.16788 8L11 4.175L9.82024 3L4.8 8L9.82024 13L11 11.8167Z" fill="black" />
								</svg>
							</button>
							<button onClick={nextSlide} className='absolute right-0.5 top-11'>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5 11.8167L8.83212 8L5 4.175L6.17976 3L11.2 8L6.17976 13L5 11.8167Z" fill="black" fillOpacity="0.7" />
								</svg>

							</button>
						</div>

					</div>


					: ''}
				<>
					<div className="mt-2 ">
						<p className={`text-11px text-center text-black-70pe font-montserrat tracking-widest ${isSearchItem ? 'dotsTextSearch' : ""}`}>
							ДЛЯ СЕНСАЦИОННОГО УВЛАЖНЕНИЯ И ВОССТАНОВЛЕНИЯ КОЖИ
						</p>
					</div>
					<div className={`mb-1 mt-1 ${isSearchItem ? '!mb-9' : ''}`}>
						<div className="flex flex-row">
							<p className="text-center text-13px font-montserrat mr-2 text-gray-quick-silver line-through">
								₽ 920.00
							</p>
							<p className="text-center text-13px font-montserrat text-label-pink-2">₽ 764.00</p>
						</div>
					</div>
				</>

				{isSearchItem ? buttonDE ? <div className='border-t -bottom-0.5 h-9 right-0 left-0 absolute border-gray '>
					<button className='h-9 m-0 py-3 w-1/2 border-r border-gray font-montserrat text-xs font-medium text-primary'>Купить</button>
					<button className='h-9 m-0 py-3 w-1/2 font-montserrat text-xs font-medium text-label-orange'>374 De</button>
				</div> : <button className=' border-t h-9 py-3 font-montserrat font-medium text-xs text-primary border-gray absolute -bottom-0.5 right-0 left-0'>
					Купить
				</button> : <button className=" ..6x04:text-xs bg-gray-light2 text-primary py-10px px-9 font-montserrat font-medium whitespace-nowrap   hover:text-white text-xs hover:bg-primary transition-all cursor-pointer">
					+ Добавить в заказ
				</button>}

			</div>
		</div>
	</div>)
}
export default SearchWindowItemSpec