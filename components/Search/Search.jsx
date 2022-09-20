import Image from 'next/image';
import React from 'react';
import * as icons from '../../images/constsIcons';

export default function Search() {
  return (
    <article className=" pr-86px">
      <Image
        src={icons.ICON_SEARCH}
        height="24px"
        width="24px"
        alt="no image"
      />
    </article>
  );
}
