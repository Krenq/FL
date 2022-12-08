import { useEffect, useRef, useState } from "react"
import oneNew from '../../images/templates/1news.jpg';

import detailOne from '../../images/templates/imageDetailVOne.jpg'
import detailTwo from '../../images/templates/imageDetailVTwo.jpg'
import detailTree from '../../images/templates/imageDetailVTree.jpg'
import detailFour from '../../images/templates/imageDetailVFour.jpg'

import mobileFilter from '../../images/templates/mobileFilter.jpg'

import detailSix from '../../images/templates/imageDetailVSix.jpg'
import filtOne from '../../images/templates/filtOne.jpg'
import commentsPhoto from '../../images/templates/commentsPhoto.jpg'
import videoPreview from '../../images/templates/videoPreview.jpg'

import avatar from '../../images/templates/avatar.jpg'
import trava from '../../images/templates/trava.png'
import active2 from '../../images/templates/actComp.jpg'
import i from '../../images/templates/image.jpg'
import matOne from '../../images/templates/materialsone.jpg'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar } from "swiper"
import EffectsItemDetail from "../EffectsItemDetail/EffectsItemDetail"
import Slider from "react-slick"
import NewsDate from "../News/NewsDate"
import NewsPrev from "../News/NewsPrev"
import NewsNext from "../News/NewsNext"
import useWindowSize from "../utils/useWindowSize";
const DetailComments = ({ setShowL, refF }) => {
	const sliderPhoto = useRef(null)



	// Этот useEffect тоже самое если бы мы сеттили количество в appendDots просто убрали в консоли ошибку


	const [currentFilter, setCurrentFilter] = useState({
		photo: true,
		video: false,
		service: false,
		product: false,
		active: false
	})
	const [currentFilterMobile, setCurrentFilterMobile] = useState({
		photo: true,
		video: false,
		service: false,
		product: false,
		active: false
	})
	const [show, setShow] = useState({
		desc: true,
		activeComponents: false,
		materials: false
	})
	const [showDesc, setShowDesc] = useState({
		desc: true,
		activeComponents: false,
		materials: false
	})

	const [buttonHover, setButtonHover] = useState(false),
		[buttonHoverNext, setButtonHoverNext] = useState(false)

	const hoverSet = () => setButtonHover(!buttonHover),
		hoverNext = () => setButtonHoverNext(!buttonHoverNext)

	const setShowLocalDesc = (title) => {
		switch (title) {
			case ('desc'):
				return setShowDesc({ materials: false, desc: true, activeComponents: false })
			case ('activeComoonents'):
				return setShowDesc({ activeComponents: true, materials: false, desc: false })
			case ('materials'):
				return setShowDesc({ activeComponents: false, desc: false, materials: true })
			default: return
		}
	}

	const setShowLocal = (title, e) => {

		if (e.target.classList.value === 'flex items-center justify-between') {
			switch (title) {
				case ('desc'):
					return setShow({ materials: false, desc: !show.desc, activeComponents: false })
				case ('activeComoonents'):
					return setShow({ activeComponents: !show.activeComponents, materials: false, desc: false })
				case ('materials'):
					return setShow({ activeComponents: false, desc: false, materials: !show.materials })
				default: return
			}


		}




	}


	const setFilterItem = (title, e) => {

		if (window.innerWidth < 1000) {

			switch (title) {
				case ('photo'):
					return setCurrentFilterMobile({
						photo: true,
						video: false,
						service: false,
						product: false,
						active: false
					})
				case ('video'):
					return setCurrentFilterMobile({
						photo: false,
						video: true,
						service: false,
						product: false,
						active: false
					})
				case ('service'):
					return setCurrentFilterMobile({
						photo: false,
						video: false,
						service: true,
						product: false,
						active: false
					})
				case ('product'):
					return setCurrentFilterMobile({
						photo: false,
						video: false,
						service: false,
						product: true,
						active: false
					})
				case ('active'):
					return setCurrentFilterMobile({
						photo: false,
						video: false,
						service: false,
						product: false,
						active: true
					})

				default: return
			}
		} else {
			switch (title) {
				case ('photo'):
					return setCurrentFilter({
						photo: true,
						video: false,
						service: false,
						product: false,
						active: false
					})
				case ('video'):
					return setCurrentFilter({
						photo: false,
						video: true,
						service: false,
						product: false,
						active: false
					})
				case ('service'):
					return setCurrentFilter({
						photo: false,
						video: false,
						service: true,
						product: false,
						active: false
					})
				case ('product'):
					return setCurrentFilter({
						photo: false,
						video: false,
						service: false,
						product: true,
						active: false
					})
				case ('active'):
					return setCurrentFilter({
						photo: false,
						video: false,
						service: false,
						product: false,
						active: true
					})

				default: return
			}
		}




	}


	const nextSlidePhoto = () => {
		if (sliderPhoto.current !== null && sliderPhoto.current.swiper !== null) sliderPhoto.current.swiper.slideNext();
	},
		prevSlidePhoto = () => {
			if (sliderPhoto.current !== null && sliderPhoto.current.swiper !== null) sliderPhoto.current.swiper.slidePrev();
		}

	const settings = {

		Infinity: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: <NewsPrev isDetail={true} />,
		nextArrow: <NewsNext isDetail={true} />,
		appendDots: (dots) => {
			return (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						position: 'absolute',
						bottom: -30,

					}}
				>
					<div

						style={{
							width: 200,
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

		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 530,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,

					prevArrow: false,
					nextArrow: false,
				},
			},
		],
	};

	return (
		<section className="px-222px mx-2 ..5x2:px-3  ..5x2:m-0 .2x50:px-36 .6x2:px-24 .6x3:px-10">
			<div ref={refF} className={`flex w-full ..5x2:hidden ..5x1:h-16 bg-label-bg rounded `}>
				<div onClick={() => setShowLocalDesc('desc')} className={`flex-1 relative ..5x1:h-16 ..5x1:text-base ${showDesc.desc ? 'activeCard' : ""} cursor-pointer h-86px flex font-montserrat font-medium text-lg justify-center items-center`}><svg className="..5x1:h-5 ..5x1:w-5 mr-3" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M5.33333 3.99999C4.96515 3.99999 4.66667 4.29847 4.66667 4.66666V27.3333C4.66667 27.7015 4.96513 28 5.33333 28H22V4.66666C22 4.29846 21.7015 3.99999 21.3333 3.99999H5.33333ZM24.6667 13.3333V4.66666C24.6667 2.82573 23.1743 1.33333 21.3333 1.33333H5.33333C3.49239 1.33333 2 2.82572 2 4.66666V27.3333C2 29.1743 3.4924 30.6667 5.33333 30.6667H26.6667C28.5076 30.6667 30 29.1743 30 27.3333V16C30 14.5272 28.8061 13.3333 27.3333 13.3333H24.6667ZM24.6667 16V28H26.6667C27.0349 28 27.3333 27.7015 27.3333 27.3333V16H24.6667ZM6 8C6 7.26362 6.59695 6.66666 7.33333 6.66666H12.6667C13.403 6.66666 14 7.26362 14 8C14 8.73637 13.403 9.33333 12.6667 9.33333H7.33333C6.59695 9.33333 6 8.73637 6 8ZM6 12.6667C6 11.9303 6.59695 11.3333 7.33333 11.3333H15.3333C16.0697 11.3333 16.6667 11.9303 16.6667 12.6667C16.6667 13.403 16.0697 14 15.3333 14H7.33333C6.59695 14 6 13.403 6 12.6667Z" fill="black" stroke="white" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
					{showDesc.desc && <div className="absolute left-1/2 ability -bottom-2 h-30px w-30px bg-white rotSearchHover"></div>}

					Описание</div>
				<div onClick={() => setShowLocalDesc('activeComoonents')} className="flex-1   cursor-pointer h-86px relative ..5x1:h-16 flex justify-center items-center">
					<div className={`w-full ${showDesc.activeComponents ? 'activeCard !h-full' : ""}  border-x ..5x1:text-base ..5x1:leading-120%  border-gray  flex font-montserrat font-medium text-lg text-center leading-120% justify-center items-center`}><svg className="..5x1:h-5 ..5x1:w-5 mr-3" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M13.1831 1.42602C13.7512 0.857988 14.6721 0.857994 15.2402 1.42603L17.2851 3.47099L17.2971 3.48284L25.5252 11.711C26.0933 12.279 26.0933 13.2 25.5252 13.768L14.2116 25.0818C13.9388 25.3545 13.5688 25.5078 13.1831 25.5078C12.7973 25.5078 12.4273 25.3545 12.1545 25.0818L3.92638 16.8536C3.35835 16.2856 3.35835 15.3646 3.92638 14.7966L14.2115 4.51143L13.1831 3.48306C12.6151 2.91502 12.6151 1.99405 13.1831 1.42602ZM7.01194 15.8251L8.13655 14.7005L17.4249 17.7543L13.183 21.9962L7.01194 15.8251ZM19.7295 15.4497L10.4411 12.3959L16.2686 6.5684L22.4397 12.7395L19.7295 15.4497Z" fill="black" />
						<path d="M25.9545 25.3608C27.5612 25.3608 28.8636 24.0583 28.8636 22.4517C28.8636 21.3806 27.894 19.926 25.9545 18.0881C24.0151 19.926 23.0455 21.3806 23.0455 22.4517C23.0455 24.0583 24.3479 25.3608 25.9545 25.3608Z" fill="black" />
						<path d="M1.95455 28.2699C1.15122 28.2699 0.5 28.9211 0.5 29.7244C0.5 30.5278 1.15122 31.179 1.95455 31.179H31.0455C31.8488 31.179 32.5 30.5278 32.5 29.7244C32.5 28.9211 31.8488 28.2699 31.0455 28.2699H1.95455Z" fill="black" />
						<path fillRule="evenodd" clipRule="evenodd" d="M13.1831 1.42602C13.7512 0.857988 14.6721 0.857994 15.2402 1.42603L17.2851 3.47099L17.2971 3.48284L25.5252 11.711C26.0933 12.279 26.0933 13.2 25.5252 13.768L14.2116 25.0818C13.9388 25.3545 13.5688 25.5078 13.1831 25.5078C12.7973 25.5078 12.4273 25.3545 12.1545 25.0818L3.92638 16.8536C3.35835 16.2856 3.35835 15.3646 3.92638 14.7966L14.2115 4.51143L13.1831 3.48306C12.6151 2.91502 12.6151 1.99405 13.1831 1.42602ZM7.01194 15.8251L8.13655 14.7005L17.4249 17.7543L13.183 21.9962L7.01194 15.8251ZM19.7295 15.4497L10.4411 12.3959L16.2686 6.5684L22.4397 12.7395L19.7295 15.4497Z" stroke="#E9EDEC" strokeWidth="0.8" strokeLinecap="round" />
						<path d="M25.9545 25.3608C27.5612 25.3608 28.8636 24.0583 28.8636 22.4517C28.8636 21.3806 27.894 19.926 25.9545 18.0881C24.0151 19.926 23.0455 21.3806 23.0455 22.4517C23.0455 24.0583 24.3479 25.3608 25.9545 25.3608Z" stroke="#E9EDEC" strokeWidth="0.8" strokeLinecap="round" />
						<path d="M1.95455 28.2699C1.15122 28.2699 0.5 28.9211 0.5 29.7244C0.5 30.5278 1.15122 31.179 1.95455 31.179H31.0455C31.8488 31.179 32.5 30.5278 32.5 29.7244C32.5 28.9211 31.8488 28.2699 31.0455 28.2699H1.95455Z" stroke="#E9EDEC" strokeWidth="0.8" strokeLinecap="round" />
					</svg>
						{showDesc.activeComponents && <div className="absolute left-1/2 ability -bottom-2 h-30px w-30px bg-white rotSearchHover"></div>}

						Активные <br /> компоненты</div>
				</div>

				<div onClick={() => setShowLocalDesc('materials')} className={`flex-1 relative ${showDesc.materials ? 'activeCard' : ""} cursor-pointer ..5x1:h-16 ..5x1:text-base font-montserrat font-medium text-lg h-86px flex justify-center items-center`}><svg className="..5x1:h-5 ..5x1:w-5 mr-3" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M1.8335 3.66666C1.8335 2.93028 2.43045 2.33333 3.16683 2.33333H29.8335C30.5699 2.33333 31.1668 2.93028 31.1668 3.66666C31.1668 4.40304 30.5699 4.99999 29.8335 4.99999H29.1668V22.3333C29.1668 23.0697 28.5699 23.6667 27.8335 23.6667H19.7191L22.7763 26.7239C23.297 27.2446 23.297 28.0888 22.7763 28.6095C22.2556 29.1302 21.4114 29.1302 20.8907 28.6095L16.5002 24.2189L12.1096 28.6095C11.5889 29.1302 10.7447 29.1302 10.224 28.6095C9.70332 28.0888 9.70332 27.2446 10.224 26.7239L13.2812 23.6667H5.16683C4.43045 23.6667 3.8335 23.0697 3.8335 22.3333V4.99999H3.16683C2.43045 4.99999 1.8335 4.40304 1.8335 3.66666ZM6.50016 4.99999V21H26.5002V4.99999H6.50016ZM24.0866 8.07013C24.6078 8.59029 24.6087 9.43451 24.0886 9.95575L17.4495 16.6085C16.933 17.126 16.0961 17.1311 15.5734 16.6198L13.5434 14.6343L10.7141 17.396C10.1872 17.9104 9.34301 17.9002 8.82864 17.3732C8.31427 16.8463 8.32447 16.0021 8.85142 15.4878L12.613 11.816C13.1314 11.31 13.9589 11.3104 14.4767 11.8169L16.4944 13.7905L22.201 8.07207C22.7212 7.55084 23.5654 7.54997 24.0866 8.07013Z" fill="black" stroke="#F7F8F6" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
					{showDesc.materials && <div className="absolute left-1/2 ability -bottom-2 h-30px w-30px bg-white rotSearchHover"></div>}
					Материалы</div>
			</div>
			{showDesc.desc && <div className="mt-8 flex ..5x2:pb-3 ..6x3:mt-0 ..5x2:flex-col pb-32">
				<div className="..5x2:hidden">
					<h4 className="font-medium text-xl font-montserrat mb-3 ..5x1:mb-0">О товаре</h4>
					<p className="font-montserrat leading-180 mb-8 ..5x1:mb-4 ..5x1:text-sm ..5x1:leading-120%">Маска отлично питает и тонизирует кожу, стимулирует обменные процессы, снимает раздражения, придает коже ухоженный вид. Насыщает питательными элементами, удерживает влагу внутри клеток, повышая упругость кожи и замедляя процесс образования морщин</p>
					<h4 className="font-montserrat text-xl font-medium mb-3 ..5x1:mb-0">Применение</h4>
					<p className="font-montserrat leading-180 mb-8 ..5x1:mb-4 ..5x1:text-sm ..5x1:leading-120%">Нанесите маску равномерным слоем на очищенную кожу лица, избегая области вокруг глаз. Через 10 минут удалите остатки салфеткой или мягко вотрите их в кожу.
						Рекомендуется использовать маску ежедневно в течение 10 дней, затем 2-3 раза в неделю.</p>
					<h4 className="font-montserrat text-xl font-medium mb-3 ..5x1:mb-0">О товаре</h4>
					<p className="font-montserrat ..5x2:mb-3 leading-180 italic ..5x1:text-sm ..5x1:leading-120%">Dimethicone, Dimethiconol, Avena Sativa Kernel Oil, Tocopherol, Hexyl Cinnamal, Linalool</p>
				</div>
				<div className="hidden ..5x2:block">
					<div className=" ">
						<div onClick={(e) => setShowLocal('desc', e)} className={`mt-1 h-12 buttonShadow p-3 py-3.5 rounded transition-all ${show.desc ? 'activeButtonS' : 'overflow-hidden'} `}>
							<div className="flex items-center justify-between">
								<p className="font-montserrat mb-3 text-sm font-medium flex items-center "><svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M2.66667 1.99996C2.48257 1.99996 2.33333 2.1492 2.33333 2.33329V13.6666C2.33333 13.8507 2.48257 14 2.66667 14H11V2.33329C11 2.14919 10.8508 1.99996 10.6667 1.99996H2.66667ZM12.3333 6.66663V2.33329C12.3333 1.41283 11.5872 0.666626 10.6667 0.666626H2.66667C1.74619 0.666626 1 1.41282 1 2.33329V13.6666C1 14.5871 1.7462 15.3333 2.66667 15.3333H13.3333C14.2538 15.3333 15 14.5871 15 13.6666V7.99996C15 7.26357 14.4031 6.66663 13.6667 6.66663H12.3333ZM12.3333 7.99996V14H13.3333C13.5174 14 13.6667 13.8507 13.6667 13.6666V7.99996H12.3333ZM3 3.99996C3 3.63177 3.29848 3.33329 3.66667 3.33329H6.33333C6.70152 3.33329 7 3.63177 7 3.99996C7 4.36815 6.70152 4.66663 6.33333 4.66663H3.66667C3.29848 4.66663 3 4.36815 3 3.99996ZM3 6.33329C3 5.9651 3.29848 5.66663 3.66667 5.66663H7.66667C8.03486 5.66663 8.33333 5.9651 8.33333 6.33329C8.33333 6.70148 8.03486 6.99996 7.66667 6.99996H3.66667C3.29848 6.99996 3 6.70148 3 6.33329Z" fill="white" stroke="#337202" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
									Описание</p>
								<svg className="svgI -mt-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.8167 5.8L8 9.63212L4.175 5.8L3 6.97976L8 12L13 6.97976L11.8167 5.8Z" fill="black" />
								</svg>
							</div>
							<p className="mb-3 font-montserrat text-11px leading-140% text-gray-quick-silver">
								Маска отлично питает и тонизирует кожу, стимулирует обменные процессы, снимает раздражения, придает коже ухоженный вид. Насыщает питательными элементами, удерживает влагу внутри клеток, повышая упругость кожи и замедляя процесс образования морщин
							</p>
							<div>
								<p className="font-montserrat font-medium text-xs mb-0.5">Применение</p>
								<p className="font-montserrat text-11px text-gray-quick-silver leading-140% mb-3">Нанесите маску равномерным слоем на очищенную кожу лица, избегая области вокруг </p>
							</div>
							<button className="font-montserrat font-medium text-13px text-primary pb-0.5 border-b border-dashed border-primary">Развернуть</button>


						</div>
						<div onClick={(e) => setShowLocal('activeComoonents',)} className={`mt-1  h-12 buttonShadow py-3.5 p-3 rounded transition-all ${show.activeComponents ? 'activeButtonS !h-300px ..6x5:!h-317px ..6x6:!h-350px ..7x001:!h-387px' : 'overflow-hidden'}`}>
							<div className="flex items-center justify-between">
								<p className="font-montserrat mb-3 text-sm font-medium flex items-center "><svg className="mr-2" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M7.09157 0.71301C7.37559 0.428994 7.83607 0.428997 8.12009 0.713016L9.14255 1.73549L9.14855 1.74142L13.2626 5.85549C13.5466 6.13951 13.5466 6.59999 13.2626 6.88401L7.60579 12.5409C7.4694 12.6773 7.28441 12.7539 7.09153 12.7539C6.89864 12.7539 6.71366 12.6773 6.57727 12.5409L2.46319 8.42681C2.17917 8.14279 2.17917 7.68231 2.46319 7.39829L7.60574 2.25572L7.09156 1.74153C6.80755 1.45751 6.80755 0.997026 7.09157 0.71301ZM4.00597 7.91255L4.56828 7.35024L9.21247 8.87714L7.09152 10.9981L4.00597 7.91255ZM10.3648 7.72485L5.72057 6.19794L8.63429 3.2842L11.7198 6.36975L10.3648 7.72485Z" fill="white" />
									<path d="M13.4773 12.6804C14.2806 12.6804 14.9318 12.0292 14.9318 11.2259C14.9318 10.6903 14.447 9.96302 13.4773 9.04403C12.5076 9.96302 12.0227 10.6903 12.0227 11.2259C12.0227 12.0292 12.674 12.6804 13.4773 12.6804Z" fill="white" />
									<path d="M1.47727 14.1349C1.07561 14.1349 0.75 14.4606 0.75 14.8622C0.75 15.2639 1.07561 15.5895 1.47727 15.5895H16.0227C16.4244 15.5895 16.75 15.2639 16.75 14.8622C16.75 14.4606 16.4244 14.1349 16.0227 14.1349H1.47727Z" fill="white" />
									<path fillRule="evenodd" clipRule="evenodd" d="M7.09157 0.71301C7.37559 0.428994 7.83607 0.428997 8.12009 0.713016L9.14255 1.73549L9.14855 1.74142L13.2626 5.85549C13.5466 6.13951 13.5466 6.59999 13.2626 6.88401L7.60579 12.5409C7.4694 12.6773 7.28441 12.7539 7.09153 12.7539C6.89864 12.7539 6.71366 12.6773 6.57727 12.5409L2.46319 8.42681C2.17917 8.14279 2.17917 7.68231 2.46319 7.39829L7.60574 2.25572L7.09156 1.74153C6.80755 1.45751 6.80755 0.997026 7.09157 0.71301ZM4.00597 7.91255L4.56828 7.35024L9.21247 8.87714L7.09152 10.9981L4.00597 7.91255ZM10.3648 7.72485L5.72057 6.19794L8.63429 3.2842L11.7198 6.36975L10.3648 7.72485Z" stroke="#337202" strokeWidth="0.6" strokeLinecap="round" />
									<path d="M13.4773 12.6804C14.2806 12.6804 14.9318 12.0292 14.9318 11.2259C14.9318 10.6903 14.447 9.96302 13.4773 9.04403C12.5076 9.96302 12.0227 10.6903 12.0227 11.2259C12.0227 12.0292 12.674 12.6804 13.4773 12.6804Z" stroke="#337202" strokeWidth="0.6" strokeLinecap="round" />
									<path d="M1.47727 14.1349C1.07561 14.1349 0.75 14.4606 0.75 14.8622C0.75 15.2639 1.07561 15.5895 1.47727 15.5895H16.0227C16.4244 15.5895 16.75 15.2639 16.75 14.8622C16.75 14.4606 16.4244 14.1349 16.0227 14.1349H1.47727Z" stroke="#337202" strokeWidth="0.6" strokeLinecap="round" />
								</svg>

									Активные компоненты</p>
								<svg className="svgI -mt-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.8167 5.8L8 9.63212L4.175 5.8L3 6.97976L8 12L13 6.97976L11.8167 5.8Z" fill="black" />
								</svg>
							</div>
							<Swiper className="mt-2">
								<SwiperSlide className="p-3 mr-2 ..7x230:p-1 flex bg-gray-light justify-between">

									<div className="..7x001:mr-2 ..7x230:mr-0 w-65%">
										<p className="font-montserrat italic font-medium text-13px text-primary mb-1">Мушмула</p>
										<p className="font-montserrat text-black ..7x230:text-10px italic font-light text-11px leading-180">
											Экстракт мушмулы германской-источник большого количества витаминов, минералов и органический кислот. Питает кожу, ускоряет обновление клеток, улучшает микрорельеф кожи, разглаживая мелкие морщинки и неровности
										</p>
									</div>
									<div className="h-94px w-94px ..7x230:h-16 ..7x230:w-16 mt-9">
										<Image src={trava} width={90} height={90} />
									</div>

								</SwiperSlide>
								<SwiperSlide className="p-3 mr-2 ..7x230:p-1 flex bg-gray-light justify-between">

									<div className="..7x001:mr-2 ..7x230:mr-0 w-65%">
										<p className="font-montserrat italic font-medium text-13px text-primary mb-1">Мушмула</p>
										<p className="font-montserrat text-black ..7x230:text-10px italic font-light text-11px leading-180">
											Экстракт мушмулы германской-источник большого количества витаминов, минералов и органический кислот. Питает кожу, ускоряет обновление клеток, улучшает микрорельеф кожи, разглаживая мелкие морщинки и неровности
										</p>
									</div>
									<div className="h-94px w-94px ..7x230:h-16 ..7x230:w-16 mt-9">
										<Image src={trava} width={90} height={90} />
									</div>

								</SwiperSlide>

							</Swiper>
							<p className="mt-6 ..7x230:mt-3 font-montserrat text-11px uppercase tracking-widest">все компоненты этой категории</p>
							<div className="flex overflow-x-auto whitespace-nowrap mt-6px">
								<EffectsItemDetail title={'алоэ'} mb={true} />
								<EffectsItemDetail title={'арбутин'} mb={true} />
								<EffectsItemDetail title={'аскорбиновая кислота'} mb={true} />
								<EffectsItemDetail title={'АНА-кислоты'} mb={true} />
								<EffectsItemDetail title={'аллантоин'} mb={true} />
								<EffectsItemDetail title={'аморфофаллус-коньяк'} mb={true} />
								<EffectsItemDetail title={'боссвелия'} mb={true} />
								<EffectsItemDetail title={'белая глина'} mb={true} />
								<EffectsItemDetail title={'витамин E'} mb={true} />
								<EffectsItemDetail title={'водоросли'} mb={true} />
								<EffectsItemDetail title={'гиалуроновая кислота'} mb={true} />
								<EffectsItemDetail title={'гиалуронат натрия'} mb={true} />
								<EffectsItemDetail title={'гамамелис виргинский'} mb={true} />
								<EffectsItemDetail title={'диоксид титана'} mb={true} />
								<EffectsItemDetail title={'жемчуг'} mb={true} />
								<EffectsItemDetail title={'зеленый чай'} mb={true} />
								<EffectsItemDetail title={'зародыши пшеницы'} mb={true} />
								<EffectsItemDetail title={'камелия'} mb={true} />
								<EffectsItemDetail title={'коллаген'} mb={true} />
								<EffectsItemDetail title={'комплект BIOPHYTEX'} mb={true} />
								<EffectsItemDetail title={'ещё'} mb={true} arrow={true} />
							</div>
						</div>
						<div onClick={(e) => setShowLocal('materials', e)} className={`mt-1 mb-3  h-12 buttonShadow p-3 py-3.5 rounded transition-all ${show.materials ? `activeButtonS !h-350px ..6x4:!h-428px  ${currentFilterMobile.active ? '!h-1100px ..6x4:!h-1100px ..7x001:!h-1100px' : ''}` : 'overflow-hidden'}`}>
							<div className="flex items-center justify-between">
								<p className="font-montserrat mb-3 text-sm font-medium flex items-center "><svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M0.666748 1.83329C0.666748 1.4651 0.965225 1.16663 1.33341 1.16663H14.6667C15.0349 1.16663 15.3334 1.4651 15.3334 1.83329C15.3334 2.20148 15.0349 2.49996 14.6667 2.49996H14.3334V11.1666C14.3334 11.5348 14.0349 11.8333 13.6667 11.8333H9.60956L11.1382 13.3619C11.3985 13.6222 11.3985 14.0443 11.1382 14.3047C10.8778 14.565 10.4557 14.565 10.1953 14.3047L8.00008 12.1094L5.80482 14.3047C5.54447 14.565 5.12236 14.565 4.86201 14.3047C4.60166 14.0443 4.60166 13.6222 4.86201 13.3619L6.39061 11.8333H2.33341C1.96522 11.8333 1.66675 11.5348 1.66675 11.1666V2.49996H1.33341C0.965225 2.49996 0.666748 2.20148 0.666748 1.83329ZM3.00008 2.49996V10.5H13.0001V2.49996H3.00008ZM11.7933 4.03503C12.0539 4.29511 12.0544 4.71722 11.7943 4.97783L8.47475 8.30421C8.21651 8.56298 7.79804 8.56551 7.53669 8.30988L6.52172 7.3171L5.10706 8.69798C4.84358 8.95516 4.4215 8.95006 4.16432 8.68658C3.90713 8.42311 3.91224 8.00103 4.17571 7.74384L6.05652 5.90794C6.3157 5.65495 6.72945 5.65517 6.98836 5.90842L7.99719 6.89519L10.8505 4.036C11.1106 3.77538 11.5327 3.77495 11.7933 4.03503Z" fill="white" stroke="#337202" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>


									Материалы</p>
								<svg className="svgI -mt-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.8167 5.8L8 9.63212L4.175 5.8L3 6.97976L8 12L13 6.97976L11.8167 5.8Z" fill="black" />
								</svg>
							</div>

							<div className=" overflow-x-auto whitespace-nowrap flex py-2 border-t  border-t-gray-light2">
								<p onClick={(e) => setFilterItem('photo', e)} className={`flex items-center font-montserrat p-6px rounded-sm transition-all text-11px  hover:bg-gray-light2 cursor-pointer ${currentFilterMobile.photo ? '!bg-gray-light2' : ""}`}><svg className="mr-3 ..5x2:w-14px ..5x2:mr-1 ..5x2:h-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5C1.5 3.89543 2.39543 3 3.5 3H20.5C21.6046 3 22.5 3.89543 22.5 5V19C22.5 20.1046 21.6046 21 20.5 21H3.5C2.39543 21 1.5 20.1046 1.5 19V5ZM3.5 17.4142V19H20.5V17.4942L13.1438 11.8688L10.7593 14.6508C10.4084 15.0601 9.79627 15.1176 9.37531 14.7809L7.57422 13.34L3.5 17.4142ZM20.5 14.9764V5H3.5V14.5858L6.79289 11.2929C7.1532 10.9326 7.7268 10.9008 8.12469 11.2191L9.86985 12.6153L12.2407 9.84921C12.5861 9.44633 13.1859 9.38331 13.6075 9.70564L20.5 14.9764ZM7.25 8.5C7.38807 8.5 7.5 8.38807 7.5 8.25C7.5 8.11193 7.38807 8 7.25 8C7.11193 8 7 8.11193 7 8.25C7 8.38807 7.11193 8.5 7.25 8.5ZM5.5 8.25C5.5 7.2835 6.2835 6.5 7.25 6.5C8.2165 6.5 9 7.2835 9 8.25C9 9.2165 8.2165 10 7.25 10C6.2835 10 5.5 9.2165 5.5 8.25Z" fill="black" fill-opacity="0.7" />
								</svg>
									Фотографии
								</p>
								<p onClick={(e) => setFilterItem('video', e)} className={`flex items-center p-6px  text-11px rounded-sm font-montserrat   transition-all hover:bg-gray-light2 cursor-pointer ${currentFilterMobile.video ? '!bg-gray-light2' : ""}`}>
									<svg className="mr-3 ..5x2:w-14px ..5x2:mr-1 ..5x2:h-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02943 3 3 7.02943 3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3ZM9.5 7.66987C9.8094 7.49124 10.1906 7.49124 10.5 7.66987L16.5 11.134C16.8094 11.3126 17 11.6427 17 12C17 12.3573 16.8094 12.6874 16.5 12.866L10.5 16.3301C10.1906 16.5088 9.8094 16.5088 9.5 16.3301C9.1906 16.1515 9 15.8214 9 15.4641V8.5359C9 8.17863 9.1906 7.84851 9.5 7.66987ZM11 10.268V13.732L14 12L11 10.268Z" fill="black" fill-opacity="0.7" />
									</svg>
									Видео
								</p>
								<p onClick={(e) => setFilterItem('service', e)} className={`flex items-center  font-montserrat p-6px  text-11px rounded-sm transition-all hover:bg-gray-light2 cursor-pointer ${currentFilterMobile.service ? '!bg-gray-light2' : ""}`}>
									<svg className="mr-3 ..5x2:w-14px ..5x2:mr-1 ..5x2:h-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M21 2C22.018 2 22.87 2.76384 22.9916 3.82579L23 4V17C23 18.018 22.2362 18.87 21.1742 18.9916L21 19H18V21C18 21.7043 17.2979 22.1753 16.6586 21.9402L16.5528 21.8944L15 21.118L13.4472 21.8944C12.8173 22.2094 12.082 21.792 12.0064 21.1151L12 21V19H3C2.03562 19 1.22018 18.3145 1.03358 17.3393L1.00839 17.1742L1 17V4C1 2.98205 1.76385 2.13004 2.82579 2.00839L3 2H21ZM16 17.391L15.7664 17.4378C15.6053 17.465 15.438 17.4836 15.2646 17.4929L15.2198 17.4941C15.147 17.498 15.0737 17.5 15 17.5L14.8004 17.4951C14.7983 17.495 14.7963 17.4949 14.7943 17.4948C14.5133 17.4842 14.2487 17.4491 14.0002 17.393L14 19.381L14.5528 19.1056C14.8343 18.9648 15.1657 18.9648 15.4472 19.1056L16 19.382V17.391ZM3.05759 3.99834L3 4L2.99834 16.9424L3.00003 17L12 17L11.999 16.1447C11.3772 15.4397 11 14.5139 11 13.5C11 11.2909 12.7909 9.5 15 9.5C17.2091 9.5 19 11.2909 19 13.5C19 14.5139 18.6227 15.4397 18.001 16.1447L18 17L20.9424 17.0017L21 16.999L21.0017 4.05759L20.999 4L3.05759 3.99834ZM15 11.5C13.8954 11.5 13 12.3954 13 13.5C13 14.6046 13.8954 15.5 15 15.5L14.923 15.497L15 15.5C15.0267 15.5 15.0529 15.4997 15.0788 15.499C15.5643 15.48 16.0066 15.2874 16.3439 14.9812C16.3459 14.9773 16.3486 14.9749 16.3513 14.9726L16.3439 14.9812C16.7469 14.6154 17 14.0872 17 13.5C17 12.3954 16.1046 11.5 15 11.5ZM8 13C8.55228 13 9 13.4477 9 14C9 14.5128 8.61396 14.9355 8.11662 14.9933L8 15H6C5.44772 15 5 14.5523 5 14C5 13.4872 5.38604 13.0645 5.88338 13.0067L6 13H8ZM9 9.5C9.55229 9.5 10 9.94772 10 10.5C10 11.0128 9.61396 11.4355 9.11662 11.4933L9 11.5H6C5.44772 11.5 5 11.0523 5 10.5C5 9.98716 5.38604 9.56449 5.88338 9.50673L6 9.5H9ZM18 6C18.5523 6 19 6.44772 19 7C19 7.51284 18.614 7.93551 18.1166 7.99327L18 8H6C5.44772 8 5 7.55228 5 7C5 6.48716 5.38604 6.06449 5.88338 6.00673L6 6H18Z" fill="black" fill-opacity="0.7" />
									</svg>
									Сертификаты
								</p>
								<p onClick={(e) => setFilterItem('product', e)} className={`flex items-center font-montserrat p-6px  text-11px rounded-sm transition-all hover:bg-gray-light2 cursor-pointer ${currentFilterMobile.product ? '!bg-gray-light2' : ""}`}>
									<svg className="mr-3 ..5x2:w-14px ..5x2:mr-1 ..5x2:h-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2V9H22C22.5523 9 23 9.44772 23 10V19C23 19.5523 22.5523 20 22 20H19.5V22C19.5 22.5523 19.0523 23 18.5 23H5.5C4.94772 23 4.5 22.5523 4.5 22V20H2C1.44772 20 1 19.5523 1 19V10C1 9.44772 1.44772 9 2 9H4V2ZM6 9H18V3H6V9ZM3 11V18H4.49025V16C4.49025 15.4477 4.93797 15 5.49025 15H18.5086C19.0609 15 19.5086 15.4477 19.5086 16V18H21V11H3ZM6.5 17V21H17.5V17H6.5Z" fill="black" fill-opacity="0.7" />
									</svg>
									Печатная продукция
								</p>
								<p onClick={(e) => setFilterItem('active', e)} className={`flex  items-center font-montserrat p-6px  text-11px rounded-sm transition-all hover:bg-gray-light2 cursor-pointer ${currentFilterMobile.active ? '!bg-gray-light2' : ""}`}>
									<svg className="mr-3 ..5x2:w-14px ..5x2:mr-1 ..5x2:h-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5002 5C14.5002 3.067 16.0672 1.5 18.0002 1.5C19.9332 1.5 21.5002 3.067 21.5002 5C21.5002 6.93298 19.9332 8.5 18.0002 8.5C16.0672 8.5 14.5002 6.93298 14.5002 5ZM18.0002 3.5C17.1718 3.5 16.5002 4.17158 16.5002 5C16.5002 5.82841 17.1718 6.5 18.0002 6.5C18.8286 6.5 19.5002 5.82841 19.5002 5C19.5002 4.17158 18.8286 3.5 18.0002 3.5ZM9.67453 6.05404C9.92294 5.96803 10.1952 5.98329 10.4325 6.09652L15.9309 8.72082C16.2471 8.87173 16.4613 9.17712 16.4954 9.52582C16.5296 9.87451 16.3787 10.2157 16.0978 10.425L11.7431 13.6712L16.05 16.5064C16.2805 16.6582 16.438 16.8984 16.4854 17.1702C16.5327 17.442 16.4656 17.7213 16.2999 17.942L12.8041 22.5993C12.4725 23.041 11.8457 23.1303 11.404 22.7988C10.9623 22.4672 10.873 21.8404 11.2046 21.3987L14.0619 17.5921L9.45188 14.5574C9.17951 14.3781 9.01167 14.0772 9.00215 13.7513C8.99263 13.4254 9.14263 13.1152 9.40407 12.9204L13.5739 9.81198L9.94124 8.07819L6.32737 9.32951C5.80549 9.51021 5.23592 9.23363 5.05522 8.71174C4.87452 8.18986 5.1511 7.6203 5.67298 7.43959L9.67453 6.05404ZM22.7289 8.04814C23.107 8.45063 23.0873 9.08349 22.6848 9.46167L19.6857 12.2797C19.3711 12.5752 18.9024 12.6356 18.5232 12.4294L17.1823 11.7002C16.6971 11.4363 16.5177 10.8291 16.7816 10.3439C17.0454 9.85877 17.6527 9.67935 18.1378 9.94321L18.8433 10.3269L21.3153 8.00413C21.7178 7.62595 22.3507 7.64565 22.7289 8.04814ZM9.02934 14.9762C9.46922 15.3102 9.55511 15.9375 9.22116 16.3774L7.73631 18.3333C7.65333 18.4426 7.54873 18.5336 7.42903 18.6008L2.49134 21.3704C2.00965 21.6405 1.40015 21.4691 1.12996 20.9874C0.859782 20.5057 1.03124 19.8962 1.51292 19.626L6.26915 16.9582L7.62819 15.168C7.96214 14.7282 8.58945 14.6423 9.02934 14.9762Z" fill="black" fill-opacity="0.7" />
									</svg>
									Активность
									<svg className="ml-3  ..5x2:ml-1 ..5x2:h-5" width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6.03083 8.05073H6.03085C6.03395 8.05073 6.03703 8.05073 6.04011 8.05072C6.11242 8.05062 6.17802 8.05053 6.23245 8.10836C6.25806 8.13557 6.27921 8.17326 6.30083 8.22177C6.32267 8.2708 6.34683 8.33526 6.37689 8.41897L6.37708 8.41951L6.37708 8.41951C6.74192 9.47365 7.33369 10.7808 7.98309 11.8236C8.30787 12.3451 8.64588 12.7985 8.97577 13.1209C9.30748 13.445 9.62257 13.6285 9.90183 13.6285C10.1182 13.6285 10.2766 13.5742 10.3935 13.4909C10.5108 13.4074 10.5901 13.2919 10.6438 13.1637C10.7519 12.9052 10.7525 12.6034 10.7525 12.4318C10.7525 12.4318 10.7525 12.4318 10.7525 12.4318L10.7517 9.71838C10.7029 8.83514 10.3762 8.3979 10.1611 8.1314L10.0953 8.04988L10.2001 8.05L12.8221 8.05293L12.8664 8.05298L12.8717 8.09698L12.872 8.10009L12.872 8.10132L12.8721 8.10273L12.8721 8.10522L12.8721 8.11256L12.8721 8.13896L12.8719 8.23712L12.8707 8.5889C12.8697 8.88232 12.8685 9.27991 12.8679 9.69974C12.8668 10.5399 12.8683 11.4677 12.8795 11.8289L12.8796 11.8305C12.8795 12.3351 13.0831 12.7112 13.4231 12.8164C13.7657 12.9224 14.2796 12.7651 14.9258 12.1237C16.2905 10.6121 17.2358 8.34998 17.2739 8.25767L17.2741 8.25719C17.3027 8.18988 17.3335 8.13372 17.3876 8.09736C17.4416 8.06112 17.5104 8.05 17.6012 8.05H19.4406H19.4481H19.5179L19.4963 8.11345L6.03083 8.05073ZM6.03083 8.05073C5.56988 8.05099 5.20133 8.05088 4.91588 8.0508C4.80003 8.05076 4.69786 8.05073 4.60876 8.05073C4.45447 8.05073 4.3393 8.05082 4.2601 8.05115C4.18269 8.05146 4.13647 8.05197 4.12344 8.05313L4.07388 8.05755L4.07806 8.10713C4.10849 8.46858 4.32665 9.20114 4.70727 10.0927C5.0887 10.9861 5.6356 12.0445 6.32758 13.059C7.70916 15.0845 9.67994 16.95 12.0776 16.95C12.577 16.95 12.7748 16.8986 12.8498 16.8696L12.8857 16.8558L12.8815 16.8175C12.8809 16.8127 12.8802 16.807 12.879 16.802L12.879 16.8019C12.8789 16.8015 12.8785 16.8 12.8778 16.7978M6.03083 8.05073L12.8778 16.7978M12.8778 16.7978L12.8779 16.7973C12.8782 16.7331 12.8792 16.5296 12.8773 15.9348L12.8773 15.9345C12.8767 15.8698 12.8758 15.806 12.875 15.7432C12.8722 15.538 12.8695 15.3428 12.876 15.1607C12.8845 14.923 12.9086 14.7123 12.9665 14.5371C13.0241 14.3629 13.1146 14.2256 13.2554 14.1311C13.3968 14.0362 13.5945 13.9807 13.873 13.9807C14.4376 13.9807 15.0687 14.3534 16.0617 15.3013C16.4523 15.6878 16.7396 16.0042 16.9658 16.2535C17.0589 16.356 17.1417 16.4471 17.217 16.5271C17.3455 16.6634 17.4538 16.7687 17.5546 16.8397C17.6564 16.9114 17.7537 16.9507 17.8598 16.9507H17.8599C18.5744 16.9492 19.014 16.9503 19.2913 16.951C19.3511 16.9512 19.4034 16.9513 19.4492 16.9514C19.7052 16.9518 19.7641 16.9509 19.8206 16.9421L19.8731 16.9338L19.8617 16.8819C19.8204 16.695 19.6759 16.445 19.4817 16.172C19.2861 15.897 19.0351 15.5921 18.7737 15.2939C18.261 14.7088 17.7057 14.1465 17.4434 13.8809L17.4283 13.8656C17.4283 13.8656 17.4283 13.8656 17.4283 13.8656C17.2644 13.6989 17.1524 13.5803 17.11 13.5303C16.8782 13.2341 16.8145 12.9863 16.8337 12.7684C16.8533 12.548 16.9581 12.3508 17.0797 12.1559C17.0879 12.1434 17.0951 12.1326 17.1027 12.1226L17.1034 12.1217C17.3818 11.7398 17.9363 10.9349 18.4423 10.129C18.6954 9.7261 18.9366 9.32233 19.1254 8.9707C19.3127 8.6217 19.451 8.31904 19.4951 8.11888C19.4952 8.11834 19.4953 8.11781 19.4954 8.11727L12.8778 16.7978ZM17.8918 12.7539H17.9051C17.8939 12.7726 17.8829 12.7917 17.8738 12.8089L17.8602 12.8348L17.8761 12.8593C17.8979 12.8931 17.9556 12.9564 18.0347 13.039C18.1048 13.1124 18.1953 13.2047 18.3002 13.3117C18.3161 13.3279 18.3322 13.3444 18.3487 13.3612C18.6004 13.618 18.9258 13.9514 19.2592 14.317C19.5928 14.6827 19.9337 15.0798 20.2167 15.4639C20.5001 15.8486 20.7226 16.2167 20.8227 16.5248C20.9745 17.033 20.8351 17.3538 20.6977 17.5341C20.5552 17.7207 20.2662 17.95 19.6992 17.95H17.8598C17.3766 17.95 17.0593 17.7754 16.7068 17.4456C16.5352 17.285 16.3563 17.0886 16.146 16.8577L16.1244 16.834C15.9052 16.5933 15.6527 16.3173 15.3425 16.0101L15.3418 16.0095C14.5396 15.2444 14.1441 15.044 13.967 14.995L13.9074 14.9785L13.9038 15.0403C13.8918 15.2427 13.8947 15.573 13.8976 15.9145L13.8976 15.915C13.8717 15.9812 13.8652 16.0619 13.8663 16.1475C13.8672 16.2259 13.8747 16.3138 13.8824 16.4053C13.8837 16.4197 13.8849 16.4341 13.8861 16.4486C13.9042 16.6654 13.919 16.9024 13.8623 17.1237C13.8063 17.3422 13.6803 17.5463 13.4119 17.6973C13.1412 17.8497 12.7222 17.95 12.0776 17.95C9.2572 17.95 7.00084 15.8603 5.4455 13.5684C4.66879 12.4239 4.06936 11.2325 3.66421 10.2338C3.46164 9.73453 3.30784 9.28392 3.20476 8.91194C3.10135 8.53878 3.05 8.24827 3.05 8.06773C3.05 7.74534 3.15709 7.49312 3.34934 7.32096C3.5423 7.14814 3.82696 7.05073 4.19141 7.05073H6.03085C6.44671 7.05073 6.72326 7.17605 6.92056 7.36509C7.1196 7.55581 7.24235 7.81544 7.3418 8.09244C8.05782 10.1594 9.07137 11.7804 9.64584 12.3848L9.74066 12.4846L9.73198 12.3472C9.67851 11.5009 9.70308 10.9056 9.72205 10.4459C9.72889 10.2803 9.73499 10.1324 9.73647 9.99658C9.73924 9.74077 9.72548 9.52705 9.66674 9.32363C9.60779 9.11948 9.50446 8.92872 9.33222 8.71674L9.33218 8.71669C8.95582 8.25458 8.94783 7.83938 9.11113 7.54237C9.27662 7.24137 9.62383 7.05 9.98031 7.05H12.8714C13.1614 7.05 13.3677 7.11664 13.5156 7.22864C13.6636 7.34067 13.7587 7.50231 13.8186 7.70281C13.8786 7.90386 13.9023 8.1412 13.909 8.40058C13.9144 8.61185 13.9085 8.83522 13.9025 9.06344C13.9011 9.11543 13.8997 9.16767 13.8985 9.22007L13.8985 9.2201C13.885 9.79742 13.8678 10.575 13.8932 11.5934L13.8959 11.699L13.9759 11.63C14.3988 11.2654 14.888 10.5726 15.3194 9.85214C15.7515 9.13057 16.1292 8.37477 16.3281 7.87858C16.5563 7.34269 17.0049 7.05 17.6012 7.05H19.4406C19.8705 7.05 20.1793 7.1806 20.3718 7.43008C20.4987 7.59563 20.6264 7.89304 20.4877 8.36079L20.4873 8.3618L20.4872 8.3624L20.4856 8.36774L20.4856 8.36873C20.4208 8.62767 20.2608 8.98768 20.0474 9.39434C19.8344 9.80002 19.5701 10.2487 19.299 10.684C18.7567 11.5547 18.1888 12.3689 17.954 12.6733L17.8918 12.7539ZM16.0966 15.2654C15.104 14.3179 14.4597 13.9307 13.873 13.9307C12.8004 13.9307 12.8113 14.735 12.825 15.7447C12.8258 15.8074 12.8267 15.8708 12.8273 15.9349L16.0966 15.2654ZM19.7628 16.898C19.7632 16.8998 19.7636 16.9017 19.764 16.9034L19.8128 16.8927L19.8051 16.8433C19.8034 16.8435 19.8018 16.8438 19.8001 16.844C19.582 16.1176 17.9254 14.4402 17.4077 13.9159L17.3926 13.9007L19.7628 16.898Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.1" />
										<path d="M40.9669 14.8962L40.956 14.8921C40.7754 14.8238 40.5554 14.9185 40.431 15.0829C40.3699 15.1636 40.3359 15.2568 40.3407 15.3482C40.3455 15.4381 40.3882 15.5323 40.4918 15.6171L40.4962 15.6206L40.4962 15.6206L40.4994 15.6231L40.4995 15.6231L40.5034 15.6262C40.7343 15.8072 43.8418 18.2497 43.9109 18.3047L43.9112 18.305C44.0315 18.4023 44.0737 18.5213 44.0531 18.6393C44.0332 18.7534 43.9561 18.8581 43.8558 18.9368C43.6574 19.0924 43.3367 19.168 43.1028 18.9886L43.1019 18.988L43.102 18.988C42.4061 18.4311 41.3297 17.5824 40.5731 16.9859C40.519 16.9432 40.4665 16.9018 40.4159 16.862L40.4159 16.8619C40.1998 16.6913 39.843 16.6902 39.6263 16.8619L39.6263 16.8619L36.9496 18.9781L36.9491 18.9785L36.9491 18.9785C36.7121 19.1607 36.3909 19.0853 36.1923 18.9303C36.092 18.852 36.015 18.7479 35.9951 18.6348C35.9745 18.5178 36.0168 18.4004 36.1371 18.3059L40.9669 14.8962ZM40.9669 14.8962L40.9784 14.8951C41.6997 14.8276 42.9028 14.6561 43.757 14.2282L43.7574 14.228C44.0673 14.0696 44.2969 13.9433 44.4638 13.8384C44.6299 13.7339 44.7379 13.6483 44.8012 13.5702C44.8666 13.4894 44.8862 13.4139 44.8708 13.3356C44.857 13.2655 44.8152 13.1972 44.7731 13.1284L44.77 13.1233L44.77 13.1233L44.7692 13.122C44.6515 12.9421 44.4716 12.883 44.2786 12.8984C44.0883 12.9135 43.8818 13.0007 43.6955 13.1157L43.6952 13.1159C43.6445 13.1477 42.2456 14.0105 40.0139 14.0105C38.385 14.0105 37.3429 13.5912 36.6419 13.2687C36.5718 13.2365 36.5047 13.205 36.4406 13.1749C36.3448 13.13 36.2556 13.0882 36.1735 13.0518C36.036 12.9908 35.9132 12.9427 35.803 12.9175C35.6925 12.8922 35.5906 12.889 35.4972 12.9221C35.4031 12.9554 35.3239 13.0231 35.2547 13.1274L35.2547 13.1274L35.2539 13.1287L35.2523 13.1312C35.2096 13.2001 35.1671 13.2686 35.1535 13.3394C35.1386 13.4174 35.1589 13.4926 35.2247 13.5728C35.2884 13.6504 35.3966 13.7355 35.5627 13.8393C35.7297 13.9436 35.9589 14.069 36.2681 14.2262L36.2682 14.2262C36.9154 14.5534 37.8824 14.782 39.0695 14.8914L39.0775 14.8921L39.0854 14.8903C39.3109 14.8379 39.5216 14.949 39.6277 15.1116C39.6804 15.1924 39.7056 15.2836 39.6955 15.3711C39.6855 15.4576 39.6405 15.5449 39.5446 15.6191L39.5377 15.6244L39.5368 15.6259L36.1371 18.3058L40.9669 14.8962ZM43.0047 12.4575L43.0047 12.4575C44.1452 11.7522 45.295 12.0375 45.7628 12.7553C45.9897 13.1264 45.9969 13.4633 45.8563 13.7677C45.714 14.0758 45.4174 14.3563 45.0257 14.603C44.2428 15.096 43.1015 15.4405 42.1442 15.6017L42.0316 15.6207L42.1219 15.6906C42.4105 15.914 42.7321 16.1669 43.8843 17.0727C44.1208 17.2587 44.3924 17.4722 44.7058 17.7186C45.0806 18.0214 45.2071 18.3572 45.1726 18.6709C45.1379 18.9874 44.938 19.2918 44.639 19.5255C44.0402 19.9934 43.0673 20.16 42.3157 19.5797C41.7318 19.112 40.9227 18.4729 40.0544 17.7885L40.0234 17.7641L39.9925 17.7885L37.7365 19.5724C37.7364 19.5725 37.7363 19.5725 37.7362 19.5726C36.9747 20.1581 36.0007 19.9857 35.4046 19.5143C35.1068 19.2789 34.9092 18.9733 34.8767 18.6577C34.8445 18.3451 34.9736 18.0123 35.3505 17.7163L35.3506 17.7162L37.9206 15.6897L38.0097 15.6195L37.8978 15.6011C36.9957 15.4527 36.2472 15.2287 35.6638 14.9332C35.1845 14.69 34.6592 14.4225 34.3409 14.0753C34.1829 13.9029 34.0787 13.7137 34.0551 13.5008C34.0316 13.2881 34.0876 13.045 34.2627 12.7632L34.2624 12.763L34.2624 12.7628L34.2627 12.7631L34.2663 12.7575C34.7307 12.0347 35.8901 11.7513 37.0261 12.4575L37.028 12.4586C37.0277 12.4584 37.0491 12.4712 37.0851 12.4908C37.1218 12.5107 37.1753 12.5387 37.2447 12.572C37.3836 12.6386 37.5863 12.7266 37.8453 12.8143C38.3632 12.9897 39.1065 13.1641 40.0155 13.1641C41.8329 13.1641 42.9888 12.4674 43.0047 12.4575ZM40.5046 15.6276C40.5047 15.6277 40.5047 15.6277 40.5046 15.6276L40.5046 15.6276Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.1" />
										<path d="M37.6857 8.29775V8.29773C37.6857 7.01623 38.7226 5.97395 39.9962 5.97395C41.2705 5.97395 42.3073 7.01624 42.3073 8.29773C42.3073 9.5737 41.2707 10.6122 39.9962 10.6122C38.7217 10.6122 37.6851 9.5737 37.6857 8.29775ZM41.4077 8.29773C41.4077 7.51283 40.7746 6.87358 39.9962 6.87358C39.2171 6.87358 38.5847 7.51283 38.5847 8.29706C38.5847 9.0776 39.2181 9.71255 39.9962 9.71255C40.7743 9.71255 41.4077 9.07761 41.4077 8.29773Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.1" />
										<path d="M44.236 8.29706C44.236 10.6339 42.3338 12.5354 39.9963 12.5354C37.6581 12.5354 35.7565 10.6339 35.7565 8.29706C35.7565 5.95548 37.6588 4.05 39.9963 4.05C42.3337 4.05 44.2353 5.95547 44.236 8.29706ZM43.3364 8.29706C43.3364 6.45156 41.838 4.94963 39.9963 4.94963C38.1539 4.94963 36.6562 6.45157 36.6562 8.29706C36.6562 10.138 38.154 11.6358 39.9963 11.6358C41.8385 11.6358 43.3364 10.138 43.3364 8.29706Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.1" />
										<path d="M74.6918 11.69C74.6931 11.69 74.694 11.69 74.6952 11.69C74.7805 11.69 74.8618 11.6542 74.9195 11.5916C74.9782 11.528 75.0072 11.4427 74.9996 11.3565C74.6928 7.98148 72.0206 5.30845 68.6453 5.00098C68.5597 4.99426 68.4735 5.02207 68.4099 5.08106C68.3464 5.13974 68.3109 5.22257 68.3118 5.30906C68.365 9.79447 68.9567 11.6273 74.6918 11.69ZM74.6918 12.3098C68.9567 12.3724 68.3653 14.2053 68.3121 18.6907C68.3112 18.7772 68.3467 18.86 68.4103 18.9187C68.4671 18.971 68.5414 19 68.6178 19C68.6269 19 68.6364 18.9997 68.6456 18.9988C72.0209 18.6913 74.6931 16.0186 74.9996 12.6432C75.0072 12.557 74.9785 12.4718 74.9195 12.4082C74.8605 12.3446 74.7783 12.3132 74.6918 12.3098ZM67.3351 5.00251C63.9704 5.31884 61.3068 7.99126 61.0015 11.3571C60.9939 11.4433 61.0226 11.5286 61.0816 11.5922C61.1393 11.6548 61.2209 11.6903 61.3059 11.6903C61.3071 11.6903 61.3084 11.6903 61.3096 11.6903C67.0258 11.6246 67.6159 9.79263 67.6697 5.31028C67.6706 5.22379 67.6349 5.14066 67.5713 5.08198C67.5071 5.0233 67.4212 4.99457 67.3351 5.00251ZM61.3093 12.3095C61.2142 12.2988 61.1397 12.344 61.0813 12.4076C61.0226 12.4712 60.9936 12.5564 61.0012 12.6426C61.3065 16.0085 63.9704 18.6809 67.3351 18.9973C67.3445 18.9982 67.3543 18.9985 67.3638 18.9985C67.4402 18.9985 67.5141 18.9697 67.571 18.9175C67.6346 18.8588 67.6703 18.7757 67.6694 18.6892C67.6156 14.2071 67.0258 12.3752 61.3093 12.3095Z" fill="black" fill-opacity="0.7" />
									</svg>

								</p>
							</div>

							<div className="flex h-34px mb-3  bg-green-files items-center justify-between">
								<p className="font-montserrat font-medium text-11px text-white ml-4 ..7x01:ml-1 ..7x01:text-10px ">Файлов: 17</p>
								<div className="flex items-center">
									<button className="..7x01:text-10px ..7x2:px-2 transition-all text-11px  bg-primary h-26px p-1.5 px-3 rounded-3xl flex items-center font-montserrat font-medium   text-white  ">
										<svg className=" mr-1 ..5x2:h-14px ..5x2:w-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C12.76 4 13.5 4.11 14.2 4.31L15.77 2.74C14.61 2.26 13.34 2 12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12M7.91 10.08L6.5 11.5L11 16L21 6L19.59 4.58L11 13.17L7.91 10.08Z" fill="white" />
										</svg>
										Выделить все
									</button>
									<button className="flex ..7x01:text-10px transition-all  bg-primary mr-1 h-26px p-1.5 px-3 rounded-3xl items-center ..7x2:ml-0.5 ..7x2:px-2 ml-2 font-montserrat font-medium text-11px text-white">
										<svg className=" mr-1 ..5x2:h-14px ..5x2:w-14px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6.56023 10.8285C6.4317 10.9626 6.26436 11.0624 6.07022 11.1086C4.30906 11.5274 3 13.1122 3 15.0002C3 17.2094 4.79086 19.0002 7 19.0002C7.38062 19.0002 7.74717 18.9474 8.09352 18.8492C8.62487 18.6986 9.17772 19.0072 9.32834 19.5386C9.47897 20.0699 9.17033 20.6228 8.63898 20.7734C8.11683 20.9214 7.56678 21.0002 7 21.0002C3.68629 21.0002 1 18.3139 1 15.0002C1 12.3751 2.68503 10.1457 5.03157 9.33088C5.36842 5.77877 8.35971 3 12 3C15.6573 3 18.6596 5.80487 18.973 9.38085C21.2471 10.234 22.8662 12.427 22.8662 15.0002C22.8662 18.3139 20.1799 21.0002 16.8662 21.0002C16.2994 21.0002 15.7494 20.9214 15.2272 20.7734C14.6959 20.6228 14.3872 20.0699 14.5378 19.5386C14.6885 19.0072 15.2413 18.6986 15.7727 18.8492C16.119 18.9474 16.4856 19.0002 16.8662 19.0002C19.0753 19.0002 20.8662 17.2094 20.8662 15.0002C20.8662 13.1122 19.5572 11.5274 17.796 11.1086C17.3803 11.0098 17.0875 10.6647 17.0354 10.2647C17.0123 10.1804 17 10.0917 17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10C7 10.3447 6.8256 10.6487 6.56023 10.8285Z" fill="white" />
											<path d="M16.2758 14.2957C16.6648 14.6877 16.6623 15.3209 16.2703 15.7099L12.7043 19.2481C12.3129 19.6364 11.681 19.6347 11.2917 19.2441L7.82444 15.7654C7.43456 15.3743 7.43561 14.7411 7.82677 14.3512C8.21794 13.9613 8.85111 13.9624 9.24099 14.3536L11 16.1184V10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10V16.1372L14.8616 14.2901C15.2536 13.9011 15.8868 13.9036 16.2758 14.2957Z" fill="white" />
										</svg>
										Скачать
									</button>
								</div>
							</div>
							{currentFilterMobile.photo && <>
								<div className="flex items-center mb-2">
									<p className="pb-1 font-montserrat mr-3 font-medium text-13px text-primary border-b border-dashed border-primary">Все</p>
									<p className="pb-1 font-montserrat font-medium text-13px text-gray-quick-silver border-b border-dashed border-gray-quick-silver">Без подписей</p>

								</div>
								<div className="flex mt-3 flex-wrap">
									<div className="w-150px mr-3 ..7x2:mr-0 ..7x2:w-120px ..7x59:w-130px ..7x59:mr-1 ..7x59:mb-1 mb-3 relative flex justify-end bg-gray-light">
										<svg className="absolute ..7x59:left-0.5 ..7x2:left-3 ..7x2:top-11 left-3 top-14 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
										</svg>
										<div className=' flex items-center ..7x59:left-1 ..7x2:left-14px absolute left-14px top-14px '>
											<input className='hidden' id='checkSearchAll' type="checkbox" />
											<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-quick-silver cursor-pointer border'></label>
										</div>
										<div className="relative ..7x2:w-20 ..7x2:h-20">

											<Image src={mobileFilter} />

										</div>
									</div>
									<div className="w-150px mr-3 ..7x001:mr-0 ..7x2:mr-0 ..7x2:w-120px ..7x59:w-130px ..7x59:mr-1 ..7x59:mb-1 mb-3 relative flex justify-end bg-gray-light">
										<svg className="absolute ..7x59:left-0.5 ..7x2:left-3 ..7x2:top-11 left-3 top-14 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
										</svg>
										<div className=' flex items-center ..7x59:left-1 ..7x2:left-14px absolute left-14px top-14px '>
											<input className='hidden' id='checkSearchAll' type="checkbox" />
											<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-quick-silver cursor-pointer border'></label>
										</div>
										<div className="relative ..7x2:w-20 ..7x2:h-20">

											<Image src={mobileFilter} />

										</div>
									</div>
									<div className="w-150px mr-3 ..7x2:mr-0 ..7x2:w-120px ..7x59:w-130px ..7x59:mr-1 ..7x59:mb-1 mb-3 relative flex justify-end bg-gray-light">
										<svg className="absolute ..7x59:left-0.5 ..7x2:left-3 ..7x2:top-11 left-3 top-14 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
										</svg>
										<div className=' flex items-center ..7x59:left-1 ..7x2:left-14px absolute left-14px top-14px '>
											<input className='hidden' id='checkSearchAll' type="checkbox" />
											<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-quick-silver cursor-pointer border'></label>
										</div>
										<div className="relative ..7x2:w-20 ..7x2:h-20">

											<Image src={mobileFilter} />

										</div>
									</div>
								</div>
							</>}
							{currentFilterMobile.video && <>
								<div className="flex items-center mb-2">
									<p className="pb-1 font-montserrat mr-3 font-medium text-13px text-primary border-b border-dashed border-primary">Все</p>
									<p className="pb-1 font-montserrat font-medium text-13px text-gray-quick-silver border-b border-dashed border-gray-quick-silver">Без подписей</p>

								</div>
								<div className="flex mt-3 flex-wrap">
									<div className="w-150px mr-3 ..7x2:mr-0 ..7x2:w-120px ..7x59:w-130px ..7x59:mr-1 ..7x59:mb-1 mb-3 relative flex justify-end bg-gray-light">
										<svg className="absolute ..7x59:left-0.5 ..7x2:left-3 ..7x2:top-11 left-3 top-14 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
										</svg>
										<div className=' flex items-center ..7x59:left-1 ..7x2:left-14px absolute left-14px top-14px '>
											<input className='hidden' id='checkSearchAll' type="checkbox" />
											<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-quick-silver cursor-pointer border'></label>
										</div>
										<div className="relative ..7x2:w-20 ..7x2:h-20">
											<div className="absolute left-0 z-10 flex items-center justify-center right-0 top-0 bottom-0">
												<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8182 10.9613C14.0432 10.8314 14.3205 10.8314 14.5455 10.9613L22.1819 15.3702C22.4069 15.5001 22.5455 15.7402 22.5455 16C22.5455 16.2599 22.4069 16.5 22.1819 16.6299L14.5455 21.0387C14.3205 21.1687 14.0432 21.1687 13.8182 21.0387C13.5932 20.9088 13.4546 20.6687 13.4546 20.4089V11.5912C13.4546 11.3313 13.5932 11.0912 13.8182 10.9613ZM14.9091 12.8508V19.1492L20.3637 16L14.9091 12.8508Z" fill="white" />
													<path d="M31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43958 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43958 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16Z" stroke="white" stroke-opacity="0.8" />
												</svg>

											</div>
											<Image src={mobileFilter} />

										</div>
									</div>
									<div className="w-150px mr-3 ..7x001:mr-0 ..7x2:mr-0 ..7x2:w-120px ..7x59:w-130px ..7x59:mr-1 ..7x59:mb-1 mb-3 relative flex justify-end bg-gray-light">
										<svg className="absolute ..7x59:left-0.5 ..7x2:left-3 ..7x2:top-11 left-3 top-14 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
										</svg>
										<div className=' flex items-center ..7x59:left-1 ..7x2:left-14px absolute left-14px top-14px '>
											<input className='hidden' id='checkSearchAll' type="checkbox" />
											<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-quick-silver cursor-pointer border'></label>
										</div>
										<div className="relative ..7x2:w-20 ..7x2:h-20">
											<div className="absolute left-0 z-10 flex items-center justify-center right-0 top-0 bottom-0">
												<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8182 10.9613C14.0432 10.8314 14.3205 10.8314 14.5455 10.9613L22.1819 15.3702C22.4069 15.5001 22.5455 15.7402 22.5455 16C22.5455 16.2599 22.4069 16.5 22.1819 16.6299L14.5455 21.0387C14.3205 21.1687 14.0432 21.1687 13.8182 21.0387C13.5932 20.9088 13.4546 20.6687 13.4546 20.4089V11.5912C13.4546 11.3313 13.5932 11.0912 13.8182 10.9613ZM14.9091 12.8508V19.1492L20.3637 16L14.9091 12.8508Z" fill="white" />
													<path d="M31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43958 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43958 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16Z" stroke="white" stroke-opacity="0.8" />
												</svg>

											</div>
											<Image src={mobileFilter} />

										</div>
									</div>
									<div className="w-150px mr-3 ..7x2:mr-0 ..7x2:w-120px ..7x59:w-130px ..7x59:mr-1 ..7x59:mb-1 mb-3 relative flex justify-end bg-gray-light">
										<svg className="absolute ..7x59:left-0.5 ..7x2:left-3 ..7x2:top-11 left-3 top-14 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
										</svg>
										<div className=' flex items-center ..7x59:left-1 ..7x2:left-14px absolute left-14px top-14px '>
											<input className='hidden' id='checkSearchAll' type="checkbox" />
											<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-quick-silver cursor-pointer border'></label>
										</div>
										<div className="relative ..7x2:w-20 ..7x2:h-20">
											<div className="absolute left-0 z-10 flex items-center justify-center right-0 top-0 bottom-0">
												<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8182 10.9613C14.0432 10.8314 14.3205 10.8314 14.5455 10.9613L22.1819 15.3702C22.4069 15.5001 22.5455 15.7402 22.5455 16C22.5455 16.2599 22.4069 16.5 22.1819 16.6299L14.5455 21.0387C14.3205 21.1687 14.0432 21.1687 13.8182 21.0387C13.5932 20.9088 13.4546 20.6687 13.4546 20.4089V11.5912C13.4546 11.3313 13.5932 11.0912 13.8182 10.9613ZM14.9091 12.8508V19.1492L20.3637 16L14.9091 12.8508Z" fill="white" />
													<path d="M31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43958 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43958 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16Z" stroke="white" stroke-opacity="0.8" />
												</svg>

											</div>
											<Image src={mobileFilter} />

										</div>
									</div>
								</div>
							</>}
							{currentFilterMobile.service && <>
								<div className="flex ">
									<div className="bg-gray-light mr-3 w-150px h-204px p-1">
										<div className="bg-white h-full w-full flex items-center  flex-col">
											<p className="font-montserrat font-medium text-13px text-center leading-140% mt-10 mb-0.5">Сертификат соответствия</p>
											<p className="font-montserrat font-medium leading-120% text-11px text-gray-quick-silver mb-6 text-center">Евразийский экономический союз</p>
											<div>
												<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx="16" cy="16" r="16" fill="#337202" />
													<path d="M16.7469 9.25C16.7469 8.83579 16.4111 8.5 15.9969 8.5C15.5827 8.5 15.2469 8.83579 15.2469 9.25V17.1862L13.1553 15.0947C12.8624 14.8018 12.3876 14.8018 12.0947 15.0947C11.8018 15.3876 11.8018 15.8624 12.0947 16.1553L15.4274 19.488C15.5649 19.6484 15.769 19.75 15.9969 19.75L15.9984 19.75C16.1909 19.7504 16.3835 19.6772 16.5303 19.5303L19.9053 16.1553C20.1982 15.8624 20.1982 15.3876 19.9053 15.0947C19.6124 14.8018 19.1376 14.8018 18.8447 15.0947L16.7469 17.1925V9.25Z" fill="white" />
													<path d="M22.75 15.25C23.1642 15.25 23.5 15.5858 23.5 16V22.75C23.5 23.1642 23.1642 23.5 22.75 23.5H9.25C8.83579 23.5 8.5 23.1642 8.5 22.75V16.0031C8.5 15.5889 8.83579 15.2531 9.25 15.2531C9.66421 15.2531 10 15.5889 10 16.0031V22H22V16C22 15.5858 22.3358 15.25 22.75 15.25Z" fill="white" />
												</svg>

											</div>
										</div>
									</div>
									<div className="bg-gray-light mr-3 w-150px h-204px p-1">
										<div className="bg-white h-full w-full flex items-center  flex-col">
											<p className="font-montserrat font-medium text-13px text-center leading-140% mt-10 mb-0.5">Сертификат соответствия</p>
											<p className="font-montserrat font-medium leading-120% text-11px text-gray-quick-silver mb-6 text-center">Евразийский экономический союз</p>
											<div>
												<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
													<circle cx="16" cy="16" r="16" fill="#337202" />
													<path d="M16.7469 9.25C16.7469 8.83579 16.4111 8.5 15.9969 8.5C15.5827 8.5 15.2469 8.83579 15.2469 9.25V17.1862L13.1553 15.0947C12.8624 14.8018 12.3876 14.8018 12.0947 15.0947C11.8018 15.3876 11.8018 15.8624 12.0947 16.1553L15.4274 19.488C15.5649 19.6484 15.769 19.75 15.9969 19.75L15.9984 19.75C16.1909 19.7504 16.3835 19.6772 16.5303 19.5303L19.9053 16.1553C20.1982 15.8624 20.1982 15.3876 19.9053 15.0947C19.6124 14.8018 19.1376 14.8018 18.8447 15.0947L16.7469 17.1925V9.25Z" fill="white" />
													<path d="M22.75 15.25C23.1642 15.25 23.5 15.5858 23.5 16V22.75C23.5 23.1642 23.1642 23.5 22.75 23.5H9.25C8.83579 23.5 8.5 23.1642 8.5 22.75V16.0031C8.5 15.5889 8.83579 15.2531 9.25 15.2531C9.66421 15.2531 10 15.5889 10 16.0031V22H22V16C22 15.5858 22.3358 15.25 22.75 15.25Z" fill="white" />
												</svg>

											</div>
										</div>
									</div>
								</div>
							</>}
							{currentFilterMobile.product && <>
								<div className="flex items-center mb-2">
									<p className="pb-1 font-montserrat mr-3 font-medium text-13px text-primary border-b border-dashed border-primary">Все</p>
									<p className="pb-1 font-montserrat font-medium text-13px text-gray-quick-silver border-b border-dashed border-gray-quick-silver">Буклеты</p>
									<p className="pb-1 font-montserrat font-medium text-13px text-gray-quick-silver border-b border-dashed border-gray-quick-silver ml-3">Ролл апы</p>
									<p className="pb-1 font-montserrat font-medium text-13px text-gray-quick-silver border-b border-dashed border-gray-quick-silver ml-3">PDF.</p>
								</div>
								<div className="flex mt-3 flex-wrap">
									<div className="w-150px mr-3 ..7x2:mr-0 ..7x2:w-120px ..7x59:w-130px ..7x59:mr-1 ..7x59:mb-1 mb-3 relative flex justify-end bg-gray-light">
										<svg className="absolute ..7x59:left-0.5 ..7x2:left-3 ..7x2:top-11 left-3 top-14 z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
										</svg>
										<div className=' flex items-center ..7x59:left-1 ..7x2:left-14px absolute left-14px top-14px '>
											<input className='hidden' id='checkSearchAll' type="checkbox" />
											<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-quick-silver cursor-pointer border'></label>
										</div>
										<div className="relative ..7x2:w-20 ..7x2:h-20">

											<Image src={mobileFilter} />
											<p className="text-center font-montserrat font-medium text-11px text-gray-quick-silver mb-3">PDF</p>
										</div>
									</div>

								</div>
							</>}
							{currentFilterMobile.active && <>
								<div className=".5x1:w-1100px ..5x2:w-full !ml-0 .4x2:w-910px w-1200 .2x1.0:w-800px .1x01:w-727px ..5x1:w-664px .1x1:ml-4 ..5x01:w-600px">
									<div className="p-3   border border-stroke">
										<div className="w-full flex ">
											<p className="font-montserrat font-medium text-xl ..5x2:text-13px">Статьи</p>
											<p className="font-montserrat font-medium text-xl text-gray-quick-silver ml-2 ..5x2:text-13px">3</p>
										</div>
										<Slider {...settings} className="pt-13px ..5x2:pt-1   newsSlider   ">
											<div className=" relative pr-5px  ..5x2:!px-0 ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
												<NewsDate title={'ВЧЕРА'} />
												<div>
													<Image
														className="object-cover"
														width={474}
														height={330}
														src={oneNew}
														alt="newsImg"
													/>
												</div>
												<div className="  -mt-4 relative">
													<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Онлайн-каталог</p>
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Промоушен</p>
													</div>
													<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
														Возвращение легенды: косметический <br /> спонж для умывания
													</p>
													<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
														Возвращение легенды: косметический спонж для умывания
													</p>
													<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
														Все помнят тот самый косметический спонж, который под струей воды
														превращался из палочки в круглый диск Все помнят тот самый
														косметический спонж, который под струей воды превращался
													</p>
													<button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
														Читать
														<div className="bg-primary lineHover absolute bottom-0.5 -left-1.5 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
													</button>
												</div>
											</div>
											<div className=" relative pr-5px ..5x2:!px-0 ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
												<NewsDate title={'ВЧЕРА'} />
												<div>
													<Image
														className="object-cover"
														width={474}
														height={330}
														src={oneNew}
														alt="newsImg"
													/>
												</div>
												<div className="  -mt-4 relative">
													<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Онлайн-каталог</p>
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Промоушен</p>
													</div>
													<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
														Возвращение легенды: косметический <br /> спонж для умывания
													</p>
													<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
														Возвращение легенды: косметический спонж для умывания
													</p>
													<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
														Все помнят тот самый косметический спонж, который под струей воды
														превращался из палочки в круглый диск Все помнят тот самый
														косметический спонж, который под струей воды превращался
													</p>
													<button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
														Читать
														<div className="bg-primary lineHover absolute bottom-0.5 -left-1.5 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
													</button>
												</div>
											</div>
											<div className=" relative pr-5px ..5x2:!px-0 ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
												<NewsDate title={'ВЧЕРА'} />
												<div>
													<Image
														className="object-cover"
														width={474}
														height={330}
														src={oneNew}
														alt="newsImg"
													/>
												</div>
												<div className="  -mt-4 relative">
													<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Онлайн-каталог</p>
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Промоушен</p>
													</div>
													<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
														Возвращение легенды: косметический <br /> спонж для умывания
													</p>
													<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
														Возвращение легенды: косметический спонж для умывания
													</p>
													<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
														Все помнят тот самый косметический спонж, который под струей воды
														превращался из палочки в круглый диск Все помнят тот самый
														косметический спонж, который под струей воды превращался
													</p>
													<button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
														Читать
														<div className="bg-primary lineHover absolute bottom-0.5 -left-1.5 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
													</button>
												</div>
											</div>
											<div className=" relative pr-5px ..5x2:!px-0 ..6x04:p-1.5 transition-all   newsCardHover cursor-pointer hover:scale-95">
												<NewsDate title={'ВЧЕРА'} />
												<div>
													<Image
														className="object-cover"
														width={474}
														height={330}
														src={oneNew}
														alt="newsImg"
													/>
												</div>
												<div className="  -mt-4 relative">
													<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Онлайн-каталог</p>
														<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Промоушен</p>
													</div>
													<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
														Возвращение легенды: косметический <br /> спонж для умывания
													</p>
													<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
														Возвращение легенды: косметический спонж для умывания
													</p>
													<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
														Все помнят тот самый косметический спонж, который под струей воды
														превращался из палочки в круглый диск Все помнят тот самый
														косметический спонж, который под струей воды превращался
													</p>
													<button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
														Читать
														<div className="bg-primary lineHover absolute bottom-0.5 -left-1.5 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
													</button>
												</div>
											</div>
										</Slider>


									</div>
									<div className="p-3 mt-6   border border-stroke">
										<div className="w-full flex ">
											<p className="font-montserrat font-medium text-xl ..5x2:text-13px">Видео</p>
											<p className="font-montserrat font-medium text-xl text-gray-quick-silver ml-2 ..5x2:text-13px">1</p>
										</div>
										<div className="flex ">
											<div className="mt-3  ..5x2:mt-1 ..5x2:w-272px .5x01:w-300px mr-10px relative">
												<Image src={i} />
												<div>
													<p className="font-montserrat font-semibold text-18px ..5x2:text-13px">Как скрыть следы усталости под глазами</p>
													<p className="font-montserrat font-medium text-sm ..5x2:text-11px ..5x2:mt-1 text-gray-quick-silver mt-2 mb-4">19 часов назад</p>
												</div>
												<div className="absolute top-1.5 flex items-center left-2">
													<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 4.22639C6.09101 4.07753 6.40867 4.07753 6.6665 4.22639L15.4165 9.27823C15.6743 9.42709 15.8332 9.70219 15.8332 9.99991C15.8332 10.2976 15.6743 10.5727 15.4165 10.7216L6.66651 15.7734C6.40867 15.9223 6.09101 15.9223 5.83317 15.7734C5.57534 15.6246 5.4165 15.3495 5.4165 15.0517V4.94808C5.4165 4.65036 5.57534 4.37525 5.83317 4.22639ZM7.08317 6.39146V13.6084L13.3332 9.99991L7.08317 6.39146Z" fill="white" />
													</svg>

													<p className="ml-1.5 font-montserrat ..5x2:text-11px font-medium text-white">
														00:20
													</p>
												</div>
												<svg className="absolute right-2 top-2 z-10" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clip-path="url(#clip0_3113_149809)">
														<path d="M0 15.5C0 8.193 0 4.54 2.27 2.27C4.54 0 8.193 0 15.5 0H16.5C23.807 0 27.46 0 29.73 2.27C32 4.54 32 8.193 32 15.5V16.5C32 23.807 32 27.46 29.73 29.73C27.46 32 23.807 32 16.5 32H15.5C8.193 32 4.54 32 2.27 29.73C0 27.46 0 23.807 0 16.5V15.5Z" fill="white" fill-opacity="0.3" />
														<path fill-rule="evenodd" clip-rule="evenodd" d="M26.398 10.88C26.55 10.373 26.398 10 25.673 10H23.277C22.667 10 22.387 10.322 22.235 10.677C22.235 10.677 21.016 13.646 19.29 15.574C18.732 16.132 18.478 16.31 18.174 16.31C18.021 16.31 17.801 16.132 17.801 15.625V10.88C17.801 10.271 17.624 10 17.116 10H13.351C12.971 10 12.741 10.283 12.741 10.55C12.741 11.128 13.605 11.26 13.694 12.884V16.411C13.694 17.184 13.554 17.324 13.249 17.324C12.437 17.324 10.461 14.343 9.289 10.931C9.06 10.268 8.83 10 8.218 10H5.821C5.137 10 5 10.322 5 10.677C5 11.312 5.812 14.457 8.782 18.618C10.762 21.46 13.552 23 16.09 23C17.612 23 17.8 22.658 17.8 22.069V19.92C17.8 19.236 17.945 19.1 18.427 19.1C18.783 19.1 19.392 19.277 20.813 20.647C22.438 22.272 22.706 23 23.62 23H26.016C26.701 23 27.043 22.658 26.846 21.983C26.63 21.31 25.854 20.333 24.825 19.176C24.266 18.516 23.429 17.806 23.175 17.451C22.82 16.995 22.921 16.791 23.175 16.386C23.175 16.386 26.094 12.276 26.399 10.88H26.398Z" fill="white" />
													</g>
													<defs>
														<clipPath id="clip0_3113_149809">
															<rect width="32" height="32" fill="white" />
														</clipPath>
													</defs>
												</svg>


											</div>
											<div className="mt-3 ..5x2:mt-1 ..6x04:hidden ..5x2:w-272px .5x01:w-300px relative">
												<Image src={i} />
												<div className="absolute left-0 right-0 bottom-77px ..5x2:bottom-20 flex .5x01:bottom-100px items-center h-16 justify-end  bg-white-80pe">
													<button className="flex items-center font-montserrat font-medium text-xs text-white bg-primary hover:bg-primary-hover transition-all h-8 px-5 mr-4 ">
														Перейти <svg className="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M8.75033 4.66683L11.0837 7.00016M11.0837 7.00016L8.75033 9.3335M11.0837 7.00016H2.91699" stroke="white" stroke-width="1.5" stroke-linecap="round" />
														</svg>

													</button>
												</div>
												<div>
													<p className="font-montserrat font-semibold text-18px ..5x2:text-13px">Как правильно подготовить очищать кожу</p>
													<p className="font-montserrat font-medium text-sm ..5x2:text-11px ..5x2:mt-1 text-gray-quick-silver mt-2 mb-4">2 дня назад</p>
												</div>
												<div className="absolute top-1.5 flex items-center left-2">
													<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 4.22639C6.09101 4.07753 6.40867 4.07753 6.6665 4.22639L15.4165 9.27823C15.6743 9.42709 15.8332 9.70219 15.8332 9.99991C15.8332 10.2976 15.6743 10.5727 15.4165 10.7216L6.66651 15.7734C6.40867 15.9223 6.09101 15.9223 5.83317 15.7734C5.57534 15.6246 5.4165 15.3495 5.4165 15.0517V4.94808C5.4165 4.65036 5.57534 4.37525 5.83317 4.22639ZM7.08317 6.39146V13.6084L13.3332 9.99991L7.08317 6.39146Z" fill="white" />
													</svg>

													<p className="ml-1.5 ..5x2:text-11px font-montserrat font-medium text-white">
														01:56:00
													</p>
												</div>

												<svg className="absolute right-2 top-2 z-10" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M31.296 8.472C31.504 9.224 31.648 10.232 31.744 11.512C31.856 12.792 31.904 13.896 31.904 14.856L32 16.2C32 19.704 31.744 22.28 31.296 23.928C30.896 25.368 29.968 26.296 28.528 26.696C27.776 26.904 26.4 27.048 24.288 27.144C22.208 27.256 20.304 27.304 18.544 27.304L16 27.4C9.296 27.4 5.12 27.144 3.472 26.696C2.032 26.296 1.104 25.368 0.704 23.928C0.496 23.176 0.352 22.168 0.256 20.888C0.144 19.608 0.0959999 18.504 0.0959999 17.544L0 16.2C0 12.696 0.256 10.12 0.704 8.472C1.104 7.032 2.032 6.104 3.472 5.704C4.224 5.496 5.6 5.352 7.712 5.256C9.792 5.144 11.696 5.096 13.456 5.096L16 5C22.704 5 26.88 5.256 28.528 5.704C29.968 6.104 30.896 7.032 31.296 8.472Z" fill="white" fill-opacity="0.3" />
													<path d="M13 20.6L21.304 15.8L13 11V20.6Z" fill="white" />
												</svg>



											</div>
										</div>





									</div>
								</div>
							</>}



						</div>

					</div>

				</div >


				<div className="w-1100px h-96 ..6x3:h-272px ..5x2:m-0 ..5x2:h-auto ..5x2:w-full  ml-8 p-8 .2x1.0:p-3 bg-gray-100">
					<p className="font-montserrat text-xl font-medium mb-6 ..6x3:mb-18px .5x01:text-sm .2x1.0:text-xs">Характеристики</p>
					<div className="flex justify-between items-center mb-26px">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px" >Артикул</p>
						<div className="border-b border-dotted w-full mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm .2x1.0:text-11px">20115</p>
					</div>
					<div className="..6x3:hidden flex justify-between items-center mb-26px">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px">Цвет</p>
						<div className="border-b border-dotted w-full mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm .2x1.0:text-11px">розовый</p>
					</div>
					<div className="flex justify-between items-center mb-26px">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px">Вес</p>
						<div className="border-b border-dotted w-65% ..7x1:w-60% ..5x2:w-76% mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm .2x1.0:text-11px">18 г.</p>
					</div>
					<div className="flex justify-between items-center mb-26px">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px">Вес упаковки</p>
						<div className="border-b ..7x2:w-40% ..6x6:w-60% ..6x3:w-65% ..7x1:w-50% border-dotted w-50% ..5x2:w-76% mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm .2x1.0:text-11px">50г.</p>
					</div>
					<div className="flex justify-between items-center mb-26px">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px">Объем</p>
						<div className="border-b border-dotted w-60% ..7x002:w-50% ..6x5:w-65% ..5x2:w-76% mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat .5x01:text-sm .2x1.0:text-11px">30 ml</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="font-montserrat .5x01:text-sm .2x1.0:text-11px">Серия</p>
						<div className="border-b ..7x2:w-22% ..7x11:w-44% ..7x01:w-30% ..7x1:w-35% ..6x04:w-50% border-dotted w-34% ..5x2:w-76% ..6x03:w-60% ..5x4:w-65% mx-4 border-gray"></div>
						<p className="tracking-widest font-montserrat text-black-70pe .5x01:text-11px">GOLLAGEN ACTIVE</p>
					</div>

				</div>
			</div >}
			{showDesc.activeComponents && <div className="mt-8 ..6x3:hidden pb-32">
				<div className="flex .2x1:flex-col">
					<div className="w-85 .2x1:!w-full">
						<p className="font-montserrat font-medium text-xl mb-6">Компоненты в составе маски</p>
						<p className="font-montserrat italic font-medium text-primary mb-2">Водоросли</p>
						<div className="flex mb-10px pb-3 border-b border-gray-light23">
							<p className="font-montserrat w-91 mr-6 font-light text-sm italic leading-180">Экстракт водорослей содержит большое количество питательных веществ, способствует эффективному увлажнению кожи, улучшает тонус и эластичность, смягчает</p>
							<div className="h-94px w-94px">
								<Image src={trava} />
							</div>

						</div>


						<p className="font-montserrat italic font-medium text-primary mb-2">Мушмула</p>
						<div className="flex mb-10px pb-3 border-b relative border-gray-light23">
							<p className="font-montserrat mr-110px mb-4 font-light text-sm italic leading-180">Экстракт мушмулы германской-источник большого количества витаминов, минералов и органический кислот. Питает кожу, ускоряет обновление клеток, улучшает микрорельеф кожи, разглаживая мелкие морщинки и неровности </p>
							<div className="h-94px w-94px absolute right-0 top-0">

								<Image src={active2} width='90px' height='90px' />
							</div>

						</div>
					</div>
					<div className="ml-10 .2x1:ml-0 .2x1:mt-4  p-30px bg-gray-100">
						<p className="font-montserrat leading-140% mb-6">Все компоненты подбираются по принципу синергии: в сочетании их действие усиливается.</p>
						<p className="font-montserrat text-11px uppercase mb-1">все компоненты этой категории</p>
						<div className="flex flex-wrap">
							<EffectsItemDetail title={'алоэ'} mb={true} />
							<EffectsItemDetail title={'арбутин'} mb={true} />
							<EffectsItemDetail title={'аскорбиновая кислота'} mb={true} />
							<EffectsItemDetail title={'АНА-кислоты'} mb={true} />
							<EffectsItemDetail title={'аллантоин'} mb={true} />
							<EffectsItemDetail title={'аморфофаллус-коньяк'} mb={true} />
							<EffectsItemDetail title={'боссвелия'} mb={true} />
							<EffectsItemDetail title={'белая глина'} mb={true} />
							<EffectsItemDetail title={'витамин E'} mb={true} />
							<EffectsItemDetail title={'водоросли'} mb={true} />
							<EffectsItemDetail title={'гиалуроновая кислота'} mb={true} />
							<EffectsItemDetail title={'гиалуронат натрия'} mb={true} />
							<EffectsItemDetail title={'гамамелис виргинский'} mb={true} />
							<EffectsItemDetail title={'диоксид титана'} mb={true} />
							<EffectsItemDetail title={'жемчуг'} mb={true} />
							<EffectsItemDetail title={'зеленый чай'} mb={true} />
							<EffectsItemDetail title={'зародыши пшеницы'} mb={true} />
							<EffectsItemDetail title={'камелия'} mb={true} />
							<EffectsItemDetail title={'коллаген'} mb={true} />
							<EffectsItemDetail title={'комплект BIOPHYTEX'} mb={true} />
							<EffectsItemDetail title={'ещё'} mb={true} arrow={true} />


						</div>
					</div>
				</div>
			</div>}
			{showDesc.materials && <div className=" pb-32">
				<div className="flex h-52px mb-5 bg-green-files items-center">
					<p className="font-montserrat font-medium text-xl text-white ml-4  mr-48">Файлов: 17</p>
					<div className="flex items-center">
						<button className="transition-all  hover:bg-primary p-1.5 px-3 rounded-3xl flex items-center font-montserrat font-medium text-13px text-white  ">
							<svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C12.76 4 13.5 4.11 14.2 4.31L15.77 2.74C14.61 2.26 13.34 2 12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12M7.91 10.08L6.5 11.5L11 16L21 6L19.59 4.58L11 13.17L7.91 10.08Z" fill="white" />
							</svg>
							Выделить все
						</button>
						<button className="flex transition-all hover:bg-primary p-1.5 px-3 rounded-3xl items-center ml-34px font-montserrat font-medium text-13px text-white">
							<svg className="mr-10px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.56023 10.8285C6.4317 10.9626 6.26436 11.0624 6.07022 11.1086C4.30906 11.5274 3 13.1122 3 15.0002C3 17.2094 4.79086 19.0002 7 19.0002C7.38062 19.0002 7.74717 18.9474 8.09352 18.8492C8.62487 18.6986 9.17772 19.0072 9.32834 19.5386C9.47897 20.0699 9.17033 20.6228 8.63898 20.7734C8.11683 20.9214 7.56678 21.0002 7 21.0002C3.68629 21.0002 1 18.3139 1 15.0002C1 12.3751 2.68503 10.1457 5.03157 9.33088C5.36842 5.77877 8.35971 3 12 3C15.6573 3 18.6596 5.80487 18.973 9.38085C21.2471 10.234 22.8662 12.427 22.8662 15.0002C22.8662 18.3139 20.1799 21.0002 16.8662 21.0002C16.2994 21.0002 15.7494 20.9214 15.2272 20.7734C14.6959 20.6228 14.3872 20.0699 14.5378 19.5386C14.6885 19.0072 15.2413 18.6986 15.7727 18.8492C16.119 18.9474 16.4856 19.0002 16.8662 19.0002C19.0753 19.0002 20.8662 17.2094 20.8662 15.0002C20.8662 13.1122 19.5572 11.5274 17.796 11.1086C17.3803 11.0098 17.0875 10.6647 17.0354 10.2647C17.0123 10.1804 17 10.0917 17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10C7 10.3447 6.8256 10.6487 6.56023 10.8285Z" fill="white" />
								<path d="M16.2758 14.2957C16.6648 14.6877 16.6623 15.3209 16.2703 15.7099L12.7043 19.2481C12.3129 19.6364 11.681 19.6347 11.2917 19.2441L7.82444 15.7654C7.43456 15.3743 7.43561 14.7411 7.82677 14.3512C8.21794 13.9613 8.85111 13.9624 9.24099 14.3536L11 16.1184V10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10V16.1372L14.8616 14.2901C15.2536 13.9011 15.8868 13.9036 16.2758 14.2957Z" fill="white" />
							</svg>
							Скачать
						</button>
					</div>
				</div>
				<div className="flex  ">
					<div className="mr-18px .1x1:mr-0">
						<p onClick={() => setFilterItem('photo')} className={`flex items-center font-montserrat py-3 px-5 transition-all hover:bg-gray-light2 cursor-pointer ${currentFilter.photo ? '!bg-gray-light2' : ""}`}><svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5C1.5 3.89543 2.39543 3 3.5 3H20.5C21.6046 3 22.5 3.89543 22.5 5V19C22.5 20.1046 21.6046 21 20.5 21H3.5C2.39543 21 1.5 20.1046 1.5 19V5ZM3.5 17.4142V19H20.5V17.4942L13.1438 11.8688L10.7593 14.6508C10.4084 15.0601 9.79627 15.1176 9.37531 14.7809L7.57422 13.34L3.5 17.4142ZM20.5 14.9764V5H3.5V14.5858L6.79289 11.2929C7.1532 10.9326 7.7268 10.9008 8.12469 11.2191L9.86985 12.6153L12.2407 9.84921C12.5861 9.44633 13.1859 9.38331 13.6075 9.70564L20.5 14.9764ZM7.25 8.5C7.38807 8.5 7.5 8.38807 7.5 8.25C7.5 8.11193 7.38807 8 7.25 8C7.11193 8 7 8.11193 7 8.25C7 8.38807 7.11193 8.5 7.25 8.5ZM5.5 8.25C5.5 7.2835 6.2835 6.5 7.25 6.5C8.2165 6.5 9 7.2835 9 8.25C9 9.2165 8.2165 10 7.25 10C6.2835 10 5.5 9.2165 5.5 8.25Z" fill="black" fill-opacity="0.7" />
						</svg>
							Фотографии
						</p>
						<p onClick={() => setFilterItem('video')} className={`flex items-center font-montserrat py-3 px-5 transition-all hover:bg-gray-light2 cursor-pointer ${currentFilter.video ? '!bg-gray-light2' : ""}`}>
							<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02943 3 3 7.02943 3 12C3 16.9706 7.02943 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02943 16.9706 3 12 3ZM9.5 7.66987C9.8094 7.49124 10.1906 7.49124 10.5 7.66987L16.5 11.134C16.8094 11.3126 17 11.6427 17 12C17 12.3573 16.8094 12.6874 16.5 12.866L10.5 16.3301C10.1906 16.5088 9.8094 16.5088 9.5 16.3301C9.1906 16.1515 9 15.8214 9 15.4641V8.5359C9 8.17863 9.1906 7.84851 9.5 7.66987ZM11 10.268V13.732L14 12L11 10.268Z" fill="black" fill-opacity="0.7" />
							</svg>
							Видео
						</p>
						<p onClick={() => setFilterItem('service')} className={`flex items-center font-montserrat py-3 px-5 transition-all hover:bg-gray-light2 cursor-pointer ${currentFilter.service ? '!bg-gray-light2' : ""}`}>
							<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 2C22.018 2 22.87 2.76384 22.9916 3.82579L23 4V17C23 18.018 22.2362 18.87 21.1742 18.9916L21 19H18V21C18 21.7043 17.2979 22.1753 16.6586 21.9402L16.5528 21.8944L15 21.118L13.4472 21.8944C12.8173 22.2094 12.082 21.792 12.0064 21.1151L12 21V19H3C2.03562 19 1.22018 18.3145 1.03358 17.3393L1.00839 17.1742L1 17V4C1 2.98205 1.76385 2.13004 2.82579 2.00839L3 2H21ZM16 17.391L15.7664 17.4378C15.6053 17.465 15.438 17.4836 15.2646 17.4929L15.2198 17.4941C15.147 17.498 15.0737 17.5 15 17.5L14.8004 17.4951C14.7983 17.495 14.7963 17.4949 14.7943 17.4948C14.5133 17.4842 14.2487 17.4491 14.0002 17.393L14 19.381L14.5528 19.1056C14.8343 18.9648 15.1657 18.9648 15.4472 19.1056L16 19.382V17.391ZM3.05759 3.99834L3 4L2.99834 16.9424L3.00003 17L12 17L11.999 16.1447C11.3772 15.4397 11 14.5139 11 13.5C11 11.2909 12.7909 9.5 15 9.5C17.2091 9.5 19 11.2909 19 13.5C19 14.5139 18.6227 15.4397 18.001 16.1447L18 17L20.9424 17.0017L21 16.999L21.0017 4.05759L20.999 4L3.05759 3.99834ZM15 11.5C13.8954 11.5 13 12.3954 13 13.5C13 14.6046 13.8954 15.5 15 15.5L14.923 15.497L15 15.5C15.0267 15.5 15.0529 15.4997 15.0788 15.499C15.5643 15.48 16.0066 15.2874 16.3439 14.9812C16.3459 14.9773 16.3486 14.9749 16.3513 14.9726L16.3439 14.9812C16.7469 14.6154 17 14.0872 17 13.5C17 12.3954 16.1046 11.5 15 11.5ZM8 13C8.55228 13 9 13.4477 9 14C9 14.5128 8.61396 14.9355 8.11662 14.9933L8 15H6C5.44772 15 5 14.5523 5 14C5 13.4872 5.38604 13.0645 5.88338 13.0067L6 13H8ZM9 9.5C9.55229 9.5 10 9.94772 10 10.5C10 11.0128 9.61396 11.4355 9.11662 11.4933L9 11.5H6C5.44772 11.5 5 11.0523 5 10.5C5 9.98716 5.38604 9.56449 5.88338 9.50673L6 9.5H9ZM18 6C18.5523 6 19 6.44772 19 7C19 7.51284 18.614 7.93551 18.1166 7.99327L18 8H6C5.44772 8 5 7.55228 5 7C5 6.48716 5.38604 6.06449 5.88338 6.00673L6 6H18Z" fill="black" fill-opacity="0.7" />
							</svg>
							Сертификаты
						</p>
						<p onClick={() => setFilterItem('product')} className={`flex items-center font-montserrat py-3 px-5 transition-all hover:bg-gray-light2 cursor-pointer ${currentFilter.product ? '!bg-gray-light2' : ""}`}>
							<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2V9H22C22.5523 9 23 9.44772 23 10V19C23 19.5523 22.5523 20 22 20H19.5V22C19.5 22.5523 19.0523 23 18.5 23H5.5C4.94772 23 4.5 22.5523 4.5 22V20H2C1.44772 20 1 19.5523 1 19V10C1 9.44772 1.44772 9 2 9H4V2ZM6 9H18V3H6V9ZM3 11V18H4.49025V16C4.49025 15.4477 4.93797 15 5.49025 15H18.5086C19.0609 15 19.5086 15.4477 19.5086 16V18H21V11H3ZM6.5 17V21H17.5V17H6.5Z" fill="black" fill-opacity="0.7" />
							</svg>
							Печатная продукция
						</p>
						<p onClick={() => setFilterItem('active')} className={`flex items-center font-montserrat py-3 px-5 transition-all hover:bg-gray-light2 cursor-pointer ${currentFilter.active ? '!bg-gray-light2' : ""}`}>
							<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5002 5C14.5002 3.067 16.0672 1.5 18.0002 1.5C19.9332 1.5 21.5002 3.067 21.5002 5C21.5002 6.93298 19.9332 8.5 18.0002 8.5C16.0672 8.5 14.5002 6.93298 14.5002 5ZM18.0002 3.5C17.1718 3.5 16.5002 4.17158 16.5002 5C16.5002 5.82841 17.1718 6.5 18.0002 6.5C18.8286 6.5 19.5002 5.82841 19.5002 5C19.5002 4.17158 18.8286 3.5 18.0002 3.5ZM9.67453 6.05404C9.92294 5.96803 10.1952 5.98329 10.4325 6.09652L15.9309 8.72082C16.2471 8.87173 16.4613 9.17712 16.4954 9.52582C16.5296 9.87451 16.3787 10.2157 16.0978 10.425L11.7431 13.6712L16.05 16.5064C16.2805 16.6582 16.438 16.8984 16.4854 17.1702C16.5327 17.442 16.4656 17.7213 16.2999 17.942L12.8041 22.5993C12.4725 23.041 11.8457 23.1303 11.404 22.7988C10.9623 22.4672 10.873 21.8404 11.2046 21.3987L14.0619 17.5921L9.45188 14.5574C9.17951 14.3781 9.01167 14.0772 9.00215 13.7513C8.99263 13.4254 9.14263 13.1152 9.40407 12.9204L13.5739 9.81198L9.94124 8.07819L6.32737 9.32951C5.80549 9.51021 5.23592 9.23363 5.05522 8.71174C4.87452 8.18986 5.1511 7.6203 5.67298 7.43959L9.67453 6.05404ZM22.7289 8.04814C23.107 8.45063 23.0873 9.08349 22.6848 9.46167L19.6857 12.2797C19.3711 12.5752 18.9024 12.6356 18.5232 12.4294L17.1823 11.7002C16.6971 11.4363 16.5177 10.8291 16.7816 10.3439C17.0454 9.85877 17.6527 9.67935 18.1378 9.94321L18.8433 10.3269L21.3153 8.00413C21.7178 7.62595 22.3507 7.64565 22.7289 8.04814ZM9.02934 14.9762C9.46922 15.3102 9.55511 15.9375 9.22116 16.3774L7.73631 18.3333C7.65333 18.4426 7.54873 18.5336 7.42903 18.6008L2.49134 21.3704C2.00965 21.6405 1.40015 21.4691 1.12996 20.9874C0.859782 20.5057 1.03124 19.8962 1.51292 19.626L6.26915 16.9582L7.62819 15.168C7.96214 14.7282 8.58945 14.6423 9.02934 14.9762Z" fill="black" fill-opacity="0.7" />
							</svg>
							Активность
							<svg className="ml-3" width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.03083 8.05073H6.03085C6.03395 8.05073 6.03703 8.05073 6.04011 8.05072C6.11242 8.05062 6.17802 8.05053 6.23245 8.10836C6.25806 8.13557 6.27921 8.17326 6.30083 8.22177C6.32267 8.2708 6.34683 8.33526 6.37689 8.41897L6.37708 8.41951L6.37708 8.41951C6.74192 9.47365 7.33369 10.7808 7.98309 11.8236C8.30787 12.3451 8.64588 12.7985 8.97577 13.1209C9.30748 13.445 9.62257 13.6285 9.90183 13.6285C10.1182 13.6285 10.2766 13.5742 10.3935 13.4909C10.5108 13.4074 10.5901 13.2919 10.6438 13.1637C10.7519 12.9052 10.7525 12.6034 10.7525 12.4318C10.7525 12.4318 10.7525 12.4318 10.7525 12.4318L10.7517 9.71838C10.7029 8.83514 10.3762 8.3979 10.1611 8.1314L10.0953 8.04988L10.2001 8.05L12.8221 8.05293L12.8664 8.05298L12.8717 8.09698L12.872 8.10009L12.872 8.10132L12.8721 8.10273L12.8721 8.10522L12.8721 8.11256L12.8721 8.13896L12.8719 8.23712L12.8707 8.5889C12.8697 8.88232 12.8685 9.27991 12.8679 9.69974C12.8668 10.5399 12.8683 11.4677 12.8795 11.8289L12.8796 11.8305C12.8795 12.3351 13.0831 12.7112 13.4231 12.8164C13.7657 12.9224 14.2796 12.7651 14.9258 12.1237C16.2905 10.6121 17.2358 8.34998 17.2739 8.25767L17.2741 8.25719C17.3027 8.18988 17.3335 8.13372 17.3876 8.09736C17.4416 8.06112 17.5104 8.05 17.6012 8.05H19.4406H19.4481H19.5179L19.4963 8.11345L6.03083 8.05073ZM6.03083 8.05073C5.56988 8.05099 5.20133 8.05088 4.91588 8.0508C4.80003 8.05076 4.69786 8.05073 4.60876 8.05073C4.45447 8.05073 4.3393 8.05082 4.2601 8.05115C4.18269 8.05146 4.13647 8.05197 4.12344 8.05313L4.07388 8.05755L4.07806 8.10713C4.10849 8.46858 4.32665 9.20114 4.70727 10.0927C5.0887 10.9861 5.6356 12.0445 6.32758 13.059C7.70916 15.0845 9.67994 16.95 12.0776 16.95C12.577 16.95 12.7748 16.8986 12.8498 16.8696L12.8857 16.8558L12.8815 16.8175C12.8809 16.8127 12.8802 16.807 12.879 16.802L12.879 16.8019C12.8789 16.8015 12.8785 16.8 12.8778 16.7978M6.03083 8.05073L12.8778 16.7978M12.8778 16.7978L12.8779 16.7973C12.8782 16.7331 12.8792 16.5296 12.8773 15.9348L12.8773 15.9345C12.8767 15.8698 12.8758 15.806 12.875 15.7432C12.8722 15.538 12.8695 15.3428 12.876 15.1607C12.8845 14.923 12.9086 14.7123 12.9665 14.5371C13.0241 14.3629 13.1146 14.2256 13.2554 14.1311C13.3968 14.0362 13.5945 13.9807 13.873 13.9807C14.4376 13.9807 15.0687 14.3534 16.0617 15.3013C16.4523 15.6878 16.7396 16.0042 16.9658 16.2535C17.0589 16.356 17.1417 16.4471 17.217 16.5271C17.3455 16.6634 17.4538 16.7687 17.5546 16.8397C17.6564 16.9114 17.7537 16.9507 17.8598 16.9507H17.8599C18.5744 16.9492 19.014 16.9503 19.2913 16.951C19.3511 16.9512 19.4034 16.9513 19.4492 16.9514C19.7052 16.9518 19.7641 16.9509 19.8206 16.9421L19.8731 16.9338L19.8617 16.8819C19.8204 16.695 19.6759 16.445 19.4817 16.172C19.2861 15.897 19.0351 15.5921 18.7737 15.2939C18.261 14.7088 17.7057 14.1465 17.4434 13.8809L17.4283 13.8656C17.4283 13.8656 17.4283 13.8656 17.4283 13.8656C17.2644 13.6989 17.1524 13.5803 17.11 13.5303C16.8782 13.2341 16.8145 12.9863 16.8337 12.7684C16.8533 12.548 16.9581 12.3508 17.0797 12.1559C17.0879 12.1434 17.0951 12.1326 17.1027 12.1226L17.1034 12.1217C17.3818 11.7398 17.9363 10.9349 18.4423 10.129C18.6954 9.7261 18.9366 9.32233 19.1254 8.9707C19.3127 8.6217 19.451 8.31904 19.4951 8.11888C19.4952 8.11834 19.4953 8.11781 19.4954 8.11727L12.8778 16.7978ZM17.8918 12.7539H17.9051C17.8939 12.7726 17.8829 12.7917 17.8738 12.8089L17.8602 12.8348L17.8761 12.8593C17.8979 12.8931 17.9556 12.9564 18.0347 13.039C18.1048 13.1124 18.1953 13.2047 18.3002 13.3117C18.3161 13.3279 18.3322 13.3444 18.3487 13.3612C18.6004 13.618 18.9258 13.9514 19.2592 14.317C19.5928 14.6827 19.9337 15.0798 20.2167 15.4639C20.5001 15.8486 20.7226 16.2167 20.8227 16.5248C20.9745 17.033 20.8351 17.3538 20.6977 17.5341C20.5552 17.7207 20.2662 17.95 19.6992 17.95H17.8598C17.3766 17.95 17.0593 17.7754 16.7068 17.4456C16.5352 17.285 16.3563 17.0886 16.146 16.8577L16.1244 16.834C15.9052 16.5933 15.6527 16.3173 15.3425 16.0101L15.3418 16.0095C14.5396 15.2444 14.1441 15.044 13.967 14.995L13.9074 14.9785L13.9038 15.0403C13.8918 15.2427 13.8947 15.573 13.8976 15.9145L13.8976 15.915C13.8717 15.9812 13.8652 16.0619 13.8663 16.1475C13.8672 16.2259 13.8747 16.3138 13.8824 16.4053C13.8837 16.4197 13.8849 16.4341 13.8861 16.4486C13.9042 16.6654 13.919 16.9024 13.8623 17.1237C13.8063 17.3422 13.6803 17.5463 13.4119 17.6973C13.1412 17.8497 12.7222 17.95 12.0776 17.95C9.2572 17.95 7.00084 15.8603 5.4455 13.5684C4.66879 12.4239 4.06936 11.2325 3.66421 10.2338C3.46164 9.73453 3.30784 9.28392 3.20476 8.91194C3.10135 8.53878 3.05 8.24827 3.05 8.06773C3.05 7.74534 3.15709 7.49312 3.34934 7.32096C3.5423 7.14814 3.82696 7.05073 4.19141 7.05073H6.03085C6.44671 7.05073 6.72326 7.17605 6.92056 7.36509C7.1196 7.55581 7.24235 7.81544 7.3418 8.09244C8.05782 10.1594 9.07137 11.7804 9.64584 12.3848L9.74066 12.4846L9.73198 12.3472C9.67851 11.5009 9.70308 10.9056 9.72205 10.4459C9.72889 10.2803 9.73499 10.1324 9.73647 9.99658C9.73924 9.74077 9.72548 9.52705 9.66674 9.32363C9.60779 9.11948 9.50446 8.92872 9.33222 8.71674L9.33218 8.71669C8.95582 8.25458 8.94783 7.83938 9.11113 7.54237C9.27662 7.24137 9.62383 7.05 9.98031 7.05H12.8714C13.1614 7.05 13.3677 7.11664 13.5156 7.22864C13.6636 7.34067 13.7587 7.50231 13.8186 7.70281C13.8786 7.90386 13.9023 8.1412 13.909 8.40058C13.9144 8.61185 13.9085 8.83522 13.9025 9.06344C13.9011 9.11543 13.8997 9.16767 13.8985 9.22007L13.8985 9.2201C13.885 9.79742 13.8678 10.575 13.8932 11.5934L13.8959 11.699L13.9759 11.63C14.3988 11.2654 14.888 10.5726 15.3194 9.85214C15.7515 9.13057 16.1292 8.37477 16.3281 7.87858C16.5563 7.34269 17.0049 7.05 17.6012 7.05H19.4406C19.8705 7.05 20.1793 7.1806 20.3718 7.43008C20.4987 7.59563 20.6264 7.89304 20.4877 8.36079L20.4873 8.3618L20.4872 8.3624L20.4856 8.36774L20.4856 8.36873C20.4208 8.62767 20.2608 8.98768 20.0474 9.39434C19.8344 9.80002 19.5701 10.2487 19.299 10.684C18.7567 11.5547 18.1888 12.3689 17.954 12.6733L17.8918 12.7539ZM16.0966 15.2654C15.104 14.3179 14.4597 13.9307 13.873 13.9307C12.8004 13.9307 12.8113 14.735 12.825 15.7447C12.8258 15.8074 12.8267 15.8708 12.8273 15.9349L16.0966 15.2654ZM19.7628 16.898C19.7632 16.8998 19.7636 16.9017 19.764 16.9034L19.8128 16.8927L19.8051 16.8433C19.8034 16.8435 19.8018 16.8438 19.8001 16.844C19.582 16.1176 17.9254 14.4402 17.4077 13.9159L17.3926 13.9007L19.7628 16.898Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.1" />
								<path d="M40.9669 14.8962L40.956 14.8921C40.7754 14.8238 40.5554 14.9185 40.431 15.0829C40.3699 15.1636 40.3359 15.2568 40.3407 15.3482C40.3455 15.4381 40.3882 15.5323 40.4918 15.6171L40.4962 15.6206L40.4962 15.6206L40.4994 15.6231L40.4995 15.6231L40.5034 15.6262C40.7343 15.8072 43.8418 18.2497 43.9109 18.3047L43.9112 18.305C44.0315 18.4023 44.0737 18.5213 44.0531 18.6393C44.0332 18.7534 43.9561 18.8581 43.8558 18.9368C43.6574 19.0924 43.3367 19.168 43.1028 18.9886L43.1019 18.988L43.102 18.988C42.4061 18.4311 41.3297 17.5824 40.5731 16.9859C40.519 16.9432 40.4665 16.9018 40.4159 16.862L40.4159 16.8619C40.1998 16.6913 39.843 16.6902 39.6263 16.8619L39.6263 16.8619L36.9496 18.9781L36.9491 18.9785L36.9491 18.9785C36.7121 19.1607 36.3909 19.0853 36.1923 18.9303C36.092 18.852 36.015 18.7479 35.9951 18.6348C35.9745 18.5178 36.0168 18.4004 36.1371 18.3059L40.9669 14.8962ZM40.9669 14.8962L40.9784 14.8951C41.6997 14.8276 42.9028 14.6561 43.757 14.2282L43.7574 14.228C44.0673 14.0696 44.2969 13.9433 44.4638 13.8384C44.6299 13.7339 44.7379 13.6483 44.8012 13.5702C44.8666 13.4894 44.8862 13.4139 44.8708 13.3356C44.857 13.2655 44.8152 13.1972 44.7731 13.1284L44.77 13.1233L44.77 13.1233L44.7692 13.122C44.6515 12.9421 44.4716 12.883 44.2786 12.8984C44.0883 12.9135 43.8818 13.0007 43.6955 13.1157L43.6952 13.1159C43.6445 13.1477 42.2456 14.0105 40.0139 14.0105C38.385 14.0105 37.3429 13.5912 36.6419 13.2687C36.5718 13.2365 36.5047 13.205 36.4406 13.1749C36.3448 13.13 36.2556 13.0882 36.1735 13.0518C36.036 12.9908 35.9132 12.9427 35.803 12.9175C35.6925 12.8922 35.5906 12.889 35.4972 12.9221C35.4031 12.9554 35.3239 13.0231 35.2547 13.1274L35.2547 13.1274L35.2539 13.1287L35.2523 13.1312C35.2096 13.2001 35.1671 13.2686 35.1535 13.3394C35.1386 13.4174 35.1589 13.4926 35.2247 13.5728C35.2884 13.6504 35.3966 13.7355 35.5627 13.8393C35.7297 13.9436 35.9589 14.069 36.2681 14.2262L36.2682 14.2262C36.9154 14.5534 37.8824 14.782 39.0695 14.8914L39.0775 14.8921L39.0854 14.8903C39.3109 14.8379 39.5216 14.949 39.6277 15.1116C39.6804 15.1924 39.7056 15.2836 39.6955 15.3711C39.6855 15.4576 39.6405 15.5449 39.5446 15.6191L39.5377 15.6244L39.5368 15.6259L36.1371 18.3058L40.9669 14.8962ZM43.0047 12.4575L43.0047 12.4575C44.1452 11.7522 45.295 12.0375 45.7628 12.7553C45.9897 13.1264 45.9969 13.4633 45.8563 13.7677C45.714 14.0758 45.4174 14.3563 45.0257 14.603C44.2428 15.096 43.1015 15.4405 42.1442 15.6017L42.0316 15.6207L42.1219 15.6906C42.4105 15.914 42.7321 16.1669 43.8843 17.0727C44.1208 17.2587 44.3924 17.4722 44.7058 17.7186C45.0806 18.0214 45.2071 18.3572 45.1726 18.6709C45.1379 18.9874 44.938 19.2918 44.639 19.5255C44.0402 19.9934 43.0673 20.16 42.3157 19.5797C41.7318 19.112 40.9227 18.4729 40.0544 17.7885L40.0234 17.7641L39.9925 17.7885L37.7365 19.5724C37.7364 19.5725 37.7363 19.5725 37.7362 19.5726C36.9747 20.1581 36.0007 19.9857 35.4046 19.5143C35.1068 19.2789 34.9092 18.9733 34.8767 18.6577C34.8445 18.3451 34.9736 18.0123 35.3505 17.7163L35.3506 17.7162L37.9206 15.6897L38.0097 15.6195L37.8978 15.6011C36.9957 15.4527 36.2472 15.2287 35.6638 14.9332C35.1845 14.69 34.6592 14.4225 34.3409 14.0753C34.1829 13.9029 34.0787 13.7137 34.0551 13.5008C34.0316 13.2881 34.0876 13.045 34.2627 12.7632L34.2624 12.763L34.2624 12.7628L34.2627 12.7631L34.2663 12.7575C34.7307 12.0347 35.8901 11.7513 37.0261 12.4575L37.028 12.4586C37.0277 12.4584 37.0491 12.4712 37.0851 12.4908C37.1218 12.5107 37.1753 12.5387 37.2447 12.572C37.3836 12.6386 37.5863 12.7266 37.8453 12.8143C38.3632 12.9897 39.1065 13.1641 40.0155 13.1641C41.8329 13.1641 42.9888 12.4674 43.0047 12.4575ZM40.5046 15.6276C40.5047 15.6277 40.5047 15.6277 40.5046 15.6276L40.5046 15.6276Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.1" />
								<path d="M37.6857 8.29775V8.29773C37.6857 7.01623 38.7226 5.97395 39.9962 5.97395C41.2705 5.97395 42.3073 7.01624 42.3073 8.29773C42.3073 9.5737 41.2707 10.6122 39.9962 10.6122C38.7217 10.6122 37.6851 9.5737 37.6857 8.29775ZM41.4077 8.29773C41.4077 7.51283 40.7746 6.87358 39.9962 6.87358C39.2171 6.87358 38.5847 7.51283 38.5847 8.29706C38.5847 9.0776 39.2181 9.71255 39.9962 9.71255C40.7743 9.71255 41.4077 9.07761 41.4077 8.29773Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.1" />
								<path d="M44.236 8.29706C44.236 10.6339 42.3338 12.5354 39.9963 12.5354C37.6581 12.5354 35.7565 10.6339 35.7565 8.29706C35.7565 5.95548 37.6588 4.05 39.9963 4.05C42.3337 4.05 44.2353 5.95547 44.236 8.29706ZM43.3364 8.29706C43.3364 6.45156 41.838 4.94963 39.9963 4.94963C38.1539 4.94963 36.6562 6.45157 36.6562 8.29706C36.6562 10.138 38.154 11.6358 39.9963 11.6358C41.8385 11.6358 43.3364 10.138 43.3364 8.29706Z" fill="black" fill-opacity="0.7" stroke="white" stroke-width="0.1" />
								<path d="M74.6918 11.69C74.6931 11.69 74.694 11.69 74.6952 11.69C74.7805 11.69 74.8618 11.6542 74.9195 11.5916C74.9782 11.528 75.0072 11.4427 74.9996 11.3565C74.6928 7.98148 72.0206 5.30845 68.6453 5.00098C68.5597 4.99426 68.4735 5.02207 68.4099 5.08106C68.3464 5.13974 68.3109 5.22257 68.3118 5.30906C68.365 9.79447 68.9567 11.6273 74.6918 11.69ZM74.6918 12.3098C68.9567 12.3724 68.3653 14.2053 68.3121 18.6907C68.3112 18.7772 68.3467 18.86 68.4103 18.9187C68.4671 18.971 68.5414 19 68.6178 19C68.6269 19 68.6364 18.9997 68.6456 18.9988C72.0209 18.6913 74.6931 16.0186 74.9996 12.6432C75.0072 12.557 74.9785 12.4718 74.9195 12.4082C74.8605 12.3446 74.7783 12.3132 74.6918 12.3098ZM67.3351 5.00251C63.9704 5.31884 61.3068 7.99126 61.0015 11.3571C60.9939 11.4433 61.0226 11.5286 61.0816 11.5922C61.1393 11.6548 61.2209 11.6903 61.3059 11.6903C61.3071 11.6903 61.3084 11.6903 61.3096 11.6903C67.0258 11.6246 67.6159 9.79263 67.6697 5.31028C67.6706 5.22379 67.6349 5.14066 67.5713 5.08198C67.5071 5.0233 67.4212 4.99457 67.3351 5.00251ZM61.3093 12.3095C61.2142 12.2988 61.1397 12.344 61.0813 12.4076C61.0226 12.4712 60.9936 12.5564 61.0012 12.6426C61.3065 16.0085 63.9704 18.6809 67.3351 18.9973C67.3445 18.9982 67.3543 18.9985 67.3638 18.9985C67.4402 18.9985 67.5141 18.9697 67.571 18.9175C67.6346 18.8588 67.6703 18.7757 67.6694 18.6892C67.6156 14.2071 67.0258 12.3752 61.3093 12.3095Z" fill="black" fill-opacity="0.7" />
							</svg>

						</p>
					</div>

					<div className="flex flex-wrap ">

						{currentFilter.photo && <>
							<div className="px-60px .1x1:px-10 border mr-10px mb-10px relative hoverI transition-all border-white hover:bg-white-BG_FILTER hover:border-gray-light2">
								<div className='hidden items-center absolute left-14px top-14px hoverShowI'>
									<input className='hidden' id='checkSearchAll' type="checkbox" />
									<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-deNum cursor-pointer border'></label>
								</div>

								<svg className="absolute hidden hoverShowI left-3 top-11" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
								</svg>

								<div className="pb-3 ..5x1:w-56 ..5x1:h-56 relative">
									<svg className="absolute right-3 hidden top-3 hoverShowI z-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13.9997 9.33337C14.3416 9.33337 14.6233 9.59073 14.6619 9.92229L14.6663 10V14C14.6663 14.3419 14.409 14.6237 14.0774 14.6622L13.9997 14.6667H9.99967C9.63148 14.6667 9.33301 14.3682 9.33301 14C9.33301 13.6581 9.59037 13.3764 9.92193 13.3379L9.99967 13.3334H13.333V10C13.333 9.65815 13.5904 9.37637 13.9219 9.33786L13.9997 9.33337ZM6.80441 9.1953C7.04473 9.43563 7.06322 9.81378 6.85987 10.0753L6.80441 10.1381L3.60901 13.3334H5.99967C6.34156 13.3334 6.62335 13.5907 6.66186 13.9223L6.66634 14C6.66634 14.3419 6.40898 14.6237 6.07742 14.6622L5.99967 14.6667H1.99967L1.97817 14.6664C1.96616 14.666 1.95416 14.6653 1.94219 14.6642L1.99967 14.6667C1.96593 14.6667 1.93277 14.6642 1.90037 14.6594C1.88904 14.6576 1.87742 14.6556 1.86586 14.6532C1.85118 14.6503 1.83672 14.6468 1.82245 14.6429C1.81203 14.64 1.80177 14.6369 1.79158 14.6335C1.77848 14.6293 1.76529 14.6245 1.7523 14.6193C1.74048 14.6146 1.72894 14.6096 1.71753 14.6043C1.70375 14.5978 1.69015 14.5908 1.67682 14.5835C1.66874 14.579 1.6606 14.5743 1.65254 14.5694C1.63549 14.5589 1.61892 14.5477 1.6029 14.5358C1.59794 14.5322 1.59311 14.5285 1.58833 14.5248C1.54622 14.4917 1.50804 14.4535 1.47487 14.4112L1.52827 14.4714C1.50467 14.4478 1.48322 14.4229 1.4639 14.3969C1.452 14.3808 1.44082 14.3642 1.43039 14.3471C1.42541 14.3391 1.42067 14.331 1.41612 14.3227C1.40887 14.3096 1.40193 14.296 1.39544 14.2821C1.39013 14.2708 1.38514 14.2592 1.38049 14.2476C1.37522 14.2344 1.37042 14.2212 1.36604 14.2079C1.36283 14.1979 1.35974 14.1877 1.3569 14.1774C1.3529 14.163 1.34943 14.1485 1.34645 14.1339C1.34414 14.1223 1.34209 14.1107 1.34035 14.099C1.33929 14.0922 1.33833 14.085 1.33749 14.0778L1.33565 14.0595C1.33427 14.044 1.33343 14.0285 1.33313 14.0129L1.33301 14V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337C2.34156 9.33337 2.62335 9.59073 2.66186 9.92229L2.66634 10V12.3894L5.8616 9.1953C6.12195 8.93495 6.54406 8.93495 6.80441 9.1953ZM13.9997 1.33337L14.0126 1.3335C14.0281 1.3338 14.0437 1.33464 14.0592 1.33602L13.9997 1.33337C14.0334 1.33337 14.0666 1.33588 14.099 1.34072C14.1103 1.34246 14.1219 1.34451 14.1335 1.34687C14.1482 1.3498 14.1626 1.35326 14.1769 1.35719C14.1873 1.36011 14.1976 1.36319 14.2078 1.36653C14.2209 1.37079 14.2341 1.37558 14.247 1.38078C14.2589 1.38551 14.2704 1.39049 14.2818 1.39582C14.2956 1.40229 14.3092 1.40924 14.3225 1.41662C14.3306 1.42104 14.3387 1.42578 14.3468 1.4307C14.3639 1.44119 14.3804 1.45237 14.3964 1.46425C14.4014 1.46788 14.4062 1.47156 14.411 1.47533C14.4531 1.50841 14.4913 1.54659 14.5245 1.58887L14.4711 1.52864C14.4947 1.55223 14.5161 1.57716 14.5355 1.60317C14.5473 1.61929 14.5585 1.63586 14.569 1.65293C14.5739 1.66097 14.5787 1.66911 14.5832 1.67733C14.5905 1.69051 14.5974 1.70411 14.6039 1.71797C14.6092 1.72931 14.6142 1.74084 14.6189 1.75248C14.6241 1.76565 14.6289 1.77884 14.6333 1.79222C14.6365 1.80214 14.6396 1.8124 14.6424 1.82271C14.6465 1.83708 14.6499 1.85154 14.6529 1.86618C14.6552 1.87779 14.6573 1.88941 14.659 1.90106C14.6601 1.90788 14.661 1.91507 14.6619 1.92229L14.6639 1.94255C14.6649 1.95453 14.6656 1.96653 14.666 1.97854L14.6663 2.00004V6.00004C14.6663 6.36823 14.3679 6.66671 13.9997 6.66671C13.6578 6.66671 13.376 6.40935 13.3375 6.07779L13.333 6.00004V3.60937L10.1377 6.80478C9.8774 7.06513 9.45529 7.06513 9.19494 6.80478C8.95461 6.56446 8.93613 6.1863 9.13948 5.92477L9.19494 5.86197L12.389 2.66671H9.99967C9.65778 2.66671 9.376 2.40935 9.33749 2.07779L9.33301 2.00004C9.33301 1.65815 9.59037 1.37637 9.92193 1.33786L9.99967 1.33337H13.9997ZM5.99967 1.33337C6.36786 1.33337 6.66634 1.63185 6.66634 2.00004C6.66634 2.34193 6.40898 2.62371 6.07742 2.66222L5.99967 2.66671H2.66634V6.00004C2.66634 6.34193 2.40898 6.62371 2.07742 6.66222L1.99967 6.66671C1.65778 6.66671 1.376 6.40935 1.33749 6.07779L1.33301 6.00004V2.00004C1.33301 1.65815 1.59037 1.37637 1.92193 1.33786L1.99967 1.33337H5.99967Z" fill="white" fill-opacity="0.8" />
									</svg>

									<Image src={matOne} />
								</div>
							</div>
							<div className="px-60px .1x1:px-10 border mr-10px mb-10px relative hoverI transition-all border-white hover:bg-white-BG_FILTER hover:border-gray-light2">
								<div className='hidden items-center absolute left-14px top-14px hoverShowI'>
									<input className='hidden' id='checkSearchAll' type="checkbox" />
									<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-deNum cursor-pointer border'></label>
								</div>

								<svg className="absolute hidden hoverShowI left-3 top-11" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
								</svg>

								<div className="pb-3 ..5x1:w-56 ..5x1:h-56 relative">
									<svg className="absolute right-3 hidden top-3 hoverShowI z-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13.9997 9.33337C14.3416 9.33337 14.6233 9.59073 14.6619 9.92229L14.6663 10V14C14.6663 14.3419 14.409 14.6237 14.0774 14.6622L13.9997 14.6667H9.99967C9.63148 14.6667 9.33301 14.3682 9.33301 14C9.33301 13.6581 9.59037 13.3764 9.92193 13.3379L9.99967 13.3334H13.333V10C13.333 9.65815 13.5904 9.37637 13.9219 9.33786L13.9997 9.33337ZM6.80441 9.1953C7.04473 9.43563 7.06322 9.81378 6.85987 10.0753L6.80441 10.1381L3.60901 13.3334H5.99967C6.34156 13.3334 6.62335 13.5907 6.66186 13.9223L6.66634 14C6.66634 14.3419 6.40898 14.6237 6.07742 14.6622L5.99967 14.6667H1.99967L1.97817 14.6664C1.96616 14.666 1.95416 14.6653 1.94219 14.6642L1.99967 14.6667C1.96593 14.6667 1.93277 14.6642 1.90037 14.6594C1.88904 14.6576 1.87742 14.6556 1.86586 14.6532C1.85118 14.6503 1.83672 14.6468 1.82245 14.6429C1.81203 14.64 1.80177 14.6369 1.79158 14.6335C1.77848 14.6293 1.76529 14.6245 1.7523 14.6193C1.74048 14.6146 1.72894 14.6096 1.71753 14.6043C1.70375 14.5978 1.69015 14.5908 1.67682 14.5835C1.66874 14.579 1.6606 14.5743 1.65254 14.5694C1.63549 14.5589 1.61892 14.5477 1.6029 14.5358C1.59794 14.5322 1.59311 14.5285 1.58833 14.5248C1.54622 14.4917 1.50804 14.4535 1.47487 14.4112L1.52827 14.4714C1.50467 14.4478 1.48322 14.4229 1.4639 14.3969C1.452 14.3808 1.44082 14.3642 1.43039 14.3471C1.42541 14.3391 1.42067 14.331 1.41612 14.3227C1.40887 14.3096 1.40193 14.296 1.39544 14.2821C1.39013 14.2708 1.38514 14.2592 1.38049 14.2476C1.37522 14.2344 1.37042 14.2212 1.36604 14.2079C1.36283 14.1979 1.35974 14.1877 1.3569 14.1774C1.3529 14.163 1.34943 14.1485 1.34645 14.1339C1.34414 14.1223 1.34209 14.1107 1.34035 14.099C1.33929 14.0922 1.33833 14.085 1.33749 14.0778L1.33565 14.0595C1.33427 14.044 1.33343 14.0285 1.33313 14.0129L1.33301 14V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337C2.34156 9.33337 2.62335 9.59073 2.66186 9.92229L2.66634 10V12.3894L5.8616 9.1953C6.12195 8.93495 6.54406 8.93495 6.80441 9.1953ZM13.9997 1.33337L14.0126 1.3335C14.0281 1.3338 14.0437 1.33464 14.0592 1.33602L13.9997 1.33337C14.0334 1.33337 14.0666 1.33588 14.099 1.34072C14.1103 1.34246 14.1219 1.34451 14.1335 1.34687C14.1482 1.3498 14.1626 1.35326 14.1769 1.35719C14.1873 1.36011 14.1976 1.36319 14.2078 1.36653C14.2209 1.37079 14.2341 1.37558 14.247 1.38078C14.2589 1.38551 14.2704 1.39049 14.2818 1.39582C14.2956 1.40229 14.3092 1.40924 14.3225 1.41662C14.3306 1.42104 14.3387 1.42578 14.3468 1.4307C14.3639 1.44119 14.3804 1.45237 14.3964 1.46425C14.4014 1.46788 14.4062 1.47156 14.411 1.47533C14.4531 1.50841 14.4913 1.54659 14.5245 1.58887L14.4711 1.52864C14.4947 1.55223 14.5161 1.57716 14.5355 1.60317C14.5473 1.61929 14.5585 1.63586 14.569 1.65293C14.5739 1.66097 14.5787 1.66911 14.5832 1.67733C14.5905 1.69051 14.5974 1.70411 14.6039 1.71797C14.6092 1.72931 14.6142 1.74084 14.6189 1.75248C14.6241 1.76565 14.6289 1.77884 14.6333 1.79222C14.6365 1.80214 14.6396 1.8124 14.6424 1.82271C14.6465 1.83708 14.6499 1.85154 14.6529 1.86618C14.6552 1.87779 14.6573 1.88941 14.659 1.90106C14.6601 1.90788 14.661 1.91507 14.6619 1.92229L14.6639 1.94255C14.6649 1.95453 14.6656 1.96653 14.666 1.97854L14.6663 2.00004V6.00004C14.6663 6.36823 14.3679 6.66671 13.9997 6.66671C13.6578 6.66671 13.376 6.40935 13.3375 6.07779L13.333 6.00004V3.60937L10.1377 6.80478C9.8774 7.06513 9.45529 7.06513 9.19494 6.80478C8.95461 6.56446 8.93613 6.1863 9.13948 5.92477L9.19494 5.86197L12.389 2.66671H9.99967C9.65778 2.66671 9.376 2.40935 9.33749 2.07779L9.33301 2.00004C9.33301 1.65815 9.59037 1.37637 9.92193 1.33786L9.99967 1.33337H13.9997ZM5.99967 1.33337C6.36786 1.33337 6.66634 1.63185 6.66634 2.00004C6.66634 2.34193 6.40898 2.62371 6.07742 2.66222L5.99967 2.66671H2.66634V6.00004C2.66634 6.34193 2.40898 6.62371 2.07742 6.66222L1.99967 6.66671C1.65778 6.66671 1.376 6.40935 1.33749 6.07779L1.33301 6.00004V2.00004C1.33301 1.65815 1.59037 1.37637 1.92193 1.33786L1.99967 1.33337H5.99967Z" fill="white" fill-opacity="0.8" />
									</svg>

									<Image src={matOne} />
								</div>
							</div>
							<div className="px-60px .1x1:px-10 border mr-10px mb-10px relative hoverI transition-all border-white hover:bg-white-BG_FILTER hover:border-gray-light2">
								<div className='hidden items-center absolute left-14px top-14px hoverShowI'>
									<input className='hidden' id='checkSearchAll' type="checkbox" />
									<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-deNum cursor-pointer border'></label>
								</div>

								<svg className="absolute hidden hoverShowI left-3 top-11" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
								</svg>

								<div className="pb-3 ..5x1:w-56 ..5x1:h-56 relative">
									<svg className="absolute right-3 hidden top-3 hoverShowI z-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13.9997 9.33337C14.3416 9.33337 14.6233 9.59073 14.6619 9.92229L14.6663 10V14C14.6663 14.3419 14.409 14.6237 14.0774 14.6622L13.9997 14.6667H9.99967C9.63148 14.6667 9.33301 14.3682 9.33301 14C9.33301 13.6581 9.59037 13.3764 9.92193 13.3379L9.99967 13.3334H13.333V10C13.333 9.65815 13.5904 9.37637 13.9219 9.33786L13.9997 9.33337ZM6.80441 9.1953C7.04473 9.43563 7.06322 9.81378 6.85987 10.0753L6.80441 10.1381L3.60901 13.3334H5.99967C6.34156 13.3334 6.62335 13.5907 6.66186 13.9223L6.66634 14C6.66634 14.3419 6.40898 14.6237 6.07742 14.6622L5.99967 14.6667H1.99967L1.97817 14.6664C1.96616 14.666 1.95416 14.6653 1.94219 14.6642L1.99967 14.6667C1.96593 14.6667 1.93277 14.6642 1.90037 14.6594C1.88904 14.6576 1.87742 14.6556 1.86586 14.6532C1.85118 14.6503 1.83672 14.6468 1.82245 14.6429C1.81203 14.64 1.80177 14.6369 1.79158 14.6335C1.77848 14.6293 1.76529 14.6245 1.7523 14.6193C1.74048 14.6146 1.72894 14.6096 1.71753 14.6043C1.70375 14.5978 1.69015 14.5908 1.67682 14.5835C1.66874 14.579 1.6606 14.5743 1.65254 14.5694C1.63549 14.5589 1.61892 14.5477 1.6029 14.5358C1.59794 14.5322 1.59311 14.5285 1.58833 14.5248C1.54622 14.4917 1.50804 14.4535 1.47487 14.4112L1.52827 14.4714C1.50467 14.4478 1.48322 14.4229 1.4639 14.3969C1.452 14.3808 1.44082 14.3642 1.43039 14.3471C1.42541 14.3391 1.42067 14.331 1.41612 14.3227C1.40887 14.3096 1.40193 14.296 1.39544 14.2821C1.39013 14.2708 1.38514 14.2592 1.38049 14.2476C1.37522 14.2344 1.37042 14.2212 1.36604 14.2079C1.36283 14.1979 1.35974 14.1877 1.3569 14.1774C1.3529 14.163 1.34943 14.1485 1.34645 14.1339C1.34414 14.1223 1.34209 14.1107 1.34035 14.099C1.33929 14.0922 1.33833 14.085 1.33749 14.0778L1.33565 14.0595C1.33427 14.044 1.33343 14.0285 1.33313 14.0129L1.33301 14V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337C2.34156 9.33337 2.62335 9.59073 2.66186 9.92229L2.66634 10V12.3894L5.8616 9.1953C6.12195 8.93495 6.54406 8.93495 6.80441 9.1953ZM13.9997 1.33337L14.0126 1.3335C14.0281 1.3338 14.0437 1.33464 14.0592 1.33602L13.9997 1.33337C14.0334 1.33337 14.0666 1.33588 14.099 1.34072C14.1103 1.34246 14.1219 1.34451 14.1335 1.34687C14.1482 1.3498 14.1626 1.35326 14.1769 1.35719C14.1873 1.36011 14.1976 1.36319 14.2078 1.36653C14.2209 1.37079 14.2341 1.37558 14.247 1.38078C14.2589 1.38551 14.2704 1.39049 14.2818 1.39582C14.2956 1.40229 14.3092 1.40924 14.3225 1.41662C14.3306 1.42104 14.3387 1.42578 14.3468 1.4307C14.3639 1.44119 14.3804 1.45237 14.3964 1.46425C14.4014 1.46788 14.4062 1.47156 14.411 1.47533C14.4531 1.50841 14.4913 1.54659 14.5245 1.58887L14.4711 1.52864C14.4947 1.55223 14.5161 1.57716 14.5355 1.60317C14.5473 1.61929 14.5585 1.63586 14.569 1.65293C14.5739 1.66097 14.5787 1.66911 14.5832 1.67733C14.5905 1.69051 14.5974 1.70411 14.6039 1.71797C14.6092 1.72931 14.6142 1.74084 14.6189 1.75248C14.6241 1.76565 14.6289 1.77884 14.6333 1.79222C14.6365 1.80214 14.6396 1.8124 14.6424 1.82271C14.6465 1.83708 14.6499 1.85154 14.6529 1.86618C14.6552 1.87779 14.6573 1.88941 14.659 1.90106C14.6601 1.90788 14.661 1.91507 14.6619 1.92229L14.6639 1.94255C14.6649 1.95453 14.6656 1.96653 14.666 1.97854L14.6663 2.00004V6.00004C14.6663 6.36823 14.3679 6.66671 13.9997 6.66671C13.6578 6.66671 13.376 6.40935 13.3375 6.07779L13.333 6.00004V3.60937L10.1377 6.80478C9.8774 7.06513 9.45529 7.06513 9.19494 6.80478C8.95461 6.56446 8.93613 6.1863 9.13948 5.92477L9.19494 5.86197L12.389 2.66671H9.99967C9.65778 2.66671 9.376 2.40935 9.33749 2.07779L9.33301 2.00004C9.33301 1.65815 9.59037 1.37637 9.92193 1.33786L9.99967 1.33337H13.9997ZM5.99967 1.33337C6.36786 1.33337 6.66634 1.63185 6.66634 2.00004C6.66634 2.34193 6.40898 2.62371 6.07742 2.66222L5.99967 2.66671H2.66634V6.00004C2.66634 6.34193 2.40898 6.62371 2.07742 6.66222L1.99967 6.66671C1.65778 6.66671 1.376 6.40935 1.33749 6.07779L1.33301 6.00004V2.00004C1.33301 1.65815 1.59037 1.37637 1.92193 1.33786L1.99967 1.33337H5.99967Z" fill="white" fill-opacity="0.8" />
									</svg>

									<Image src={matOne} />
								</div>
							</div>
							<div className="px-60px .1x1:px-10 border mr-10px mb-10px relative hoverI transition-all border-white hover:bg-white-BG_FILTER hover:border-gray-light2">
								<div className='hidden items-center absolute left-14px top-14px hoverShowI'>
									<input className='hidden' id='checkSearchAll' type="checkbox" />
									<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-deNum cursor-pointer border'></label>
								</div>

								<svg className="absolute hidden hoverShowI left-3 top-11" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
								</svg>

								<div className="pb-3 ..5x1:w-56 ..5x1:h-56 relative">
									<svg className="absolute right-3 hidden top-3 hoverShowI z-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13.9997 9.33337C14.3416 9.33337 14.6233 9.59073 14.6619 9.92229L14.6663 10V14C14.6663 14.3419 14.409 14.6237 14.0774 14.6622L13.9997 14.6667H9.99967C9.63148 14.6667 9.33301 14.3682 9.33301 14C9.33301 13.6581 9.59037 13.3764 9.92193 13.3379L9.99967 13.3334H13.333V10C13.333 9.65815 13.5904 9.37637 13.9219 9.33786L13.9997 9.33337ZM6.80441 9.1953C7.04473 9.43563 7.06322 9.81378 6.85987 10.0753L6.80441 10.1381L3.60901 13.3334H5.99967C6.34156 13.3334 6.62335 13.5907 6.66186 13.9223L6.66634 14C6.66634 14.3419 6.40898 14.6237 6.07742 14.6622L5.99967 14.6667H1.99967L1.97817 14.6664C1.96616 14.666 1.95416 14.6653 1.94219 14.6642L1.99967 14.6667C1.96593 14.6667 1.93277 14.6642 1.90037 14.6594C1.88904 14.6576 1.87742 14.6556 1.86586 14.6532C1.85118 14.6503 1.83672 14.6468 1.82245 14.6429C1.81203 14.64 1.80177 14.6369 1.79158 14.6335C1.77848 14.6293 1.76529 14.6245 1.7523 14.6193C1.74048 14.6146 1.72894 14.6096 1.71753 14.6043C1.70375 14.5978 1.69015 14.5908 1.67682 14.5835C1.66874 14.579 1.6606 14.5743 1.65254 14.5694C1.63549 14.5589 1.61892 14.5477 1.6029 14.5358C1.59794 14.5322 1.59311 14.5285 1.58833 14.5248C1.54622 14.4917 1.50804 14.4535 1.47487 14.4112L1.52827 14.4714C1.50467 14.4478 1.48322 14.4229 1.4639 14.3969C1.452 14.3808 1.44082 14.3642 1.43039 14.3471C1.42541 14.3391 1.42067 14.331 1.41612 14.3227C1.40887 14.3096 1.40193 14.296 1.39544 14.2821C1.39013 14.2708 1.38514 14.2592 1.38049 14.2476C1.37522 14.2344 1.37042 14.2212 1.36604 14.2079C1.36283 14.1979 1.35974 14.1877 1.3569 14.1774C1.3529 14.163 1.34943 14.1485 1.34645 14.1339C1.34414 14.1223 1.34209 14.1107 1.34035 14.099C1.33929 14.0922 1.33833 14.085 1.33749 14.0778L1.33565 14.0595C1.33427 14.044 1.33343 14.0285 1.33313 14.0129L1.33301 14V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337C2.34156 9.33337 2.62335 9.59073 2.66186 9.92229L2.66634 10V12.3894L5.8616 9.1953C6.12195 8.93495 6.54406 8.93495 6.80441 9.1953ZM13.9997 1.33337L14.0126 1.3335C14.0281 1.3338 14.0437 1.33464 14.0592 1.33602L13.9997 1.33337C14.0334 1.33337 14.0666 1.33588 14.099 1.34072C14.1103 1.34246 14.1219 1.34451 14.1335 1.34687C14.1482 1.3498 14.1626 1.35326 14.1769 1.35719C14.1873 1.36011 14.1976 1.36319 14.2078 1.36653C14.2209 1.37079 14.2341 1.37558 14.247 1.38078C14.2589 1.38551 14.2704 1.39049 14.2818 1.39582C14.2956 1.40229 14.3092 1.40924 14.3225 1.41662C14.3306 1.42104 14.3387 1.42578 14.3468 1.4307C14.3639 1.44119 14.3804 1.45237 14.3964 1.46425C14.4014 1.46788 14.4062 1.47156 14.411 1.47533C14.4531 1.50841 14.4913 1.54659 14.5245 1.58887L14.4711 1.52864C14.4947 1.55223 14.5161 1.57716 14.5355 1.60317C14.5473 1.61929 14.5585 1.63586 14.569 1.65293C14.5739 1.66097 14.5787 1.66911 14.5832 1.67733C14.5905 1.69051 14.5974 1.70411 14.6039 1.71797C14.6092 1.72931 14.6142 1.74084 14.6189 1.75248C14.6241 1.76565 14.6289 1.77884 14.6333 1.79222C14.6365 1.80214 14.6396 1.8124 14.6424 1.82271C14.6465 1.83708 14.6499 1.85154 14.6529 1.86618C14.6552 1.87779 14.6573 1.88941 14.659 1.90106C14.6601 1.90788 14.661 1.91507 14.6619 1.92229L14.6639 1.94255C14.6649 1.95453 14.6656 1.96653 14.666 1.97854L14.6663 2.00004V6.00004C14.6663 6.36823 14.3679 6.66671 13.9997 6.66671C13.6578 6.66671 13.376 6.40935 13.3375 6.07779L13.333 6.00004V3.60937L10.1377 6.80478C9.8774 7.06513 9.45529 7.06513 9.19494 6.80478C8.95461 6.56446 8.93613 6.1863 9.13948 5.92477L9.19494 5.86197L12.389 2.66671H9.99967C9.65778 2.66671 9.376 2.40935 9.33749 2.07779L9.33301 2.00004C9.33301 1.65815 9.59037 1.37637 9.92193 1.33786L9.99967 1.33337H13.9997ZM5.99967 1.33337C6.36786 1.33337 6.66634 1.63185 6.66634 2.00004C6.66634 2.34193 6.40898 2.62371 6.07742 2.66222L5.99967 2.66671H2.66634V6.00004C2.66634 6.34193 2.40898 6.62371 2.07742 6.66222L1.99967 6.66671C1.65778 6.66671 1.376 6.40935 1.33749 6.07779L1.33301 6.00004V2.00004C1.33301 1.65815 1.59037 1.37637 1.92193 1.33786L1.99967 1.33337H5.99967Z" fill="white" fill-opacity="0.8" />
									</svg>

									<Image src={matOne} />
								</div>
							</div>
						</>}
						{currentFilter.video && <>
							<div className="w-full flex pb-3">
								<p className="font-montserrat font-medium  text-gray-quick-silver mr-4">Сортировка:</p>
								<p className="mr-3 font-montserrat pb-0.5 font-medium text-primary border-b border-b-primary border-dotted">По умолчанию</p>
								<p className="font-montserrat font-medium pb-0.5  border-b border-gray-quick-silver border-dotted text-black-70pe ">Без подписей</p>
							</div>
							<div className="px-60px .1x1:px-10 border mr-10px mb-10px relative hoverI h-52 transition-all border-white hover:bg-white-BG_FILTER hover:border-gray-light2">
								<div className='hidden items-center absolute left-14px top-14px hoverShowI'>
									<input className='hidden' id='checkSearchAll' type="checkbox" />
									<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-deNum cursor-pointer border'></label>
								</div>

								<svg className="absolute hidden hoverShowI left-3 top-11" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
								</svg>

								<div className="pb-3 relative ..5x1:w-56 ">
									<div className="absolute z-10 left-0 right-0 bottom-0 top-0 flex items-center justify-center">
										<svg className="" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M38.8635 30.8286C39.4964 30.4632 40.2761 30.4632 40.909 30.8286L62.3863 43.2286C63.0191 43.594 63.409 44.2692 63.409 45C63.409 45.7308 63.0191 46.406 62.3863 46.7714L40.909 59.1714C40.2761 59.5368 39.4964 59.5368 38.8635 59.1714C38.2307 58.806 37.8408 58.1307 37.8408 57.4V32.6001C37.8408 31.8693 38.2307 31.194 38.8635 30.8286ZM41.9317 36.1429V53.8571L57.2726 45L41.9317 36.1429Z" fill="white" />
											<path d="M89.4999 45C89.4999 69.5767 69.5766 89.5 45 89.5C20.4233 89.5 0.5 69.5767 0.5 45C0.5 20.4233 20.4233 0.5 45 0.5C69.5766 0.5 89.4999 20.4233 89.4999 45Z" stroke="white" stroke-opacity="0.8" />
										</svg>
									</div>


									<Image src={videoPreview} />
								</div>
							</div>
						</>}
						{currentFilter.service && <>

							<div className="p-4 h-379px w-278px bg-gray-light">
								<div className="h-full p-4 bg-white flex items-center justify-center">
									<div className="flex items-center flex-col">
										<p className="font-montserrat text-22px font-medium leading-120% text-center">Сертификат соответствия</p>
										<p className="font-montserrat font-medium text-gray-quick-silver leading-120% mt-3 mb-11 text-center">Евразийский экономический союз</p>
										<button>
											<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g filter="url(#filter0_b_3037_526760)">
													<circle cx="22" cy="22" r="22" fill="white" fill-opacity="0.8" />
												</g>
												<path d="M14 32H30.4706V29.6471H14M30.4706 19.0588H25.7647V12H18.7059V19.0588H14L22.2353 27.2941L30.4706 19.0588Z" fill="black" />
												<defs>
													<filter id="filter0_b_3037_526760" x="-4" y="-4" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
														<feFlood flood-opacity="0" result="BackgroundImageFix" />
														<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
														<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3037_526760" />
														<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3037_526760" result="shape" />
													</filter>
												</defs>
											</svg>

										</button>
									</div>
								</div>
							</div>
						</>}
						{currentFilter.product && <>
							<div className="w-full flex pb-3">
								<p className="font-montserrat font-medium  text-gray-quick-silver mr-4">Сортировка:</p>
								<p className="mr-3 font-montserrat pb-0.5 font-medium text-primary border-b border-b-primary border-dotted">Все</p>
								<p className="font-montserrat font-medium pb-0.5  border-b mr-3 border-gray-quick-silver border-dotted text-black-70pe ">Буклеты</p>
								<p className="font-montserrat font-medium pb-0.5  border-b mr-3 border-gray-quick-silver border-dotted text-black-70pe ">Ролл апы</p>
								<p className="font-montserrat font-medium pb-0.5  border-b border-gray-quick-silver border-dotted text-black-70pe ">PDF</p>
							</div>
							<div className="px-60px .1x1:px-10 border mr-10px mb-10px relative hoverI transition-all border-white hover:bg-white-BG_FILTER hover:border-gray-light2">
								<div className='hidden items-center absolute left-14px top-14px hoverShowI'>
									<input className='hidden' id='checkSearchAll' type="checkbox" />
									<label htmlFor="checkSearchAll" className='w-5 h-5 border-gray-deNum cursor-pointer border'></label>
								</div>

								<svg className="absolute hidden hoverShowI left-3 top-11" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4 22H20.4706V19.6471H4M20.4706 9.05882H15.7647V2H8.70588V9.05882H4L12.2353 17.2941L20.4706 9.05882Z" fill="#DBDCDA" />
								</svg>

								<div className=" ..5x1:w-56 ">

									<Image src={filtOne} />
								</div>
								<p className="text-center font-montserrat pb-4 font-medium text-13px text-gray-quick-silver">PDF</p>
							</div>
						</>}
						{currentFilter.active && <>
							<div className=".5x1:w-1100px .4x2:w-910px w-1200 .2x1.0:w-800px .1x01:w-727px ..5x1:w-664px .1x1:ml-4 ..5x01:w-600px">
								<div className="p-3   border border-stroke">
									<div className="w-full flex ">
										<p className="font-montserrat font-medium text-xl">Статьи</p>
										<p className="font-montserrat font-medium text-xl text-gray-quick-silver ml-2">3</p>
									</div>
									<Slider {...settings} className="pt-13px ..6x6:pt-44 newsSlider ..7x001:px-3 ">
										<div className=" relative pr-5px  ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
											<NewsDate title={'ВЧЕРА'} />
											<div>
												<Image
													className="object-cover"
													width={474}
													height={330}
													src={oneNew}
													alt="newsImg"
												/>
											</div>
											<div className="  -mt-4 relative">
												<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
													<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Онлайн-каталог</p>
													<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Промоушен</p>
												</div>
												<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
													Возвращение легенды: косметический <br /> спонж для умывания
												</p>
												<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
													Возвращение легенды: косметический спонж для умывания
												</p>
												<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
													Все помнят тот самый косметический спонж, который под струей воды
													превращался из палочки в круглый диск Все помнят тот самый
													косметический спонж, который под струей воды превращался
												</p>
												<button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
													Читать
													<div className="bg-primary lineHover absolute bottom-0.5 -left-1.5 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
												</button>
											</div>
										</div>
										<div className=" relative pr-5px  ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
											<NewsDate title={'ВЧЕРА'} />
											<div>
												<Image
													className="object-cover"
													width={474}
													height={330}
													src={oneNew}
													alt="newsImg"
												/>
											</div>
											<div className="  -mt-4 relative">
												<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
													<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Онлайн-каталог</p>
													<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Промоушен</p>
												</div>
												<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
													Возвращение легенды: косметический <br /> спонж для умывания
												</p>
												<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
													Возвращение легенды: косметический спонж для умывания
												</p>
												<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
													Все помнят тот самый косметический спонж, который под струей воды
													превращался из палочки в круглый диск Все помнят тот самый
													косметический спонж, который под струей воды превращался
												</p>
												<button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
													Читать
													<div className="bg-primary lineHover absolute bottom-0.5 -left-1.5 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
												</button>
											</div>
										</div>
										<div className=" relative pr-5px  ..6x04:p-1.5 transition-all  newsCardHover  cursor-pointer hover:scale-95">
											<NewsDate title={'ВЧЕРА'} />
											<div>
												<Image
													className="object-cover"
													width={474}
													height={330}
													src={oneNew}
													alt="newsImg"
												/>
											</div>
											<div className="  -mt-4 relative">
												<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
													<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Онлайн-каталог</p>
													<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Промоушен</p>
												</div>
												<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
													Возвращение легенды: косметический <br /> спонж для умывания
												</p>
												<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
													Возвращение легенды: косметический спонж для умывания
												</p>
												<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
													Все помнят тот самый косметический спонж, который под струей воды
													превращался из палочки в круглый диск Все помнят тот самый
													косметический спонж, который под струей воды превращался
												</p>
												<button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
													Читать
													<div className="bg-primary lineHover absolute bottom-0.5 -left-1.5 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
												</button>
											</div>
										</div>
										<div className=" relative pr-5px  ..6x04:p-1.5 transition-all   newsCardHover cursor-pointer hover:scale-95">
											<NewsDate title={'ВЧЕРА'} />
											<div>
												<Image
													className="object-cover"
													width={474}
													height={330}
													src={oneNew}
													alt="newsImg"
												/>
											</div>
											<div className="  -mt-4 relative">
												<div className="flex justify-center ..6x03:gap-2 gap-3 ..6x03:text-xs font-montserrat font-normal leading-140% text-gray-light3">
													<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Онлайн-каталог</p>
													<p className="text-center mt-6 underline mb-2 font-montserrat ..6x4:text-13px">Промоушен</p>
												</div>
												<p className="text-center titleNews leading-120% font-montserrat ..5x2:hidden px-2 text-lg font-bold">
													Возвращение легенды: косметический <br /> спонж для умывания
												</p>
												<p className="hidden titleNews ..5x2:block font-montserrat ..6x4:text-sm text-center px-3 text-lg font-medium">
													Возвращение легенды: косметический спонж для умывания
												</p>
												<p className="text-center  mt-2 px-5 leading-140% ..6x3:px-4 mb-5 news_text font-montserrat ..6x4:text-11px">
													Все помнят тот самый косметический спонж, который под струей воды
													превращался из палочки в круглый диск Все помнят тот самый
													косметический спонж, который под струей воды превращался
												</p>
												<button className="relative ability left-1/2 bottom-5 font-semibold  text-13px font-montserrat text-black">
													Читать
													<div className="bg-primary lineHover absolute bottom-0.5 -left-1.5 opacity-40 h-9px w-14 ..6x4:ml-0  ml-0.5 ..5x2:ml-1" />
												</button>
											</div>
										</div>
									</Slider>


								</div>
								<div className="p-3 mt-6   border border-stroke">
									<div className="w-full flex ">
										<p className="font-montserrat font-medium text-xl">Видео</p>
										<p className="font-montserrat font-medium text-xl text-gray-quick-silver ml-2">1</p>
									</div>
									<div className="flex ">
										<div className="mt-3  .5x01:w-300px mr-10px relative">
											<Image src={i} />
											<div>
												<p className="font-montserrat font-semibold text-18px">Как скрыть следы усталости под глазами</p>
												<p className="font-montserrat font-medium text-sm text-gray-quick-silver mt-2 mb-4">19 часов назад</p>
											</div>
											<div className="absolute top-1.5 flex items-center left-2">
												<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 4.22639C6.09101 4.07753 6.40867 4.07753 6.6665 4.22639L15.4165 9.27823C15.6743 9.42709 15.8332 9.70219 15.8332 9.99991C15.8332 10.2976 15.6743 10.5727 15.4165 10.7216L6.66651 15.7734C6.40867 15.9223 6.09101 15.9223 5.83317 15.7734C5.57534 15.6246 5.4165 15.3495 5.4165 15.0517V4.94808C5.4165 4.65036 5.57534 4.37525 5.83317 4.22639ZM7.08317 6.39146V13.6084L13.3332 9.99991L7.08317 6.39146Z" fill="white" />
												</svg>

												<p className="ml-1.5 font-montserrat font-medium text-white">
													00:20
												</p>
											</div>
											<svg className="absolute right-2 top-2 z-10" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clip-path="url(#clip0_3113_149809)">
													<path d="M0 15.5C0 8.193 0 4.54 2.27 2.27C4.54 0 8.193 0 15.5 0H16.5C23.807 0 27.46 0 29.73 2.27C32 4.54 32 8.193 32 15.5V16.5C32 23.807 32 27.46 29.73 29.73C27.46 32 23.807 32 16.5 32H15.5C8.193 32 4.54 32 2.27 29.73C0 27.46 0 23.807 0 16.5V15.5Z" fill="white" fill-opacity="0.3" />
													<path fill-rule="evenodd" clip-rule="evenodd" d="M26.398 10.88C26.55 10.373 26.398 10 25.673 10H23.277C22.667 10 22.387 10.322 22.235 10.677C22.235 10.677 21.016 13.646 19.29 15.574C18.732 16.132 18.478 16.31 18.174 16.31C18.021 16.31 17.801 16.132 17.801 15.625V10.88C17.801 10.271 17.624 10 17.116 10H13.351C12.971 10 12.741 10.283 12.741 10.55C12.741 11.128 13.605 11.26 13.694 12.884V16.411C13.694 17.184 13.554 17.324 13.249 17.324C12.437 17.324 10.461 14.343 9.289 10.931C9.06 10.268 8.83 10 8.218 10H5.821C5.137 10 5 10.322 5 10.677C5 11.312 5.812 14.457 8.782 18.618C10.762 21.46 13.552 23 16.09 23C17.612 23 17.8 22.658 17.8 22.069V19.92C17.8 19.236 17.945 19.1 18.427 19.1C18.783 19.1 19.392 19.277 20.813 20.647C22.438 22.272 22.706 23 23.62 23H26.016C26.701 23 27.043 22.658 26.846 21.983C26.63 21.31 25.854 20.333 24.825 19.176C24.266 18.516 23.429 17.806 23.175 17.451C22.82 16.995 22.921 16.791 23.175 16.386C23.175 16.386 26.094 12.276 26.399 10.88H26.398Z" fill="white" />
												</g>
												<defs>
													<clipPath id="clip0_3113_149809">
														<rect width="32" height="32" fill="white" />
													</clipPath>
												</defs>
											</svg>


										</div>
										<div className="mt-3 .5x01:w-300px relative">
											<Image src={i} />
											<div className="absolute left-0 right-0 bottom-77px flex .5x01:bottom-100px items-center h-16 justify-end  bg-white-80pe">
												<button className="flex items-center font-montserrat font-medium text-xs text-white bg-primary hover:bg-primary-hover transition-all h-8 px-5 mr-4 ">
													Перейти <svg className="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M8.75033 4.66683L11.0837 7.00016M11.0837 7.00016L8.75033 9.3335M11.0837 7.00016H2.91699" stroke="white" stroke-width="1.5" stroke-linecap="round" />
													</svg>

												</button>
											</div>
											<div>
												<p className="font-montserrat font-semibold text-18px">Как правильно подготовить очищать кожу</p>
												<p className="font-montserrat font-medium text-sm text-gray-quick-silver mt-2 mb-4">2 дня назад</p>
											</div>
											<div className="absolute top-1.5 flex items-center left-2">
												<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83317 4.22639C6.09101 4.07753 6.40867 4.07753 6.6665 4.22639L15.4165 9.27823C15.6743 9.42709 15.8332 9.70219 15.8332 9.99991C15.8332 10.2976 15.6743 10.5727 15.4165 10.7216L6.66651 15.7734C6.40867 15.9223 6.09101 15.9223 5.83317 15.7734C5.57534 15.6246 5.4165 15.3495 5.4165 15.0517V4.94808C5.4165 4.65036 5.57534 4.37525 5.83317 4.22639ZM7.08317 6.39146V13.6084L13.3332 9.99991L7.08317 6.39146Z" fill="white" />
												</svg>

												<p className="ml-1.5 font-montserrat font-medium text-white">
													01:56:00
												</p>
											</div>

											<svg className="absolute right-2 top-2 z-10" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M31.296 8.472C31.504 9.224 31.648 10.232 31.744 11.512C31.856 12.792 31.904 13.896 31.904 14.856L32 16.2C32 19.704 31.744 22.28 31.296 23.928C30.896 25.368 29.968 26.296 28.528 26.696C27.776 26.904 26.4 27.048 24.288 27.144C22.208 27.256 20.304 27.304 18.544 27.304L16 27.4C9.296 27.4 5.12 27.144 3.472 26.696C2.032 26.296 1.104 25.368 0.704 23.928C0.496 23.176 0.352 22.168 0.256 20.888C0.144 19.608 0.0959999 18.504 0.0959999 17.544L0 16.2C0 12.696 0.256 10.12 0.704 8.472C1.104 7.032 2.032 6.104 3.472 5.704C4.224 5.496 5.6 5.352 7.712 5.256C9.792 5.144 11.696 5.096 13.456 5.096L16 5C22.704 5 26.88 5.256 28.528 5.704C29.968 6.104 30.896 7.032 31.296 8.472Z" fill="white" fill-opacity="0.3" />
												<path d="M13 20.6L21.304 15.8L13 11V20.6Z" fill="white" />
											</svg>



										</div>
									</div>





								</div>
							</div>

						</>}


					</div>
				</div>
			</div>}



			<div>
				<h4 className="font-montserrat font-medium text-xl mb-3 ..6x3:mb-6px ..6x3:text-sm">Фото и видео отзывы</h4>
				<div className="mb-12 relative ..6x3:-mr-3 ..6x3:mb-6">
					<Swiper ref={sliderPhoto} className='firstSlider sliderPaginationCustom ' breakpoints={{
						950: {
							slidesPerView: 5
						},
						1250: {
							slidesPerView: 6
						},
						1450: {
							slidesPerView: 7
						}
					}} slidesPerView={4} scrollbar={{
						hide: false,
						draggable: true,
					}} modules={[Navigation, Scrollbar]}  >


						<SwiperSlide className="pr-2 cursor-pointer">
							<Image src={detailOne} />
						</SwiperSlide>
						<SwiperSlide className="pr-2 cursor-pointer">
							<Image src={detailTwo} />
						</SwiperSlide>
						<SwiperSlide className="pr-2 cursor-pointer">
							<Image src={detailTree} />
						</SwiperSlide>
						<SwiperSlide className="pr-2 relative cursor-pointer">
							<div className="absolute flex items-center justify-center left-0 right-0 bottom-0 top-0 z-10">
								<svg className="..5x4:h-38px ..5x4:w-38px" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M38.8635 30.8286C39.4964 30.4632 40.2761 30.4632 40.909 30.8286L62.3863 43.2286C63.0191 43.5939 63.409 44.2692 63.409 45C63.409 45.7307 63.0191 46.406 62.3863 46.7714L40.909 59.1713C40.2761 59.5367 39.4964 59.5367 38.8635 59.1713C38.2307 58.806 37.8408 58.1307 37.8408 57.3999V32.6C37.8408 31.8692 38.2307 31.194 38.8635 30.8286ZM41.9317 36.1429V53.8571L57.2726 45L41.9317 36.1429Z" fill="white" />
									<circle cx="45" cy="45" r="44.5" stroke="white" strokeOpacity="0.8" />
								</svg>
							</div>

							<Image src={detailFour} />
						</SwiperSlide>
						<SwiperSlide className="pr-2  cursor-pointer">
							<Image src={detailSix} />
						</SwiperSlide>
						<SwiperSlide className="pr-2  cursor-pointer">
							<Image src={detailSix} />
						</SwiperSlide>
						<SwiperSlide className="pr-2   cursor-pointer">
							<Image src={detailSix} />
						</SwiperSlide>
						<SwiperSlide className="pr-2   cursor-pointer">
							<Image src={detailSix} />
						</SwiperSlide>

					</Swiper>




					<button onMouseEnter={hoverSet} onMouseLeave={hoverSet} onClick={prevSlidePhoto} className='activeArrow absolute hover:bg-black transition-all   ..5x2:hidden h-8 w-8 bg-white  -left-8   top-20 flex justify-center  rounded-56px items-center  z-10'>
						<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.53875 7L1.27625 14L0.375 13.125L3.875 7.875L4.4875 7L3.875 6.125L0.375 0.875L1.27625 0L8.53875 7Z" fill={`${buttonHover ? 'white' : "black"}`} />
						</svg>

					</button>
					<button onMouseEnter={hoverNext} onMouseLeave={hoverNext} onClick={nextSlidePhoto} className=' absolute  ..5x2:hidden right-36 hover:bg-black transition-all   h-8 w-8 top-20 bg-white z-10 flex justify-center items-center rounded-56px'>
						<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.53875 7L1.27625 14L0.375 13.125L3.875 7.875L4.4875 7L3.875 6.125L0.375 0.875L1.27625 0L8.53875 7Z" fill={`${buttonHoverNext ? 'white' : "black"}`} />
						</svg>



					</button>

				</div>
				<div className="flex ..5x2:flex-col ..5x2:overflow-hidden">
					<div className="mr-60px .2x1.0:mr-2 ..5x2:mr-0">
						<div className="flex items-center mb-6 ..5x2:mb-3 ..6x3:flex-wrap">
							<p className="font-montserrat mr-4 ..7x59:mr-2 ..6x3:mr-20 ..5x01:text-sm font-medium text-xl">5 отзывов со средней оценкой 4,4</p>
							<div className="flex items-center ">
								<svg className="..6x3:mt-1 ..5x2:h-3 ..5x2:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_1945_1209386)">
										<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
									</g>
									<defs>
										<clipPath id="clip0_1945_1209386">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<svg className="..6x3:mt-1 ..5x2:h-3 ..5x2:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_1945_1209386)">
										<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
									</g>
									<defs>
										<clipPath id="clip0_1945_1209386">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<svg className="..6x3:mt-1 ..5x2:h-3 ..5x2:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_1945_1209386)">
										<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
									</g>
									<defs>
										<clipPath id="clip0_1945_1209386">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<svg className="..6x3:mt-1 ..5x2:h-3 ..5x2:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_1945_1209386)">
										<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
									</g>
									<defs>
										<clipPath id="clip0_1945_1209386">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<svg className="..6x3:mt-1 ..5x2:h-3 ..5x2:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" fill="#DBDCDA" />
								</svg>
							</div>


						</div>
						<button onClick={setShowL} className="h-11 transition-all hover:bg-primary-hover ..6x3:mb-3 ..5x2:h-8 px-5 mb-6 font-montserrat text-xs text-white font-medium bg-primary flex items-center justify-center"><svg className="mr-6px ..5x2:h-14px ..5x2:w-14px" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.96233 9.3066C7.57939 9.05131 7.062 9.15479 6.80671 9.53773C6.55141 9.92067 6.65489 10.4381 7.03783 10.6934L10.3256 12.8852C10.8854 13.2584 11.6147 13.2584 12.1746 12.8852L15.4623 10.6934C15.8453 10.4381 15.9488 9.92067 15.6935 9.53773C15.4382 9.15479 14.9208 9.05131 14.5378 9.3066L11.2501 11.4984L7.96233 9.3066Z" fill="white" />
							<path fillRule="evenodd" clipRule="evenodd" d="M1.66675 6.66665C1.66675 4.8257 3.15913 3.33331 5.00008 3.33331H12.5001C14.0835 3.33331 15.4091 4.43742 15.749 5.91777C17.2293 6.25761 18.3334 7.58318 18.3334 9.16665V14.1666C18.3334 16.0076 16.841 17.5 15.0001 17.5H7.50008C5.65913 17.5 4.16675 16.0076 4.16675 14.1666V14.1549C2.76464 14.0255 1.66675 12.8461 1.66675 11.4102V6.66665ZM12.5001 4.99998C13.117 4.99998 13.6556 5.33515 13.9438 5.83331H7.50008C5.65913 5.83331 4.16675 7.3257 4.16675 9.16665V12.4696C3.68862 12.3543 3.33341 11.9238 3.33341 11.4102V6.66665C3.33341 5.74617 4.07961 4.99998 5.00008 4.99998H12.5001ZM7.50008 7.49998C6.57961 7.49998 5.83342 8.24617 5.83342 9.16665V14.1666C5.83342 15.0871 6.57961 15.8333 7.50008 15.8333H15.0001C15.9206 15.8333 16.6667 15.0871 16.6667 14.1666V9.16665C16.6667 8.24617 15.9206 7.49998 15.0001 7.49998H7.50008Z" fill="white" />
						</svg>
							Оставить отзыв</button>


						<div>
							<div className="p-6 .2x1.0:p-3 ..6x3:mb-3 mb-18px bg-gray-100">
								<div className="flex items-center ">
									<div className="-mt-0.5 ..6x3:hidden">
										<Image src={avatar} />
									</div>

									<div className="flex pb-4 ..6x3:pb-3 ..6x3:m-0 border-disable w-full mt-4 ml-4 justify-between items-center border-b ">
										<div className="flex items-center">
											<div className="h-11 mr-3 w-11 hidden ..6x3:block">
												<Image src={avatar} />
											</div>
											<div className="flex items-center ..6x3:flex-col ..6x3:items-start">
												<p className=" font-montserrat font-medium ..5x01:text-13px ..6x3:mb-0.5">Марина Одинцова</p>
												<div className="w-4 border-b mx-2 ..6x3:hidden">

												</div>
												<p className="font-montserrat text-black-70pe ..5x01:text-13px">May 20, 2022</p>

											</div>

										</div>
										<div className="flex items-center ..6x3:pt-5">
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" fill="#DBDCDA" />
											</svg>
										</div>
									</div>

								</div>
								<p className="pl-74px ..6x3:pl-0 mt-3 font-montserrat .1x01:text-13px text-black-70pe">Мне показалось, что кожу стянуло после использования. Ощущение после применения среднее</p>


							</div>
							<div className="p-6 .2x1.0:p-3 ..6x3:mb-3 mb-18px bg-gray-100">
								<div className="flex items-center ">
									<div className="-mt-0.5 ..6x3:hidden">
										<Image src={avatar} />
									</div>

									<div className="flex pb-4 ..6x3:pb-3 ..6x3:m-0 border-disable w-full mt-4 ml-4 justify-between items-center border-b ">
										<div className="flex items-center">
											<div className="h-11 mr-3 w-11 hidden ..6x3:block">
												<Image src={avatar} />
											</div>
											<div className="flex items-center ..6x3:flex-col ..6x3:items-start">
												<p className=" font-montserrat font-medium ..5x01:text-13px ..6x3:mb-0.5">Марина Одинцова</p>
												<div className="w-4 border-b mx-2 ..6x3:hidden">

												</div>
												<p className="font-montserrat text-black-70pe ..5x01:text-13px">May 20, 2022</p>

											</div>

										</div>
										<div className="flex items-center  ..6x3:pt-5">
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" fill="#DBDCDA" />
											</svg>
										</div>
									</div>

								</div>
								<p className="pl-74px ..6x3:pl-0 mt-3 font-montserrat .1x01:text-13px text-black-70pe">Шикарная маска. Всего за неделю применения кожа становится плотной, упругой и очень приятной на ощупь. Единственное, что мне не подошло - время нанесения. Два дня делала на ночь - вставала сильно отекшей. Перенесла применение на 5-6 часов вечера и все нормализовалось. Отеков нет. Зато есть реально помолодевшая кожа. Микро морщинок словно и не бывало.</p>


							</div>
							<div className="p-6 .2x1.0:p-3 ..6x3:mb-3 mb-18px bg-gray-100">
								<div className="flex items-center ">
									<div className="-mt-0.5 ..6x3:hidden">
										<Image src={avatar} />
									</div>

									<div className="flex pb-4 ..6x3:pb-3 ..6x3:m-0 border-disable w-full mt-4 ml-4 justify-between items-center border-b ">
										<div className="flex items-center">
											<div className="h-11 mr-3 w-11 hidden ..6x3:block">
												<Image src={avatar} />
											</div>
											<div className="flex items-center ..6x3:flex-col ..6x3:items-start">
												<p className=" font-montserrat font-medium ..5x01:text-13px ..6x3:mb-0.5">Марина Одинцова</p>
												<div className="w-4 border-b mx-2 ..6x3:hidden">

												</div>
												<p className="font-montserrat text-black-70pe ..5x01:text-13px">May 20, 2022</p>

											</div>

										</div>
										<div className="flex items-center  ..6x3:pt-5">
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_1945_1209386)">
													<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" stroke="#337202" />
												</g>
												<defs>
													<clipPath id="clip0_1945_1209386">
														<rect width="18" height="18" fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="..6x3:h-3 ..6x3:w-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 1.5L10.6839 6.68237H16.1329L11.7245 9.88525L13.4084 15.0676L9 11.8647L4.59161 15.0676L6.27547 9.88525L1.86708 6.68237H7.31614L9 1.5Z" fill="#DBDCDA" />
											</svg>
										</div>
									</div>

								</div>
								<p className="pl-74px ..6x3:pl-0 mt-3 font-montserrat .1x01:text-13px text-black-70pe">Получила потрясающий эффект 🤣 после применения маски. Значительно улучшился цвет лица, кожа просто сияет красотой и здоровьем, маска сняла следы стресса, придала мягкость, бархатистость и упругость коже!!! Мгновенный эффект ухоженной кожи! Спасибо компания TianDe 😘</p>


							</div>
						</div>
						<button className="w-full h-11 flex justify-center items-center border border-stroke mb-24 font-montserrat text-xs ..6x3:text-13px ..6x3:h-10 ..5x2:mb-6 ..6x3:hidden font-medium">Показать ещё 2 из 5</button>
						<button className="w-full h-11  justify-center items-center border border-stroke mb-24 font-montserrat text-xs ..6x3:text-13px ..6x3:h-10 ..6x3:flex hidden ..5x2:mb-6 ">Показать ещё </button>
					</div>
					<div className="..5x2:flex ..5x2:items-center ..5x2:flex-col">
						<p className="mb-4 font-montserrat text-xl ..6x3:mb-6px ..6x3:text-sm ..6x3:leading-140% font-medium leading-120%">Отмечай @TianDe  в социальных сетях и мы разместим ваш пост здесь!</p>
						<div className="commentPhoto relative">
							<Image src={commentsPhoto} />
							<button className=" bg-white-60pe absolute left-6 top-6 ..6x3:top-4 ..6x3:left-4 px-8 h-11 flex justify-center items-center font-montserrat text-xs font-medium ..6x3:text-xs ..6x3:h-8 ..6x3:px-5">Подробнее</button>
						</div>

					</div>
				</div>
			</div>
		</section >
	)
}
export default DetailComments