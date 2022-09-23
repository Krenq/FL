import Image from 'next/image';
import React from 'react';
import * as icons from '../../images/constsIcons';

export default function SectionWithStock() {
	return (
		<article className=" ..6x6:text-xs flex flex-row justify-center items-center bg-primary-hover h-42px text-white font-noto-sans text-sm font-medium">
			Кешбэк-марафон
			<div className="..7x1:text-sm ..6x6:text-base bg-white px-2 text-primary border-2 border-primary font-normal text-lg font-montserrat mx-3">
				17d : 09h : 10m : 20s
			</div>
			<div className=" flex flex-row items-center border-b border-b-white">
				<button className="..6x6:text-xs font-montserrat font-medium text-13px">
					Учавствовать
				</button>
				<div className=" ml-1">
					<Image src={icons.ICON_ARROW_RIGHT} width={13} height={8} />
				</div>
			</div>
		</article>
	);
}
