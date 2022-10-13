import Image from "next/image"
import { useState } from "react"
import cont from '../../images/templates/country.png'
import SetLocationItem from "../SetLocationItem/SetLocationItem"

const SetLocation = ({ showL, setShowL }) => {
	const [show, setShow] = useState(false)



	const handleSetShow = () => setShow(!show),
		handleSetShowLocal = () => setShowL(!showL)

	return (
		<>
			<div className={`fixed top-0 right-0 left-0 bottom-0 z-50 bg-white opacity-80 cursor-pointer ${showL ? 'block' : "hidden"}`} onClick={handleSetShowLocal}></div>
			<section className={`px-8 bg-white py-6 bottom-0 w-460px fixed left-0 top-20 z-100 ${showL ? "block" : "hidden"}`}>
				<div className="relative h-full">
					<p className="flex text-primary-active  items-center">
						<svg width="10" className="mr-1" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.9 3.15C5.36413 3.15 5.80925 3.33437 6.13744 3.66256C6.46563 3.99075 6.65 4.43587 6.65 4.9C6.65 5.12981 6.60474 5.35738 6.51679 5.5697C6.42884 5.78202 6.29994 5.97493 6.13744 6.13744C5.97493 6.29994 5.78202 6.42884 5.5697 6.51679C5.35738 6.60474 5.12981 6.65 4.9 6.65C4.43587 6.65 3.99075 6.46563 3.66256 6.13744C3.33437 5.80925 3.15 5.36413 3.15 4.9C3.15 4.43587 3.33437 3.99075 3.66256 3.66256C3.99075 3.33437 4.43587 3.15 4.9 3.15ZM4.9 0C6.19956 0 7.44589 0.516249 8.36482 1.43518C9.28375 2.3541 9.8 3.60044 9.8 4.9C9.8 8.575 4.9 14 4.9 14C4.9 14 0 8.575 0 4.9C0 3.60044 0.516249 2.3541 1.43518 1.43518C2.3541 0.516249 3.60044 0 4.9 0ZM4.9 1.4C3.97174 1.4 3.0815 1.76875 2.42513 2.42513C1.76875 3.0815 1.4 3.97174 1.4 4.9C1.4 5.6 1.4 7 4.9 11.697C8.4 7 8.4 5.6 8.4 4.9C8.4 3.97174 8.03125 3.0815 7.37487 2.42513C6.7185 1.76875 5.82826 1.4 4.9 1.4Z" fill="#3E7E0B" />
						</svg>

						Москва
					</p>
					<p className="text-2xl mt-6">Выберите страну</p>

					<div className="relative w-full mt-3 text-left">

						<button type="button" onClick={handleSetShow} className="w-full   justify-between items-center flex border-gray-smart border-2 bg-white px-4 py-3 text-sm font-medium " id="menu-button" aria-expanded="true" aria-haspopup="true">

							<p className="flex items-center ">
								<Image
									src={cont}
									className={`rounded-56px`}

									alt="no image"
								/>
								<span className="ml-1">Российская Федерация</span>

							</p>


							<svg className={`-mr-1 ml-2 h-5 w-5 ${show ? 'activeArrow' : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"  >
								<path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
							</svg>
						</button>



						<div className={`absolute left-0 z-10 -mt-1 w-full bg-white shadow-lg border-2   border-gray-smart ${show ? "block" : "hiddenCustom"}`} role="menu"  >
							<div className="relative">
								<svg className="absolute top-3 left-4" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M2.25 8.16667C2.25 4.89898 4.89898 2.25 8.16667 2.25C11.4344 2.25 14.0833 4.89898 14.0833 8.16667C14.0833 11.4344 11.4344 14.0833 8.16667 14.0833C4.89898 14.0833 2.25 11.4344 2.25 8.16667ZM8.16667 0.75C4.07055 0.75 0.75 4.07055 0.75 8.16667C0.75 12.2628 4.07055 15.5833 8.16667 15.5833C9.9446 15.5833 11.5764 14.9577 12.854 13.9147L15.9697 17.0303C16.2626 17.3232 16.7374 17.3232 17.0303 17.0303C17.3232 16.7374 17.3232 16.2626 17.0303 15.9697L13.9147 12.854C14.9577 11.5764 15.5833 9.9446 15.5833 8.16667C15.5833 4.07055 12.2628 0.75 8.16667 0.75Z" fill="black" />
								</svg>
								<input type="text" placeholder="Введите страну" className="border-b-2 text-sm bg-white-BG_FILTER pl-10 outline-none py-3 w-full border-gray-smart" />
							</div>
							<div className='max-h-80 overflow-auto'>

								<SetLocationItem title={'Азербайджан'} />
								<SetLocationItem title={'Армения'} />
								<SetLocationItem title={'Беларусь'} />
								<SetLocationItem title={'Казахстан'} />
								<SetLocationItem title={'Киргизия'} />
								<SetLocationItem title={'Российская Федерация'} />
								<SetLocationItem title={'Российская Федерация'} />
								<SetLocationItem title={'Российская Федерация'} />
								<SetLocationItem title={'Российская Федерация'} />
								<SetLocationItem title={'Российская Федерация'} />
							</div>

						</div>
					</div>
					<p className="text-2xl mt-6 flex justify-between items-center">Укажите город <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.125 0.875L0.875 8.375L8.375 9.9375M17.125 0.875L10.875 17.125L8.375 9.9375M17.125 0.875L8.375 9.9375" stroke="#949792" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					</p>
					<div className="relative mt-2">
						<svg className="absolute top-3.5 left-4" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M2.25 8.16667C2.25 4.89898 4.89898 2.25 8.16667 2.25C11.4344 2.25 14.0833 4.89898 14.0833 8.16667C14.0833 11.4344 11.4344 14.0833 8.16667 14.0833C4.89898 14.0833 2.25 11.4344 2.25 8.16667ZM8.16667 0.75C4.07055 0.75 0.75 4.07055 0.75 8.16667C0.75 12.2628 4.07055 15.5833 8.16667 15.5833C9.9446 15.5833 11.5764 14.9577 12.854 13.9147L15.9697 17.0303C16.2626 17.3232 16.7374 17.3232 17.0303 17.0303C17.3232 16.7374 17.3232 16.2626 17.0303 15.9697L13.9147 12.854C14.9577 11.5764 15.5833 9.9446 15.5833 8.16667C15.5833 4.07055 12.2628 0.75 8.16667 0.75Z" fill="black" />
						</svg>
						<input type="text" placeholder="Поиск" className="w-full pl-10 outline-none border-gray-smart border-2 bg-white px-4 py-3 text-sm font-medium " />

					</div>
					<p className="mt-4">Выберите город, чтобы мы могли предложить наилучший вариант отгрузки со склада</p>

					<div className="flex flex-wrap mt-8">
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Москва</p>
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Санкт-Петербург</p>
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Воронеж</p>
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Уфа</p>
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Краснодар</p>
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Челябинск</p>
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Новосибирск</p>
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Минеральные воды</p>
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Владикавказ</p>
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Владимир</p>
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Красноярск</p>
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Ростов-на-Дону</p>
						<p className="text-primary-active text-xs px-4 mr-3 mb-3 cursor-pointer py-2 bg-gray-light rounded-xl">Петрозаводск</p>
					</div>





					<button onClick={handleSetShowLocal} className="p-3 curtomClose top-5 absolute -mr-3.5 pr-6 -right-16 bg-primary ">
						<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 1L9 9M9 1L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
						</svg>

					</button>
				</div>

			</section>
		</>
	)
}
export default SetLocation