import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as icons from '../../images/constsIcons';

export default function ShoppingBag() {
  return (
    <div className=" mx-4 cursor-pointer">
      <Link href="/">
        <div className="flex flex-row justify-center">
          <div className=" flex flex-row h-6">
            <div>
              <Image
                src={icons.ICON_SHOPPING_BAG}
                alt="np image"
                width="18px"
                height="22px"
              />
            </div>
            <div className=" bg-primary rounded-2xl px-10px -mt-6px text-white ml-6px h-5 py-0.5 pt-1 text-10px font-noto-sans font-medium">
              12
            </div>
          </div>
          <span className=" ml-1 text-xs font-normal self-center">
            P 22323.00
          </span>
        </div>
      </Link>
    </div>
  );
}
