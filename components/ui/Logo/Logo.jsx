import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as icons from '../../../images/constsIcons';

export default function Logo({ styles }) {
	return (
		<article className={`${styles} logo`}>
			{/* <Link href="/"> */}
			<Image src={icons.LOGO} alt="no image" />
			{/* </Link> */}
		</article>
	);
}
