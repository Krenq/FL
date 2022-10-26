import Image from 'next/image';
import one from '../../images/templates/rembg.png';
import two from '../../images/templates/2rembg.png';

function Clubs({ refL }) {
	return (
		<section ref={refL} id='sec-13' className="relative bg-nude-2 mt-16 .1x1:mt-14">
			<div className="absolute right-0 bottom-0 ..5x2:-bottom-10   ..5x2:w-40 ..5x2:h-40 .4x1:-bottom-32">
				<Image className="object-cover " src={one} width={486} height={486} alt="specialOffersImg" />
			</div>
			<div className="absolute left-0 bottom-0 ..5x2:-left-7 ..5x2:-top-0 ..5x2:w-40 ..5x2:h-40 .4x1:-bottom-32">
				<Image className="object-cover " width={357} height={357} src={two} alt="specialOffersImg" />
			</div>



			<div>
				<p className='font-lora  border-white text-white pt-7 top-8 pb-7 px-6 ..5x2:text-4xl absolute headerAbility border-4 rounded-50 border-dashed'>De</p>
			</div>

			<p className="text-26px font-montserrat font-medium pt-32 absolute -top-14 left-1/2 ability ..5x2:text-16px w-full text-center">
				Программа лояльности
			</p>
			<p className="ability w-full left-1/2 absolute text-32px italic   font-montserrat font-medium ..5x2:top-24    text-center ..5x2:text-22px  ">
				ВСТУПАЙ В КЛУБ
			</p>
			<p className="..5x2:hidden pt-32 text-18px font-montserrat font-normal text-center mt-4 pb-48 ..5x2:text-13px">
				Покупай любимые продукты, зарабатывай DeCoins, оплачивай <br /> ими
				следующие заказы!
			</p>
			<p className="hidden ..5x2:block pt-36 text-18px font-montserrat font-normal px-3 text-center   pb-44 ..5x2:text-13px">
				Покупай любимые продукты, зарабатывай DeCoins, оплачивай ими
				следующие заказы!
			</p>
			<div className="..6x2:w-full ..6x2:flex ..6x2:justify-center ..7x001:ml-2 absolute left-1/2 ability z-10 bottom-20 ..5x2:bottom-28">
				<button className="mr-4 ..7x11:text-10px border-2 py-3 px-6 text-white bg-primary border-primary transition-all font-montserrat ..5x2:py-10px ..5x2:px-5 ..5x2:text-xs hover:bg-white hover:text-primary ">
					Вступить в клуб
				</button>
				<button className="mr-4 ..7x11:text-10px border py-3 px-6 text-primary bg-white border-primary transition-all font-montserrat font-medium hover:bg-primary hover:text-white ..5x2:py-10px ..5x2:px-8 ..5x2:text-xs">
					Подробнее
				</button>
			</div>
		</section>
	);
}
export default Clubs;
