

import { useEffect } from 'react';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import imgDiscount from '../../images/templates/discountImg.jpg';
import imgProduct from '../../images/templates/prdesc.png';
import productRight from '../../images/templates/productRight.jpg'

import imgOne from '../../images/templates/prLeftOne.jpg'
import imgTwo from '../../images/templates/prLeftTwo.jpg'
import imgTree from '../../images/templates/prLeftTree.jpg'
import imgFour from '../../images/templates/prLeftFour.jpg'
import imgFive from '../../images/templates/prLeftFive.jpg'
import imgSix from '../../images/templates/prLeftSix.jpg'


import DiscountsButtonsSliderNext from '../DiscounstsButtonsSliderNext/DiscountsButtonsSliderNext';
import DiscounstsButtonsSliderPrev from '../DiscounstsButtonsSliderNext/DiscountsButtonsSliderPrev';
import DiscounstSliderDots from '../DiscountSliderItem/DiscountSliderDots';
import DiscountSliderFresh from '../DiscountSliderItem/DiscountSliderFresh';
import DiscountSliderHealth from '../DiscountSliderItem/DiscountSliderHealth';

import imgProductF from '../../images/templates/productOneDiscSl.png';

import DiscountSliderItem from '../DiscountSliderItem/DiscountSliderItem';

