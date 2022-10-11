
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

import * as icons from '../../images/constsIcons';

import CatalDropdown from '../catalDropdown/CatalDropdown';
import DropDownItem from '../DropDownItem/DropDownItem';

export default function LinkHeaderItem({ title }) {
	const [show, setShow] = useState(false)

	const setShowDropdown = () => setShow(show = !show)

	return (
		<article className={`${title === 'Каталог' ? 'relative' : ''} py-6px .2x1:text-xs .3x1:px-2 px-4   hover:rounded-32px transition-all	 hover:bg-gray-light text-black font-montserrat font-medium text-sm`}>
			<Link href="/">
				<article onClick={setShowDropdown} className="cursor-pointer hover:text-green-hov flex flex-row items-center">
					<article>{title}</article>

					<article className=" pl-2 ..5x01:pl-0.5 pb-0.5">

						<Image
							src={icons.ICON_ARROW_DOWN}
							className={`transition-all ${show ? 'activeArrow' : ""}`}
							width="8px"
							height="6px"
							alt="no image"
						/>
					</article>
				</article>
			</Link>


			{title === 'Каталог' ?
				<CatalDropdown show={show} setShow={setShowDropdown} />
				: <DropDownItem title={title} show={show} setShow={setShowDropdown} />
			}

		</article >
	);
}
