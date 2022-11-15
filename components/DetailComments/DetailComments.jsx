import { useRef, useState } from "react"


import detailOne from '../../images/templates/imageDetailVOne.jpg'
import detailTwo from '../../images/templates/imageDetailVTwo.jpg'
import detailTree from '../../images/templates/imageDetailVTree.jpg'
import detailFour from '../../images/templates/imageDetailVFour.jpg'


import detailSix from '../../images/templates/imageDetailVSix.jpg'

import commentsPhoto from '../../images/templates/commentsPhoto.jpg'


import avatar from '../../images/templates/avatar.jpg'


import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
const DetailComments = () => {
	const sliderPhoto = useRef(null)
	const [show, setShow] = useState({
		desc: true,
		activeComponents: false,
		materials: false
	})

	const [buttonHover, setButtonHover] = useState(false),
		[buttonHoverNext, setButtonHoverNext] = useState(false)

	const hoverSet = () => setButtonHover(!buttonHover),
		hoverNext = () => setButtonHoverNext(!buttonHoverNext)


	const setShowLocal = (title) => {
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



	const nextSlidePhoto = () => {
		if (sliderPhoto.current !== null && sliderPhoto.current.swiper !== null) sliderPhoto.current.swiper.slideNext();
	},
		prevSlidePhoto = () => {
			if (sliderPhoto.current !== null && sliderPhoto.current.swiper !== null) sliderPhoto.current.swiper.slidePrev();
		}

	return (
		<section className="px-222px mx-2 ..5x2:px-3  ..5x2:m-0 .2x50:px-36 .6x2:px-24 .6x3:px-10">
			<div className="flex w-full ..6x3:hidden ..5x1:h-16 bg-label-bg rounded">
				<p className="flex-1 ..5x1:h-16 ..5x1:text-base activeCard h-86px flex font-montserrat font-medium text-lg justify-center items-center"><svg className="..5x1:h-5 ..5x1:w-5 mr-3" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M5.33333 3.99999C4.96515 3.99999 4.66667 4.29847 4.66667 4.66666V27.3333C4.66667 27.7015 4.96513 28 5.33333 28H22V4.66666C22 4.29846 21.7015 3.99999 21.3333 3.99999H5.33333ZM24.6667 13.3333V4.66666C24.6667 2.82573 23.1743 1.33333 21.3333 1.33333H5.33333C3.49239 1.33333 2 2.82572 2 4.66666V27.3333C2 29.1743 3.4924 30.6667 5.33333 30.6667H26.6667C28.5076 30.6667 30 29.1743 30 27.3333V16C30 14.5272 28.8061 13.3333 27.3333 13.3333H24.6667ZM24.6667 16V28H26.6667C27.0349 28 27.3333 27.7015 27.3333 27.3333V16H24.6667ZM6 8C6 7.26362 6.59695 6.66666 7.33333 6.66666H12.6667C13.403 6.66666 14 7.26362 14 8C14 8.73637 13.403 9.33333 12.6667 9.33333H7.33333C6.59695 9.33333 6 8.73637 6 8ZM6 12.6667C6 11.9303 6.59695 11.3333 7.33333 11.3333H15.3333C16.0697 11.3333 16.6667 11.9303 16.6667 12.6667C16.6667 13.403 16.0697 14 15.3333 14H7.33333C6.59695 14 6 13.403 6 12.6667Z" fill="black" stroke="white" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
					Описание</p>
				<div className="flex-1 h-86px ..5x1:h-16 flex justify-center items-center">
					<p className="w-full   border-x ..5x1:text-base ..5x1:leading-120%  border-gray  flex font-montserrat font-medium text-lg text-center leading-120% justify-center items-center"><svg className="..5x1:h-5 ..5x1:w-5 mr-3" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M13.1831 1.42602C13.7512 0.857988 14.6721 0.857994 15.2402 1.42603L17.2851 3.47099L17.2971 3.48284L25.5252 11.711C26.0933 12.279 26.0933 13.2 25.5252 13.768L14.2116 25.0818C13.9388 25.3545 13.5688 25.5078 13.1831 25.5078C12.7973 25.5078 12.4273 25.3545 12.1545 25.0818L3.92638 16.8536C3.35835 16.2856 3.35835 15.3646 3.92638 14.7966L14.2115 4.51143L13.1831 3.48306C12.6151 2.91502 12.6151 1.99405 13.1831 1.42602ZM7.01194 15.8251L8.13655 14.7005L17.4249 17.7543L13.183 21.9962L7.01194 15.8251ZM19.7295 15.4497L10.4411 12.3959L16.2686 6.5684L22.4397 12.7395L19.7295 15.4497Z" fill="black" />
						<path d="M25.9545 25.3608C27.5612 25.3608 28.8636 24.0583 28.8636 22.4517C28.8636 21.3806 27.894 19.926 25.9545 18.0881C24.0151 19.926 23.0455 21.3806 23.0455 22.4517C23.0455 24.0583 24.3479 25.3608 25.9545 25.3608Z" fill="black" />
						<path d="M1.95455 28.2699C1.15122 28.2699 0.5 28.9211 0.5 29.7244C0.5 30.5278 1.15122 31.179 1.95455 31.179H31.0455C31.8488 31.179 32.5 30.5278 32.5 29.7244C32.5 28.9211 31.8488 28.2699 31.0455 28.2699H1.95455Z" fill="black" />
						<path fillRule="evenodd" clipRule="evenodd" d="M13.1831 1.42602C13.7512 0.857988 14.6721 0.857994 15.2402 1.42603L17.2851 3.47099L17.2971 3.48284L25.5252 11.711C26.0933 12.279 26.0933 13.2 25.5252 13.768L14.2116 25.0818C13.9388 25.3545 13.5688 25.5078 13.1831 25.5078C12.7973 25.5078 12.4273 25.3545 12.1545 25.0818L3.92638 16.8536C3.35835 16.2856 3.35835 15.3646 3.92638 14.7966L14.2115 4.51143L13.1831 3.48306C12.6151 2.91502 12.6151 1.99405 13.1831 1.42602ZM7.01194 15.8251L8.13655 14.7005L17.4249 17.7543L13.183 21.9962L7.01194 15.8251ZM19.7295 15.4497L10.4411 12.3959L16.2686 6.5684L22.4397 12.7395L19.7295 15.4497Z" stroke="#E9EDEC" strokeWidth="0.8" strokeLinecap="round" />
						<path d="M25.9545 25.3608C27.5612 25.3608 28.8636 24.0583 28.8636 22.4517C28.8636 21.3806 27.894 19.926 25.9545 18.0881C24.0151 19.926 23.0455 21.3806 23.0455 22.4517C23.0455 24.0583 24.3479 25.3608 25.9545 25.3608Z" stroke="#E9EDEC" strokeWidth="0.8" strokeLinecap="round" />
						<path d="M1.95455 28.2699C1.15122 28.2699 0.5 28.9211 0.5 29.7244C0.5 30.5278 1.15122 31.179 1.95455 31.179H31.0455C31.8488 31.179 32.5 30.5278 32.5 29.7244C32.5 28.9211 31.8488 28.2699 31.0455 28.2699H1.95455Z" stroke="#E9EDEC" strokeWidth="0.8" strokeLinecap="round" />
					</svg>
						Активные <br /> компоненты</p>
				</div>

				<p className="flex-1 ..5x1:h-16 ..5x1:text-base font-montserrat font-medium text-lg h-86px flex justify-center items-center"><svg className="..5x1:h-5 ..5x1:w-5 mr-3" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M1.8335 3.66666C1.8335 2.93028 2.43045 2.33333 3.16683 2.33333H29.8335C30.5699 2.33333 31.1668 2.93028 31.1668 3.66666C31.1668 4.40304 30.5699 4.99999 29.8335 4.99999H29.1668V22.3333C29.1668 23.0697 28.5699 23.6667 27.8335 23.6667H19.7191L22.7763 26.7239C23.297 27.2446 23.297 28.0888 22.7763 28.6095C22.2556 29.1302 21.4114 29.1302 20.8907 28.6095L16.5002 24.2189L12.1096 28.6095C11.5889 29.1302 10.7447 29.1302 10.224 28.6095C9.70332 28.0888 9.70332 27.2446 10.224 26.7239L13.2812 23.6667H5.16683C4.43045 23.6667 3.8335 23.0697 3.8335 22.3333V4.99999H3.16683C2.43045 4.99999 1.8335 4.40304 1.8335 3.66666ZM6.50016 4.99999V21H26.5002V4.99999H6.50016ZM24.0866 8.07013C24.6078 8.59029 24.6087 9.43451 24.0886 9.95575L17.4495 16.6085C16.933 17.126 16.0961 17.1311 15.5734 16.6198L13.5434 14.6343L10.7141 17.396C10.1872 17.9104 9.34301 17.9002 8.82864 17.3732C8.31427 16.8463 8.32447 16.0021 8.85142 15.4878L12.613 11.816C13.1314 11.31 13.9589 11.3104 14.4767 11.8169L16.4944 13.7905L22.201 8.07207C22.7212 7.55084 23.5654 7.54997 24.0866 8.07013Z" fill="black" stroke="#F7F8F6" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
					Материалы</p>
			</div>
			<div className="mt-8 flex ..5x2:pb-3 ..6x3:mt-0 ..5x2:flex-col pb-32">
				<div className="..6x3:hidden">
					<h4 className="font-medium text-xl font-montserrat mb-3 ..5x1:mb-0">О товаре</h4>
					<p className="font-montserrat leading-180 mb-8 ..5x1:mb-4 ..5x1:text-sm ..5x1:leading-120%">Маска отлично питает и тонизирует кожу, стимулирует обменные процессы, снимает раздражения, придает коже ухоженный вид. Насыщает питательными элементами, удерживает влагу внутри клеток, повышая упругость кожи и замедляя процесс образования морщин</p>
					<h4 className="font-montserrat text-xl font-medium mb-3 ..5x1:mb-0">Применение</h4>
					<p className="font-montserrat leading-180 mb-8 ..5x1:mb-4 ..5x1:text-sm ..5x1:leading-120%">Нанесите маску равномерным слоем на очищенную кожу лица, избегая области вокруг глаз. Через 10 минут удалите остатки салфеткой или мягко вотрите их в кожу.
						Рекомендуется использовать маску ежедневно в течение 10 дней, затем 2-3 раза в неделю.</p>
					<h4 className="font-montserrat text-xl font-medium mb-3 ..5x1:mb-0">О товаре</h4>
					<p className="font-montserrat ..5x2:mb-3 leading-180 italic ..5x1:text-sm ..5x1:leading-120%">Dimethicone, Dimethiconol, Avena Sativa Kernel Oil, Tocopherol, Hexyl Cinnamal, Linalool</p>

				</div>

				<div className="hidden ..6x3:block">
					<div>
						<div onClick={() => setShowLocal('desc')} className={`mt-1  h-12 buttonShadow p-3.5 rounded transition-all ${show.desc ? 'activeButtonS' : 'overflow-hidden'} `}>
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
						<div onClick={() => setShowLocal('activeComoonents')} className={`mt-1  h-12 buttonShadow p-3.5 rounded transition-all ${show.activeComponents ? 'activeButtonS' : 'overflow-hidden'}`}>
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
							<p className="mb-3 font-montserrat text-11px leading-140% text-gray-quick-silver">
								Маска отлично питает и тонизирует кожу, стимулирует обменные процессы, снимает раздражения, придает коже ухоженный вид. Насыщает питательными элементами, удерживает влагу внутри клеток, повышая упругость кожи и замедляя процесс образования морщин
							</p>
							<div>
								<p className="font-montserrat font-medium text-xs mb-0.5">Применение</p>
								<p className="font-montserrat text-11px text-gray-quick-silver leading-140% mb-3">Нанесите маску равномерным слоем на очищенную кожу лица, избегая области вокруг </p>
							</div>
							<button className="font-montserrat font-medium text-13px text-primary pb-0.5 border-b border-dashed border-primary">Развернуть</button>


						</div>
						<div onClick={() => setShowLocal('materials')} className={`mt-1 mb-3  h-12 buttonShadow p-3.5 rounded transition-all ${show.materials ? 'activeButtonS' : 'overflow-hidden'}`}>
							<div className="flex items-center justify-between">
								<p className="font-montserrat mb-3 text-sm font-medium flex items-center "><svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M0.666748 1.83329C0.666748 1.4651 0.965225 1.16663 1.33341 1.16663H14.6667C15.0349 1.16663 15.3334 1.4651 15.3334 1.83329C15.3334 2.20148 15.0349 2.49996 14.6667 2.49996H14.3334V11.1666C14.3334 11.5348 14.0349 11.8333 13.6667 11.8333H9.60956L11.1382 13.3619C11.3985 13.6222 11.3985 14.0443 11.1382 14.3047C10.8778 14.565 10.4557 14.565 10.1953 14.3047L8.00008 12.1094L5.80482 14.3047C5.54447 14.565 5.12236 14.565 4.86201 14.3047C4.60166 14.0443 4.60166 13.6222 4.86201 13.3619L6.39061 11.8333H2.33341C1.96522 11.8333 1.66675 11.5348 1.66675 11.1666V2.49996H1.33341C0.965225 2.49996 0.666748 2.20148 0.666748 1.83329ZM3.00008 2.49996V10.5H13.0001V2.49996H3.00008ZM11.7933 4.03503C12.0539 4.29511 12.0544 4.71722 11.7943 4.97783L8.47475 8.30421C8.21651 8.56298 7.79804 8.56551 7.53669 8.30988L6.52172 7.3171L5.10706 8.69798C4.84358 8.95516 4.4215 8.95006 4.16432 8.68658C3.90713 8.42311 3.91224 8.00103 4.17571 7.74384L6.05652 5.90794C6.3157 5.65495 6.72945 5.65517 6.98836 5.90842L7.99719 6.89519L10.8505 4.036C11.1106 3.77538 11.5327 3.77495 11.7933 4.03503Z" fill="white" stroke="#337202" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>


									Материалы</p>
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

					</div>

				</div>


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
			</div>


			<div>
				<h4 className="font-montserrat font-medium text-xl mb-3 ..6x3:mb-6px ..6x3:text-sm">Фото и видео отзывы</h4>
				<div className="mb-12 relative ..6x3:-mr-3 ..6x3:mb-6">
					<Swiper ref={sliderPhoto} className='sliderPaginationCustom' breakpoints={{
						950: {
							slidesPerView: 5
						},
						1250: {
							slidesPerView: 6
						},
						1450: {
							slidesPerView: 7
						}
					}} slidesPerView={4} navigation={true} pagination={{ clickable: true, type: 'bullets', renderBullet: (i, clas) => '<div class="swiper-pagination-bullet"></div>' }} modules={[Navigation, Pagination]}  >


						<SwiperSlide className="mr-2 customWidth cursor-pointer">
							<Image src={detailOne} />
						</SwiperSlide>
						<SwiperSlide className="mr-2 customWidth cursor-pointer">
							<Image src={detailTwo} />
						</SwiperSlide>
						<SwiperSlide className="mr-2 customWidth cursor-pointer">
							<Image src={detailTree} />
						</SwiperSlide>
						<SwiperSlide className="mr-2 customWidth relative cursor-pointer">
							<div className="absolute flex items-center justify-center left-0 right-0 bottom-0 top-0 z-10">
								<svg className="..5x4:h-38px ..5x4:w-38px" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M38.8635 30.8286C39.4964 30.4632 40.2761 30.4632 40.909 30.8286L62.3863 43.2286C63.0191 43.5939 63.409 44.2692 63.409 45C63.409 45.7307 63.0191 46.406 62.3863 46.7714L40.909 59.1713C40.2761 59.5367 39.4964 59.5367 38.8635 59.1713C38.2307 58.806 37.8408 58.1307 37.8408 57.3999V32.6C37.8408 31.8692 38.2307 31.194 38.8635 30.8286ZM41.9317 36.1429V53.8571L57.2726 45L41.9317 36.1429Z" fill="white" />
									<circle cx="45" cy="45" r="44.5" stroke="white" strokeOpacity="0.8" />
								</svg>
							</div>

							<Image src={detailFour} />
						</SwiperSlide>
						<SwiperSlide className="mr-2 customWidth cursor-pointer">
							<Image src={detailSix} />
						</SwiperSlide>
						<SwiperSlide className="mr-2 customWidth cursor-pointer">
							<Image src={detailSix} />
						</SwiperSlide>
						<SwiperSlide className="mr-2 customWidth cursor-pointer">
							<Image src={detailSix} />
						</SwiperSlide>
						<SwiperSlide className="mr-2 customWidth cursor-pointer ..5x2:!pl-48">
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
						<button className="h-11 ..6x3:mb-3 ..5x2:h-8 px-5 mb-6 font-montserrat text-xs text-white font-medium bg-primary flex items-center justify-center"><svg className="mr-6px ..5x2:h-14px ..5x2:w-14px" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
		</section>
	)
}
export default DetailComments