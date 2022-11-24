import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Slider from 'react-slick';
import one from '../../images/templates/1Offer.jpg';
import two from '../../images/templates/2Offer.jpg';
import tree from '../../images/templates/3Offer.jpg';
import four from '../../images/templates/4Offer.jpg';
import five from '../../images/templates/5Offer.jpg';
import SpecialOfferItem from '../SpecialOfferItem/SpecialOfferItem';
import useWindowSize from '../utils/useWindowSize';
import SpecialOffersNext from './SpecialOffersNext';
import SpecialOffersPrev from './SpecialOffersPrev';

import fullSc from '../../images/templates/FullScreen.jpg';

import oneL from '../../images/templates/oneItemSearchSlider.jpg';
import treeL from '../../images/templates/treeItemSearch.jpg';
import twoI from '../../images/templates/twoItemSearch.jpg';
import ProductCard from '../ProductCard/ProductCard';
import testPhoto from '../../images/templates/testSliderPhoto.svg';
import photoNabor from '../../images/templates/photoNabor.svg';

function SpecialOffers({ refL }) {
  const divBlock = useRef(null),
    slider = useRef(null);

  const size = useWindowSize();
  const [kol, setKol] = useState();
  const [widthDot, setWidthDot] = useState();
  const [currentTab, setCurrentTab] = useState('all');

  useEffect(() => {
    setWidthDot(divBlock?.current?.getBoundingClientRect()?.width / kol);

    // Этот useEffect тоже самое если бы мы сеттили количество в appendDots просто убрали в консоли ошибку
    if (slider.current) setKol(slider?.current.props?.children?.length);
  }, [size.width, slider?.current]);

  const currentTabHandler = (num) => {
    setCurrentTab(num);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SpecialOffersNext />,
    prevArrow: <SpecialOffersPrev />,
    dotsClass: 'slick-dots slick-thumb specialSliderDots',
    centerMode: true,
    centerPadding: '-6px',
    appendDots: (dots) => {
      return (
        <div
          ref={divBlock}
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            bottom: -13,
          }}
        >
          <div
            style={{
              width: '100%',
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
          backgroundColor: ' rgb(218, 218, 218)',
          width: `${widthDot}px`,
          height: 4,
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: false,
          prevArrow: false,
          appendDots: (dots) => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: -25,
                }}
              >
                <div
                  ref={divBlock}
                  style={{
                    width: 150,
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
                backgroundColor: ' rgb(218, 218, 218)',
                width: `${widthDot}px`,
                height: 4,
              }}
            />
          ),
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: false,
          prevArrow: false,
          centerMode: true,
          centerPadding: '20px',
          appendDots: (dots) => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: -25,
                }}
              >
                <div
                  ref={divBlock}
                  style={{
                    width: 150,
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
                backgroundColor: ' rgb(218, 218, 218)',
                width: `${widthDot}px`,
                height: 4,
              }}
            />
          ),
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: false,
          prevArrow: false,
          centerMode: true,
          centerPadding: '10px',
          appendDots: (dots) => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: -25,
                }}
              >
                <div
                  ref={divBlock}
                  style={{
                    width: 150,
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
                backgroundColor: ' rgb(218, 218, 218)',
                width: `${widthDot}px`,
                height: 4,
              }}
            />
          ),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: false,
          prevArrow: false,
          centerMode: true,
          centerPadding: '40px',
          appendDots: (dots) => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: -35,
                }}
              >
                <div
                  ref={divBlock}
                  style={{
                    width: 150,
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
                backgroundColor: ' rgb(218, 218, 218)',
                width: `${widthDot}px`,
                height: 4,
              }}
            />
          ),
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: false,
          prevArrow: false,
          centerMode: true,
          centerPadding: '-13px',
          appendDots: (dots) => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: -35,
                }}
              >
                <div
                  ref={divBlock}
                  style={{
                    width: 150,
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
                backgroundColor: ' rgb(218, 218, 218)',
                width: `${widthDot}px`,
                height: 4,
              }}
            />
          ),
        },
      },
    ],
  };

  return (
    <article
      ref={refL}
      id="sec-2"
      className="container-base bg-white pb-32 ..5x2:pb-6 .1x1:pb-28"
    >
      <div className="max-w-1460px mx-auto mt-16 ..5x2:mt-2 flex items-center border-b border-gray-border pb-2 overflow-x-auto scrol whitespace-nowrap font-medium font-montserrat .6x3:ml-3">
        <p
          onClick={() => currentTabHandler('all')}
          className={`..6x3:text-sm  ..6x3:mr-3 ..6x3:pr-3 ..6x1:text-base flex items-center h-8 hover:text-primary transition-all cursor-pointer mr-8 border-gray-border border-r  pr-8 ${
            currentTab === 'all' ? 'text-primary' : 'text-gray-quick-silver'
          } text-lg`}
        >
          Все спецпредложения
        </p>
        <p
          onClick={() => currentTabHandler('1')}
          className={`..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 ${
            currentTab === '1' ? 'text-primary' : 'text-gray-quick-silver'
          } text-lg`}
        >
          Новинки
        </p>
        <p
          onClick={() => currentTabHandler('2')}
          className={`..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 ${
            currentTab === '2' ? 'text-primary' : 'text-gray-quick-silver'
          } text-lg`}
        >
          Хит продаж
        </p>
        <p
          onClick={() => currentTabHandler('3')}
          className={`..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 ${
            currentTab === '3' ? 'text-primary' : 'text-gray-quick-silver'
          } text-lg`}
        >
          Суперцена
        </p>
        <p
          onClick={() => currentTabHandler('4')}
          className={`..6x3:text-sm ..6x3:mr-3 ..6x1:text-base hover:text-primary transition-all cursor-pointer mr-8 ${
            currentTab === '4' ? 'text-primary' : 'text-gray-quick-silver'
          } text-lg`}
        >
          Наборы
        </p>
      </div>

      <Slider
        className=" max-w-1460px mx-auto pt-18px pb-6"
        {...settings}
        ref={slider}
      >
        <ProductCard
          obj={{
            img: false,
            text: ' Укрепляющая сыворотка для контура овала лица с коллагеном',
            priceDe: '3 750',
            price: {
              old: '₽ 920.00',
              new: '₽ 764.00',
            },
          }}
        />
        <ProductCard
          obj={{
            img: [testPhoto],
            text: ' Укрепляющая сыворотка для контура овала лица с коллагеном',
            iText: 'Акции',
            colors: true,
            balls: '1.4 Б',
            priceDe: '3 750',
            packLabel: true,
            prodDayLabel: true,
            newLabel: true,
            hitLabel: true,
            saleLabel: true,
            price: {
              old: '₽ 920.00',
              new: '₽ 764.00',
            },
          }}
        />
        <ProductCard
          obj={{
            img: [testPhoto, fullSc, fullSc, fullSc],
            text: ' Укрепляющая сыворотка для контура овала лица с коллагеном',
            iText: 'Акции',
            colors: true,
            balls: '1.4 Б',
            priceDe: '3 750',
            packLabel: true,
            prodDayLabel: true,
            newLabel: true,
            hitLabel: true,
            saleLabel: true,
            price: {
              old: '₽ 920.00',
              new: '₽ 764.00',
            },
          }}
        />
        <ProductCard
          obj={{
            img: [testPhoto, fullSc, fullSc, fullSc],
            text: ' Укрепляющая сыворотка для контура овала лица с коллагеном',
            iText: 'Акции',
            balls: '1.4 Б',
            colors: true,
            packLabel: true,
            prodDayLabel: true,
            newLabel: true,

            hitLabel: true,
            saleLabel: true,
            priceDe: '3 750',
            price: {
              old: '₽ 920.00',
              new: '₽ 764.00',
            },
          }}
        />
        <ProductCard
          obj={{
            img: [testPhoto, fullSc, fullSc, fullSc],
            text: ' Укрепляющая сыворотка для контура овала лица с коллагеном',
            iText: 'Акции',
            colors: true,
            balls: '1.4 Б',
            priceDe: '3 750',
            packLabel: true,
            prodDayLabel: true,
            newLabel: true,
            hitLabel: true,
            saleLabel: true,
            price: {
              old: '₽ 920.00',
              new: '₽ 764.00',
            },
          }}
        />
        <ProductCard
          obj={{
            img: [testPhoto, fullSc, fullSc, fullSc],
            text: ' Укрепляющая сыворотка для контура овала лица с коллагеном',
            iText: 'Акции',
            balls: '1.4 Б',
            colors: true,
            packLabel: true,
            prodDayLabel: true,
            newLabel: true,

            hitLabel: true,
            saleLabel: true,
            priceDe: '3 750',
            price: {
              old: '₽ 920.00',
              new: '₽ 764.00',
            },
          }}
        />
        <ProductCard
          obj={{
            img: [photoNabor],
            text: ' Укрепляющая сыворотка для контура овала лица с коллагеном',
            iText: 'Состав набора',
            balls: '1.4 Б',
            packLabel: true,
            prodDayLabel: true,
            newLabel: true,
            hitLabel: true,
            saleLabel: true,
            priceDe: '3 750',
            price: {
              old: '₽ 920.00',
              new: '₽ 764.00',
            },
          }}
        />
        <ProductCard
          obj={{
            img: [testPhoto],
            text: ' Укрепляющая сыворотка для контура овала лица с коллагеном',
            iText: 'Акции',
            balls: '1.4 Б',
            packLabel: true,
            prodDayLabel: true,
            newLabel: true,
            hitLabel: true,
            saleLabel: true,
            price: {
              old: '₽ 920.00',
              new: '₽ 764.00',
            },
          }}
        />
        <ProductCard
          obj={{
            img: [photoNabor, fullSc],
            text: ' Укрепляющая сыворотка для контура овала лица с коллагеном',
            packS: '4=5',
            iText: 'Состав акции',
            balls: '1.4 Б',
            packLabel: true,
            prodDayLabel: true,
            newLabel: true,
            hitLabel: true,
            saleLabel: true,
            priceDe: '3 750',
            price: {
              old: '₽ 920.00',
              new: '₽ 764.00',
            },
          }}
        />
        <ProductCard
          obj={{
            img: [testPhoto],
            text: ' Укрепляющая сыворотка для контура овала лица с коллагеном',
            packS: '4=5',
            iText: 'Состав акции',
            balls: '1.4 Б',
            packLabel: true,
            prodDayLabel: true,
            newLabel: true,
            hitLabel: true,
            saleLabel: true,
            priceDe: '3 750',
            price: {
              old: '₽ 920.00',
              new: '₽ 764.00',
            },
          }}
        />
      </Slider>

      {/* <SpecialOfferItem
        obj={{
          text: 'питательный шампунь с корнем имбиря',
          pDay: true,
          hit: true,
          priceDe: '3 750',
          price: '764.00',
          isSlider: true,
          balls: true,
        }}
      />
      <SpecialOfferItem
        obj={{
          img: fullSc,
          timeOver: '15.06.22',
          isGif: true,
          gifTitle: '1=2',
          timeCenter: true,
          fullImg: true,
          text: 'Для сенсационного  увлажнения и восстановления кожи',
          priceSale: { old: '999.00', new: '888.00' },
          isSlider: true,
          balls: true,
          iTab: true,
        }}
        srcSliderImgTree={treeL}
        srcSliderImgTwo={twoI}
        srcSliderImgOne={oneL}
      />
      <SpecialOfferItem
        obj={{
          img: two,
          text: 'Fresh click: дотянуться до звезды',
          new: true,
          sale: true,
          hit: true,
          pDay: true,
          fiveNabor: true,
          balls: true,
          iTab: true,
          priceSale: { old: '999.00', new: '888.00' },
        }}
        srcSliderImgTree={treeL}
        srcSliderImgTwo={twoI}
        srcSliderImgOne={oneL}
      />
      <SpecialOfferItem
        obj={{
          img: two,
          text: 'Укрепляющая сыворотка для контура овала лица с коллагеном',
          new: true,
          sale: true,
          iTab: true,
          priceSale: { old: '999.00', new: '888.00' },
        }}
        srcSliderImgTree={treeL}
        srcSliderImgTwo={twoI}
        srcSliderImgOne={oneL}
      />
      <SpecialOfferItem
        obj={{
          img: tree,
          text: 'бьюти - косметичка “сакура”',
          hit: true,
          pDay: true,
          colors: true,
          price: '764.00',
        }}
      />
      <SpecialOfferItem
        obj={{
          img: four,
          text: 'Укрепляющая сыворотка для контура овала лица с коллагеном ',
          priceDe: '3 750',
          price: '764.00',
        }}
      />
      <SpecialOfferItem
        obj={{
          img: five,
          text: 'ночная крем-маска с лавандой',
          hit: true,
          priceDe: '3 750',
          price: '764.00',
        }}
      />
      <SpecialOfferItem
        obj={{
          img: one,
          text: 'питательный шампунь с корнем имбиря',
          pDay: true,
          hit: true,
          priceDe: '3 750',
          price: '764.00',
        }}
      />
      <SpecialOfferItem
        obj={{
          img: two,
          text: 'Укрепляющая сыворотка для контура овала лица с коллагеном',
          new: true,
          sale: true,
          iTab: true,
          priceSale: { old: '999.00', new: '888.00' },
        }}
        srcSliderImgTree={treeL}
        srcSliderImgTwo={twoI}
        srcSliderImgOne={oneL}
      />
      <SpecialOfferItem
        obj={{
          img: tree,
          text: 'бьюти - косметичка “сакура”',
          hit: true,
          pDay: true,
          colors: true,
          price: '764.00',
        }}
      />
      <SpecialOfferItem
        obj={{
          img: four,
          text: 'Укрепляющая сыворотка для контура овала лица с коллагеном ',
          priceDe: '3 750',
          price: '764.00',
        }}
      />
      <SpecialOfferItem
        obj={{
          img: five,
          text: 'ночная крем-маска с лавандой',
          hit: true,
          priceDe: '3 750',
          price: '764.00',
        }}
      /> */}
    </article>
  );
}
export default SpecialOffers;
