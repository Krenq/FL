import { useState } from "react"

const ConfirmLocationModalWindow = () => {
	const [show, setShow] = useState(false)


	const handleSet = () => setShow(!show)
	return (
		<section className={`absolute confirm p-8 w-96 h-36 bg-white top-10 left-8 z-9 z-20 ${show ? "hiddenCustom" : "block"}`}>
			<div className="relative">
				<p className="text-base">Ваш город <span className="font-semibold">Москва?</span></p>

				<div className="flex">
					<button className="px-9 text-sm py-3 mr-4 mt-4 text-primary border-2 border-primary">
						Нет, другой
					</button>
					<button onClick={handleSet} className="px-10 bg-primary text-white text-sm py-3 mt-4   border-2 border-primary">
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