import Image from 'next/image';
import React from 'react';
import Logo from '../ui/Logo/Logo';
import * as icons from '../../images/constsIcons';

export default function SectionFooterInfo() {
	return (
		<div className="flex flex-col .2x1.0:w-full .2x1.0:h-auto .2x1.0:mb-6 .2x1.0:relative .2x1.0:justify-start justify-between h-272px w-2/12 font-normal text-sm text-black-70pe">

			<Logo styles='.2x1.0:hidden' />


			<div className='.3x1:text-11px .2x1.0:hidden'>
				Ежедневно: будни с 06:00 до 22:00, <br /> сб-вс с 10:00 до 22:00 (Мск).{' '}
				<br />
				Ответим на любой вопрос
			</div>
			<div className='.3x1:text-11px hidden .2x1.0:block mt-4 mb-2'>
				Ежедневно: будни с 06:00 до 22:00, сб-вс с 10:00 до 22:00 (Мск).{' '}

				Ответим на любой вопрос
			</div>


			<div className="flex flex-row items-center">
				<Image src={icons.ICON_POCHTA} width={20} height={18} />
				<span className=" ml-2 .3x1:text-11px .3x1:text-black .2x1.0:mb-2">support@OBC.com</span>
			</div>
			<div className="flex flex-row items-center">
				<Image src={icons.ICON_PHONE_GRAY} width={14} height={21} />
				<span className=" ml-3.5 .3x1:text-11px .3x1:text-black">8-800-700-70-90</span>
			</div>
			<div className="..6x4:top-16 flex flex-row items-center .2x1.0:absolute ..7x01:-right-7 .2x1.0:right-0 .2x1.0:top-12">
				<div className=".2x1.0:w-5 ..7x2:mr-3 .2x1.0:h-3 .2x1.0:mr-5 mr-7">
					<Image src={icons.ICON_VK_GREEN} width={23} height={14} />
				</div>
				<div className=".2x1.0:w-5 ..7x2:mr-3 .2x1.0:h-3 .2x1.0:mr-5 mr-7">
					<Image src={icons.ICON_TELEGRAM_GREEN} width={21} height={18} />
				</div>
				<div className=".2x1.0:w-5 ..7x2:mr-3 .2x1.0:h-3 .2x1.0:mr-5 mr-7">
					<Image src={icons.ICON_ODNOKLASSNIKI_GREEN} width={15} height={20} />
				</div>
				<div className=".2x1.0:w-5  .2x1.0:h-3 .2x1.0:mr-5 mr-7">
					<Image src={icons.ICON_TIK_TOK_GREEN} width={18} height={20} />
				</div>
			</div>
		</div>
	);
}
