import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

import * as icons from '../../images/constsIcons';

import CatalDropdown from '../catalDropdown/CatalDropdown';
import DropDownItem from '../DropDownItem/DropDownItem';

export default function LinkHeaderItem({ title, show, setShow }) {
  const [showL, setShowL] = useState(false);

  const setShowDropdown = () => {
      setShowL((showL = !showL));

      if (title === 'Каталог')
        setShow(
          (show = {
            showCompany: false,
            showBis: false,
            showBuyers: false,
            showLoal: false,
            showCatal: true,
          })
        );

      if (title === 'О компании')
        setShow(
          (show = {
            showCatal: false,
            showBis: false,
            showBuyers: false,
            showLoal: false,
            showCompany: true,
          })
        );

      if (title === 'Бизнес-возможности')
        setShow(
          (show = {
            showCatal: false,
            showCompany: false,
            showBuyers: false,
            showLoal: false,
            showBis: true,
          })
        );

      if (title === 'Покупателям')
        setShow(
          (show = {
            showCatal: false,
            showCompany: false,
            showBis: false,
            showLoal: false,
            showBuyers: true,
          })
        );

      if (title === 'Программа лояльности')
        setShow(
          (show = {
            showCatal: false,
            showCompany: false,
            showBis: false,
            showBuyers: false,
            showLoal: true,
          })
        );
    },
    closeDrop = () => {
      setShowL(false);
      setShow({
        showCompany: false,
        showBis: false,
        showBuyers: false,
        showLoal: false,
        showCatal: false,
      });
    };

  return (
    <article
      className={`${
        title === 'Каталог' ? 'relative' : ''
      } py-6px .2x1:text-xs .3x1:px-2 px-4   hover:rounded-32px transition-all	 hover:bg-gray-light text-black font-montserrat font-medium text-sm`}
    >
      <article
        onMouseLeave={() => setShowL(false)}
        onMouseEnter={setShowDropdown}
        className="cursor-pointer hover:text-green-hov flex flex-row items-center"
      >
        <article>{title}</article>

        <article className=" pl-2 ..5x01:pl-0.5 pb-0.5">
          <Image
            src={icons.ICON_ARROW_DOWN}
            className={`transition-all  ${showL ? 'activeArrow' : ''}`}
            width="8px"
            height="6px"
            alt="no image"
          />
        </article>
      </article>

      {title === 'Каталог' ? (
        <CatalDropdown show={show} setShow={closeDrop} />
      ) : (
        <DropDownItem title={title} show={show} setShow={closeDrop} />
      )}
    </article>
  );
}
