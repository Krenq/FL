import Image from 'next/image';
import React from 'react';
import * as icons from '../../images/constsIcons';

export default function SectionOverNavBar() {
  return (
    <article className=" ..5x2:hidden h-8 px-20 border-b border-gray-quick-silver border-opacity-50 .2x1:px-1">
      <div className="max-w-screen-overBar h-full mx-auto flex flex-row justify-between items-center ">
        <div className="flex flex-row justify-center items-center">
          <div className="flex justify-center items-center mr-5 text-13px font-normal font-montserrat text-gray-quick-silver">
            <Image src={icons.ICON_LOCATION} width={10} height={14} />
            <span className=".1x1:text-xs ml-2">Москва</span>
          </div>
          <div className="flex justify-center items-center mr-5 text-13px font-normal font-montserrat text-gray-quick-silver">
            <Image src={icons.ICON_PHONE} width={10} height={16} />
            <span className=".1x1:text-xs ml-2">8-800-700-70-95</span>
          </div>
          <div className=" flex flex-row justify-between items-center ml-2">
            <div className=" flex flex-row justify-between items-center mr-2">
              <Image src={icons.ICON_VK} width={18} height={11} />
            </div>
            <div className=" flex flex-row justify-between items-center mr-2">
              <Image src={icons.ICON_TIK_TOK} width={24} height={24} />
            </div>
            <div className=" flex flex-row justify-between items-center mr-2">
              <Image src={icons.ICON_TELEGRAM} width={14} height={12} />
            </div>
            <div className=" flex flex-row justify-between items-center mr-2">
              <Image src={icons.ICON_ODNOKLASNIKI} width={24} height={24} />
            </div>
          </div>
        </div>

        <div className=" .1x1:ml-0 text-13px font-normal .1x1:text-xs font-montserrat text-gray-quick-silver ml-10">
          Бесплатная доставка от Р 2.500 +
        </div>

        <div className="flex flex-row items-center h-full">
          <div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1">
            <Image src={icons.ICON_HEART} width={18} height={15} />
            <span className=".1x1:text-xs .1x1:ml-2 ml-2">Избранное</span>
          </div>
          <div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1">
            <Image src={icons.ICON_DOOR} width={18} height={17} />
            <span className=".1x1:text-xs .1x1:ml-2 ml-2">Вход</span>
          </div>
          <div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1">
            <Image src={icons.ICON_HUMAN} width={14} height={16} />
            <span className=".1x1:text-xs .1x1:ml-2 ml-2">Регистрация</span>
          </div>
          <div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-x border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1">
            <Image
              className="object-cover rounded-full"
              src={icons.ICON_FLAG}
              width={14}
              height={15}
            />
            <span className=".1x1:text-xs .1x1:ml-2 ml-2">RU</span>
          </div>
        </div>
      </div>
    </article>
  );
}
