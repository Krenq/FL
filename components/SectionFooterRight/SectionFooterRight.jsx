import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import * as icons from '../../images/constsIcons';

export default function SectionFooterRight() {
	const [show, setShow] = useState({
		showLoal: false
	})



	const showLoal = () => {
		if (window.innerWidth > 1250) return
		setShow({
			...show,
			showLoal: !show.showLoal
		})
	}

	return (
		<div className="flex flex-col .2x1.0:h-auto .2x1.0:w-full justify-between h-272px w-2/12">
			<div className="flex flex-col h-1/2 .2x1.0:mb-6">
				<div className=".2x1.0:hidden font-semibold text-base .3x1:text-sm border-b border-gray-quick-silver w-fit">
					Программа лояльности
				</div>
				<div onClick={showLoal} className={`${show.showLoal ? '!text-primary' : ''} hidden transition-all .2x1.0:text-gray-quick-silver font-semibold text-base .3x1:text-sm .2x1.0:border-b  .2x1.0:pb-3 .2x1.0:border-gray-light2 .2x1.0:flex .2x1.0:items-center .2x1.0:justify-between .2x1.0:mt-3`}>Программа лояльности <svg className={`hidden .2x1.0:block transition-all ${show.showLoal ? 'activeArrow' : ""}`} width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.8625 0.35L4 3.22409L1.13125 0.35L0.25 1.23482L4 5L7.75 1.23482L6.8625 0.35Z" fill={`${show.showLoal ? '#337202' : '#949792'}`} />
				</svg>
				</div>
				<div className={`${show.showLoal ? '!h-20' : "hiddenCustomFoot"} transition-all flex flex-col`}>
					<div className="flex flex-row ">
						<div className="my-3  px-4 py-2 .3x1:px-3 .3x1:text-xs bg-gray-light rounded-2xl text-13px font-medium">
							Start
						</div>
						<div className=" .3x1:ml-1 ml-2 .3x1:px-3 .3x1:text-xs my-3 px-4 py-2 bg-gray-light rounded-2xl text-13px font-medium">
							Active
						</div>
						<div className=" .3x1:ml-1 ml-2 .3x1:px-3 .3x1:text-xs my-3 px-4 py-2 bg-gray-light rounded-2xl text-13px font-medium">
							Profi
						</div>
					</div>

					<div className="flex flex-row">
						<div className=" mb-3 px-4 py-2 .3x1:px-3 .3x1:text-xs bg-gray-light rounded-2xl text-13px font-medium">
							VKoманде
						</div>
						<div className=" .3x1:ml-1 .3x1:text-xs .3x1:px-3 ml-2 mb-3 px-4 py-2 bg-gray-light rounded-2xl text-13px font-medium">
							De-отзыв
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-end .3x1:justify-start h-1/2">
				<div className=".2x1.0:hidden font-semibold text-base border-b border-gray-quick-silver w-fit">
					EcoDeViva
				</div>

				<div className=".2x1.0:hidden font-normal text-sm text-gray-quick-silver mt-1">
					Приложение для айфона и андроида
				</div>
				<p className='hidden .2x1.0:block text-11px text-gray-quick-silver'>
					Приложение EcoDeViva
				</p>
				<div className="flex flex-row justify-between mt-3 .2x1.0:justify-start">
					<div className='..7x2:mr-1 .2x1.0:mr-3 ..6x5:w-24 ..6x5:h-8'>
						<Image src={icons.ICON_APP_STORE} height="44px" width="140px" />
					</div>
					<div className='..6x5:w-24 ..6x5:h-8'>
						<Image src={icons.ICON_GOOGLE_PLAY} height="44px" width="140px" />
					</div>
				</div>
			</div>
		</div>
	);
}
