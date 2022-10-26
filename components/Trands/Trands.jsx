import Image from 'next/image';
import one from '../../images/templates/1tian.jpg';
import two from '../../images/templates/2tian.jpg';
import tree from '../../images/templates/3tian.jpg';
import four from '../../images/templates/4tian.jpg';
import five from '../../images/templates/5tian.jpg';
import six from '../../images/templates/6tian.jpg';
import seven from '../../images/templates/7tian.jpg';
const Trands = ({ refL }) => {
	return (
		<section ref={refL} id='sec-14' className="relative bg-gray-light pb-80 ..5x2:pb-400px  .2x1:pb-460px">
			<svg
				className="ability ..6x2:h-32 ..6x2:top-5 ..6x2:mt-5 absolute left-1/2 top-6 ..5x2:top-2"
				width="184"
				height="183"
				viewBox="0 0 184 183"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M151.013 93.7301C151.013 93.7301 139.225 129.886 109.863 139.841C80.4998 149.797 15.8079 123.059 15.8079 123.059C15.8079 123.059 39.851 57.2524 64.9368 42.3731C90.0226 27.4937 133.618 51.8245 133.618 51.8245"
					stroke="white"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M168.192 59.8027C168.192 59.8027 132.964 80.524 105.01 90.496C77.0561 100.468 53.4366 100.739 53.4366 100.739"
					stroke="white"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M105.01 90.4961L71.0828 73.3172"
					stroke="white"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M105.01 90.496L91.1736 116.337"
					stroke="white"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>

			<p className="absolute font-montserrat font-medium left-1/2 ability top-20 ..5x2:top-10  text-4xl ..5x2:pt-16 ..5x2:mt-0 italic mt-2 mb-16 ..5x2:text-22px">
				TIANDESHOPPING
			</p>
			<div className="flex pt-52 ..5x2:pt-40">
				<div className="itemTr">
					<Image
						className="object-cover"
						src={one}
						width={660}
						height={840}
						alt="newsImg"
					/>
				</div>
				<div className="flex  flex-col">
					<Image
						className="object-cover"
						src={two}
						width={420}
						height={420}
						alt="newsImg"
					/>
					<Image
						className="object-cover"
						src={five}
						width={420}
						height={420}
						alt="newsImg"
					/>
				</div>
				<div className="flex flex-wrap flex-col ..6x2:hidden">
					<Image
						className="object-cover"
						src={tree}
						width={420}
						height={420}
						alt="newsImg"
					/>
					<Image
						className="object-cover"
						src={six}
						width={420}
						height={420}
						alt="newsImg"
					/>
				</div>
				<div className="flex flex-wrap flex-col ..5x4:hidden">
					<Image
						className="object-cover"
						src={four}
						width={420}
						height={420}
						alt="newsImg"
					/>
					<Image
						className="object-cover"
						src={seven}
						width={420}
						height={420}
						alt="newsImg"
					/>
				</div>
			</div>

			<div className="flex justify-center mt-5">
				<button className="font-montserrat ..7x11:!text-10px mr-4 ..7x1:text-sm ..7x1:py-10px ..7x1:px-5 border-2 py-3 px-6 text-white bg-primary border-primary transition-all hover:bg-white hover:text-primary  ">
					Показать еще
				</button>
				<button className="font-montserrat ..7x11:!text-10px ..7x1:text-sm ..7x1:py-10px ..7x1:px-5 border-2 py-3 px-6 text-primary bg-white border-primary transition-all hover:bg-primary hover:text-white  ">
					Посмотреть все
				</button>
			</div>
		</section>
	);
};
export default Trands;
