import Image from 'next/image';
import { useRef } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import nabor from '../../images/templates/nabor.png';
import { Navigation } from 'swiper';

import fourN from '../../images/templates/fourNab.png';
import fiveN from '../../images/templates/fiveNab.png';
import treeN from '../../images/templates/treeNab.png';

import * as icons from '../../images/constsIcons';

export default function SpecialOfferItem({
  obj,
  isSearchI,
  srcSliderImgTwo,
  srcSliderImgTree,
  isSearchItem,
  srcSliderImgOne,
  src,
  ml,
  buttonDE,
  isActions,
}) {
  const [currentColor, setCurrentColor] = useState('1');
  const [hoverHeart, setHoverHeart] = useState(false);
  const [liked, setLike] = useState(false);

  const setLikeF = () => {
    setLike(!liked);
    setHoverHeart(false);
  };

  const divBlock = useRef(null);
  const currentColorHandler = (num) => {
    setCurrentColor(num);
  };

  const showHoverHeart = () => {
    if (hoverHeart) setHoverHeart(false);
    else setHoverHeart(true);
  };

  const [showSost, setShowSost] = useState(false),
    [showAct, setShowAct] = useState(false);
  const slider = useRef(null);

  const nextSlide = () => {
      if (slider.current !== null && slider.current.swiper !== null)
        slider.current.swiper.slideNext();
    },
    prevSlide = () => {
      if (slider.current !== null && slider.current.swiper !== null)
        slider.current.swiper.slidePrev();
    },
    showSlide = () => setShowSost(!showSost),
    showActL = () => setShowAct(!showAct);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipe: false,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
    appendDots: (dots) => {
      return (
        <div
          ref={divBlock}
          style={{
            display: 'flex',

            justifyContent: 'center',
            position: 'absolute',
            bottom: -5,
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
  };
  if (!isSearchI) {
    return (
      <div
        className={`${obj.isSpecialProductDetail ? 'bg-white' : ''} ${
          obj.isSpecialProductDetail ? '..7x1:!m-0' : ''
        } ${!obj.img ? 'overflow-hidden' : ''} ${
          obj.fullImg ? '!p-0' : ''
        } min-h-317px relative ..6x03:h-317px ${
          obj.isDetails ? '..6x1:h-380px ..7x1:!w-full' : ''
        } h-428px flex justify-center  relative mt-2 p-2 border border-white hoverButton hover:border-gray active_card mx-3 ${
          obj.isDetails
            ? '!ml-0 hover:border-white !mt-0 ..7x1:!mr-0 ..5x2:mr-6 mr-42px'
            : ''
        }`}
      >
        <div
          className={`hidden ${
            obj.fullImg
              ? '!block aboslute top-0 !h-56 left-0 w-full ..6x03:!hidden customWidthImg right-0'
              : ''
          } ${obj.isSlider ? '!hidden' : ''}`}
        >
          <Image
            className=" object-cover  "
            src={obj.img || treeN}
            width={!obj.fullImg ? 218 : ''}
            height={!obj.fullImg ? 218 : ''}
          />
        </div>
        <div
          className={`flex flex-col   items-center max-w-252px mx-auto mt-5 ${
            obj.fullImg ? '!mt-0' : ''
          }`}
        >
          <div
            className={`  absolute flex left-0 top-0 z-20 px-2 pt-2 gap-0.5 ${
              obj.hit && obj.new && obj.sale && 'flex-wrap w-40'
            }`}
          >
            {obj.hit && (
              <small className="w-60px bg-label-yellow  font-noto-sans font-medium text-xs ..6x03:text-9px leading-120% px-5 py-1 samples ..6x03:px-2.5 ..6x03:py-0.5">
                HIT!
              </small>
            )}

            {obj.new && (
              <small className="mr-1 w-60px justify-center samples font-noto-sans font-medium text-xs ..6x03:text-9px border flex items-center   px-3 py-0.5 ..6x03:py-0 ..6x03:px-1.5 leading-120% border-gray-quick-silver">
                NEW
              </small>
            )}

            {obj.sale && (
              <small className="samples w-60px bg-label-pink-2 justify-center flex border-2 border-label-pink-2 text-white font-noto-sans font-medium ..6x03:text-9px text-xs leading-120% ..6x03:px-1.5 ..6x03:py-0 px-3 py-0.5 ">
                -15%
              </small>
            )}
            {obj.isGif && obj.fullImg && (
              <svg
                className="absolute left-0 -top-0.5 ..6x1:h-7 ..6x1:w-20"
                width="106"
                height="36"
                viewBox="0 0 106 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H106L94.6021 18L106 36H0V0Z" fill="white" />
              </svg>
            )}
            {obj.isGif && (
              <div
                className={`p-2  ${
                  obj.fullImg
                    ? '   pr-5   overflow-hidden py-0 absolute top-0 left-0 '
                    : ''
                }`}
              >
                <div className="flex items-center relative w-full  ">
                  <svg
                    className="..6x1:h-4 ..6x1:mr-1 ..6x1:w-4"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.13551 13.062H3.25V9.29094C3.25 8.34819 4.19275 7.40543 5.13551 7.40543H22.1051C23.0478 7.40543 23.9906 8.34819 23.9906 9.29094V13.062H22.1051M5.13551 13.062V22.4895C5.13551 23.4322 6.07826 24.375 7.02101 24.375H20.2196C21.1623 24.375 22.1051 23.4322 22.1051 22.4895V13.062M5.13551 13.062H22.1051M13.6203 7.40543L13.6203 24.375M13.6203 7.40543C12.3633 4.7343 9.755 0.429038 7.49239 2.69165C5.22978 4.95426 10.3207 7.40543 13.6203 7.40543ZM13.6203 7.40543C13.6203 3.16313 17.8627 0.334789 19.7482 2.22026C22.1051 4.5771 17.3913 7.40533 13.6203 7.40543Z"
                      stroke="#C5C1AB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="font-montserrat ml-2 font-semibold mt-0.5 ..6x1:text-sm text-2xl text-black-70pe">
                    {obj.gifTitle}
                  </p>
                </div>
              </div>
            )}
          </div>

          {obj.pDay && (
            <>
              <div
                className={`absolute flex ..6x03:hidden items-center justify-center   top-6 left-2 z-20 border-3.5px border-double border-label-green bg-white rounded-56px ${
                  obj.fiveNabor && obj.pDay ? '!top-12 !left-2 !mt-2' : ''
                } mt-2.5 p-px w-60px h-60px  ${
                  obj.isSpecialProductDetail && obj.onePday ? '-top-1  ' : ''
                }`}
              >
                <p className=" text-center text-label-green text-10px p-10">
                  ТОВАР ДНЯ
                </p>
              </div>
              <div
                className={`absolute hidden z-20   ..6x03:flex items-center justify-center top-6 left-2  border border-label-green bg-white rounded-56px mt-0.5 p-px w-9 h-9 ${
                  obj.fiveNabor && obj.pDay
                    ? '!top-14 !left-14 ..6x03:!left-3 ..6x03:!top-7  !z-20'
                    : ''
                }`}
              >
                <p className=" text-center text-label-green text-7px p-10">
                  ТОВАР ДНЯ
                </p>
              </div>
            </>
          )}
          {obj.fourNabor && (
            <div className="absolute ..7x1:h-9 ..7x1:w-9 top-10px left-3 z-10">
              <Image src={fourN} />
            </div>
          )}
          {obj.fiveNabor && (
            <div
              className={`absolute ..7x1:h-9 ..7x1:w-9 top-9 left-2 z-10 ${
                obj.fiveNabor && obj.pDay
                  ? '!top-14 !left-14 !z-20 ..6x03:!top-7 ..6x03:h-9 ..6x03:w-9 ..6x03:!left-10 ..6x03:!mt-0.5'
                  : ''
              }`}
            >
              <Image src={fiveN} />
            </div>
          )}
          {obj.treeNabor && (
            <div className="absolute ..7x1:h-9 ..7x1:w-9 top-10px left-2 z-10">
              <Image src={treeN} />
            </div>
          )}
          {obj.isDetails && (
            <div
              onClick={setLikeF}
              onMouseEnter={showHoverHeart}
              onMouseLeave={showHoverHeart}
              className={`absolute ${
                liked ? 'top-4 right-0.5' : ''
              } top-4 ..7x1:top-2 right-10px ..6x03:right-1 z-20 cursor-pointer`}
            >
              {liked ? (
                <svg
                  width="42"
                  height="38"
                  viewBox="0 0 42 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1939_1125459)">
                    <path
                      d="M25.5022 5.00001C24.6291 4.99851 23.7677 5.20077 22.9865 5.59072C22.2052 5.98066 21.5258 6.54752 21.0022 7.24621C20.293 6.30266 19.3051 5.606 18.1782 5.25482C17.0513 4.90365 15.8426 4.91573 14.7229 5.28936C13.6033 5.663 12.6295 6.37926 11.9393 7.3368C11.2492 8.29434 10.8776 9.44467 10.8772 10.625C10.8772 17.3621 20.2373 22.6813 20.6357 22.9044C20.7477 22.9671 20.8739 23 21.0022 23C21.1305 23 21.2567 22.9671 21.3687 22.9044C23.0902 21.8961 24.7059 20.7173 26.1914 19.3856C29.4665 16.438 31.1272 13.4905 31.1272 10.625C31.1255 9.13368 30.5323 7.70393 29.4778 6.6494C28.4233 5.59487 26.9935 5.0017 25.5022 5.00001Z"
                      fill="#FF6363"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1939_1125459"
                      x="0.877197"
                      y="0"
                      width="40.25"
                      height="38"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="5" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1939_1125459"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1939_1125459"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4578 19.1008L12.3542 19.2044L12.2403 19.1008C7.32207 14.6381 4.07084 11.6872 4.07084 8.69482C4.07084 6.62398 5.62398 5.07084 7.69482 5.07084C9.28937 5.07084 10.8425 6.10627 11.3913 7.51444H13.3172C13.8659 6.10627 15.4191 5.07084 17.0136 5.07084C19.0845 5.07084 20.6376 6.62398 20.6376 8.69482C20.6376 11.6872 17.3864 14.6381 12.4578 19.1008ZM17.0136 3C15.212 3 13.4828 3.83869 12.3542 5.15368C11.2256 3.83869 9.49646 3 7.69482 3C4.50572 3 2 5.49537 2 8.69482C2 12.5984 5.52044 15.7978 10.8529 20.6332L12.3542 22L13.8556 20.6332C19.188 15.7978 22.7084 12.5984 22.7084 8.69482C22.7084 5.49537 20.2027 3 17.0136 3Z"
                    fill={`${!liked && hoverHeart ? '#FF6363' : '#EDEEEC'}`}
                  ></path>
                </svg>
              )}
            </div>
          )}
          {obj.noIsHeart ? (
            ''
          ) : obj.fullImg ? (
            <svg
              className={`absolute ${
                liked ? 'top-4 right-0.5' : ''
              } ..6x5:right-5 top-3 ..6x5:h-8 ..6x5:w-8 ..7x1:top-2 right-3 ..6x03:right-3 z-20 ..5x2:h-9 ..5x2:w-9 cursor-pointer`}
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_3624_1022452)">
                <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.8" />
              </g>
              <path
                d="M23.9748 17.4793L24.3542 17.9214L24.7336 17.4793C25.7708 16.2709 27.3631 15.5 29.0136 15.5C31.9272 15.5 34.2084 17.7721 34.2084 20.6948C34.2084 22.4822 33.4069 24.1479 31.8945 25.9981C30.3767 27.8551 28.1958 29.8362 25.5197 32.2628L25.519 32.2635L24.3542 33.3238L23.1895 32.2635L23.1887 32.2628C20.5127 29.8362 18.3317 27.8551 16.8139 25.9981C15.3016 24.1479 14.5 22.4822 14.5 20.6948C14.5 17.7721 16.7813 15.5 19.6948 15.5C21.3453 15.5 22.9377 16.2709 23.9748 17.4793Z"
                fill="white"
                stroke="#EDEEEC"
              />
              <defs>
                <filter
                  id="filter0_b_3624_1022452"
                  x="-4"
                  y="-4"
                  width="56"
                  height="56"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_3624_1022452"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_3624_1022452"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          ) : (
            <div
              onClick={setLikeF}
              onMouseEnter={showHoverHeart}
              onMouseLeave={showHoverHeart}
              className={`absolute ${
                liked ? 'top-4 right-0.5' : ''
              } top-5  right-3   z-20 cursor-pointer`}
            >
              {liked ? (
                <svg
                  className="absolute ..6x5:w-38px  ..6x5:h-34px right-0 top-0.5"
                  width="42"
                  height="38"
                  viewBox="0 0 42 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1939_1125459)">
                    <path
                      d="M25.5022 5.00001C24.6291 4.99851 23.7677 5.20077 22.9865 5.59072C22.2052 5.98066 21.5258 6.54752 21.0022 7.24621C20.293 6.30266 19.3051 5.606 18.1782 5.25482C17.0513 4.90365 15.8426 4.91573 14.7229 5.28936C13.6033 5.663 12.6295 6.37926 11.9393 7.3368C11.2492 8.29434 10.8776 9.44467 10.8772 10.625C10.8772 17.3621 20.2373 22.6813 20.6357 22.9044C20.7477 22.9671 20.8739 23 21.0022 23C21.1305 23 21.2567 22.9671 21.3687 22.9044C23.0902 21.8961 24.7059 20.7173 26.1914 19.3856C29.4665 16.438 31.1272 13.4905 31.1272 10.625C31.1255 9.13368 30.5323 7.70393 29.4778 6.6494C28.4233 5.59487 26.9935 5.0017 25.5022 5.00001Z"
                      fill="#FF6363"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1939_1125459"
                      x="0.877197"
                      y="0"
                      width="40.25"
                      height="38"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="5" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1939_1125459"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1939_1125459"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              ) : (
                <svg
                  className="absolute right-0 top-0 ..6x5:h-5 ..6x5:w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4578 19.1008L12.3542 19.2044L12.2403 19.1008C7.32207 14.6381 4.07084 11.6872 4.07084 8.69482C4.07084 6.62398 5.62398 5.07084 7.69482 5.07084C9.28937 5.07084 10.8425 6.10627 11.3913 7.51444H13.3172C13.8659 6.10627 15.4191 5.07084 17.0136 5.07084C19.0845 5.07084 20.6376 6.62398 20.6376 8.69482C20.6376 11.6872 17.3864 14.6381 12.4578 19.1008ZM17.0136 3C15.212 3 13.4828 3.83869 12.3542 5.15368C11.2256 3.83869 9.49646 3 7.69482 3C4.50572 3 2 5.49537 2 8.69482C2 12.5984 5.52044 15.7978 10.8529 20.6332L12.3542 22L13.8556 20.6332C19.188 15.7978 22.7084 12.5984 22.7084 8.69482C22.7084 5.49537 20.2027 3 17.0136 3Z"
                    fill={`${!liked && hoverHeart ? '#FF6363' : '#EDEEEC'}`}
                  ></path>
                </svg>
              )}
            </div>
          )}

          {!obj.img ? (
            <svg
              className=" ..6x03:w-full ..6x03:absolute top-0 ..6x5:-top-3  left-0 right-0  ..6x03:h-40 "
              width="278"
              height="238"
              viewBox="0 0 278 238"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1939_1032750"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="278"
                height="238"
              >
                <rect width="278" height="238" fill="white" />
              </mask>
              <g mask="url(#mask0_1939_1032750)">
                <rect width="278" height="238" fill="#FCFDFB" />
                <path
                  d="M123.833 146.834C128.695 144.744 133.274 143.617 137.57 143.452C141.867 143.287 147.399 144.025 154.167 145.667"
                  stroke="#DBDCDA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M137.886 150.333C136.991 139.32 137.362 130.764 139 124.667"
                  stroke="#DBDCDA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M139 126.039C140.855 119.018 144.121 114.831 148.799 113.478C153.477 112.125 157.988 112.745 162.333 115.338C162.355 121.045 159.878 125.226 154.901 127.881C149.925 130.535 144.624 129.921 139 126.039Z"
                  fill="white"
                  stroke="#DBDCDA"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M138.757 124.8C139.729 116.415 137.781 110.51 132.913 107.083C128.044 103.657 122.406 102.892 115.999 104.788C114.88 112.522 116.59 118.371 121.13 122.333C125.67 126.296 131.546 127.118 138.757 124.8Z"
                  fill="white"
                  stroke="#DBDCDA"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          ) : (
            <>
              <div
                className={` ..6x03:hidden ${obj.isSlider ? '!hidden' : ''} ${
                  obj.fullImg ? '!hidden aboslute  image-container' : ''
                }`}
              >
                <Image
                  className=" object-cover image"
                  src={obj.img || treeN}
                  width={!obj.fullImg ? 218 : ''}
                  height={!obj.fullImg ? 218 : ''}
                />
              </div>
              {obj.isSlider ? (
                <>
                  <div className=" ..6x03:hidden  z-0  w-full overflow-hidden h-auto  ">
                    <Slider {...settings} className=" specialItemSliderBDots">
                      <Image className=" object-cover" src={obj.img || treeN} />

                      <Image className=" object-cover" src={obj.img || treeN} />
                      <Image className=" object-cover" src={obj.img || treeN} />
                      <Image className=" object-cover" src={obj.img || treeN} />
                    </Slider>
                  </div>

                  <div className=" hidden z-0  w-32 overflow-hidden h-32 ..6x03:block">
                    <Slider {...settings} className="specialItemSliderDots">
                      <Image
                        className=" object-cover"
                        src={obj.img || treeN}
                        width={130}
                        height={130}
                      />

                      <Image
                        className=" object-cover"
                        src={obj.img || treeN}
                        width={130}
                        height={130}
                      />
                      <Image
                        className=" object-cover"
                        src={obj.img || treeN}
                        width={130}
                        height={130}
                      />
                      <Image
                        className=" object-cover"
                        src={obj.img || treeN}
                        width={130}
                        height={130}
                      />
                    </Slider>
                  </div>
                </>
              ) : (
                <div className="z-0 hidden  w-32 h-32 ..6x03:block">
                  <Image
                    className=" object-cover"
                    src={obj.img || treeN}
                    width={130}
                    height={130}
                  />
                </div>
              )}
            </>
          )}

          <div
            className={`${obj.timeOver ? 'bottom-40' : ''} ${
              !obj.img ? '..6x5:bottom-36' : ''
            } ${
              obj.fullImg
                ? 'left-0 !bottom-36 ..6x03:!bottom-32 !-mb-0 z-0'
                : ''
            }  ${
              obj.isDetails
                ? '..6x1:!-mb-2  ..6x03:top-44 ..6x5:bottom-32 ..6x03:bottom-auto'
                : ''
            }  absolute bg-white py-1 bottom-36 ..6x03:bottom-28 flex flex-row justify-between items-end w-full mb-2 px-3    ..6x03:px-1    ${
              showSost ? '!bottom-40 ..6x3:!bottom-32 ..5x5:!bottom-36' : ''
            } ${
              showSost && obj.isSpecialProductDetail ? '..7x1:!bottom-32' : ''
            }`}
          >
            <div className="flex items-center cursor-pointer">
              {obj.iTab && (
                <p
                  onClick={showSlide}
                  className=" ..6x03:text-11px   text-13px font-normal font-montserrat flex   leading-140% text-black-70pe"
                >
                  <svg
                    className=" mr-1 "
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
                      stroke={`${showSost ? '#337202' : '#DBDCDA'} `}
                    />
                    <path
                      d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
                      fill={`${showSost ? '#337202' : '#DBDCDA'} `}
                    />
                  </svg>
                  Акции
                </p>
              )}
              {obj.isSost && (
                <>
                  <p
                    onClick={showActL}
                    className={` ..6x03:text-11px ..6x1:hidden   text-13px ${
                      obj.isDetails ? 'text-sm ' : ''
                    } font-normal font-montserrat flex items-center  leading-140% text-black-70pe`}
                  >
                    <svg
                      className={`mr-1 ${obj.isDetails ? 'mr-6px' : ''}`}
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
                        stroke={`${showActL ? '#337202' : '#DBDCDA'} `}
                      />
                      <path
                        d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
                        fill={`${showActL ? '#337202' : '#DBDCDA'} `}
                      />
                    </svg>
                    Состав набора
                  </p>
                  <p
                    onClick={showActL}
                    className={` text-11px ..6x1:flex hidden       font-normal font-montserrat   items-center  leading-140% text-black-70pe`}
                  >
                    <svg
                      className={`mr-2 -mt-1 ${obj.isDetails ? 'mr-6px' : ''}`}
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
                        stroke={`${showActL ? '#337202' : '#DBDCDA'} `}
                      />
                      <path
                        d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
                        fill={`${showActL ? '#337202' : '#DBDCDA'} `}
                      />
                    </svg>
                    Состав
                  </p>
                </>
              )}
            </div>
            {obj.balls ? (
              <div className="flex  flex-row items-center">
                {obj.isFirstFoliage && (
                  <svg
                    className="..5x2:h-3 mr-1 ..5x2:w-3"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
                      stroke="#337202"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
                      stroke="#337202"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.66667 9.33333L9 5"
                      stroke="#337202"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.66666 9.33333L5.33333 9"
                      stroke="#337202"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                <p className="mr-1 font-montserrat font-medium ..6x03:text-10px text-13px leading-140% text-black-70pe">
                  1.4 Б
                </p>
                {!obj.isFirstFoliage && (
                  <svg
                    className="..5x2:h-3 ..5x2:w-3"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
                      stroke="#337202"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
                      stroke="#337202"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.66667 9.33333L9 5"
                      stroke="#337202"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.66666 9.33333L5.33333 9"
                      stroke="#337202"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ) : (
              ''
            )}
          </div>

          {showAct && (
            <div
              className={`absolute ${
                obj.isSpecialProductDetail ? '..6x03:bottom-10' : ''
              }    bottom-12 -mb-1.5 z-10   left-0 right-0 ${
                isSearchItem ? '!bottom-9 ' : ''
              }`}
            >
              <div className="relative w-full ..6x4:px-7 py-6 px-11  bg-input-typing ..5x5:py-5px ..5x5:px-14 ..5x5:pt-5 pt-6">
                <Swiper
                  ref={slider}
                  slidesPerView={2}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiperAct"
                >
                  <SwiperSlide>
                    <div className="relative  rounded overflow-hidden itemSlideDrop">
                      <div className="absolute left-0 right-0 bottom-0 top-0 bg-white-60pe z-10 flex items-center justify-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
                            stroke="#C5C1AB"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <Image
                        src={srcSliderImgOne}
                        width={'100%'}
                        height={'100%'}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {' '}
                    <div className=" rounded overflow-hidden itemSlideDrop">
                      <Image
                        width={'100%'}
                        height={'100%'}
                        src={srcSliderImgTwo}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {' '}
                    <div className="ml-1.5 rounded overflow-hidden itemSlideDrop">
                      <Image
                        width={'100%'}
                        height={'100%'}
                        src={srcSliderImgTree}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative  rounded overflow-hidden itemSlideDrop">
                      <div className="absolute left-0 right-0 bottom-0 top-0 bg-white-60pe z-10 flex items-center justify-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
                            stroke="#C5C1AB"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <Image
                        src={srcSliderImgOne}
                        width={'100%'}
                        height={'100%'}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {' '}
                    <div className=" rounded overflow-hidden itemSlideDrop">
                      <Image
                        width={'100%'}
                        height={'100%'}
                        src={srcSliderImgTwo}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {' '}
                    <div className="ml-1.5 rounded overflow-hidden itemSlideDrop">
                      <Image
                        width={'100%'}
                        height={'100%'}
                        src={srcSliderImgTree}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <button
                  onClick={prevSlide}
                  className="!border-t-none absolute ..6x5:left-2 left-5 top-10"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 11.8167L7.16788 8L11 4.175L9.82024 3L4.8 8L9.82024 13L11 11.8167Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="!border-none absolute right-5 ..6x5:right-2 top-10"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 11.8167L8.83212 8L5 4.175L6.17976 3L11.2 8L6.17976 13L5 11.8167Z"
                      fill="black"
                      fillOpacity="0.7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {showSost && (
            <div
              className={`absolute bottom-12 !-mb-2 ..6x3:!bottom-10 ${
                obj.isSpecialProductDetail ? '..6x03:!bottom-11 !-mb-2.5' : ''
              } -mb-1.5 z-30 left-0   ..5x5:!bottom-14 right-0 ${
                isSearchItem ? '!bottom-9 ' : ''
              }`}
            >
              <div className="relative w-full ..7x001:px-2 ..6x04:px-10 ..6x6:px-7 ..7x1:px-5 px-6 bg-input-typing  py-6 pt-6 ..5x5:py-5px ..5x5:px-14 ..5x5:pt-5">
                <small className="absolute right-0 ..5x5:hidden left-0  text-11px text-center top-9px font-montserrat z-20">
                  Экономия при покупке в акции:
                </small>
                <small className="absolute right-0 ..5x5:block hidden left-0  text-10px text-center top-9px font-montserrat z-20">
                  Экономия{' '}
                </small>

                <Swiper
                  ref={slider}
                  breakpoints={{
                    600: {
                      slidesPerView: 3,
                    },
                    780: {
                      slidesPerView: 2,
                    },
                    800: {
                      slidesPerView: 3,
                    },
                  }}
                  slidesPerView={2}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper swiperAdapt mt-3 "
                >
                  <SwiperSlide>
                    {' '}
                    <div className="relative h-60px ..7x01:h-11 ..7x01:w-11 ..5x5:h-52px ..5x5:w-52px w-60px ml-1.5   mt-1 itemSlideDrop">
                      <div className="absolute left-0 right-0 bottom-0 top-0 rounded bg-white-60pe z-10 flex items-center justify-center">
                        <small className="absolute -left-1 -top-1 font-montserrat text-11px text-white bg-black-70pe px-1 rounded-xl">
                          400 ₽
                        </small>

                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
                            stroke="#C5C1AB"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <Image
                        src={srcSliderImgOne}
                        className="!rounded"
                        width={'100%'}
                        height={'100%'}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {' '}
                    <div className="relative ml-1.5 ..7x01:h-11 ..7x01:w-11 h-60px w-60px marker: mt-1 itemSlideDrop ..5x5:h-52px ..5x5:w-52px ">
                      <small className="absolute -left-1  -top-1 z-10 font-montserrat text-11px text-white bg-black-70pe px-1 rounded-xl">
                        700 ₽
                      </small>

                      <Image
                        className="rounded"
                        width={'100%'}
                        height={'100%'}
                        src={srcSliderImgTwo}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {' '}
                    <div className="relative ..7x01:h-11 ..7x01:w-11 ml-1.5 h-60px w-60px  mt-1 itemSlideDrop ..5x5:h-52px ..5x5:w-52px ">
                      <small className="absolute -left-1  -top-1 z-10 font-montserrat text-11px text-white bg-black-70pe px-1 rounded-xl">
                        700 ₽
                      </small>

                      <Image
                        width={'100%'}
                        className="rounded"
                        height={'100%'}
                        src={srcSliderImgTree}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {' '}
                    <div className="relative ..7x01:h-11 ..7x01:w-11 h-60px ..5x5:h-52px ..5x5:w-52px w-60px ml-1.5   mt-1 itemSlideDrop">
                      <div className="absolute left-0 right-0 bottom-0 top-0 rounded bg-white-60pe z-10 flex items-center justify-center">
                        <small className="absolute -left-1 -top-1 font-montserrat text-11px text-white bg-black-70pe px-1 rounded-xl">
                          400 ₽
                        </small>

                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
                            stroke="#C5C1AB"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <Image
                        src={srcSliderImgOne}
                        className="!rounded"
                        width={'100%'}
                        height={'100%'}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {' '}
                    <div className="relative ..7x01:h-11 ..7x01:w-11 ml-1.5 h-60px w-60px marker: mt-1 itemSlideDrop ..5x5:h-52px ..5x5:w-52px ">
                      <small className="absolute -left-1  -top-1 z-10 font-montserrat text-11px text-white bg-black-70pe px-1 rounded-xl">
                        700 ₽
                      </small>

                      <Image
                        className="rounded"
                        width={'100%'}
                        height={'100%'}
                        src={srcSliderImgTwo}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {' '}
                    <div className="relative ..7x01:h-11 ..7x01:w-11 ml-1.5 h-60px w-60px  mt-1 itemSlideDrop ..5x5:h-52px ..5x5:w-52px ">
                      <small className="absolute -left-1  -top-1 z-10 font-montserrat text-11px text-white bg-black-70pe px-1 rounded-xl">
                        700 ₽
                      </small>

                      <Image
                        width={'100%'}
                        className="rounded"
                        height={'100%'}
                        src={srcSliderImgTree}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <button
                  onClick={prevSlide}
                  className="absolute ..7x001:left-0 left-3 ..7x1:left-1 top-16 -mt-1 ..5x5:top-14 ..5x5:mt-0"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 11.8167L7.16788 8L11 4.175L9.82024 3L4.8 8L9.82024 13L11 11.8167Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute ..7x001:right-0 right-3 ..7x1:right-1 top-16 -mt-1 ..5x5:top-14 ..5x5:mt-0"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 11.8167L8.83212 8L5 4.175L6.17976 3L11.2 8L6.17976 13L5 11.8167Z"
                      fill="black"
                      fillOpacity="0.7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {obj.timeOver && (
            <div
              className={`w-full z-0 ${
                obj.fullImg ? '..6x5:!bottom-36' : ''
              } absolute bottom-32 left-0 pb-3 ${
                obj.timeCenter ? 'text-center' : ''
              } ${
                obj.isDetails ? '..6x1:pb-0 ..6x03:bottom-104px' : ''
              } px-2 z-20 `}
            >
              <p
                className={` ..6x1:text-center ..6x1:text-11px ..6x1:font-montserrat font-noto-sans text-sm font-light text-black-70pe`}
              >
                До {obj.timeOver}
              </p>
            </div>
          )}

          <div
            className={` ${
              !obj.img ? '..6x5:bottom-24' : ''
            } absolute bg-white bottom-20 px-2 ..6x03:px-0  ${
              obj.fullImg ? 'left-0' : ''
            } ..6x03:bottom-70px ${obj.isDetails ? '..6x03:bottom-60px' : ''}`}
          >
            <p
              className={` ..6x03:text-10px text-13px font-montserrat font-normal leading-150% text-center text-gray-quick-silver tracking-widest card_text uppercase ${
                obj.isDetails
                  ? 'text-start text-black ..6x1:text-center ..6x1:text-10px'
                  : ''
              }`}
            >
              {obj.text}
            </p>
          </div>
          {obj.DetailsPrice && (
            <div
              className={`flex ..6x1:bottom-10  ${
                obj.isDetails ? '..6x03:!bottom-6' : ''
              }  absolute bottom-11 left-0 pl-2 ..6x1:pl-0 right-0 w-full`}
            >
              <div className=" flex  ..6x1:justify-center flex-row font-montserrat w-full font-normal text-base mb-2 mt-1">
                <p className="text-center mr-2 ..6x1:text-11px font-montserrat text-gray-quick-silver line-through">
                  ₽ {obj.DetailsPrice.oldPrice}
                </p>
                <p className="text-center ..6x1:text-11px font-montserrat text-label-pink-2">
                  ₽ {obj.DetailsPrice.price}
                </p>
              </div>
            </div>
          )}

          {obj.colors && (
            <div className=" absolute bottom-36 flex flex-row justify-center items-center mt-0.5 ..6x03:bottom-16">
              <div
                onClick={() => currentColorHandler('1')}
                className={` bg-label-pink cursor-pointer ${
                  currentColor === '1'
                    ? 'w-10px h-10px ..5x2:h-2 ..5x2:w-2 border border-gray-border'
                    : 'w-2 h-2 ..5x2:h-6px ..5x2:w-6px'
                }  rounded-56px mx-1 `}
              ></div>
              <div
                onClick={() => currentColorHandler('2')}
                className={` bg-label-orange cursor-pointer ${
                  currentColor === '2'
                    ? 'w-10px h-10px border ..5x2:h-2 ..5x2:w-2 border-gray-border'
                    : 'w-2 h-2 ..5x2:h-6px ..5x2:w-6px'
                }  rounded-56px mx-1 `}
              ></div>
              <div
                onClick={() => currentColorHandler('3')}
                className={` bg-label-green cursor-pointer ${
                  currentColor === '3'
                    ? 'w-10px h-10px border border-gray-border ..5x2:h-2 ..5x2:w-2'
                    : 'w-2 h-2 ..5x2:h-6px ..5x2:w-6px'
                }  rounded-56px mx-1 `}
              ></div>
            </div>
          )}

          {obj.priceDe && (
            <div className={` absolute bottom-12 flex  items-center`}>
              <p className="text-label-orange font-montserrat text-center text-sm my-4 ..6x03:hidden">
                {obj.priceDe}
              </p>
              <p className=" ml-1 text-label-orange font-lora text-center text-sm my-4 ..6x03:hidden">
                De
              </p>
            </div>
          )}

          {obj.priceSale && (
            <div
              className={`${showSost ? '!opacity-0' : ''} ${
                obj.fullImg ? 'left-0 right-0 items-center' : ''
              } flex flex-col absolute bottom-10   ..6x03:bottom-8`}
            >
              <div className=" flex flex-row font-montserrat font-normal text-base ..6x03:text-11px mb-2 mt-1">
                <p className="text-center mr-2 text-gray-quick-silver line-through">
                  ₽ {obj.priceSale.old}
                </p>
                <p className="text-center text-label-pink-2">
                  ₽ {obj.priceSale.new}
                </p>
              </div>
            </div>
          )}

          {obj.price && (
            <div className="flex flex-col absolute bottom-9 ..6x03:bottom-8">
              <div className=" flex flex-row font-montserrat font-normal text-base ..6x03:text-11px mb-2 mt-1">
                <p className="text-center">₽ {obj.price}</p>
              </div>
            </div>
          )}

          {obj.priceDe && (
            <div className="sect_buttons absolute -bottom-0 left-0 flex-row hidden w-full">
              <button className="w-1/2 border-t hover:border-primary border-gray-light2 px-3 py-2.5 font-montserrat font-normal text-13px text-primary leading-150% hover:bg-primary hover:text-white ..5x03:text-10px">
                КУПИТЬ
              </button>
              <button className="w-1/2 border-t border-l border-gray-light2 px-3 py-2.5 font-montserrat leading-150% text-label-orange font-normal text-13px whitespace-nowrap hover:bg-label-orange hover:border-label-orange hover:text-white ..5x03:text-10px">
                КУПИТЬ ЗА <span className="font-lora">DE</span>
              </button>
            </div>
          )}

          {!obj.priceDe && !obj.DetailsPrice && (
            <div className="sect_buttons absolute bottom-0 left-0 flex-row hidden w-full">
              <button className="w-full border-t hover:border-primary border-gray-light2 px-3 py-2.5 font-montserrat font-normal text-13px text-primary leading-150% hover:bg-primary hover:text-white">
                КУПИТЬ
              </button>
            </div>
          )}
          {obj.DetailsPrice && (
            <div className="  absolute bottom-0 ..6x03:bottom-0 left-0 ..6x1:bottom-3  flex-row w-full">
              <button className="w-full ..6x1:hidden ..6x1:py-0  text-primary font-medium text-xs    px-3 py-2.5 font-montserrat   leading-150%  bg-gray-light2 h-11">
                КУПИТЬ
              </button>
              <button className="w-full ..6x1:h-8 hidden ..6x1:block ..6x1:py-0  text-primary font-medium text-xs    px-3 py-2.5 font-montserrat   leading-150%  bg-gray-light2 h-11">
                + Купить
              </button>
            </div>
          )}

          {obj.priceDe && !obj.isDetails && (
            <div className=" absolute bottom-0 left-0 flex-row hidden ..6x03:flex w-full">
              <button className="w-1/2 border  hover:border-primary border-r-0 border-gray-light2 px-3 py-2.5 font-montserrat font-medium text-xs text-primary leading-100%  hover:bg-primary hover:text-white">
                Купить
              </button>
              <button className="w-1/2 debuttonH border hover:border-label-orange border-gray-light2 px-3 py-2.5 font-lora leading-100% text-label-orange font-medium text-xs whitespace-nowrap  hover:bg-label-orange hover:text-white">
                374 De
              </button>
            </div>
          )}

          {!obj.priceDe && !obj.isDetails && (
            <div className=" absolute bottom-0 left-0 hidden ..6x03:block w-full">
              <button className="w-full hover:border-primary border border-gray-light2 px-3 py-2.5 font-montserrat font-medium text-xs text-primary leading-100% hover:bg-primary hover:text-white">
                Купить
              </button>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`border ${!src ? 'overflow-hidden' : ''} ${
          isSearchItem ? '!mt-0 border-l-0 !border-t-0 mt1px' : ''
        } border-gray mt-3  overflow-hidden ${ml ? 'ml-3 .2x1:!ml-0' : ''}`}
      >
        <div
          className={`flex justify-center w-52 h-80 items-center   transition-all `}
        >
          <div
            className={`  flex flex-col bg-white relative p-3 justify-around items-center `}
          >
            {!isSearchItem && (
              <div className="absolute top-10px left-3 z-10">
                <Image src={nabor} />
              </div>
            )}

            <div
              onMouseEnter={showHoverHeart}
              onMouseLeave={showHoverHeart}
              className={`absolute top-5 ..7x1:top-2 right-5 ..6x03:right-1 z-20 cursor-pointer ${
                isSearchItem ? '!top-6' : ''
              }`}
            >
              {liked ? (
                <svg
                  width="42"
                  height="38"
                  viewBox="0 0 42 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1939_1125459)">
                    <path
                      d="M25.5022 5.00001C24.6291 4.99851 23.7677 5.20077 22.9865 5.59072C22.2052 5.98066 21.5258 6.54752 21.0022 7.24621C20.293 6.30266 19.3051 5.606 18.1782 5.25482C17.0513 4.90365 15.8426 4.91573 14.7229 5.28936C13.6033 5.663 12.6295 6.37926 11.9393 7.3368C11.2492 8.29434 10.8776 9.44467 10.8772 10.625C10.8772 17.3621 20.2373 22.6813 20.6357 22.9044C20.7477 22.9671 20.8739 23 21.0022 23C21.1305 23 21.2567 22.9671 21.3687 22.9044C23.0902 21.8961 24.7059 20.7173 26.1914 19.3856C29.4665 16.438 31.1272 13.4905 31.1272 10.625C31.1255 9.13368 30.5323 7.70393 29.4778 6.6494C28.4233 5.59487 26.9935 5.0017 25.5022 5.00001Z"
                      fill="#FF6363"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1939_1125459"
                      x="0.877197"
                      y="0"
                      width="40.25"
                      height="38"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="5" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1939_1125459"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1939_1125459"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4578 19.1008L12.3542 19.2044L12.2403 19.1008C7.32207 14.6381 4.07084 11.6872 4.07084 8.69482C4.07084 6.62398 5.62398 5.07084 7.69482 5.07084C9.28937 5.07084 10.8425 6.10627 11.3913 7.51444H13.3172C13.8659 6.10627 15.4191 5.07084 17.0136 5.07084C19.0845 5.07084 20.6376 6.62398 20.6376 8.69482C20.6376 11.6872 17.3864 14.6381 12.4578 19.1008ZM17.0136 3C15.212 3 13.4828 3.83869 12.3542 5.15368C11.2256 3.83869 9.49646 3 7.69482 3C4.50572 3 2 5.49537 2 8.69482C2 12.5984 5.52044 15.7978 10.8529 20.6332L12.3542 22L13.8556 20.6332C19.188 15.7978 22.7084 12.5984 22.7084 8.69482C22.7084 5.49537 20.2027 3 17.0136 3Z"
                    fill={`${!liked && hoverHeart ? '#FF6363' : '#EDEEEC'}`}
                  ></path>
                </svg>
              )}
            </div>

            {!src ? (
              <svg
                width="278"
                height="238"
                viewBox="0 0 278 238"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1939_1032750"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="278"
                  height="238"
                >
                  <rect width="278" height="238" fill="white" />
                </mask>
                <g mask="url(#mask0_1939_1032750)">
                  <rect width="278" height="238" fill="#FCFDFB" />
                  <path
                    d="M123.833 146.834C128.695 144.744 133.274 143.617 137.57 143.452C141.867 143.287 147.399 144.025 154.167 145.667"
                    stroke="#DBDCDA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M137.886 150.333C136.991 139.32 137.362 130.764 139 124.667"
                    stroke="#DBDCDA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M139 126.039C140.855 119.018 144.121 114.831 148.799 113.478C153.477 112.125 157.988 112.745 162.333 115.338C162.355 121.045 159.878 125.226 154.901 127.881C149.925 130.535 144.624 129.921 139 126.039Z"
                    fill="white"
                    stroke="#DBDCDA"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M138.757 124.8C139.729 116.415 137.781 110.51 132.913 107.083C128.044 103.657 122.406 102.892 115.999 104.788C114.88 112.522 116.59 118.371 121.13 122.333C125.67 126.296 131.546 127.118 138.757 124.8Z"
                    fill="white"
                    stroke="#DBDCDA"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            ) : (
              <div className=" mt-4">
                <Image
                  className=" object-cover"
                  src={src || ''}
                  width={146}
                  height={146}
                />
              </div>
            )}

            <div
              className={`flex flex-row justify-between items-end w-full mb-1 ${
                showSost || showAct ? 'transform20px' : ''
              }`}
            >
              {isActions ? (
                <p
                  onClick={showSlide}
                  className="cursor-pointer text-sm flex items-center text-black-70pe font-montserrat"
                >
                  <svg
                    className="mr-2"
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
                      stroke={`${showSost ? '#337202' : '#DBDCDA'} `}
                    />
                    <path
                      d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
                      fill={`${showSost ? '#337202' : '#DBDCDA'} `}
                    />
                  </svg>
                  Акции
                </p>
              ) : (
                <p
                  onClick={showActL}
                  className="cursor-pointer text-sm flex items-center text-black-70pe font-montserrat"
                >
                  <svg
                    className="mr-2"
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
                      stroke={`${showAct ? '#337202' : '#DBDCDA'} `}
                    />
                    <path
                      d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
                      fill={`${showAct ? '#337202' : '#DBDCDA'} `}
                    />
                  </svg>
                  Состав
                </p>
              )}

              <div className="flex">
                <svg
                  width="16"
                  className="mr-1"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
                    stroke="#337202"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
                    stroke="#337202"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.66667 9.33333L9 5"
                    stroke="#337202"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.66666 9.33333L5.33333 9"
                    stroke="#337202"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-13px font-montserrat font-medium text-black-70pe ">
                  1.4 Б
                </p>
              </div>
            </div>

            {showAct && (
              <div
                className={`absolute   -mb-0.5 bottom-14  left-0 right-0 ${
                  isSearchItem ? '!bottom-9' : ''
                }`}
              >
                <div className="relative w-full h-24  px-11 bg-gray-light2 py-4 pt-6">
                  <Swiper
                    ref={slider}
                    slidesPerView={2}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiperAct"
                  >
                    <SwiperSlide>
                      <div className="relative  rounded overflow-hidden itemSlideDrop">
                        <div className="absolute left-0 right-0 bottom-0 top-0 bg-white-60pe z-10 flex items-center justify-center">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
                              stroke="#C5C1AB"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <Image
                          src={srcSliderImgOne}
                          width={'100%'}
                          height={'100%'}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {' '}
                      <div className=" rounded overflow-hidden itemSlideDrop">
                        <Image
                          width={'100%'}
                          height={'100%'}
                          src={srcSliderImgTwo}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {' '}
                      <div className="ml-1.5 rounded overflow-hidden itemSlideDrop">
                        <Image
                          width={'100%'}
                          height={'100%'}
                          src={srcSliderImgTree}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="relative  rounded overflow-hidden itemSlideDrop">
                        <div className="absolute left-0 right-0 bottom-0 top-0 bg-white-60pe z-10 flex items-center justify-center">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
                              stroke="#C5C1AB"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <Image
                          src={srcSliderImgOne}
                          width={'100%'}
                          height={'100%'}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {' '}
                      <div className=" rounded overflow-hidden itemSlideDrop">
                        <Image
                          width={'100%'}
                          height={'100%'}
                          src={srcSliderImgTwo}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {' '}
                      <div className="ml-1.5 rounded overflow-hidden itemSlideDrop">
                        <Image
                          width={'100%'}
                          height={'100%'}
                          src={srcSliderImgTree}
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <button
                    onClick={prevSlide}
                    className="absolute left-5 top-10"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 11.8167L7.16788 8L11 4.175L9.82024 3L4.8 8L9.82024 13L11 11.8167Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-5 top-10"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 11.8167L8.83212 8L5 4.175L6.17976 3L11.2 8L6.17976 13L5 11.8167Z"
                        fill="black"
                        fillOpacity="0.7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {showSost && (
              <div
                className={`absolute bottom-14 -mb-0.5  left-0 right-0 ${
                  isSearchItem ? '!bottom-9' : ''
                }`}
              >
                <div className="relative w-full  px-3 bg-gray-light2 py-4 pt-6">
                  <small className="absolute right-0 font-medium left-0 text-9px text-center top-6px font-montserrat z-20">
                    Экономия при покупке в акции:
                  </small>

                  <Swiper
                    ref={slider}
                    slidesPerView={3}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      {' '}
                      <div className="relative ml-1.5    mt-1 itemSlideDrop">
                        <div className="absolute left-0 right-0 bottom-0 top-0 rounded bg-white-60pe z-10 flex items-center justify-center">
                          <small className="absolute -left-1 -top-1 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl">
                            400 ₽
                          </small>

                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
                              stroke="#C5C1AB"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <Image
                          src={srcSliderImgOne}
                          className="!rounded"
                          width={'100%'}
                          height={'100%'}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {' '}
                      <div className="ml-1.5  marker: mt-1 itemSlideDrop">
                        <small className="absolute left-0.5 -top-0 z-10 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl">
                          700 ₽
                        </small>

                        <Image
                          className="rounded"
                          width={'100%'}
                          height={'100%'}
                          src={srcSliderImgTwo}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {' '}
                      <div className="ml-1.5   mt-1 itemSlideDrop">
                        <small className="absolute left-0.5 -top-0 z-10 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl">
                          300 ₽
                        </small>

                        <Image
                          width={'100%'}
                          className="rounded"
                          height={'100%'}
                          src={srcSliderImgTree}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {' '}
                      <div className="relative ml-1.5    mt-1 itemSlideDrop">
                        <div className="absolute left-0 right-0 bottom-0 top-0 rounded bg-white-60pe z-10 flex items-center justify-center">
                          <small className="absolute -left-1 -top-1 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl">
                            400 ₽
                          </small>

                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.91 7.91313H0.75V5.5925C0.75 5.01235 1.33 4.43219 1.91 4.43219H12.35C12.93 4.43219 13.51 5.01235 13.51 5.5925V7.91313H12.35M1.91 7.91313V13.7147C1.91 14.2948 2.49 14.875 3.07 14.875H11.19C11.77 14.875 12.35 14.2948 12.35 13.7147V7.91313M1.91 7.91313H12.35M7.13 4.43219L7.13 14.875M7.13 4.43219C6.35667 2.78841 4.752 0.139023 3.36 1.5314C1.968 2.92377 5.1 4.43219 7.13 4.43219ZM7.13 4.43219C7.13 1.82154 9.73999 0.081024 10.9 1.24131C12.35 2.69168 9.45 4.43213 7.13 4.43219Z"
                              stroke="#C5C1AB"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <Image
                          src={srcSliderImgOne}
                          className="!rounded"
                          width={'100%'}
                          height={'100%'}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {' '}
                      <div className="ml-1.5  marker: mt-1 itemSlideDrop">
                        <small className="absolute left-0.5 -top-0 z-10 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl">
                          700 ₽
                        </small>

                        <Image
                          className="rounded"
                          width={'100%'}
                          height={'100%'}
                          src={srcSliderImgTwo}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {' '}
                      <div className="ml-1.5   mt-1 itemSlideDrop">
                        <small className="absolute left-0.5 -top-0 z-10 font-montserrat text-10px text-white bg-black-70pe px-1 rounded-xl">
                          300 ₽
                        </small>

                        <Image
                          width={'100%'}
                          className="rounded"
                          height={'100%'}
                          src={srcSliderImgTree}
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0.5 top-11"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 11.8167L7.16788 8L11 4.175L9.82024 3L4.8 8L9.82024 13L11 11.8167Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0.5 top-11"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 11.8167L8.83212 8L5 4.175L6.17976 3L11.2 8L6.17976 13L5 11.8167Z"
                        fill="black"
                        fillOpacity="0.7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            <>
              <div className="mt-2 ">
                <p
                  className={`text-11px text-center text-black-70pe font-montserrat tracking-widest ${
                    isSearchItem ? 'dotsTextSearch' : ''
                  }`}
                >
                  ДЛЯ СЕНСАЦИОННОГО УВЛАЖНЕНИЯ И ВОССТАНОВЛЕНИЯ КОЖИ
                </p>
              </div>
              <div className={`mb-1 mt-1 ${isSearchItem ? '!mb-9' : ''}`}>
                <div className="flex flex-row">
                  <p className="text-center text-13px font-montserrat mr-2 text-gray-quick-silver line-through">
                    ₽ 920.00
                  </p>
                  <p className="text-center text-13px font-montserrat text-label-pink-2">
                    ₽ 764.00
                  </p>
                </div>
              </div>
            </>

            {isSearchItem ? (
              buttonDE ? (
                <div className="border-t -bottom-0.5 h-9 right-0 left-0 absolute border-gray ">
                  <button className="h-9 m-0 py-3 w-1/2 border-r border-gray font-montserrat text-xs font-medium text-primary">
                    Купить
                  </button>
                  <button className="h-9 m-0 py-3 w-1/2 font-montserrat text-xs font-medium text-label-orange">
                    374 De
                  </button>
                </div>
              ) : (
                <button className=" border-t h-9 py-3 font-montserrat font-medium text-xs text-primary border-gray absolute -bottom-0.5 right-0 left-0">
                  Купить
                </button>
              )
            ) : (
              <button className=" ..6x04:text-xs bg-gray-light2 text-primary py-10px px-9 font-montserrat font-medium whitespace-nowrap   hover:text-white text-xs hover:bg-primary transition-all cursor-pointer">
                + Добавить в заказ
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
