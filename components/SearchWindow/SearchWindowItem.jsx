import Image from "next/image"
import one from '../../images/templates/basket1.png'
const SearchWindowItem = ({ sale, price, oldPrice, priceDe, like, counter }) => {
	return (
		<div className='bg-white p-4 items-center flex relative'>
			<div className='w-24 h-24'>
				<Image src={one} className='pr-7' />
			</div>

			<div className=" flex items-center bg-white-80pe absolute top-5 left-5 pr-2">
				<svg className='mr-1'
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
						stroke="#5D986A"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
						stroke="#5D986A"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M8.66667 9.33333L9 5"
						stroke="#5D986A"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M8.66666 9.33333L5.33333 9"
						stroke="#5D986A"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<p className="text-13px  font-medium text-black-70pe">1.2 Б</p>
			</div>

			<div>
				<div className='flex'>
					<small className=" font-noto-sans font-medium text-10px ..6x03:text-9px border px-1.5 py-0.5 ..6x03:py-0 ..6x03:px-1 leading-120% border-gray-quick-silver">
						NEW
					</small>
					<small className=" bg-label-yellow ml-1 text-10px font-noto-sans font-medium text-xs ..6x03:text-9px leading-120% px-2 py-1 ..6x03:px-2 ..6x03:py-0.5">
						HIT!
					</small>

					<p className='text-13px text-black ml-1'>Товар дня</p>
				</div>
				<p className='text-11px text-black-70pe tracking-widest mt-1'>ВОССТАНОВЛЯЮЩИЙ <br /> ШАМПУНЬ С ЭКСТРАКТОМ <br /> ЖЕНЬШЕНЯ </p>
				<p className='text-13px text-gray-quick-silver'>Артикул: 2 0 11 5</p>
			</div>
			<div className='ml-20 '>
				<div className='flex mb-1'>
					{sale && <small className="font-noto-sans bg-label-pink-2 border-2 border-label-pink-2 text-white  font-medium ..6x03:text-9px text-xs leading-120% ..6x03:px-1 ..6x03:py-0 px-1 py-0.5 ">
						-{sale}%
					</small>}

					<p className={`text-13px ${sale ? 'text-black' : ""} text-label-pink-2 ml-1 mt-1`}>{price} ₽</p>
				</div>
				<div className="flex flex-row items-center">
					<p className="text-center text-sm mr-2 text-gray-quick-silver line-through">
						{oldPrice} ₽
					</p>
					<p className="  border-gray-light2  text-13px font-lora leading-100% text-label-orange font-medium   whitespace-nowrap  hover:bg-label-orange hover:text-white">
						{priceDe} De
					</p>
				</div>
				<div>
					<div className='flex mt-3'>
						{counter ? <div className='border h-8 px-0.5 flex items-center border-gray'>
							<svg className='mr-1.5' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14.25 9.75H3.75V8.25H14.25V9.75Z" fill="#949792" />
							</svg>
							<p className='text-sm font-semibold font-montserrat'>1</p>
							<svg className='ml-1.5' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14.25 9.75H9.75V14.25H8.25V9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75Z" fill="black" fill-opacity="0.7" />
							</svg>
						</div> : ''}

						<div className='flex items-center'>
							{like ? <svg className='ml-3' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3.68835 10.7893L8.16221 15.6052C9.15456 16.6734 10.8454 16.6734 11.8378 15.6052L16.3117 10.7893C17.8961 9.08366 17.8961 6.31832 16.3117 4.6127C14.7272 2.90709 12.1583 2.90709 10.5738 4.6127C10.264 4.94622 9.73604 4.94622 9.42621 4.6127C7.84175 2.90709 5.27282 2.90709 3.68835 4.6127C2.10388 6.31832 2.10388 9.08366 3.68835 10.7893Z" fill="white" stroke="#DBDCDA" />
							</svg> : ""}

							<svg className='ml-3' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.33264 8.8199C4.24329 7.65831 5.16173 6.6665 6.32675 6.6665H13.6739C14.8389 6.6665 15.7574 7.65831 15.668 8.8199L15.1424 15.6532C15.0622 16.6952 14.1933 17.4998 13.1483 17.4998H6.85239C5.80732 17.4998 4.93843 16.6952 4.85828 15.6532L4.33264 8.8199Z" stroke="#DBDCDA" />
								<path d="M16.25 4.1665H3.75" stroke="#DBDCDA" strokeLinecap="round" />
								<path d="M8.33301 2.6665C8.33301 2.11422 8.78072 1.6665 9.33301 1.6665H10.6663C11.2186 1.6665 11.6663 2.11422 11.6663 2.6665V4.1665H8.33301V2.6665Z" stroke="#DBDCDA" />
							</svg>
						</div>

					</div>
				</div>
			</div>


		</div>
	)
}
export default SearchWindowItem