function DiscountsSlider({ refL, showCentral }) {
	const [kolichestvo, setKolichestvo] = useState(1),
		slider = useRef(null),
		containerSlider = useRef(null)



	// useSizeDiscount()
	const settings = {
		dots: true,
		Infinity: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <DiscountsButtonsSliderNext kolichestvo={kolichestvo} />,
		prevArrow: <DiscounstsButtonsSliderPrev kolichestvo={kolichestvo} />,
		appendDots: (dots) => {
			return (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						position: 'absolute',
						bottom: 20,
					}}
				>
					<div
						style={{
							backgroundColor: 'rgba(255, 255, 255, 0.8)',
							borderRadius: '54px',
							padding: '22px',
							paddingInline: '40px',
							width: 'auto',
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
		customPaging: (i) => (
			<div
				style={{
					background: '#E5E6E4',
					width: 25,
					height: 3,
				}}
			/>
		),
	};

	// Этот useEffect тоже самое если бы мы сеттили количество в appendDots просто убрали в консоли ошибку
	useEffect(() => {
		if (slider.current) setKolichestvo(slider?.current.props?.children?.length);
	}, [slider.current])

	return (
		// <div ref={refL} id='sec-1'>
		// 	<div className="bg-white w-full tempSlider" ref={containerSlider}>
		// 		<Slider {...settings} ref={slider} className='tempSlider'>
		// 			<DiscountSliderItem imgProd={imgProduct} img={imgDiscount} />
		// 			<DiscountSliderItem imgProd={imgProduct} img={imgDiscount} />
		// 			<DiscountSliderItem imgProd={imgProduct} img={imgDiscount} />
		// 		</Slider>
		// 	</div>
		// </div>

		<div ref={refL} id='sec-1'>
			<div className="  w-full h-800px ..5x2:hidden discSlider" ref={containerSlider}>
				<Slider {...settings} ref={slider} className=' w-full h-full'>
					<DiscountSliderItem imgProd={imgProduct} img={imgDiscount} />
					<DiscountSliderHealth subTitle={'Бьюти-эксперт'} desc={'> 700 единиц товара c доставкой в 32 страны Мира!'} title={'ТВОЕЙ КРАСОТЫ И ЗДОРОВЬЯ'} imgProd={imgProduct} img={imgDiscount} />
					<DiscountSliderHealth isMedium={true} desc={'> 700 единиц товара c доставкой в 32 страны Мира!'} title={'ТВОЕЙ КРАСОТЫ И ЗДОРОВЬЯ'} imgProd={imgProduct} img={imgDiscount} />
					<DiscountSliderHealth onlyCat={true} noItalic={true} desc={'Жаркие скидки  уже ждут тебя в каталоге, не откладывай красоту на завтра!'} title={'ПРОВОДНИК ТВОЕЙ КРАСОТЫ'} imgProd={imgProduct} img={imgDiscount} />
					<DiscountSliderHealth bgGradient={true} onlyCat={true} noItalic={true} desc={'Жаркие скидки  уже ждут тебя в каталоге, не откладывай красоту на завтра!'} title={'ПРОВОДНИК ТВОЕЙ КРАСОТЫ'} imgProd={imgProduct} img={imgDiscount} />

					<DiscountSliderFresh />
					<DiscounstSliderDots rightImg={imgDiscount} discSubs={['против перхоти', 'против седины', 'против выпадения', 'еще эффект', 'еще эффект', 'еще эффект', 'еще эффект', 'еще эффект']} isOneIMG={imgProductF} one={true} two={true} tree={true} four={true} five={true} six={true} subTitle={'Эффекты:'} seven={true} eight={true} nine={true} ten={true} title={'Шампунь, маска, тоник «Bio Rehab»'} />
					<DiscounstSliderDots imgEight={imgFive} imgTen={imgSix} imgTree={imgTwo} imgSix={imgFour} imgFive={imgTree} imgOne={imgOne} rightImg={productRight} discSubs={['лицо', 'тело', 'волосы', 'макияж', 'парфюм', 'мужчинам', 'детям', 'дом', 'гигиена', 'wellness', 'аксессуары']} one={true} tree={true} five={true} six={true} eight={true} ten={true} subTitle={'Категории:'} title={'Акция весны'} />


				</Slider>
			</div>



			<div className="  w-full  ..5x2:block hidden  discSliderPhone" ref={containerSlider}>
				<Slider {...settings} ref={slider} className='overflow-hidden w-full h-full'>
					<DiscountSliderItem imgProd={imgProduct} showCentral={showCentral} img={imgDiscount} />
					<DiscountSliderHealth subTitle={'Бьюти-эксперт'} desc={'> 700 единиц товара c доставкой в 32 страны Мира!'} title={'ТВОЕЙ КРАСОТЫ И ЗДОРОВЬЯ'} imgProd={imgProduct} img={imgDiscount} />
					<DiscountSliderHealth isMedium={true} desc={'> 700 единиц товара c доставкой в 32 страны Мира!'} title={'ТВОЕЙ КРАСОТЫ И ЗДОРОВЬЯ'} imgProd={imgProduct} img={imgDiscount} />
					<DiscountSliderHealth onlyCat={true} noItalic={true} desc={'Жаркие скидки  уже ждут тебя в каталоге, не откладывай красоту на завтра!'} title={'ПРОВОДНИК ТВОЕЙ КРАСОТЫ'} imgProd={imgProduct} img={imgDiscount} />
					<DiscountSliderHealth bgGradient={true} onlyCat={true} noItalic={true} desc={'Жаркие скидки  уже ждут тебя в каталоге, не откладывай красоту на завтра!'} title={'ПРОВОДНИК ТВОЕЙ КРАСОТЫ'} imgProd={imgProduct} img={imgDiscount} />

					<DiscountSliderFresh />
					<DiscounstSliderDots rightImg={imgDiscount} discSubs={['против перхоти', 'против седины', 'против выпадения', 'еще эффект', 'еще эффект', 'еще эффект', 'еще эффект', 'еще эффект']} isOneIMG={imgProductF} one={true} two={true} tree={true} four={true} five={true} six={true} subTitle={'Эффекты:'} seven={true} eight={true} nine={true} ten={true} title={'Шампунь, маска, тоник «Bio Rehab»'} />
					<DiscounstSliderDots imgEight={imgFive} imgTen={imgSix} imgTree={imgTwo} imgSix={imgFour} imgFive={imgTree} imgOne={imgOne} rightImg={productRight} discSubs={['лицо', 'тело', 'волосы', 'макияж', 'парфюм', 'мужчинам', 'детям', 'дом', 'гигиена', 'wellness', 'аксессуары']} one={true} tree={true} five={true} six={true} eight={true} ten={true} subTitle={'Категории:'} title={'Акция весны'} />

				</Slider>
			</div>
		</div>

	);

}
export default DiscountsSlider;
