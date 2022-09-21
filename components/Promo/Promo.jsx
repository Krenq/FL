import Image from "next/image"
import bg from '../../images/templates/bgL.jpg'
import itemleas from '../../images/templates/itemleas.png'


const Promo = () => {
	return (
		<div className="relative promo">
			<div className="absolute ">
				<Image className="object-cover" src={bg} alt="specialOffersImg" />

			</div>
			<div className="absolute right-40 top-40">
				<div className="bg-gray px-4 py-2 text-lg moreP rounded-full absolute cursor-pointer hover:text-white hover:bg-nude-3">+
					<section className="absolute hidden text-black -top-52  rounded-lg w-410px p-6 rounded-xlbg-white info cursor-default">
						<span className="flex">
							<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
							</svg>
							<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
							</svg>
							<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
							</svg>
							<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
							</svg>
							<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.00001 1.3335L9.49677 5.94005H14.3404L10.4218 8.78706L11.9186 13.3936L8.00001 10.5466L4.08144 13.3936L5.5782 8.78706L1.65963 5.94005H6.50325L8.00001 1.3335Z" stroke="#337202" />
							</svg>
						</span>
						<div className="flex">
							<p className="font-bold text-lg w-72 mt-3">Шампунь - активатор роста Bio Rehab</p>
							<div>
								<p className="text-label-pink-2 text-lg mt-3">₽ 764.00</p>
								<p className="text-black text-lg line-through">₽ 764.00</p>
							</div>
						</div>
						<div className="flex justify-between">
							<p className="text-black-70pe text-base">Сила - в длине</p>
							<p className="text-lg text-label-orange mr-2">64 De</p>
						</div>
						<div className="flex justify-between items-center mt-3 ">
							<button className="font-medium text-base relative z-10 hover:text-primary transition-all">Подробнее<div className="bg-primary absolute bottom-1 opacity-40 h-6px w-full"></div></button>
							<button className="text-sm px-4 py-3 text-primary bg-gray flex items-center  transition-all hover:opacity-50"><svg className="mr-2" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.50016C6.8494 2.50016 5.91667 3.4329 5.91667 4.5835V5.00016H10.0833V4.5835C10.0833 3.4329 9.1506 2.50016 8 2.50016ZM11.75 5.00016V4.5835C11.75 2.51243 10.0711 0.833496 8 0.833496C5.92893 0.833496 4.25 2.51243 4.25 4.5835V5.00016H2.16667C1.24619 5.00016 0.5 5.74635 0.5 6.66683V17.5002C0.5 18.4206 1.24619 19.1668 2.16667 19.1668H13.8333C14.7538 19.1668 15.5 18.4206 15.5 17.5002V6.66683C15.5 5.74635 14.7538 5.00016 13.8333 5.00016H11.75ZM10.0833 6.66683V7.50016C10.0833 7.9604 10.4564 8.3335 10.9167 8.3335C11.3769 8.3335 11.75 7.9604 11.75 7.50016V6.66683H13.8333V17.5002H2.16667V6.66683H4.25V7.50016C4.25 7.9604 4.6231 8.3335 5.08333 8.3335C5.54357 8.3335 5.91667 7.9604 5.91667 7.50016V6.66683H10.0833Z" fill="#337202" />
							</svg> Добавить в корзину</button>
						</div>
					</section>
				</div>
				<Image className="object-cover z-20 " src={itemleas} alt="specialOffersImg" />
			</div>

			<div className="absolute top-20 left-40 text-white">
				<p className="text-6xl">Скидка 20% по <br /> промокоду «Click»</p>
				<p className="mt-6 font-medium text-xl">На аквагель для лица серии «FreshClick»</p>
				<div>
					<button className="border-2 border-gray bg-gray mt-8 text-gray-quick-silver px-24 py-5">CLICK</button>
					<button className=" border-2 border-gray px-10 py-5 relative"> <svg className="absolute top-6 left-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_2388_695761)">
							<mask id="mask0_2388_695761" maskUnits="userSpaceOnUse" x="2" y="2" width="16" height="16">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50031 2.5H16.0003C16.8646 2.5 17.5004 3.13579 17.5004 4.00001V11.5C17.5004 12.3643 16.8646 13 16.0003 13H13V16C13 16.8642 12.3643 17.5 11.5 17.5H4.00001C3.13579 17.5 2.5 16.8642 2.5 16V8.49993C2.5 7.63571 3.13579 6.99992 4.00001 6.99992H7.0003V4.00001C7.0003 3.13579 7.63609 2.5 8.50031 2.5ZM7.0003 8.49993H4.00001V16H11.5V13H8.50031C7.63609 13 7.0003 12.3643 7.0003 11.5V8.49993ZM8.49959 3.9999V11.4999H15.9996V3.9999H8.49959Z" fill="white" />
							</mask>
							<g mask="url(#mask0_2388_695761)">
								<rect x="0.999603" y="1.0001" width="18.0001" height="18.0001" fill="white" />
							</g>
						</g>
						<defs>
							<clipPath id="clip0_2388_695761">
								<rect width="20" height="20" fill="white" />
							</clipPath>
						</defs>
					</svg>
						Copy HTML</button>
				</div>
				<div className="flex mt-20 timer pl-80 pr-40 pt-6 pb-6 timer__wrapper" >
					<div className="mr-3 flex flex-col items-center">
						<div className="font-bold text-5xl mr-20 mb-4">17</div>
						<div className="mr-20">DAYS</div>
					</div>
					<div className="mr-3 flex flex-col items-center">
						<div className="font-bold text-5xl mr-20 mb-4">05</div>
						<div className="mr-20">HOURS</div>
					</div>
					<div className="mr-3 flex flex-col items-center">
						<div className="font-bold text-5xl mr-20 mb-4">32</div>
						<div className="mr-20">MINS</div>
					</div>
					<div className="mr-3 flex flex-col items-center">
						<div className="font-bold text-5xl mb-4">00</div>
						<div>SECS</div>
					</div>

				</div>
			</div>


		</div>
	)
}
export default Promo