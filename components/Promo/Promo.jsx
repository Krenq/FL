import Image from 'next/image';
import bg from '../../images/templates/bgL.jpg';
import itemleas from '../../images/templates/itemleas.png';

const Promo = () => {
  return (
    <div className="relative promo ">
      <div className="absolute ">
        <Image
          className="object-cover ..5x3:!hidden"
          src={bg}
          width={1920}
          height={727}
          alt="specialOffersImg"
        />
      </div>

      <div className="absolute ..5x3:relative ..5x3:left-0 top-20 left-40 .4x1:top-7 .4x1:left-20 ..5x3:flex ..5x3:flex-col  ..5x3:items-center  text-white">
        <p className="text-6xl .2x1:text-5xl ..5x1:text-4xl ..7x2:text-3xl ..5x3:text-center">
          Скидка 20% по <br /> промокоду «Click»
        </p>
        <p className="mt-6 font-medium text-xl .2x1:text-lg ..7x2:text-sm ..5x1:text-base ..5x3:text-center .2x1:mt-4">
          На аквагель для лица серии «FreshClick»
        </p>
        <div>
          <button className="border-2 .2x1:py-3 ..7x2:px-12 .2x1:px-16 border-gray bg-gray mt-8 text-gray-quick-silver px-24 py-5 transition-all hover:border-primary hover:text-white hover:bg-primary">
            CLICK
          </button>
          <button className=" border-2 border-gray ..7x2:px-9 ..7x2:pr-5 px-10 .2x1:py-3 py-5 relative ">
            {' '}
            <svg
              className="absolute .2x1:top-4 top-6 left-4"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2388_695761)">
                <mask
                  id="mask0_2388_695761"
                  maskUnits="userSpaceOnUse"
                  x="2"
                  y="2"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.50031 2.5H16.0003C16.8646 2.5 17.5004 3.13579 17.5004 4.00001V11.5C17.5004 12.3643 16.8646 13 16.0003 13H13V16C13 16.8642 12.3643 17.5 11.5 17.5H4.00001C3.13579 17.5 2.5 16.8642 2.5 16V8.49993C2.5 7.63571 3.13579 6.99992 4.00001 6.99992H7.0003V4.00001C7.0003 3.13579 7.63609 2.5 8.50031 2.5ZM7.0003 8.49993H4.00001V16H11.5V13H8.50031C7.63609 13 7.0003 12.3643 7.0003 11.5V8.49993ZM8.49959 3.9999V11.4999H15.9996V3.9999H8.49959Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_2388_695761)">
                  <rect
                    x="0.999603"
                    y="1.0001"
                    width="18.0001"
                    height="18.0001"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_2388_695761">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Copy HTML
          </button>
        </div>
        <div className="flex mt-20 ..6x04:w-full ..6x04:justify-center ..6x04:pr-0 ..5x3:pl-0 ..5x3:translate-x-0  .5x1:mt-5 timer pl-80 pr-40 .2x1:pr-20 pt-6 pb-6 timer__wrapper">
          <div className="mr-3 flex flex-col items-center">
            <div className="font-bold text-5xl ..6x04:mr-5  ..5x1:text-3xl mr-20 mb-4">
              17
            </div>
            <div className="mr-20 ..6x04:mr-5 ..5x1:text-sm">DAYS</div>
          </div>
          <div className="mr-3 flex flex-col items-center">
            <div className="font-bold text-5xl mr-20 mb-4 ..6x04:mr-5 ..5x1:text-3xl">
              05
            </div>
            <div className="mr-20 ..6x04:mr-5 ..5x1:text-sm">HOURS</div>
          </div>
          <div className="mr-3 flex flex-col items-center">
            <div className="font-bold text-5xl mr-20 mb-4 ..5x1:text-3xl ..6x04:mr-5">
              32
            </div>
            <div className="mr-20 ..6x04:mr-5 ..5x1:text-sm">MINS</div>
          </div>
          <div className="mr-3 flex flex-col items-center">
            <div className="font-bold text-5xl mb-4 ..5x1:text-3xl">00</div>
            <div className="..5x1:text-sm ">SECS</div>
          </div>
        </div>
        <div className="absolute ..6x4:h-72 ..6x4:w-72 ..6x1:-mt-2 ..5x3:-mt-8  ..5x3min:hidden  ..5x3:relative  ..5x3:-top-16 ..5x3:right-0 right-40 top-40 ..5x1:top-7 .4x1:right-0 .2x1:w-1/3 .5x1:top-16">
          <div className="bg-gray ..6x4:top-32 ..6x1:top-24 ..6x1:left-10 px-4 py-2 .2x1:top-56 text-lg moreP rounded-full absolute cursor-pointer hover:text-white hover:bg-nude-3">
            +
          </div>
          <div>
            <Image
              className="object-cover z-20"
              src={itemleas}
              width={497}
              height={497}
              alt="specialOffersImg"
            />
          </div>
        </div>
      </div>
      <div className="absolute ..5x3:hidden ..5x3:relative  ..5x3:-top-16 ..5x3:right-0 right-40 top-40 ..5x1:top-7 .4x1:right-0 .2x1:w-1/3 .5x1:top-16">
        <div className="bg-gray px-4 py-2 .2x1:top-56 text-lg moreP rounded-full absolute cursor-pointer hover:text-white hover:bg-nude-3">
          +
        </div>
        <div>
          <Image
            className="object-cover z-20"
            src={itemleas}
            alt="specialOffersImg"
            width={497}
            height={497}
          />
        </div>
      </div>
    </div>
  );
};
export default Promo;
