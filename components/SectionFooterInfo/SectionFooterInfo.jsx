import Image from 'next/image';
import React from 'react';
import Logo from '../ui/Logo/Logo';
import * as icons from '../../images/constsIcons';

export default function SectionFooterInfo() {
  return (
    <div className="flex flex-col justify-between h-272px w-2/12 font-normal text-sm text-black-70pe">
      <Logo styles={undefined} />
      <div>
        Ежедневно: будни с 06:00 до 22:00, <br /> сб-вс с 10:00 до 22:00 (Мск).{' '}
        <br />
        Ответим на любой вопрос
      </div>
      <div className="flex flex-row items-center">
        <Image src={icons.ICON_POCHTA} width={20} height={18} />
        <span className=" ml-2">support@OBC.com</span>
      </div>
      <div className="flex flex-row items-center">
        <Image src={icons.ICON_PHONE_GRAY} width={14} height={21} />
        <span className=" ml-3.5">8-800-700-70-90</span>
      </div>
      <div className=" flex flex-row items-center">
        <div className=" mr-7">
          <Image src={icons.ICON_VK_GREEN} width={23} height={14} />
        </div>
        <div className=" mr-7">
          <Image src={icons.ICON_TELEGRAM_GREEN} width={21} height={18} />
        </div>
        <div className=" mr-7">
          <Image src={icons.ICON_ODNOKLASSNIKI_GREEN} width={15} height={20} />
        </div>
        <div className=" mr-7">
          <Image src={icons.ICON_TIK_TOK_GREEN} width={18} height={20} />
        </div>
      </div>
    </div>
  );
}
