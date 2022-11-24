import Image from 'next/image';
import { useRef, useState } from 'react';
import imgDef from '../../images/templates/defaultProductCard.svg';
import photo from '../../images/templates/treeItemSearch.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import ProductPrevButton from './ProductPrevButton';
import ProductNextButton from './ProductNextButton';
import CardSliderItem from './CardSliderItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BtnsCardProduct from './BtnsCardProduct';

export default function ProductCard({ obj }) {
  const [showBtns, setShowBtns] = useState(false);
  const [currentColor, setCurrentColor] = useState('1');
  const [hoverHeart, setHoverHeart] = useState(false);
  const [clickHeart, setClickHeart] = useState(false);
  const [visSliderProd, setVisSliderProd] = useState(false);
  const [clickBuy, setClickBuy] = useState(false);
  const [clickBtnR, setClickBtnR] = useState(false);
  const [clickBtnL, setClickBtnL] = useState(false);
  const [clickBtnBig, setClickBtnBig] = useState(false);

  const sliderFilt = useRef(null);

  const currentColorHandler = (num) => {
    setCurrentColor(num);
  };

  const nextSlideFilt = () => {
      if (sliderFilt.current !== null && sliderFilt.current.swiper !== null)
        sliderFilt.current.swiper.slideNext();
    },
    prevSlideFilt = () => {
      if (sliderFilt.current !== null && sliderFilt.current.swiper !== null)
        sliderFilt.current.swiper.slidePrev();
    };

  return (
    <div
      onMouseEnter={() => setShowBtns(true)}
      onMouseLeave={() => setShowBtns(false)}
      className="card_prod_con relative w-278px h-428px border border-white ..5x2:hover:border-white hover:border-gray ..5x2:w-44 ..5x2:h-317px"
    >
      {obj.packS && (
        <div className="absolute top-0 left-0 z-10">
          <svg
            className=" ..5x2:hidden"
            width="106"
            height="36"
            viewBox="0 0 106 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H106L94.6021 18L106 36H0V0Z" fill="white" />
            <path
              d="M13.1355 18.062H11.25V14.2909C11.25 13.3482 12.1928 12.4054 13.1355 12.4054H30.1051C31.0478 12.4054 31.9906 13.3482 31.9906 14.2909V18.062H30.1051M13.1355 18.062V27.4895C13.1355 28.4322 14.0783 29.375 15.021 29.375H28.2196C29.1623 29.375 30.1051 28.4322 30.1051 27.4895V18.062M13.1355 18.062H30.1051M21.6203 12.4054L21.6203 29.375M21.6203 12.4054C20.3633 9.7343 17.755 5.42904 15.4924 7.69165C13.2298 9.95426 18.3207 12.4054 21.6203 12.4054ZM21.6203 12.4054C21.6203 8.16313 25.8627 5.33479 27.7482 7.22026C30.1051 9.5771 25.3913 12.4053 21.6203 12.4054Z"
              stroke="#C5C1AB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            className="hidden ..5x2:block"
            width="82"
            height="24"
            viewBox="0 0 82 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H82L73.1828 12L82 24H0V0Z" fill="white" />
            <path
              d="M11.1603 12.0381H10V9.7175C10 9.13735 10.5802 8.55719 11.1603 8.55719H21.6031C22.1833 8.55719 22.7634 9.13735 22.7634 9.7175V12.0381H21.6031M11.1603 12.0381V17.8397C11.1603 18.4198 11.7405 19 12.3206 19H20.4428C21.023 19 21.6031 18.4198 21.6031 17.8397V12.0381M11.1603 12.0381H21.6031M16.3817 8.55719L16.3817 19M16.3817 8.55719C15.6082 6.91341 14.0031 4.26402 12.6107 5.6564C11.2183 7.04877 14.3512 8.55719 16.3817 8.55719ZM16.3817 8.55719C16.3817 5.94654 18.9924 4.20602 20.1527 5.36631C21.6031 6.81668 18.7023 8.55713 16.3817 8.55719Z"
              stroke="#C5C1AB"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="absolute top-1 left-47px font-montserrat font-semibold text-2xl leading-120% text-black-70pe ..5x2:text-sm ..5x2:top-0.5 ..5x2:left-9">
            {obj.packS}
          </p>
        </div>
      )}

      <div
        className={` absolute ${
          obj.packS ? 'top-10 ..5x2:top-8' : 'top-1.5'
        } left-1.5 z-10`}
      >
        {obj.hitLabel || obj.saleLabel ? (
          <div className=" flex z-10">
            {obj.hitLabel && (
              <small className="mr-1.5 w-60px h-6 flex items-center justify-center bg-label-yellow font-noto-sans tracking-1px font-medium text-xs ..5x2:w-9 ..5x2:h-3.5 ..5x2:text-9px">
                HIT!
              </small>
            )}

            {obj.saleLabel && (
              <small className=" w-60px h-6 flex items-center justify-center bg-label-pink-2 font-noto-sans font-medium text-xs leading-100% uppercase tracking-1px text-white ..5x2:w-9 ..5x2:h-3.5 ..5x2:text-9px">
                -15%
              </small>
            )}
          </div>
        ) : (
          <></>
        )}

        {obj.newLabel && (
          <small className="mt-1.5 z-10 w-60px h-6 flex items-center justify-center bg-white border-1.5px border-black-70pe font-noto-sans font-medium text-xs leading-130% tracking-1px text-black-70pe ..5x2:w-9 ..5x2:h-3.5 ..5x2:text-9px">
            NEW
          </small>
        )}

        <div className="mt-1 flex flex-row items-center ..5x2:flex-col ..5x2:items-start">
          {obj.prodDayLabel && (
            <>
              <div className="w-60px h-60px flex items-center justify-center border-3.5px border-double border-label-green bg-white rounded-56px ..5x2:hidden">
                <p className=" text-center text-label-green font-noto-sans font-medium text-10px uppercase tracking-1px leading-120%">
                  ТОВАР ДНЯ
                </p>
              </div>

              <div className="hidden ..5x2:flex items-center justify-center border border-label-green bg-white rounded-56px w-9 h-9">
                <p className="text-center text-label-green font-noto-sans font-medium uppercase text-7px">
                  ТОВАР ДНЯ
                </p>
              </div>
            </>
          )}

          {obj.packLabel && (
            <>
              <div
                className={`${
                  obj.prodDayLabel ? '-ml-2.5' : ''
                }  w-60px h-60px flex items-center justify-center border-3.5px border-double border-label-green bg-white-80pe rounded-56px ..5x2:hidden`}
              >
                <div>
                  {/* <svg viewBox="0 0 70 70" width="40%">
        <defs>
         <path
         d="M35,35m-23,0a23,23 0 1,1 46,0a23,23 0 1,1 -46,0"
         fill="lightpink"
         id="tophalf"
         />
         </defs>
         <text style="font: initial;">
         <textPath  xlink:href="#tophalf" startOffset="0%">
          Шпаргалка
         </textPath>
          <textPath xlink:href="#tophalf" startOffset="56%">
          блоггера
          </textPath>
          </text>
      </svg> */}

                  <p className=" text-center text-primary font-noto-sans font-medium text-base uppercase tracking-1px leading-120%">
                    5
                  </p>

                  <p className="text-primary font-noto-sans font-normal text-xs">
                    шт.
                  </p>
                </div>
              </div>

              <div className="hidden ..5x2:flex flex-col items-center justify-center border border-label-green bg-white-80pe rounded-56px w-9 h-9 -mt-2">
                <p className=" text-center text-primary font-noto-sans font-medium text-base uppercase tracking-1px leading-120% ..5x2:text-10px">
                  5
                </p>

                <p className="text-primary font-noto-sans font-normal text-xs ..5x2:text-7px">
                  шт.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {clickHeart ? (
        <svg
          onClick={() => setClickHeart(false)}
          className="absolute top-3 right-3 z-10 ..5x2:w-8 ..5x2:h-8 ..5x2:right-1.5 ..5x2:top-1.5"
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" fill="white" />
          <g filter="url(#filter0_d_3587_1020586)">
            <path
              d="M29.0136 15C27.212 15 25.4828 15.8387 24.3542 17.1537C23.2256 15.8387 21.4965 15 19.6948 15C16.5057 15 14 17.4954 14 20.6948C14 24.5984 17.5204 27.7978 22.8529 32.6332L24.3542 34L25.8556 32.6332C31.188 27.7978 34.7084 24.5984 34.7084 20.6948C34.7084 17.4954 32.2027 15 29.0136 15Z"
              fill="#FF6363"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3587_1020586"
              x="4"
              y="10"
              width="40.7084"
              height="39"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3587_1020586"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3587_1020586"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          onClick={() => setClickHeart(true)}
          onMouseEnter={() => setHoverHeart(true)}
          onMouseLeave={() => setHoverHeart(false)}
          className="absolute top-3 right-3 z-10 ..5x2:w-8 ..5x2:h-8 ..5x2:right-1.5 ..5x2:top-1.5"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" fill="white" />
          <path
            d="M24.4578 31.1008L24.3542 31.2044L24.2403 31.1008C19.3221 26.6381 16.0708 23.6872 16.0708 20.6948C16.0708 18.624 17.624 17.0708 19.6948 17.0708C21.2894 17.0708 22.8425 18.1063 23.3913 19.5144H25.3172C25.8659 18.1063 27.4191 17.0708 29.0136 17.0708C31.0845 17.0708 32.6376 18.624 32.6376 20.6948C32.6376 23.6872 29.3864 26.6381 24.4578 31.1008ZM29.0136 15C27.212 15 25.4828 15.8387 24.3542 17.1537C23.2256 15.8387 21.4965 15 19.6948 15C16.5057 15 14 17.4954 14 20.6948C14 24.5984 17.5204 27.7978 22.8529 32.6332L24.3542 34L25.8556 32.6332C31.188 27.7978 34.7084 24.5984 34.7084 20.6948C34.7084 17.4954 32.2027 15 29.0136 15Z"
            fill={hoverHeart ? '#FF6363' : '#EDEEEC'}
          />
        </svg>
      )}

      {obj.img ? (
        <Swiper
          className="product-card-photo-slider"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          allowTouchMove={false}
        >
          {obj.img.map((el, i) => {
            let styles = '';

            if (i === 0) {
              styles = 'mt-5 mx-30px ..5x2:mx-22px';
            } else {
              styles = '';
            }

            return (
              <SwiperSlide>
                <div className={`${styles}`}>
                  <Image
                    src={el}
                    quality={100}
                    // width={278}
                    // height={238}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div>
          <Image
            src={imgDef}
            quality={100}
            // width={278}
            // height={238}
          />
        </div>
      )}

      <div className="absolute bottom-164px flex flex-row items-center h-26px w-full px-4 ..5x2:bottom-129px">
        {obj.iText && (
          <div
            onClick={() => setVisSliderProd(!visSliderProd)}
            className=" cursor-pointer absolute top-1 left-4 ..5x2:left-2"
          >
            <p className=" text-sm font-normal font-montserrat flex items-center leading-140% text-black-70pe ..5x2:text-11px">
              <svg
                className="mr-1.5 mb-0.5 ..5x2:mr-1 ..5x2:mb-0 ..5x2:w-18px ..5x2:h-18px"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7.5"
                  stroke={visSliderProd ? '#337202' : '#DBDCDA'}
                />
                <path
                  d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
                  fill={visSliderProd ? '#337202' : '#DBDCDA'}
                />
              </svg>
              {obj.iText}
            </p>
          </div>
        )}

        {obj.balls && (
          <div className=" absolute flex top-1 right-4 ..5x2:top-7px ..5x2:right-2">
            <p className="flex font-montserrat font-medium text-13px leading-140% text-black-70pe ..5x2:text-10px">
              <svg
                className="mr-0.5 ..5x2:w-3 ..5x2:h-3"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9166 17.9167C12.9166 17.9167 7.49996 18.3333 4.58329 15C1.66663 11.6667 1.66663 1.66667 1.66663 1.66667C1.66663 1.66667 11.6666 1.25 15 3.75C18.3333 6.25 17.5 13.3333 17.5 13.3333"
                  stroke="#337202"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3333 18.3334C18.3333 18.3334 13.6753 14.8132 10.8333 11.6667C7.99133 8.52029 6.66663 5.41675 6.66663 5.41675"
                  stroke="#337202"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8334 11.6667L11.25 6.25"
                  stroke="#337202"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8333 11.6667L6.66663 11.25"
                  stroke="#337202"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {obj.balls}
            </p>
          </div>
        )}
      </div>

      {obj.colors && (
        <div className="absolute w-full bottom-154px flex flex-row justify-center items-center ..5x2:bottom-69px">
          <div
            onClick={() => currentColorHandler('1')}
            className={` bg-label-pink cursor-pointer ${
              currentColor === '1'
                ? 'w-10px h-10px border border-gray-border'
                : 'w-6px h-6px'
            }  rounded-56px mx-1`}
          ></div>
          <div
            onClick={() => currentColorHandler('2')}
            className={` bg-label-orange cursor-pointer ${
              currentColor === '2'
                ? 'w-10px h-10px border border-gray-border'
                : 'w-6px h-6px'
            }  rounded-56px mx-1`}
          ></div>
          <div
            onClick={() => currentColorHandler('3')}
            className={` bg-label-green cursor-pointer ${
              currentColor === '3'
                ? 'w-10px h-10px border border-gray-border '
                : 'w-6px h-6px'
            }  rounded-56px mx-1`}
          ></div>
        </div>
      )}

      <div className="card_text absolute bottom-94px font-montserrat font-normal text-13px leading-150% uppercase text-center px-4 ..5x2:px-2 ..5x2:text-10px ..5x2:tracking-1px ..5x2:bottom-83px">
        {obj.text}
      </div>

      {obj.priceDe && (
        <div className="absolute w-full flex justify-center items-center bottom-69px text-label-orange font-montserrat font-normal text-base leading-140% ..5x2:hidden">
          <p>
            {obj.priceDe} <span className=" font-lora"> De</span>
          </p>
        </div>
      )}

      <div className="absolute w-full bottom-12 flex justify-center ..5x2:bottom-12">
        <p className=" font-montserrat text-gray-quick-silver font-normal leading-140% text-base line-through mr-3 ..5x2:mr-2 ..5x2:text-11px">
          {obj.price?.old}
        </p>
        <p className=" font-montserrat text-label-pink-2 font-normal text-base leading-140% ..5x2:text-11px">
          {obj.price?.new}
        </p>
      </div>

      <BtnsCardProduct
        clickBuy={clickBuy}
        clickBtnR={clickBtnR}
        clickBtnL={clickBtnL}
        clickBtnBig={clickBtnBig}
        showBtns={showBtns}
        priceDe={obj.priceDe}
        setClickBuy={setClickBuy}
        setClickBtnR={setClickBtnR}
        setClickBtnL={setClickBtnL}
        setClickBtnBig={setClickBtnBig}
      />

      {visSliderProd && (
        <div className="absolute bottom-11 w-full bg-gray-light2 h-120px ..5x2:w-40 ..5x2:h-77px ..5x2:left-7px ..5x2:bottom-12">
          {obj.iText === 'Акции' && (
            <>
              <div className="absolute bottom-24 w-full flex justify-center ..5x2:hidden">
                <p className=" font-montserrat font-normal text-11px leading-140%">
                  Экономия при покупке в акции:
                </p>
              </div>

              <div className="absolute hidden bottom-60px w-full ..5x2:flex justify-center">
                <p className=" font-montserrat font-normal text-10px leading-140%">
                  Экономия
                </p>
              </div>
            </>
          )}

          <Swiper
            ref={sliderFilt}
            className="h-full w-204px ..5x2:w-110px"
            slidesPerView={2}
            spaceBetween={5}
            modules={[Navigation]}
            allowTouchMove={false}
            breakpoints={{
              1000: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide className={`${obj.iText === 'Акции' ? 'ml-0.5' : ''}`}>
              <CardSliderItem photo={photo} iText={obj.iText} />
            </SwiperSlide>

            <SwiperSlide>
              <CardSliderItem photo={photo} iText={obj.iText} />
            </SwiperSlide>

            <SwiperSlide>
              <CardSliderItem photo={photo} iText={obj.iText} />
            </SwiperSlide>

            <SwiperSlide>
              <CardSliderItem photo={photo} iText={obj.iText} />
            </SwiperSlide>
          </Swiper>

          <ProductPrevButton onClick={prevSlideFilt} isIText={obj.iText} />
          <ProductNextButton onClick={nextSlideFilt} isIText={obj.iText} />
        </div>
      )}
    </div>
  );
}
