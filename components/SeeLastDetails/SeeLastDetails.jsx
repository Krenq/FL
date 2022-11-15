import specialTree from '../../images/templates/detailCardTreeSpecial.jpg'


import two from '../../images/templates/2Offer.jpg';
import tree from '../../images/templates/3Offer.jpg';
import four from '../../images/templates/4Offer.jpg';
import five from '../../images/templates/5Offer.jpg';
import specialOne from '../../images/templates/detailCardOneSpecial.jpg'
import specialTwo from '../../images/templates/detailCardTwoSpecial.jpg'

import oneL from '../../images/templates/oneItemSearchSlider.jpg'
import treeL from '../../images/templates/treeItemSearch.jpg'
import twoI from '../../images/templates/twoItemSearch.jpg'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import SpecialOfferItem from '../SpecialOfferItem/SpecialOfferItem';
import SliderSeeLast from '../SliderSeeLast/SliderSeeLast';




const SeeLastDetails = () => {

	const sliderSpecial = useRef(null)


	const [buttonHover, setButtonHover] = useState(false),
		[buttonHoverNext, setButtonHoverNext] = useState(false)

	const hoverSet = () => setButtonHover(!buttonHover),
		hoverNext = () => setButtonHoverNext(!buttonHoverNext)


	const nextSlidePhotoSpecial = () => {
		if (sliderSpecial.current !== null && sliderSpecial.current.swiper !== null) sliderSpecial.current.swiper.slideNext();
	},
		prevSlidePhotoSpecial = () => {
			if (sliderSpecial.current !== null && sliderSpecial.current.swiper !== null) sliderSpecial.current.swiper.slidePrev();
		}



	return (
		<section className="  bg-gray-100">
			<div className="px-80px relative .3x1:px-10 ..5x2:px-3">
				<h4 className="font-montserrat pt-10 ..5x2:pt-6 ..5x2:mb-2 ..6x3:text-sm ..5x2:text-base  text-26px font-medium mb-6 ">Специальные предложения</h4>
				<Swiper ref={sliderSpecial} slidesPerView={2} className='sliderPaginationCustom' breakpoints={{
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
				}} navigation={true} pagination={{ clickable: true, type: 'bullets', renderBullet: (i, clas) => '<div class="swiper-pagination-bullet"></div>' }} modules={[Navigation, Pagination]}  >

					<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
						<SpecialOfferItem
							obj={{
								img: specialOne,
								text: 'шампунь для глубоко очищения с углем',
								sale: true,
								hit: true,
								priceDe: '3 750',
								priceSale: { old: '999.00', new: '888.00' },
								isSlider: true,
								balls: true,
								isFirstFoliage: true,

								iTab: true,
								isSpecialProductDetail: true
							}}
							srcSliderImgTree={treeL} srcSliderImgTwo={twoI} srcSliderImgOne={oneL}
						/>
					</SwiperSlide>
					<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
						<SpecialOfferItem
							obj={{
								img: specialTwo,
								text: 'детская зубная паста BABY BAMBO',
								pDay: true,
								priceDe: '3 750',
								price: '764.00',
								isSpecialProductDetail: true,
								onePday: true,
								balls: true,
							}}
							srcSliderImgTree={treeL} srcSliderImgTwo={twoI} srcSliderImgOne={oneL}
						/>
					</SwiperSlide>

					<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
						<SpecialOfferItem
							obj={{
								img: specialTree,
								text: 'уход за кожей каждый день”',
								fourNabor: true,

								isSpecialProductDetail: true,
								balls: true,
								priceDe: '3 750',
								isSost: true,
								price: '764.00',
							}}
							srcSliderImgTree={treeL} srcSliderImgTwo={twoI} srcSliderImgOne={oneL}
						/>
					</SwiperSlide>

					<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
						<SpecialOfferItem
							obj={{
								img: two,
								sale: true,
								text: 'Fresh click: дотянуться до звезды ',
								priceDe: '3 750',
								priceSale: { old: '999.00', new: '888.00' },
								isSost: true,
								balls: true,
								fiveNabor: true,
								isSpecialProductDetail: true
							}}
						/>
					</SwiperSlide>
					<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
						<SpecialOfferItem
							obj={{
								img: five,
								text: 'детокс очищение организма',
								balls: true,
								isSost: true,
								priceDe: '3 750',
								treeNabor: true,
								priceSale: { old: '999.00', new: '888.00' },
								isSpecialProductDetail: true
							}}
						/>
					</SwiperSlide>
					<SwiperSlide className="..7x1:!w-44 ..7x1:mr-2 ">
						<SpecialOfferItem
							obj={{
								img: tree,
								text: 'бьюти - косметичка “сакура”',
								hit: true,
								sale: true,
								isSpecialProductDetail: true,
								colors: true,
								price: '764.00',
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
								iTab: true,
								priceSale: { old: '999.00', new: '888.00' },
								isSpecialProductDetail: true
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
								pDay: true,
								colors: true,
								price: '764.00',
								isSpecialProductDetail: true
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
								isSpecialProductDetail: true
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
								isSpecialProductDetail: true
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
								isSpecialProductDetail: true
							}}
						/>	</SwiperSlide>





				</Swiper>
				<button onMouseEnter={hoverSet} onMouseLeave={hoverSet} onClick={prevSlidePhotoSpecial} className='absolute hover:bg-black transition-all w-11 h-11 rounded-32px bg-white flex items-center justify-center ..5x2:hidden  left-11   top-80   z-10'>
					<svg className="activeArrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.33 8L6.03 16L5 15L9 9L9.7 8L9 7L5 1L6.03 0L14.33 8Z" fill={`${buttonHover ? 'white' : "black"}`} />
					</svg>
				</button>
				<button onMouseEnter={hoverNext} onMouseLeave={hoverNext} onClick={nextSlidePhotoSpecial} className='absolute  w-11 h-11 hover:bg-black transition-all rounded-32px bg-white flex items-center justify-center ..5x2:hidden right-11  top-80 z-10'>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.33 8L6.03 16L5 15L9 9L9.7 8L9 7L5 1L6.03 0L14.33 8Z" fill={`${buttonHoverNext ? 'white' : "black"}`} />
					</svg>


				</button>
			</div>
			<SliderSeeLast />


		</section>
	)
}
export default SeeLastDetails