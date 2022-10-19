import Image from "next/image"
import eng from '../../images/templates/eng.png'
import ger from '../../images/templates/ger.png'
import tur from '../../images/templates/tur.png'
import ch from '../../images/templates/ch.png'
import ru from '../../images/Icons/flag.png'


const SetLanguage = ({ show, setShow, setCurrentLang }) => {
	const langs = [
		{ name: 'RU', src: ru },
		{ name: 'EN', src: eng },
		{ name: 'GE', src: ger },
		{ name: 'TR', src: tur },
		{ name: 'CZ', src: ch },

	]

	const changeLang = (item) => {
		setCurrentLang(item)
		setShow(!show)
	}

	return (
		<section className={` z-50 bg-white   absolute top-8 right-0 ${show ? 'block' : "hidden"} `}>
			{langs.map((lang, i) => <div key={i} onClick={() => changeLang(lang)} className={`w-16 py-1.5 px-2 -mt-0.5 hover:bg-primary transition-colors bg-white hover:text-white flex cursor-pointer items-center h-full text-13px font-normal font-montserrat text-black-70pe border-x border-gray-quick-silver  border-opacity-50 ..5x1:px-1`}>
				<Image
					className="object-cover rounded-full"
					src={lang.src}

				/>
				<span className=".1x1:text-xs .1x1:ml-2 ml-2">{lang.name}</span>

			</div>)}


		</section>
	)
}
export default SetLanguage