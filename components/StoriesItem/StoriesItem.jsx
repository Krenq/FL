import Image from 'next/image';

export default function ({ photo, text }) {
	return (

		<div className="temp px-1 mx-auto max-w-350px max-h-340px">

			<div className="relative p-1 flex items-center justify-center transition-all hover:opacity-80 cursor-pointer stories">
				<Image className="object-cover" src={photo} width={340} height={340} alt="newsImg" />
				<p className="absolute bottom-5 left-5 font-montserrat font-medium text-xl text-white ..6x4:text-base">{text}</p>
			</div>
		</div>
	);
}
