import Image from "next/image"
import one from '../../images/templates/1tian.jpg'
import two from '../../images/templates/2tian.jpg'
import tree from '../../images/templates/3tian.jpg'
import four from '../../images/templates/4tian.jpg'
import five from '../../images/templates/5tian.jpg'
import six from '../../images/templates/6tian.jpg'
import seven from '../../images/templates/7tian.jpg'
const Trands = () => {
	return (
		<section className="relative bg-gray-light pb-80  ..5x1:pb-460px">
			<p className="text-center mt-36 .1x1:mt-20 text-4xl ..5x2:pt-16 ..5x2:mt-0 italic mt-2 mb-16 ..6x04:text-3xl">TIANDESHOPPING</p>
			<div className="flex">
				<div className="itemTr">
					<Image className="object-cover" src={one} alt="newsImg" />
				</div>
				<div className="flex  flex-col">
					<Image className="object-cover" src={two} alt="newsImg" />
					<Image className="object-cover" src={five} alt="newsImg" />
				</div>
				<div className="flex flex-wrap flex-col ..6x2:hidden">
					<Image className="object-cover" src={tree} alt="newsImg" />
					<Image className="object-cover" src={six} alt="newsImg" />
				</div>
				<div className="flex flex-wrap flex-col ..5x4:hidden">
					<Image className="object-cover" src={four} alt="newsImg" />
					<Image className="object-cover" src={seven} alt="newsImg" />
				</div>


			</div>
			<div className="..6x2:w-full ..6x2:flex ..6x2:justify-center absolute left-1/2 ability z-10 bottom-60 ..5x1:bottom-96">
				<button className="mr-4 border-2 py-3 px-6 text-white bg-primary border-primary transition-all hover:bg-white hover:text-primary">Показать еще</button>
				<button className="mr-4 border-2 py-3 px-6 text-primary bg-white border-primary transition-all hover:bg-primary hover:text-white">Посмотреть все</button>
			</div>
		</section>
	)
}
export default Trands



