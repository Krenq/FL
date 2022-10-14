import Image from "next/image"
import eng from '../../images/templates/eng.jpg'
import ger from '../../images/templates/ger.jpg'
import tur from '../../images/templates/tur.jpg'
import ch from '../../images/templates/ch.jpg'
import ru from '../../images/Icons/flag.png'


const SetLanguage = ({ show, setShow, setCurrentLang, currentLang }) => {
	const langs = [
		{ name: 'RU', src: ru },
		{ name: 'EN', src: eng },
		{ name: 'GER', src: ger },
		{ name: 'TR', src: tur },
		{ name: 'CZE', src: ch },

	]
	console.log(currentLang.name.length)
	const changeLang = (item) => {
		setCurrentLang(item)
		setShow(!show)
	}

	return (
		<section className={` z-50 bg-white   absolute top-8 right-0 ${show ? 'block' : "hidden"} `}>
			{langs.map((lang, i) => <div key={i} onClick={() => changeLang(lang)} className={`w-16 py-1.5 px-1 -mt-0.5 hover:bg-primary transition-colors bg-white hover:text-white flex cursor-pointer items-center h-full text-13px font-normal font-montserrat text-black-70pe border-x border-gray-quick-silver  border-opacity-50 ..5x1:px-1`}>
				<Image
					className="object-cover rounded-full"
					src={lang.src}
					width={14}
					height={15}
				/>
				<span className=".1x1:text-xs .1x1:ml-2 ml-2">{lang.name}</span>

			</div>)}


		</section>
	)
}
export default SetLanguage