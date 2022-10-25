

import { useEffect } from 'react';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import imgDiscount from '../../images/templates/discountImg.jpg';
import imgProduct from '../../images/templates/prdesc.png';

import DiscountsButtonsSliderNext from '../DiscounstsButtonsSliderNext/DiscountsButtonsSliderNext';
import DiscounstsButtonsSliderPrev from '../DiscounstsButtonsSliderNext/DiscountsButtonsSliderPrev';



import DiscountSliderItem from '../DiscountSliderItem/DiscountSliderItem';

function DiscountsSlider({ refL }) {
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
						bottom: 10,
					}}
				>
					<div
						style={{
							backgroundColor: 'rgba(255, 255, 255, 0.8)',
							borderRadius: '54px',
							padding: '15px',
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
		<div ref={refL} id='sec-1'>
			<div className="bg-white w-full tempSlider" ref={containerSlider}>
				<Slider {...settings} ref={slider} className='tempSlider'>
					<DiscountSliderItem imgProd={imgProduct} img={imgDiscount} />
					<DiscountSliderItem imgProd={imgProduct} img={imgDiscount} />
					<DiscountSliderItem imgProd={imgProduct} img={imgDiscount} />
				</Slider>
			</div>
		</div>

	);

}
export default DiscountsSlider;
