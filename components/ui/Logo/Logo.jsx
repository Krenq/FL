import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as icons from '../../../images/constsIcons';

export default function Logo({ styles }) {
  return (
    <article className={styles}>
      <Link href="/">
        <Image width="140px" height="60px" src={icons.LOGO} alt="no image" />
      </Link>
    </article>
  );
}
