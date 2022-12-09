import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import one from '../../images/templates/seeMoreOneI.jpg'
import oneHoriz from '../../images/templates/horizOne.jpg'
import { useState } from "react";
const ViewPhoto = ({ isShow, close }) => {
	const slider = useRef(null)
	const [currentSlide, setCurrentSlide] = useState(1),
		[allSlides, setAllSlides] = useState(0)
	const nextSlide = () => {
		if (slider.current !== null && slider.current.swiper !== null) slider.current.swiper.slideNext();
	},
		prevSlide = () => {
			if (slider.current !== null && slider.current.swiper !== null) slider.current.swiper.slidePrev();
		}

	const imagesDots = [
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,
		oneHoriz,

		oneHoriz

	]

	return (
		<section className={`fixed left-0 right-0 z-100 bottom-0 top-0 bg-white ${isShow ? 'block' : "hidden"}`}>
			<div className="h-full relative    ">
				<div className="absolute left-80px ..5x2:hidden z-10 top-41px">
					<svg width="148" height="60" viewBox="0 0 148 60" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_2408_1343657)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M138.276 1.11357C138.943 1.10696 139.598 1.29026 140.164 1.64203C140.718 1.97924 141.171 2.45818 141.477 3.02926C141.801 3.63251 141.97 4.3072 141.967 4.99214C141.971 5.68923 141.802 6.37641 141.477 6.99277C141.172 7.56402 140.722 8.04553 140.174 8.38943C139.607 8.73902 138.951 8.91611 138.285 8.89903C137.631 8.90544 136.986 8.73305 136.422 8.40045C135.858 8.06784 135.396 7.58765 135.085 7.01165C134.759 6.41224 134.59 5.74029 134.594 5.0582C134.589 4.36097 134.758 3.67351 135.085 3.05757C135.395 2.48694 135.847 2.0059 136.397 1.66091C136.965 1.31198 137.619 1.12892 138.285 1.13244L138.276 1.11357ZM138.276 0.528466C137.486 0.524112 136.71 0.732776 136.029 1.13244C135.376 1.52525 134.834 2.07724 134.452 2.73672C134.063 3.42805 133.858 4.20811 133.858 5.00158C133.858 5.79505 134.063 6.57512 134.452 7.26645C134.829 7.93741 135.377 8.49633 136.04 8.886C136.704 9.27567 137.459 9.48208 138.229 9.48412C139 9.48905 139.758 9.28556 140.423 8.89517C141.087 8.50479 141.634 7.94203 142.005 7.26645C142.395 6.57512 142.6 5.79505 142.6 5.00158C142.6 4.20811 142.395 3.42805 142.005 2.73672C141.634 2.07868 141.101 1.5264 140.457 1.13244C139.786 0.733335 139.019 0.524518 138.238 0.528466H138.276ZM136.482 7.84209H137.228V5.33187H137.936C138.219 5.32403 138.495 5.42156 138.71 5.60554C138.919 5.84587 139.057 6.1402 139.107 6.45487C139.182 6.82291 139.248 7.11546 139.314 7.39856C139.355 7.56425 139.412 7.72548 139.484 7.87984H140.296C140.205 7.69762 140.138 7.50403 140.098 7.30419C140.023 7.03052 139.938 6.70022 139.843 6.29443C139.79 6.02632 139.687 5.77038 139.541 5.53949C139.41 5.34797 139.222 5.20268 139.003 5.12426C139.301 5.00654 139.564 4.81494 139.768 4.56749C139.982 4.30019 140.095 3.96622 140.089 3.62379C140.087 3.40727 140.046 3.19289 139.966 2.99151C139.887 2.8146 139.775 2.65444 139.635 2.51966C139.44 2.34895 139.207 2.22618 138.956 2.16107C138.629 2.07882 138.292 2.04073 137.955 2.04781C137.703 2.04781 137.448 2.04781 137.19 2.04781C136.935 2.04781 136.718 2.10444 136.52 2.14219V7.85153L136.482 7.84209ZM137.228 2.65178V4.76565H137.993C138.334 4.78283 138.669 4.67551 138.937 4.46368C139.054 4.36903 139.147 4.24766 139.208 4.10975C139.269 3.97184 139.295 3.82138 139.286 3.67097C139.298 3.5143 139.271 3.35715 139.206 3.21378C139.142 3.07041 139.043 2.94535 138.918 2.84996C138.641 2.6614 138.308 2.57164 137.974 2.59516H137.521L137.237 2.64234L137.228 2.65178ZM0 35.917L5.16434 35.7377V28.9148H8.11945V35.615L14.6339 35.3885V37.8704L8.11945 37.559V50.4215C8.11945 56.0082 10.0077 58.4335 14.6339 57.9711V59.481C9.11077 59.481 5.19267 57.5936 5.19267 50.431V37.3891L0.0283225 37.1438V35.917H0ZM19.7699 28.9148H22.6967V32.2649H19.7699V28.9148ZM19.7699 35.5867H22.6967V59.3866H19.7699V35.5867ZM57.5347 35.5867H60.4615V40.4656C64.0397 32.3876 78.853 32.916 78.853 45.5049V59.3866H75.9356V45.42C75.9356 34.9638 62.8596 34.0956 60.4615 43.9383V59.3866H57.5347V35.5867ZM108.111 50.7801C109.902 49.1794 111.488 47.3631 112.832 45.3728L147.519 45.8163V43.0701L141.524 43.1928C136.652 32.0195 126.418 28.3391 117.685 30.2359C117.685 29.6886 117.685 29.1412 117.685 28.5845C117.685 11.8528 102.881 0 84.6404 0V59.5753C92.1446 59.4619 99.4448 57.1161 105.609 52.8374C112.662 60.8871 130.024 62.5669 139.116 52.4127L138.418 51.8088C129.713 59.5659 115.268 59.8301 108.14 50.799L108.111 50.7801ZM103.476 44.0044L97.5466 44.1365V45.1746L110.321 45.335C107.822 48.902 104.511 51.8236 100.659 53.8583C96.8078 55.8931 92.5274 56.9826 88.1715 57.0368L88.0299 3.24631C102.428 4.05788 114.815 17.0242 114.815 30.8399V31.0947C111.979 32.1067 109.45 33.8267 107.467 36.0912C105.484 38.3557 104.113 41.0895 103.485 44.0327L103.476 44.0044ZM137.568 43.2778L113.757 43.7874C115.723 40.3522 116.972 36.5545 117.43 32.6235C124.803 30.9626 133.376 33.5672 137.568 43.2778ZM114.711 33.4539C114.349 37.1205 113.189 40.6635 111.312 43.8346L104.779 43.9667C105.855 39.1727 109.811 35.3413 114.711 33.4445V33.4539ZM30.6839 47.4206C30.6839 53.9415 34.6398 58.3014 39.6342 58.3014C44.6286 58.3014 49.1226 53.5074 49.1226 47.4206C49.1226 41.3338 44.572 37.04 39.6342 37.04C35.3951 37.04 30.6839 40.8147 30.6839 47.4206ZM51.785 59.3866H48.9055V54.319C47.2533 57.8389 43.0519 59.9811 39.5492 59.9811C32.8743 59.9811 27.4173 55.4986 27.4173 47.43C27.3684 45.8177 27.6477 44.2123 28.2383 42.7111C28.8288 41.2099 29.7183 39.8443 30.8528 38.6971C31.9873 37.5499 33.3431 36.645 34.838 36.0373C36.3329 35.4297 37.9357 35.1319 39.5492 35.162C41.4483 35.1361 43.3193 35.6219 44.9657 36.5684C46.612 37.515 47.973 38.8872 48.9055 40.5411V35.5772H51.8228L51.785 59.3866Z" fill="#337202" />
						</g>
						<defs>
							<clipPath id="clip0_2408_1343657">
								<rect width="148" height="60" fill="white" />
							</clipPath>
						</defs>
					</svg>

				</div>
				<div onClick={close} className={`absolute cursor-pointer .4x2:right-28 z-10 ..5x2:right-4 ..5x2:top-4 top-60px right-230px  `}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M19 5L5 19M5 5L19 19" stroke="black" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" />
				</svg>
				</div>

				<div className="relative">
					<div className="absolute ..5x2:right-1/2 ..7x001:bottom-10 w-20 ability1000  ..5x2:w-20 ..5x2:bg-white ..5x2:text-13px ..5x2:text-black .6x3:right-460px .5x01:right-390px .2x1:right-180px right-531px text-white text-base bottom-0 flex justify-center items-center px-4 font-montserrat font-semibold z-10 bg-black-70pe h-8 ">
						{currentSlide} / {allSlides}
					</div>
					<Swiper onSwiper={(arg) => setAllSlides(arg.imagesLoaded / 2)} onSlideChange={(arg) => setCurrentSlide(arg.snapIndex + 1)} ref={slider} slidesPerView={1} className=' '  >

						<SwiperSlide className="flex justify-center mt-60px ..5x2:mt-100px ">

							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>




						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px ..5x2:mt-100px ">

							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>




						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px ..5x2:mt-100px ">

							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>




						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px ..5x2:mt-100px ">

							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>




						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px ..5x2:mt-100px ">

							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>




						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px ..5x2:mt-100px ">

							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>




						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
						<SwiperSlide className="flex justify-center mt-60px  ..5x2:mt-100px">



							<div className="..5x2:!w-379px ..5x2:!h-379px">
								<Image src={one} />
							</div>


						</SwiperSlide>
					</Swiper>
				</div>

				<button onClick={prevSlide} className='..5x2:hidden .4x2:left-28  absolute  file:placeholder: transition-all rounded-2xl    left-246px     top-460px   z-10'>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.5 17.725L10.7518 12L16.5 6.2625L14.7304 4.5L7.2 12L14.7304 19.5L16.5 17.725Z" fill={`${false ? 'white' : "black"}`} fillOpacity="0.7" />
					</svg>
				</button>
				<button onClick={nextSlide} className='..5x2:hidden .4x2:right-28    absolute     transition-all rounded-2xl right-246px   top-460px z-10'>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.5 17.725L13.2482 12L7.5 6.2625L9.26964 4.5L16.8 12L9.26964 19.5L7.5 17.725Z" fill={`${false ? 'white' : "black"}`} fillOpacity="0.7" />
					</svg>

				</button>

				<div className="absolute overflow-x-auto whitespace-nowrap left-0 z-10  flex justify-center items-center right-0 bottom-0 bg-gray-light2 h-120px">

					{imagesDots.map((image, i) => <div key={i} onClick={() => slider.current.swiper.slideTo(i)} className={`px-1.5 w-104px h-24 cursor-pointer ${i === currentSlide - 1 ? 'border-t-4 h-28 border-primary pt-3 -mt-4' : ""}`}>
						<Image src={image} />
					</div>)}



				</div>
			</div >
		</section >
	)
}
export default ViewPhoto