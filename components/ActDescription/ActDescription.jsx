import { useRef, useState } from "react"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import SpecialOfferItem from "../SpecialOfferItem/SpecialOfferItem"
import defailFilterTwo from '../../images/templates/detailFilterTwo.jpg'
import fourF from '../../images/templates/4Offer.jpg';
import treeL from '../../images/templates/treeItemSearch.jpg'
import twoI from '../../images/templates/twoItemSearch.jpg'
import oneL from '../../images/templates/oneItemSearchSlider.jpg'
const ActDescription = () => {

	const sliderFilt = useRef(null)
	const [filter, setFilter] = useState({
		act: true,
		cool: false,
		recomend: false
	})

	const setFilterItem = (title) => {
		switch (title) {
			case ('act'):
				return setFilter({ cool: false, act: true, recomend: false })
			case ('cool'):
				return setFilter({ cool: true, act: false, recomend: false })
			case ('recomend'):
				return setFilter({ cool: false, act: false, recomend: true })
			default: return
		}
	}



	const nextSlideFilt = () => {
		if (sliderFilt.current !== null && sliderFilt.current.swiper !== null) sliderFilt.current.swiper.slideNext();
	},
		prevSlideFilt = () => {
			if (sliderFilt.current !== null && sliderFilt.current.swiper !== null) sliderFilt.current.swiper.slidePrev();
		}

	return (
		<section className="pb-100px .6x3:pb-5 ">
			<div className="px-80px ..5x2:px-3  ..6x04:block hidden  border-b   border-stroke">
				<Swiper slidesPerView={3} className='hidden ..6x04:flex  ' navigation={true} modules={[Navigation]}  >

					<SwiperSlide className="!w-auto">
						<p onClick={() => setFilterItem('act')} className={`${filter.act ? 'text-primary border-b' : "text-gray-quick-silver"} ..5x4:text-sm cursor-pointer ..6x03:mr-5 ..6x03:text-13px ..6x03:pb-1 text-center .2x1:text-base pb-14px mr-9 font-montserrat text-18px font-semibold `}>Участвует в акциях (5)</p>

					</SwiperSlide>
					<SwiperSlide className="!w-auto" >
						<p onClick={() => setFilterItem('cool')} className={`${filter.cool ? 'text-primary border-b' : "text-gray-quick-silver"} ..5x4:text-sm cursor-pointer ..6x03:mr-5 text-center ..6x03:text-13px pb-14px ..6x03:pb-1 .2x1:text-base mr-9 font-montserrat text-18px font-semibold  `}>Отлично сочетается</p>

					</SwiperSlide>
					<SwiperSlide className="!w-auto">
						<p onClick={() => setFilterItem('recomend')} className={`${filter.recomend ? 'text-primary border-b' : "text-gray-quick-silver"} ..5x4:text-sm text-center ..6x03:mr-5 ..6x03:text-13px cursor-pointer ..6x03:pb-1 .2x1:text-base pb-14px font-montserrat text-18px font-semibold  `}>Также рекомендуем</p>

					</SwiperSlide>
					<SwiperSlide className="!w-auto">
						<p onClick={() => setFilterItem('recomend')} className={`${filter.recomend ? 'text-primary border-b' : "text-gray-quick-silver"} ..5x4:text-sm text-center ..6x03:mr-5 ..6x03:text-13px cursor-pointer ..6x03:pb-1 .2x1:text-base pb-14px font-montserrat text-18px font-semibold  `}>Также рекомендуем</p>

					</SwiperSlide>

				</Swiper>
			</div>

			<div className="px-80px ..5x2:px-3  ..6x04:hidden  border-b flex  border-stroke">


				<p onClick={() => setFilterItem('act')} className={`${filter.act ? 'text-primary border-b' : "text-gray-quick-silver"} ..5x4:text-sm cursor-pointer ..6x03:mr-5 ..6x03:text-13px ..6x03:pb-1  .2x1:text-base pb-14px mr-9 font-montserrat text-18px font-semibold `}>Участвует в акциях (5)</p>
				<p onClick={() => setFilterItem('cool')} className={`${filter.cool ? 'text-primary border-b' : "text-gray-quick-silver"} ..5x4:text-sm cursor-pointer ..6x03:mr-5 ..6x03:text-13px pb-14px ..6x03:pb-1 .2x1:text-base mr-9 font-montserrat text-18px font-semibold  `}>Отлично сочетается</p>
				<p onClick={() => setFilterItem('recomend')} className={`${filter.recomend ? 'text-primary border-b' : "text-gray-quick-silver"} ..5x4:text-sm ..6x03:mr-5 ..6x03:text-13px cursor-pointer ..6x03:pb-1 .2x1:text-base pb-14px font-montserrat text-18px font-semibold  `}>Также рекомендуем</p>
			</div>
			<div className="px-80px relative ..5x2:px-3">
				<Swiper ref={sliderFilt} breakpoints={{
					500: {
						slidesPerView: 3
					},
					1250: {
						slidesPerView: 4
					},
					1560: {
						slidesPerView: 5
					},
					1850: {
						slidesPerView: 6
					}
				}} slidesPerView={2} navigation={true} modules={[Navigation]}  >

					<SwiperSlide className="..5x2:flex ..7x1:!w-44 ..7x1:mr-6  ..5x2:justify-center">
						<SpecialOfferItem
							obj={{
								img: fourF,
								text: 'Для сенсационного  увлажнения и восстановления кожи',
								isActions: true,
								isDetails: true,
								DetailsPrice: {
									price: '920.00',
									oldPrice: '764.00'
								},
								isFirstFoliage: true,
								noIsHeart: true,
								isGif: true,
								gifTitle: '4=5',
								timeOver: '15.06.22',

								isSlider: true,
								balls: true
							}}
							srcSliderImgTree={treeL} srcSliderImgTwo={twoI} srcSliderImgOne={oneL}
						/>
					</SwiperSlide>
					<SwiperSlide className="..5x2:flex ..7x1:!w-44 ..7x1:mr-6 ..5x2:justify-center">
						<SpecialOfferItem
							obj={{
								img: defailFilterTwo,
								text: 'Для сенсационного  увлажнения и восстановления кожи',
								isSost: true,
								isDetails: true,
								DetailsPrice: {
									price: '920.00',
									oldPrice: '764.00'
								},
								isFirstFoliage: true,
								noIsHeart: true,
								isGif: true,
								gifTitle: '2=3',
								timeOver: '15.06.22',

								isSlider: true,
								balls: true
							}}
							srcSliderImgTree={treeL} srcSliderImgTwo={twoI} srcSliderImgOne={oneL}
						/>
					</SwiperSlide>
					<SwiperSlide className="..5x2:flex ..7x1:!w-44 ..7x1:mr-6 ..5x2:justify-center">
						<SpecialOfferItem
							obj={{
								img: defailFilterTwo,
								text: 'Для сенсационного  увлажнения и восстановления кожи',
								isSost: true,
								isDetails: true,
								DetailsPrice: {
									price: '920.00',
									oldPrice: '764.00'
								},
								isFirstFoliage: true,
								noIsHeart: true,
								isGif: true,
								gifTitle: '1=2',
								timeOver: '15.06.22',

								isSlider: true,
								balls: true
							}}
							srcSliderImgTree={treeL} srcSliderImgTwo={twoI} srcSliderImgOne={oneL}
						/>
					</SwiperSlide>
					<SwiperSlide className="..5x2:flex ..7x1:!w-44 ..7x1:mr-6 ..5x2:justify-center">
						<SpecialOfferItem
							obj={{
								img: fourF,
								text: 'Для сенсационного  увлажнения и восстановления кожи',
								isSost: true,
								isDetails: true,
								DetailsPrice: {
									price: '920.00',
									oldPrice: '764.00'
								},
								isFirstFoliage: true,
								noIsHeart: true,
								isGif: true,
								gifTitle: '4=5',
								timeOver: '15.06.22',

								isSlider: true,
								balls: true
							}}
							srcSliderImgTree={treeL} srcSliderImgTwo={twoI} srcSliderImgOne={oneL}
						/>
					</SwiperSlide>
					<SwiperSlide className="..5x2:flex ..7x1:!w-44 ..7x1:mr-6 ..5x2:justify-center">
						<SpecialOfferItem
							obj={{
								img: fourF,
								text: 'Для сенсационного  увлажнения и восстановления кожи',

								isDetails: true,
								DetailsPrice: {
									price: '920.00',
									oldPrice: '764.00'
								},
								isFirstFoliage: true,
								noIsHeart: true,
								isGif: true,
								gifTitle: '4=5',
								timeOver: '15.06.22',

								isSlider: true,
								balls: true
							}}
							srcSliderImgTree={treeL} srcSliderImgTwo={twoI} srcSliderImgOne={oneL}
						/>
					</SwiperSlide>
					<SwiperSlide className="..5x2:flex ..7x1:!w-44 ..7x1:mr-6 ..5x2:justify-center">
						<SpecialOfferItem
							obj={{
								img: fourF,
								text: 'Для сенсационного  увлажнения и восстановления кожи',
								isSost: true,
								isDetails: true,
								DetailsPrice: {
									price: '920.00',
									oldPrice: '764.00'
								},
								isFirstFoliage: true,
								noIsHeart: true,
								isGif: true,
								gifTitle: '4=5',
								timeOver: '15.06.22',

								isSlider: true,
								balls: true
							}}
						/>
					</SwiperSlide>
					<SwiperSlide className="..5x2:flex ..7x1:!w-44 ..7x1:mr-6 ..5x2:justify-center">
						<SpecialOfferItem
							obj={{
								img: fourF,
								text: 'Для сенсационного  увлажнения и восстановления кожи',
								isSost: true,
								isDetails: true,
								DetailsPrice: {
									price: '920.00',
									oldPrice: '764.00'
								},
								isFirstFoliage: true,
								noIsHeart: true,
								isGif: true,
								gifTitle: '4=5',
								timeOver: '15.06.22',

								isSlider: true,
								balls: true
							}}
						/>
					</SwiperSlide>
					<SwiperSlide className="..5x2:flex ..7x1:!w-44 ..7x1:mr-6 ..5x2:justify-center">
						<SpecialOfferItem
							obj={{
								img: fourF,
								text: 'Для сенсационного  увлажнения и восстановления кожи',
								isSost: true,
								isDetails: true,
								DetailsPrice: {
									price: '920.00',
									oldPrice: '764.00'
								},
								isFirstFoliage: true,
								noIsHeart: true,
								isGif: true,
								gifTitle: '4=5',
								timeOver: '15.06.22',

								isSlider: true,
								balls: true
							}}
						/>
					</SwiperSlide>

				</Swiper>
				<button onClick={prevSlideFilt} className='absolute ..5x2:hidden  left-16   top-60   z-10'>
					<svg className="activeArrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.33 8L6.03 16L5 15L9 9L9.7 8L9 7L5 1L6.03 0L14.33 8Z" fill="black" />
					</svg>
				</button>
				<button onClick={nextSlideFilt} className='absolute  ..5x2:hidden right-28  top-60 z-10'>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.33 8L6.03 16L5 15L9 9L9.7 8L9 7L5 1L6.03 0L14.33 8Z" fill="black" />
					</svg>


				</button>
			</div>
		</section>
	)
}
export default ActDescription