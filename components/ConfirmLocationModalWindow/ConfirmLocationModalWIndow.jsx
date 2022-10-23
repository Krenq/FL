import { useState } from "react"

const ConfirmLocationModalWindow = () => {
	const [show, setShow] = useState(false)


	const handleSet = () => setShow(!show)
	return (
		<section className={`absolute ..7x01:p-4 ..7x01:h-auto ..5x4:top-4 ..5x4:left-4 ..7x11:w-11/12 ..7x11:left-0 ..7x11:top-0 ..7x11:m-2 confirm p-8 w-96 h-36 bg-white top-10 left-14 z-9 z-20 ${show ? "hiddenCustom" : "block"}`}>
			<div className="relative">
				<p className="text-base">Ваш город <span className="font-semibold">Москва?</span></p>

				<div className="flex">
					<button className="px-9 ..7x01:px-5 ..7x11:px-7 text-sm py-3 mr-4 ..7x1:text-xs mt-4 text-primary border-2 border-primary whitespace-nowrap">
						Нет, другой
					</button>
					<button onClick={handleSet} className="px-10 ..7x11:px-7 ..7x1:text-xs bg-primary text-white text-sm py-3 mt-4   border-2 border-primary whitespace-nowrap">
						Да, верно
					</button>

				</div>
				<button onClick={handleSet} className="absolute -top-3 -right-3">
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 1L1 9M1 1L9 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
					</svg>
				</button>
			</div	>

		</section>
	)
}
export default ConfirmLocationModalWindow