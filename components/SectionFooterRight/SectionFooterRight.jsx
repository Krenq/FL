import Image from 'next/image';
import React from 'react';
import * as icons from '../../images/constsIcons';

export default function SectionFooterRight() {
  return (
    <div className="flex flex-col justify-between h-272px w-2/12">
      <div className="flex flex-col h-1/2">
        <div className=" font-semibold text-base border-b border-gray-quick-silver w-fit">
          Программа лояльности
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="my-3 px-4 py-2 bg-gray-light rounded-2xl text-13px font-medium">
              Start
            </div>
            <div className=" ml-2 my-3 px-4 py-2 bg-gray-light rounded-2xl text-13px font-medium">
              Active
            </div>
            <div className=" ml-2 my-3 px-4 py-2 bg-gray-light rounded-2xl text-13px font-medium">
              Profi
            </div>
          </div>

          <div className="flex flex-row">
            <div className=" mb-3 px-4 py-2 bg-gray-light rounded-2xl text-13px font-medium">
              VKoманде
            </div>
            <div className=" ml-2 mb-3 px-4 py-2 bg-gray-light rounded-2xl text-13px font-medium">
              De-отзыв
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end h-1/2">
        <div className=" font-semibold text-base border-b border-gray-quick-silver w-fit">
          EcoDeViva
        </div>

        <div className=" font-normal text-sm text-gray-quick-silver mt-1">
          Приложение для айфона и андроида
        </div>
        <div className="flex flex-row justify-between mt-3">
          <div>
            <Image src={icons.ICON_APP_STORE} height="44px" width="140px" />
          </div>
          <div>
            <Image src={icons.ICON_GOOGLE_PLAY} height="44px" width="140px" />
          </div>
        </div>
      </div>
    </div>
  );
}
