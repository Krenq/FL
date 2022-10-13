import Image from "next/image"
import eng from '../../images/templates/eng.jpg'
import ger from '../../images/templates/ger.jpg'
import tur from '../../images/templates/tur.jpg'
import ch from '../../images/templates/ch.jpg'
const SetLanguage = ({ show, setShow }) => {

	const handleShow = () => setShow(!show)

	return (
		<section className={` z-50 bg-white mt-6 absolute top-24 right-20 ${show ? 'block' : "hidden"}`}>
			<div onClick={handleShow} className="py-2 px-1 hover:bg-primary transition-colors hover:text-white flex cursor-pointer items-center h-full text-13px font-normal font-montserrat text-black-70pe border-x border-gray-quick-silver  border-opacity-50 ..5x1:px-1">
				<Image
					className="object-cover rounded-full"
					src={eng}
					width={14}
					height={15}
				/>
				<span className=".1x1:text-xs .1x1:ml-2 ml-2">EN</span>

			</div>
			<div onClick={handleShow} className="p-2 px-1 hover:bg-primary transition-colors hover:text-white flex cursor-pointer items-center h-full text-13px font-normal font-montserrat text-black-70pe border-x border-gray-quick-silver  border-opacity-50 ..5x1:px-1">
				<Image
					className="object-cover rounded-full"
					src={ger}
					width={14}
					height={15}
				/>
				<span className=".1x1:text-xs .1x1:ml-2 ml-2">GER</span>

			</div>
			<div onClick={handleShow} className="p-2 px-1 hover:bg-primary transition-colors hover:text-white flex cursor-pointer items-center h-full text-13px font-normal font-montserrat text-black-70pe border-x border-gray-quick-silver   border-opacity-50 ..5x1:px-1">
				<Image
					className="object-cover rounded-full"
					src={tur}
					width={14}
					height={15}
				/>
				<span className=".1x1:text-xs .1x1:ml-2 ml-2">TR</span>

			</div>
			<div onClick={handleShow} className="p-2 px-1 hover:bg-primary transition-colors hover:text-white flex cursor-pointer items-center h-full text-13px font-normal font-montserrat text-black-70pe border-x border-gray-quick-silver   border-opacity-50 ..5x1:px-1">
				<Image
					className="object-cover rounded-full"
					src={ch}
					width={14}
					height={15}
				/>
				<span className=".1x1:text-xs .1x1:ml-2 ml-2">CZE</span>

			</div>
		</section>
	)
}
export default SetLanguage