import { useState } from 'react';
import Slider from 'react-slick';

import imgDiscount from '../../images/templates/discountImg.jpg';
import imgProduct from '../../images/templates/prdesc.png';

import DiscountsButtonsSliderNext from '../DiscounstsButtonsSliderNext/DiscountsButtonsSliderNext';
import DiscounstsButtonsSliderPrev from '../DiscounstsButtonsSliderNext/DiscountsButtonsSliderPrev';
import DiscountSliderItem from '../DiscountSliderItem/DiscountSliderItem';

function DiscountsSlider() {
  const [kolichestvo, setKolichestvo] = useState(1);
  const settings = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <DiscountsButtonsSliderNext kolichestvo={kolichestvo} />,
    prevArrow: <DiscounstsButtonsSliderPrev kolichestvo={kolichestvo} />,
    appendDots: (dots) => {
      setKolichestvo(dots.length);
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
  return (
    <div className="bg-white w-full ">
      <Slider {...settings}>
       <DiscountSliderItem imgProd={imgProduct} img={imgDiscount} />
       <DiscountSliderItem imgProd={imgProduct} img={imgDiscount} />
       <DiscountSliderItem imgProd={imgProduct} img={imgDiscount} />
      </Slider>
    </div>
  );
}
export default DiscountsSlider;
