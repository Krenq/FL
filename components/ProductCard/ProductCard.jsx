import Image from 'next/image';
import { useState } from 'react';

export default function ProductCard({ obj }) {
  const [showBtns, setShowBtns] = useState(false);
  const [currentColor, setCurrentColor] = useState('1');

  const currentColorHandler = (num) => {
    setCurrentColor(num);
  };

  return (
    <div
      onMouseEnter={() => setShowBtns(true)}
      onMouseLeave={() => setShowBtns(false)}
      className="relative w-278px h-428px border border-white hover:border-gray"
    >
      <div>
        <Image src={obj.img} quality={100} />
      </div>

      <div className="absolute bottom-164px flex flex-row justify-between items-center h-26px w-full px-4">
        <div className="">
          <p className=" text-sm font-normal font-montserrat flex leading-140% text-black-70pe">
            <svg
              className="mr-1.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="7.5" stroke="#DBDCDA" />
              <path
                d="M8.83327 3.55469C8.61226 3.55469 8.4003 3.64248 8.24402 3.79877C8.08774 3.95505 7.99994 4.16701 7.99994 4.38802C7.99994 4.60903 8.08774 4.821 8.24402 4.97728C8.4003 5.13356 8.61226 5.22135 8.83327 5.22135C9.05429 5.22135 9.26625 5.13356 9.42253 4.97728C9.57881 4.821 9.66661 4.60903 9.66661 4.38802C9.66661 4.16701 9.57881 3.95505 9.42253 3.79877C9.26625 3.64248 9.05429 3.55469 8.83327 3.55469ZM8.63327 6.20469C7.97216 6.26024 6.16661 7.69913 6.16661 7.69913C6.0555 7.78247 6.08883 7.77691 6.17772 7.93247C6.26661 8.08247 6.2555 8.09358 6.36105 8.02135C6.47216 7.94913 6.6555 7.83247 6.96105 7.64358C8.13883 6.88802 7.14994 8.63247 6.64439 11.5714C6.44439 13.0269 7.7555 12.2769 8.09439 12.0547C8.42772 11.838 9.32216 11.2214 9.41105 11.1602C9.53327 11.0769 9.44439 11.0102 9.34994 10.8714C9.28327 10.7769 9.21661 10.8436 9.21661 10.8436C8.8555 11.0825 8.19439 11.5825 8.1055 11.2658C7.99994 10.9491 8.67772 8.77691 9.04994 7.28247C9.11105 6.92691 9.27772 6.14913 8.63327 6.20469Z"
                fill="#DBDCDA"
              />
            </svg>
            Акции
          </p>
        </div>

        <div className="">
          <p className="flex font-montserrat font-medium text-13px leading-140% text-black-70pe">
            <svg
              className="mr-0.5"
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9166 17.9167C12.9166 17.9167 7.49996 18.3333 4.58329 15C1.66663 11.6667 1.66663 1.66667 1.66663 1.66667C1.66663 1.66667 11.6666 1.25 15 3.75C18.3333 6.25 17.5 13.3333 17.5 13.3333"
                stroke="#337202"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.3333 18.3334C18.3333 18.3334 13.6753 14.8132 10.8333 11.6667C7.99133 8.52029 6.66663 5.41675 6.66663 5.41675"
                stroke="#337202"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8334 11.6667L11.25 6.25"
                stroke="#337202"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8333 11.6667L6.66663 11.25"
                stroke="#337202"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            1.4 Б
          </p>
        </div>
      </div>

      <div className="absolute w-full bottom-154px flex flex-row justify-center items-center">
        <div
          onClick={() => currentColorHandler('1')}
          className={` bg-label-pink cursor-pointer ${
            currentColor === '1'
              ? 'w-10px h-10px border border-gray-border'
              : 'w-6px h-6px'
          }  rounded-56px mx-1`}
        ></div>
        <div
          onClick={() => currentColorHandler('2')}
          className={` bg-label-orange cursor-pointer ${
            currentColor === '2'
              ? 'w-10px h-10px border border-gray-border'
              : 'w-6px h-6px'
          }  rounded-56px mx-1`}
        ></div>
        <div
          onClick={() => currentColorHandler('3')}
          className={` bg-label-green cursor-pointer ${
            currentColor === '3'
              ? 'w-10px h-10px border border-gray-border '
              : 'w-6px h-6px'
          }  rounded-56px mx-1`}
        ></div>
      </div>

      <div className="absolute bottom-94px font-montserrat font-normal text-13px leading-150% uppercase text-center px-4">
        Укрепляющая сыворотка для контура овала лица с коллагеном
      </div>

      <div className="absolute w-full flex justify-center items-center bottom-69px text-label-orange font-montserrat font-normal text-base leading-140%">
        <p>
          3 750 <span className=" font-lora"> De</span>
        </p>
      </div>

      <div className="absolute w-full bottom-12 flex justify-center">
        <p className=" font-montserrat text-gray-quick-silver font-normal leading-140% text-base line-through mr-3">
          ₽ 920.00
        </p>
        <p className=" font-montserrat text-label-pink-2 font-normal text-base leading-140%">
          ₽ 764.00
        </p>
      </div>

      {showBtns && (
        <>
          {obj.priceDe ? (
            <div className=" absolute bottom-0 h-11 w-276px flex flex-row">
              <button className="w-1/2 h-full border-t border-r border-gray text-primary font-montserrat font-normal text-13px leading-150% hover:bg-primary hover:text-white">
                Купить
              </button>
              <button className="w-1/2 h-full border-t border-gray text-label-orange font-montserrat font-normal text-13px leading-150% hover:bg-label-orange hover:text-white">
                Купить за <span className=" font-lora">De</span>
              </button>
            </div>
          ) : (
            <button className="absolute bottom-0 h-11 w-276px border-t border-gray text-primary font-montserrat font-normal text-13px leading-150% hover:bg-primary hover:text-white">
              Купить
            </button>
          )}
        </>
      )}
    </div>
  );
}
