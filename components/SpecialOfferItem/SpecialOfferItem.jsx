import Image from 'next/image';

export default function SpecialOfferItem({ img }) {
  return (
    <div className=" flex justify-center items-center relative cursor-pointer mt-4 h-400px px-4 hover:opacity-70 transition-all">
      <div className="flex flex-col justify-around items-center max-w-252px mx-auto">
        <div className="absolute flex left-0 top-0 z-20">
          <small className=" bg-label-yellow px-5 py-1 mb-1">HIT!</small>
          <small className="border-2 px-3 py-1 border-gray-quick-silver mb-1 mx-2">
            NEW
          </small>
          <small className="bg-label-pink-2 border-2 border-label-pink-2 text-white px-3 py-1 mb-1">
            -15%
          </small>
        </div>
        <svg
          className="absolute top-4 right-5 z-10"
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5016 0.500008L15.5013 0.500008C14.706 0.498642 13.9214 0.682885 13.2098 1.03808C12.4982 1.39328 11.8793 1.90963 11.4023 2.54606L11.0028 3.07918L10.6025 2.54661C9.95636 1.6869 9.05622 1.05215 8.02947 0.732181C7.00272 0.412208 5.90134 0.423218 4.88119 0.763651C3.86104 1.10408 2.97377 1.7567 2.34494 2.62916C1.71614 3.50157 1.3776 4.54961 1.3772 5.62501L15.5016 0.500008ZM15.5016 0.500008C16.8605 0.501548 18.1634 1.04206 19.1243 2.00295C20.0851 2.96385 20.6257 4.26666 20.6272 5.62557C20.627 8.2878 19.0828 11.1106 15.857 14.0139C14.3981 15.3216 12.8116 16.4794 11.1213 17.4698C11.0847 17.4896 11.0438 17.5 11.0022 17.5C10.9594 17.5 10.9173 17.489 10.88 17.4681C10.6952 17.3646 8.29401 16.0012 5.94567 13.8396M15.5016 0.500008L5.94567 13.8396M5.94567 13.8396C3.57616 11.6585 1.37728 8.77145 1.3772 5.62518L5.94567 13.8396Z"
            fill="white"
            stroke="#DCE0DF"
          />
        </svg>
        <div className=" mt-20">
          <Image className=" object-cover" src={img} width={218} height={218}/>
        </div>
        <div className="flex flex-row justify-end items-end w-full mb-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3333 14.3333C10.3333 14.3333 6 14.6667 3.66666 12C1.33333 9.33333 1.33333 1.33333 1.33333 1.33333C1.33333 1.33333 9.33333 1 12 3C14.6667 5 14 10.6667 14 10.6667"
              stroke="#5D986A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6667 14.6666C14.6667 14.6666 10.9402 11.8504 8.66666 9.33325C6.39309 6.81609 5.33333 4.33325 5.33333 4.33325"
              stroke="#5D986A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66667 9.33333L9 5"
              stroke="#5D986A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66666 9.33333L5.33333 9"
              stroke="#5D986A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-xs text-gray-quick-silver">1.4 Б</p>
        </div>
        <div className="">
          <p className="text-xs text-center text-gray-quick-silver tracking-widest">
            УКРЕПЛЯЮЩАЯ СЫВОРОТКА ДЛЯ КОНТУРА ОВАЛА ЛИЦА С КОЛЛАГЕНОМ
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-label-orange text-center text-sm mt-7">3 750 De</p>
          <div className="flex flex-row">
            <p className="text-center text-sm mr-2 text-gray-quick-silver line-through">
              ₽ 920.00
            </p>
            <p className="text-center text-sm pb-14">₽ 764.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
