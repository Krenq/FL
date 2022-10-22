
import { useEffect, useState } from "react"

const Anchor = ({ elements }) => {
	const [currentElement, setCurrentElement] = useState([
		{ 'sec-1': true },
		{ 'sec-2': false },
		{ 'sec-3': false },
		{ 'sec-4': false },
		{ 'sec-5': false },
		{ 'sec-6': false },
		{ 'sec-7': false },
		{ 'sec-8': false },
		{ 'sec-9': false },
		{ 'sec-10': false },
		{ 'sec-11': false },
		{ 'sec-12': false },
		{ 'sec-13': false },
		{ 'sec-14': false },
		{ 'sec-15': false }
	]),
		[currentLenght, setCurrentLenght] = useState('01')


	useEffect(() => {
		//функция onEntry срабатывает тогда, когда в полевидимости пользователя попадается какой либо из ref, далее сеттится сейчас просматриваемый блок

		const onEntry = entry => entry.forEach(change => {
			change.isIntersecting && currentElement.forEach((elem, i) => {
				if (change.target.id in elem) {
					const newms = [
						{ 'sec-1': false },
						{ 'sec-2': false },
						{ 'sec-3': false },
						{ 'sec-4': false },
						{ 'sec-5': false },
						{ 'sec-6': false },
						{ 'sec-7': false },
						{ 'sec-8': false },
						{ 'sec-9': false },
						{ 'sec-10': false },
						{ 'sec-11': false },
						{ 'sec-12': false },
						{ 'sec-13': false },
						{ 'sec-14': false },
						{ 'sec-15': false }
					]
					newms[i][`${change.target.id}`] = true
					setCurrentElement(newms)
					setCurrentLenght(i + 1 > 9 ? i + 1 : `0${i + 1}`)
				}
			})
		})

		const observer = new IntersectionObserver(onEntry, { threshold: [0.5] })

		// устанавливает слежку за элементом 
		for (const elm of elements) observer.observe(elm.current)
	}, [elements])


	return (
		<section className="bg-red fixed left-8 top-56 ..5x2:hidden">
			<small className="text-13px">{currentLenght}</small>
			<div className=" w-full flex flex-col items-center">
				<a href="#sec-1" className={`${currentElement[0]["sec-1"] ? 'activeAnchor' : ""} w-1 h-6 mt-1 cursor-pointer hover:bg-primary transition-all bg-gray-light2`}></a>
				<a href="#sec-2" className={`${currentElement[1]["sec-2"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-3" className={`${currentElement[2]["sec-3"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-4" className={`${currentElement[3]["sec-4"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-5" className={`${currentElement[4]["sec-5"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-6" className={`${currentElement[5]["sec-6"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-7" className={`${currentElement[6]["sec-7"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-8" className={`${currentElement[7]["sec-8"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-9" className={`${currentElement[8]["sec-9"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-10" className={`${currentElement[9]["sec-10"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-11" className={`${currentElement[10]["sec-11"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-12" className={`${currentElement[11]["sec-12"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-13" className={`${currentElement[12]["sec-13"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-14" className={`${currentElement[13]["sec-14"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 cursor-pointer hover:bg-primary transition-all`}></a>
				<a href="#sec-15" className={`${currentElement[14]["sec-15"] ? 'activeAnchor' : ""} w-1 h-6 mt-1.5 bg-gray-light2 mb-1.5 cursor-pointer hover:bg-primary transition-all`}></a>


			</div>
			<small className="text-13px">15</small>
		</section>
	)
}
export default Anchor