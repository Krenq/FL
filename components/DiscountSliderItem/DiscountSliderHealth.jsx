import Image from 'next/image';
import bg from '../../images/templates/bgSlider.png'


const DiscountSliderHealth = ({ imgProd, img, title, isMedium, subTitle, bgGradient, desc, noItalic, onlyCat }) => {
	return (
		<>
			<section className="w-full  ..5x2:h-auto ..5x2:w-full  h-800px discSlider">
				<div className="flex h-full   ..5x2:flex-col">
					<div className="discountImgWrap w-50%  h-full  ..5x2:w-full ..5x2:bg-no-repeat ..5x2:bg-cover relative flex justify-center">

						<Image
							className=" absolute left-0 top-0 object-cover "
							src={bg}

							alt="discountImg"

						/>

						<div className='absolute ..7x11:top-0 ..7x230:p-6 ..7x11:p-3 right-16 headerAbility  ..5x2:w-auto ..5x5:top-10 top-80px w-650 .3x1:-right-14 .2x1.0:-right-44 .5x1:right-0'>
							<p className='font-montserrat font-medium .2x1.0:text-xl ..6x3:text-base text-26px   text-primary'>{subTitle}</p>
							<p className={`${isMedium ? 'font-medium' : ""} ${bgGradient ? 'bgLIN .5x1:!w-full text-white font-medium px-3' : ""} ..6x3:text-22px ..7x11:-mt-2 .2x1.0:text-2xl .5x1:text-4xl .5x1:py-7 .2x1.0:py-2 font-montserrat font-semibold text-52px italic ${noItalic ? 'not-italic	' : ''} tracking-tighter leading-150%`}>{title}</p>
							<p className={`${bgGradient ? '..5x2:!mt-2' : ''} font-montserrat text-22px text-black-70pe mt-6 ..7x11:-mt-1 .2x1.0:mb-10 ..5x2:leading-140% .5x1:mt-1 mb-14 ..6x3:mb-3 ..6x3:text-13px .2x1.0:text-base ..7x11:w-auto .2x1.0:w-428px`}>{desc}
							</p>
							<div className='flex'>
								<button className='mr-6 h-52px ..6x3:!mr-2 ..6x3:text-xs .2x1.0:h-11 ..6x3:h-8 flex items-center justify-center bg-primary px-9 ..5x2:px-5 font-montserrat font-medium text-xs text-white'>Каталог</button>
								{!onlyCat && <button className='h-52px .2x1.0:h-11 ..6x3:text-xs ..6x3:h-8 flex items-center justify-center px-8 font-montserrat font-medium text-xs text-primary border border-primary '>О нас</button>
								}
							</div>
						</div>
					</div>
					<div className="discountImgWrap   cartI cartinka w-50%  ..5x2:w-full  ">
						<Image
							className=" object-cover "
							src={img}

							alt="discountImg"
							quality={100}
						/>
					</div>
				</div>
			</section>


		</>
	)
}
export default DiscountSliderHealth