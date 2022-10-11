import Image from 'next/image';
import React from 'react';
import * as icons from '../../images/constsIcons';

export default function SectionFooterAgreement() {
  return (
    <div className="flex flex-row justify-between items-center h-76px border-t border-gray-quick-silver">
      <div className=" text-13px font-medium font-montserrat">
        <span>© 2022 «TianDe», Все права защищены </span>
        <span className=" border-b border-black pb-0.5 ml-100px">
          Пользовательское соглашение
        </span>
        <span className=" border-b border-black mx-4 pb-0.5">Карта сайта</span>
      </div>
      <div className="flex flex-row items-center">
        <div className=" px-2">
          <Image src={icons.ICON_MIR} width={46} height={13} />
        </div>
        <div className=" px-2">
          <Image src={icons.ICON_UNIONPAY} width={46} height={30} />
        </div>
        <div className=" px-2">
          <Image src={icons.ICON_MASTERCARD} width={26} height={16} />
        </div>
        <div className=" pl-2">
          <Image src={icons.ICON_VISA} width={40} height={12} />
        </div>
      </div>
    </div>
  );
}
