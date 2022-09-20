import Image from 'next/image';
import React from 'react';
import * as icons from '../../images/constsIcons';

export default function SectionWithWarnings() {
  return (
    <article className="flex justify-center  items-center h-42px bg-nude-2 font-noto-sans font-medium text-sm">
      <div className="container-base relative flex justify-center items-center">
        <div className="whitespace-nowrap">
          Обратите внимание! По некоторым направлениям возможно увеличение
          сроков доставки траспортными компаниями
        </div>
        <div className="absolute -right-100px">
          <Image src={icons.ICON_CANCLE} width={10} height={10} />
        </div>
      </div>
    </article>
  );
}
