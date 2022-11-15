import { useRef } from "react";
import one from '../../images/templates/DetailCardOne.jpg'
import oneS from '../../images/templates/1Offer.jpg';
import two from '../../images/templates/2Offer.jpg';
import tree from '../../images/templates/3Offer.jpg';
import four from '../../images/templates/4Offer.jpg';
import five from '../../images/templates/5Offer.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import oneL from '../../images/templates/oneItemSearchSlider.jpg'
import treeL from '../../images/templates/treeItemSearch.jpg'
import twoI from '../../images/templates/twoItemSearch.jpg'
import SpecialOfferItem from "../SpecialOfferItem/SpecialOfferItem";
import { Navigation, Pagination } from "swiper";
import { useState } from "react";
const SliderSeeLast = () => {
	const [buttonHover, setButtonHover] = useState(false),
		[buttonHoverNext, setButtonHoverNext] = useState(false)

	const hoverSet = () => setButtonHover(!buttonHover),
		hoverNext = () => setButtonHoverNext(!buttonHoverNext)
	const seeSlider = useRef(null)

	const nextSlidePhotoSee = () => {
		if (seeSlider.current !== null && seeSlider.current.swiper !== null) seeSlider.current.swiper.slideNext();
	},
		prevSlidePhotoSee = () => {
			if (seeSlider.current !== null && seeSlider.current.swiper !== null) seeSlider.current.swiper.slidePrev();
		}
	return (
		<div className="relative px-80px pb-60px .3x1:px-10 ..5x2:px-3">
			<h4 className="font-montserrat pt-60px ..5x2:pt-6 ..5x2:mb-2 ..6x3:text-sm ..5x2:text-base text-26px font-medium mb-6 ">Вы недавно смотрели</h4>
			<Swiper ref={seeSlider} slidesPerView={2} pagination={{ clickable: true, type: 'bullets', renderBullet: (i, clas) => '<div class="swiper-pagination-bullet"></div>' }} className='sliderPaginationCustom' breakpoints={{
				750: {
					slidesPerView: 3
				},
				1000: {
					slidesPerView: 4
				},
				1300: {
					slidesPerView: 5
				},
				1600: {
					slidesPerView: 6
				}
			}} navigation={true} modules={[Navigation, Pagination]}  >

				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<SpecialOfferItem
						obj={{
							img: oneS,
							text: 'питательный шампунь с корнем имбиря',
							pDay: true,

							priceDe: '3 750',
							price: '764.00',
							isSlider: true,
							balls: true,
							isSpecialProductDetail: true
						}}
					/>
				</SwiperSlide>
				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<SpecialOfferItem
						obj={{
							img: two,
							text: 'Укрепляющая сыворотка для контура овала лица с коллагеном',
							new: true,
							sale: true,
							isSpecialProductDetail: true,
							iTab: true,
							priceSale: { old: '999.00', new: '888.00' },
						}}
						srcSliderImgTree={treeL} srcSliderImgTwo={twoI} srcSliderImgOne={oneL}
					/>
				</SwiperSlide>

				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<SpecialOfferItem
						obj={{
							img: tree,
							text: 'бьюти - косметичка “сакура”',
							hit: true,

							isSpecialProductDetail: true,
							colors: true,
							price: '764.00',
						}}
					/>
				</SwiperSlide>

				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<SpecialOfferItem
						obj={{
							img: four,
							text: 'Укрепляющая сыворотка для контура овала лица с коллагеном ',
							priceDe: '3 750',
							price: '764.00',
							isSpecialProductDetail: true,
						}}
					/>
				</SwiperSlide>
				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<SpecialOfferItem
						obj={{
							img: five,
							isSpecialProductDetail: true,
							text: 'ночная крем-маска с лавандой',
							hit: true,
							priceDe: '3 750',
							price: '764.00',
						}}
					/>
				</SwiperSlide>
				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<SpecialOfferItem
						obj={{
							img: one,
							text: 'питательный шампунь с корнем имбиря',
							pDay: true,
							hit: true,
							isSpecialProductDetail: true,
							priceDe: '3 750',
							price: '764.00',
						}}
					/>
				</SwiperSlide>



				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 " >
					<SpecialOfferItem
						obj={{
							img: two,
							text: 'Укрепляющая сыворотка для контура овала лица с коллагеном',
							new: true,
							sale: true,
							iTab: true,
							isSpecialProductDetail: true,
							priceSale: { old: '999.00', new: '888.00' },
						}}
						srcSliderImgTree={treeL} srcSliderImgTwo={twoI} srcSliderImgOne={oneL}
					/>
				</SwiperSlide>



				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 " >
					<SpecialOfferItem
						obj={{
							img: tree,
							text: 'бьюти - косметичка “сакура”',
							hit: true,
							isSpecialProductDetail: true,
							pDay: true,
							colors: true,
							price: '764.00',
						}}
					/>
				</SwiperSlide>
				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 " >
					<SpecialOfferItem
						obj={{
							img: four,
							text: 'Укрепляющая сыворотка для контура овала лица с коллагеном ',
							priceDe: '3 750',
							isSpecialProductDetail: true,
							price: '764.00',
						}}
					/>
				</SwiperSlide>
				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 " >

					<SpecialOfferItem
						obj={{
							img: four,
							text: 'Укрепляющая сыворотка для контура овала лица с коллагеном ',
							priceDe: '3 750',
							isSpecialProductDetail: true,
							price: '764.00',
						}}
					/>	</SwiperSlide>
				<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
					<SpecialOfferItem
						obj={{
							img: five,
							text: 'ночная крем-маска с лавандой',
							hit: true,
							priceDe: '3 750',
							price: '764.00',
							isSpecialProductDetail: true,
						}}
					/>	</SwiperSlide>





			</Swiper>
			<button onMouseEnter={hoverSet} onMouseLeave={hoverSet} onClick={prevSlidePhotoSee} className='absolute w-11 h-11 rounded-32px hover:bg-black transition-all bg-white flex items-center justify-center ..5x2:hidden  left-11   top-80   z-10'>
				<svg className="activeArrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14.33 8L6.03 16L5 15L9 9L9.7 8L9 7L5 1L6.03 0L14.33 8Z" fill={`${buttonHover ? 'white' : "black"}`} />
				</svg>
			</button>
			<button onMouseEnter={hoverNext} onMouseLeave={hoverNext} onClick={nextSlidePhotoSee} className='absolute  w-11 h-11 rounded-32px bg-white flex items-center justify-center hover:bg-black transition-all ..5x2:hidden right-11  top-80 z-10'>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14.33 8L6.03 16L5 15L9 9L9.7 8L9 7L5 1L6.03 0L14.33 8Z" fill={`${buttonHoverNext ? 'white' : "black"}`} />
				</svg>


			</button>
		</div>
	)
}
export default SliderSeeLast