import Image from 'next/image';
import React, { useState } from 'react';
import * as icons from '../../images/constsIcons';
import SetLanguage from '../SetLanguage/SetLanguage';
import SetLocation from '../SetLocation/SetLocation';
import ru from '../../images/Icons/flag.png';

export default function SectionOverNavBar({logIn,boolLogIn}) {
  const [show, setShow] = useState(false),
    [showLang, setShowLang] = useState(false),
    [currentLang, setCurrentLang] = useState({ name: 'RU', src: ru }),
    [currentCity, setCurrentCity] = useState(false),
    [userN, setUserN] = useState('Александринfdgrddfdf dfge  sdfsd ');

  const handleSetShow = () => setShow(!show),
    handleSetShowLang = () => setShowLang(!showLang);

  

  function limitStr(str, n, symb) {
    if (!n && !symb) return str;
    symb = symb || '..';
    return str.substr(0, n - symb.length) + symb;
  }

  return (
    <>
      <article className=" ..5x2:hidden h-8 px-20 bg-white border-b border-gray-quick-silver border-opacity-50 .2x01:px-1">
        <div className="max-w-screen-overBar h-full mx-auto flex flex-row justify-between items-center ">
          <div className="flex flex-row justify-center items-center">
            <div
              onClick={handleSetShow}
              className="flex cursor-pointer hover:text-black transition-colors justify-center items-center mr-5 text-13px font-normal font-montserrat text-gray-quick-silver"
            >
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.9 4.15C6.36413 4.15 6.80925 4.33437 7.13744 4.66256C7.46563 4.99075 7.65 5.43587 7.65 5.9C7.65 6.12981 7.60474 6.35738 7.51679 6.5697C7.42884 6.78202 7.29994 6.97493 7.13744 7.13744C6.97493 7.29994 6.78202 7.42884 6.5697 7.51679C6.35738 7.60474 6.12981 7.65 5.9 7.65C5.43587 7.65 4.99075 7.46563 4.66256 7.13744C4.33437 6.80925 4.15 6.36413 4.15 5.9C4.15 5.43587 4.33437 4.99075 4.66256 4.66256C4.99075 4.33437 5.43587 4.15 5.9 4.15ZM5.9 1C7.19956 1 8.44589 1.51625 9.36482 2.43518C10.2838 3.3541 10.8 4.60044 10.8 5.9C10.8 9.575 5.9 15 5.9 15C5.9 15 1 9.575 1 5.9C1 4.60044 1.51625 3.3541 2.43518 2.43518C3.3541 1.51625 4.60044 1 5.9 1ZM5.9 2.4C4.97174 2.4 4.0815 2.76875 3.42513 3.42513C2.76875 4.0815 2.4 4.97174 2.4 5.9C2.4 6.6 2.4 8 5.9 12.697C9.4 8 9.4 6.6 9.4 5.9C9.4 4.97174 9.03125 4.0815 8.37487 3.42513C7.7185 2.76875 6.82826 2.4 5.9 2.4Z"
                  fill="black"
                />
              </svg>

              <span className=".1x1:text-xs ml-2 flex items-center">
                {currentCity?.name || 'Москва'}
                <svg
                  className="ml-1"
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.875 0.75L4 3.875L7.125 0.75H0.875Z"
                    fill="#18202B"
                  />
                </svg>
              </span>
            </div>
            <div className="flex justify-center items-center mr-5 text-13px font-normal font-montserrat text-gray-quick-silver hover:text-black cursor-pointer">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4836 11.7135C9.71454 11.493 8.9182 11.1259 8.28678 10.6675C8.22269 10.6491 8.15861 10.6307 8.09453 10.6123C7.90227 10.5572 7.75573 10.5845 7.59081 10.676L5.77669 11.6815C4.25797 10.2058 3.1426 8.29081 2.75994 6.23919L4.57406 5.23361C4.82144 5.09649 4.95903 4.85852 4.88599 4.62952C4.89587 3.86947 5.00659 2.99962 5.2271 2.23061C5.31898 1.91019 5.09044 1.49789 4.77002 1.40601L2.52707 0.76286C2.20665 0.670981 1.79435 0.899522 1.70247 1.21994C-0.0248552 7.24385 3.44898 13.5108 9.47288 15.2381C9.7933 15.33 10.2056 15.1015 10.2975 14.781L10.9406 12.5381C11.0325 12.2177 10.804 11.8054 10.4836 11.7135ZM2.8004 2.2283L3.76166 2.50394C3.66036 3.09907 3.62315 3.71258 3.60431 4.262L2.61479 4.8105C2.57896 3.96799 2.62559 3.07977 2.8004 2.2283ZM9.19956 13.7727C8.38484 13.4697 7.60687 13.0386 6.91137 12.5617L7.90089 12.0132C8.37681 12.2884 8.91681 12.582 9.49357 12.7473L9.19956 13.7727Z"
                  fill="black"
                />
              </svg>

              <span className=".1x1:text-xs ml-2 whitespace-nowrap">
                8-800-700-70-95
              </span>
            </div>
            <div className=" flex flex-row justify-between items-center ml-2">
              <div className=" flex flex-row justify-between items-center mr-2 cursor-pointer">
                {/* <Image src={icons.ICON_VK} width={18} height={11} /> */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9051 12.7539H17.8918L17.954 12.6733C18.1888 12.3689 18.7567 11.5547 19.299 10.684C19.5701 10.2487 19.8344 9.80002 20.0474 9.39434C20.2608 8.98768 20.4208 8.62767 20.4856 8.36873V8.36774L20.4872 8.3624L20.4873 8.36179L20.4877 8.36079C20.6263 7.89315 20.4988 7.59577 20.3719 7.43021C20.1794 7.18065 19.8706 7.05 19.4406 7.05H17.6012C17.0049 7.05 16.5563 7.34269 16.3281 7.87858C16.3281 7.87874 16.328 7.87889 16.328 7.87904L16.2819 7.85947L17.9051 12.7539ZM17.9051 12.7539C17.8939 12.7726 17.8829 12.7917 17.8738 12.8089L17.8602 12.8348L17.8761 12.8593C17.8979 12.8931 17.9556 12.9564 18.0347 13.039C18.1048 13.1124 18.1952 13.2046 18.3002 13.3117C18.316 13.3278 18.3322 13.3444 18.3487 13.3612C18.6004 13.618 18.9258 13.9514 19.2592 14.317C19.5928 14.6827 19.9337 15.0798 20.2167 15.4639C20.5001 15.8486 20.7226 16.2167 20.8227 16.5248C20.9745 17.033 20.8351 17.3538 20.6977 17.5341C20.5552 17.7207 20.2662 17.95 19.6992 17.95H17.8598C17.3766 17.95 17.0593 17.7754 16.7068 17.4456C16.5352 17.285 16.3563 17.0886 16.146 16.8577L16.1244 16.834C15.9052 16.5933 15.6527 16.3173 15.3425 16.0101L15.3418 16.0095C14.5396 15.2444 14.1441 15.044 13.967 14.995L13.9074 14.9785L13.9038 15.0403C13.8918 15.2427 13.8947 15.573 13.8976 15.9145L13.8976 15.915C13.8717 15.9812 13.8652 16.0619 13.8663 16.1475C13.8672 16.2259 13.8747 16.3138 13.8824 16.4053C13.8837 16.4197 13.8849 16.4341 13.8861 16.4486C13.9042 16.6654 13.919 16.9024 13.8623 17.1237C13.8063 17.3422 13.6803 17.5463 13.4119 17.6973C13.1412 17.8497 12.7222 17.95 12.0776 17.95C9.2572 17.95 7.00084 15.8603 5.4455 13.5684C4.66879 12.4239 4.06936 11.2325 3.66421 10.2338C3.46164 9.73453 3.30784 9.28392 3.20476 8.91194C3.10135 8.53878 3.05 8.24827 3.05 8.06773C3.05 7.74534 3.15709 7.49312 3.34934 7.32096C3.5423 7.14814 3.82696 7.05073 4.19141 7.05073H6.03085C6.44671 7.05073 6.72326 7.17605 6.92056 7.36509C7.11959 7.5558 7.24234 7.81542 7.34178 8.09241L17.9051 12.7539ZM6.03083 8.05073H6.03085C6.03395 8.05073 6.03703 8.05073 6.04011 8.05072C6.11242 8.05062 6.17802 8.05053 6.23245 8.10836C6.25806 8.13557 6.27921 8.17326 6.30083 8.22177C6.32267 8.2708 6.34683 8.33526 6.37689 8.41897L6.37708 8.41951L6.37708 8.41951C6.74192 9.47365 7.33369 10.7808 7.98309 11.8236C8.30787 12.3451 8.64588 12.7985 8.97577 13.1209C9.30748 13.445 9.62257 13.6285 9.90183 13.6285C10.1182 13.6285 10.2766 13.5742 10.3935 13.4909C10.5108 13.4074 10.5901 13.2919 10.6438 13.1637C10.7519 12.9052 10.7525 12.6034 10.7525 12.4318C10.7525 12.4318 10.7525 12.4318 10.7525 12.4318L10.7517 9.71838C10.7029 8.83514 10.3762 8.3979 10.1611 8.1314L10.0953 8.04988L10.2001 8.05L12.8221 8.05293L12.8664 8.05298L12.8717 8.09698L12.872 8.10009L12.872 8.10132L12.8721 8.10273L12.8721 8.10522L12.8721 8.11256L12.8721 8.13896L12.8719 8.23712L12.8707 8.5889C12.8697 8.88232 12.8685 9.27991 12.8679 9.69974C12.8668 10.5399 12.8683 11.4677 12.8795 11.8289L12.8796 11.8305C12.8795 12.3351 13.0831 12.7112 13.4231 12.8164C13.7657 12.9224 14.2796 12.7651 14.9258 12.1237C16.2905 10.6121 17.2358 8.34998 17.2739 8.25767L17.2741 8.25719C17.3027 8.18988 17.3335 8.13372 17.3876 8.09736C17.4416 8.06112 17.5104 8.05 17.6012 8.05H19.4406H19.4481H19.5179L19.4963 8.11344L6.03083 8.05073ZM6.03083 8.05073C5.56988 8.05099 5.20133 8.05088 4.91588 8.0508C4.80003 8.05076 4.69786 8.05073 4.60876 8.05073C4.45447 8.05073 4.3393 8.05082 4.2601 8.05115C4.18269 8.05146 4.13647 8.05197 4.12344 8.05313L4.07388 8.05755L4.07806 8.10713C4.10849 8.46858 4.32665 9.20114 4.70727 10.0927C5.0887 10.9861 5.6356 12.0445 6.32758 13.059C7.70916 15.0845 9.67994 16.95 12.0776 16.95C12.577 16.95 12.7748 16.8986 12.8498 16.8696L12.8857 16.8558L12.8815 16.8175C12.8809 16.8127 12.8802 16.807 12.879 16.802L12.879 16.8019C12.8789 16.8015 12.8785 16.8 12.8778 16.7978M6.03083 8.05073L12.8778 16.7978M12.8778 16.7978L12.8779 16.7973C12.8782 16.7331 12.8792 16.5296 12.8773 15.9348L12.8773 15.9345C12.8767 15.8698 12.8758 15.806 12.875 15.7432C12.8722 15.538 12.8695 15.3428 12.876 15.1607C12.8845 14.923 12.9086 14.7123 12.9665 14.5371C13.0241 14.3629 13.1146 14.2256 13.2554 14.1311C13.3968 14.0362 13.5945 13.9807 13.873 13.9807C14.4376 13.9807 15.0687 14.3534 16.0617 15.3013C16.4523 15.6878 16.7396 16.0042 16.9658 16.2535C17.0589 16.356 17.1417 16.4471 17.217 16.5271C17.3455 16.6634 17.4538 16.7687 17.5546 16.8397C17.6564 16.9114 17.7537 16.9507 17.8598 16.9507H17.8599C18.5744 16.9492 19.014 16.9503 19.2913 16.951C19.3511 16.9512 19.4034 16.9513 19.4492 16.9514C19.7052 16.9518 19.7641 16.9509 19.8206 16.9421L19.8731 16.9338L19.8617 16.8819C19.8204 16.695 19.6759 16.445 19.4817 16.172C19.2861 15.897 19.0351 15.5921 18.7737 15.2939C18.2611 14.7089 17.7057 14.1465 17.4434 13.8809L17.4283 13.8656C17.4283 13.8656 17.4283 13.8656 17.4283 13.8656C17.2644 13.6989 17.1524 13.5803 17.11 13.5303C16.8782 13.2341 16.8145 12.9863 16.8337 12.7684C16.8533 12.548 16.9581 12.3508 17.0797 12.1559C17.0879 12.1434 17.0951 12.1326 17.1027 12.1226L17.1034 12.1217C17.3818 11.7398 17.9363 10.9349 18.4423 10.129C18.6954 9.7261 18.9366 9.32233 19.1254 8.9707C19.3127 8.6217 19.451 8.31904 19.4951 8.11888C19.4952 8.11834 19.4953 8.11781 19.4954 8.11727L12.8778 16.7978ZM16.0966 15.2654C15.104 14.3179 14.4597 13.9307 13.873 13.9307C12.8004 13.9307 12.8113 14.735 12.825 15.7447C12.8258 15.8074 12.8267 15.8708 12.8273 15.9349L16.0966 15.2654ZM19.7628 16.898C19.7632 16.8998 19.7636 16.9017 19.764 16.9034L19.8128 16.8927L19.8051 16.8433C19.8034 16.8435 19.8018 16.8438 19.8001 16.844C19.582 16.1176 17.9254 14.4402 17.4077 13.9159L17.3926 13.9007L19.7628 16.898Z"
                    fill="#B0B1AF"
                    stroke="white"
                    strokeWidth="0.1"
                  />
                </svg>
              </div>
              <div className=" flex flex-row justify-between items-center mr-2 cursor-pointer">
                {/* <Image src={icons.ICON_TELEGRAM} width={14} height={12} /> */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.24119 11.8271L8.65894 13.4983C8.79113 13.5622 8.94719 13.5577 9.07356 13.4851L12.1157 11.7499L10.2743 13.3508C10.1806 13.4325 10.127 13.5491 10.127 13.6719V17.5714C10.127 17.9828 10.6622 18.1559 10.9132 17.8291L12.3906 15.9019L16.0441 17.9434C16.3004 18.0879 16.6288 17.9428 16.6882 17.6554L18.9669 6.51406C19.035 6.17925 18.6955 5.90614 18.3799 6.0307L5.2773 11.0443C4.92557 11.1791 4.90286 11.6619 5.24119 11.8271ZM17.9536 7.11398L15.951 16.9052L12.489 14.9706C12.3003 14.8649 12.0575 14.9118 11.9235 15.0855L11.0005 16.2893V13.8645L15.9801 9.53593C16.3743 9.1937 15.9213 8.58521 15.4711 8.8446L8.8383 12.6281L6.5136 11.4917L17.9536 7.11398Z"
                    fill="#B0B1AF"
                  />
                </svg>
              </div>
              <div className=" flex flex-row justify-between items-center mr-2 cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9669 14.8962L12.956 14.8921C12.7754 14.8238 12.5554 14.9185 12.431 15.0829C12.3699 15.1636 12.3359 15.2568 12.3407 15.3482C12.3455 15.4381 12.3882 15.5323 12.4918 15.6171L12.4962 15.6206L12.4962 15.6206L12.4994 15.6231L12.4995 15.6231L12.5034 15.6262C12.7343 15.8072 15.8418 18.2497 15.9109 18.3047L15.9112 18.305C16.0315 18.4023 16.0737 18.5213 16.0531 18.6393C16.0332 18.7534 15.9561 18.8581 15.8558 18.9368C15.6574 19.0924 15.3367 19.168 15.1028 18.9886L15.1019 18.988L15.102 18.988C14.4061 18.4311 13.3297 17.5824 12.5731 16.9859C12.519 16.9432 12.4665 16.9018 12.4159 16.862L12.4159 16.8619C12.1998 16.6913 11.843 16.6902 11.6263 16.8619L11.6263 16.8619L8.9496 18.9781L8.94907 18.9785L8.94907 18.9785C8.71213 19.1607 8.39087 19.0853 8.19229 18.9303C8.09201 18.852 8.01499 18.7479 7.99508 18.6348C7.97447 18.5178 8.01678 18.4004 8.13707 18.3059L12.9669 14.8962ZM12.9669 14.8962L12.9784 14.8951C13.6997 14.8276 14.9028 14.6561 15.757 14.2282L15.7574 14.228C16.0673 14.0696 16.2969 13.9433 16.4638 13.8384C16.6299 13.7339 16.7379 13.6483 16.8012 13.5702C16.8666 13.4894 16.8862 13.4139 16.8708 13.3356C16.857 13.2655 16.8152 13.1972 16.7731 13.1284L16.77 13.1233L16.77 13.1233L16.7692 13.122C16.6515 12.9421 16.4716 12.883 16.2786 12.8984C16.0883 12.9135 15.8818 13.0007 15.6955 13.1157L15.6952 13.1159C15.6445 13.1477 14.2456 14.0105 12.0139 14.0105C10.385 14.0105 9.34291 13.5912 8.64189 13.2687C8.57184 13.2365 8.50471 13.205 8.44058 13.1749C8.34476 13.13 8.25565 13.0882 8.1735 13.0518C8.03601 12.9908 7.91318 12.9427 7.80298 12.9175C7.69246 12.8922 7.59062 12.889 7.49717 12.9221C7.40306 12.9554 7.32395 13.0231 7.25471 13.1274L7.25469 13.1274L7.25388 13.1287L7.25233 13.1312C7.20962 13.2001 7.16711 13.2686 7.15354 13.3394C7.13858 13.4174 7.15895 13.4926 7.22474 13.5728C7.2884 13.6504 7.39663 13.7355 7.56273 13.8393C7.72968 13.9436 7.9589 14.069 8.26805 14.2262L8.26816 14.2262C8.91537 14.5534 9.8824 14.782 11.0695 14.8914L11.0775 14.8921L11.0854 14.8903C11.3109 14.8379 11.5216 14.949 11.6277 15.1116C11.6804 15.1924 11.7056 15.2836 11.6955 15.3711C11.6855 15.4576 11.6405 15.5449 11.5446 15.6191L11.5377 15.6244L11.5368 15.6259L8.13714 18.3058L12.9669 14.8962ZM15.0047 12.4575L15.0047 12.4575C16.1452 11.7522 17.295 12.0375 17.7628 12.7553C17.9897 13.1264 17.9969 13.4633 17.8563 13.7677C17.714 14.0758 17.4174 14.3563 17.0257 14.603C16.2428 15.096 15.1015 15.4405 14.1442 15.6017L14.0316 15.6207L14.1219 15.6906C14.4105 15.914 14.7321 16.1669 15.8843 17.0727C16.1208 17.2587 16.3924 17.4722 16.7058 17.7186C17.0806 18.0214 17.2071 18.3572 17.1726 18.6709C17.1379 18.9874 16.938 19.2918 16.639 19.5255C16.0402 19.9934 15.0673 20.16 14.3157 19.5797C13.7318 19.112 12.9227 18.4729 12.0544 17.7885L12.0234 17.7641L11.9925 17.7885L9.7365 19.5724C9.73641 19.5725 9.73633 19.5725 9.73624 19.5726C8.97467 20.1581 8.00071 19.9857 7.40457 19.5143C7.10685 19.2789 6.90917 18.9733 6.87671 18.6577C6.84454 18.3451 6.97356 18.0123 7.35051 17.7163L7.35059 17.7162L9.92063 15.6897L10.0097 15.6195L9.89779 15.6011C8.99567 15.4527 8.24721 15.2287 7.66377 14.9332C7.18452 14.69 6.65924 14.4225 6.3409 14.0753C6.18286 13.9029 6.07869 13.7137 6.05511 13.5008C6.03155 13.2881 6.08764 13.045 6.26272 12.7632L6.26241 12.763L6.2624 12.7628L6.26274 12.7631L6.26632 12.7575C6.73066 12.0347 7.89005 11.7513 9.02611 12.4575L9.02801 12.4586C9.02772 12.4584 9.04906 12.4712 9.08512 12.4908C9.12178 12.5107 9.1753 12.5387 9.24475 12.572C9.38364 12.6386 9.58631 12.7266 9.84527 12.8143C10.3632 12.9897 11.1065 13.1641 12.0155 13.1641C13.8329 13.1641 14.9888 12.4674 15.0047 12.4575ZM12.5046 15.6276C12.5047 15.6277 12.5047 15.6277 12.5046 15.6276L12.5046 15.6276Z"
                    fill="#949792"
                    stroke="white"
                    strokeWidth="0.1"
                  />
                  <path
                    d="M9.68594 8.29763V8.2976C9.68594 7.01611 10.7228 5.97383 11.9964 5.97383C13.2707 5.97383 14.3075 7.01612 14.3075 8.2976C14.3075 9.57357 13.2709 10.6121 11.9964 10.6121C10.7219 10.6121 9.68529 9.57358 9.68594 8.29763ZM13.4079 8.2976C13.4079 7.5127 12.7748 6.87345 11.9964 6.87345C11.2173 6.87345 10.5849 7.5127 10.5849 8.29694C10.5849 9.07748 11.2183 9.71243 11.9964 9.71243C12.7745 9.71243 13.4079 9.07749 13.4079 8.2976Z"
                    fill="#949792"
                    stroke="white"
                    strokeWidth="0.1"
                  />
                  <path
                    d="M16.2362 8.29706C16.2362 10.6339 14.334 12.5354 11.9965 12.5354C9.65832 12.5354 7.75677 10.6339 7.75677 8.29706C7.75677 5.95548 9.65908 4.05 11.9965 4.05C14.3339 4.05 16.2356 5.95547 16.2362 8.29706ZM15.3366 8.29706C15.3366 6.45156 13.8382 4.94963 11.9965 4.94963C10.1541 4.94963 8.6564 6.45157 8.6564 8.29706C8.6564 10.138 10.1542 11.6358 11.9965 11.6358C13.8388 11.6358 15.3366 10.138 15.3366 8.29706Z"
                    fill="#949792"
                    stroke="white"
                    strokeWidth="0.1"
                  />
                </svg>
              </div>
              <div className=" flex flex-row justify-between items-center mr-2 cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5583 10.2777C16.6449 10.187 15.786 9.84835 15.0688 9.32356L14.4326 8.85801V9.64637V14.5362C14.4326 16.7751 12.6308 18.6 10.4163 18.6C8.20065 18.6 6.4 16.7942 6.4 14.5362C6.4 12.4375 7.9486 10.7364 9.93567 10.4999V12.1124C8.81395 12.3372 7.9594 13.3401 7.9594 14.5362C7.9594 15.8859 9.03854 17.0058 10.3962 17.0058C11.7538 17.0058 12.8329 15.8859 12.8329 14.5362V5.4H14.4134C14.5916 7.0845 15.8836 8.44005 17.5583 8.67361V10.2777Z"
                    stroke="#949792"
                    strokeWidth="0.8"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className=" .1x1:ml-0 text-13px font-normal .1x1:text-xs font-montserrat text-gray-quick-silver ml-10 whitespace-nowrap">
            Бесплатная доставка от Р 2.500 +
          </div>

          <div className="relative flex flex-row items-center h-full">
            {boolLogIn ? (
              <div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5002 5.08334C16.5002 6.60213 15.2689 7.83334 13.7502 7.83334C13.0258 7.83334 12.3668 7.55327 11.8757 7.09551L7.23607 10.1886C7.29958 10.4205 7.3335 10.6646 7.3335 10.9167C7.3335 11.1687 7.29958 11.4129 7.23607 11.6448L11.4296 14.4404C11.9178 13.6746 12.7746 13.1667 13.7502 13.1667C15.2689 13.1667 16.5002 14.3979 16.5002 15.9167C16.5002 17.4355 15.2689 18.6667 13.7502 18.6667C12.2449 18.6667 11.0221 17.4573 11.0005 15.9571L6.458 12.9288C5.96683 13.3866 5.30787 13.6667 4.5835 13.6667C3.06471 13.6667 1.8335 12.4355 1.8335 10.9167C1.8335 9.39789 3.06471 8.16668 4.5835 8.16668C5.30787 8.16668 5.96683 8.44675 6.458 8.90451L11.0976 5.81145C11.0341 5.57954 11.0002 5.3354 11.0002 5.08334C11.0002 3.56456 12.2314 2.33334 13.7502 2.33334C15.2689 2.33334 16.5002 3.56456 16.5002 5.08334ZM13.7502 6.33334C14.4405 6.33334 15.0002 5.7737 15.0002 5.08334C15.0002 4.39299 14.4405 3.83334 13.7502 3.83334C13.0598 3.83334 12.5002 4.39299 12.5002 5.08334C12.5002 5.7737 13.0598 6.33334 13.7502 6.33334ZM4.5835 12.1667C5.27385 12.1667 5.8335 11.607 5.8335 10.9167C5.8335 10.2263 5.27385 9.66668 4.5835 9.66668C3.89314 9.66668 3.3335 10.2263 3.3335 10.9167C3.3335 11.607 3.89314 12.1667 4.5835 12.1667ZM15.0002 15.9167C15.0002 16.607 14.4405 17.1667 13.7502 17.1667C13.0598 17.1667 12.5002 16.607 12.5002 15.9167C12.5002 15.2263 13.0598 14.6667 13.7502 14.6667C14.4405 14.6667 15.0002 15.2263 15.0002 15.9167Z"
                    fill="black"
                  />
                </svg>

                <span className=".1x1:text-xs .1x1:ml-2 ml-2">Поделиться</span>
              </div>
            ) : (
              <div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.57727 4.01549C8.32183 4.01549 7.30409 5.03322 7.30409 6.28867C7.30409 7.54411 8.32183 8.56185 9.57727 8.56185C10.8327 8.56185 11.8505 7.54411 11.8505 6.28867C11.8505 5.03322 10.8327 4.01549 9.57727 4.01549ZM5.78864 6.28867C5.78864 4.19626 7.48487 2.50003 9.57727 2.50003C11.6697 2.50003 13.3659 4.19626 13.3659 6.28867C13.3659 8.38107 11.6697 10.0773 9.57727 10.0773C7.48487 10.0773 5.78864 8.38107 5.78864 6.28867ZM2 18.4123C2 14.2275 5.39247 10.835 9.57727 10.835C13.7621 10.835 17.1545 14.2275 17.1545 18.4123C17.1545 18.8308 16.8153 19.17 16.3968 19.17C15.9783 19.17 15.6391 18.8308 15.6391 18.4123C15.6391 15.424 13.4767 12.9407 10.6313 12.4418L11.8169 16.2951C11.8907 16.5348 11.8411 16.7955 11.6844 16.9913L10.169 18.8857C10.0252 19.0654 9.80746 19.17 9.57727 19.17C9.34709 19.17 9.12938 19.0654 8.98559 18.8857L7.47013 16.9913C7.31347 16.7955 7.26385 16.5348 7.3376 16.2951L8.52324 12.4418C5.67784 12.9407 3.51545 15.424 3.51545 18.4123C3.51545 18.8308 3.17621 19.17 2.75773 19.17C2.33925 19.17 2 18.8308 2 18.4123ZM9.57727 14.1693L8.90393 16.3577L9.57727 17.1993L10.2506 16.3577L9.57727 14.1693Z"
                    fill="black"
                  />
                </svg>
                <span className=".1x1:text-xs .1x1:ml-2 ml-2">Консультант</span>
              </div>
            )}

            <div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.68835 10.7891L8.16221 15.605C9.15456 16.6732 10.8454 16.6732 11.8378 15.605L16.3116 10.7891C17.8961 9.08348 17.8961 6.31813 16.3116 4.61252C14.7272 2.90691 12.1583 2.90691 10.5738 4.61252V4.61252C10.264 4.94604 9.73604 4.94604 9.42621 4.61252V4.61252C7.84175 2.90691 5.27282 2.90691 3.68835 4.61252C2.10388 6.31813 2.10388 9.08348 3.68835 10.7891Z"
                  stroke="black"
                  stroke-width="1.5"
                />
                <circle cx="15" cy="4" r="2.5" fill="#F14155" stroke="white" />
              </svg>

              <span className=".1x1:text-xs .1x1:ml-2 ml-2">Избранное</span>
            </div>

            <div className="flex h-full">
              {boolLogIn ? (
                <div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4998 5.83331C12.4998 7.21403 11.3805 8.33331 9.99984 8.33331C8.61913 8.33331 7.49984 7.21403 7.49984 5.83331C7.49984 4.4526 8.61913 3.33331 9.99984 3.33331C11.3805 3.33331 12.4998 4.4526 12.4998 5.83331Z"
                      stroke="black"
                      stroke-width="1.5"
                    />
                    <path
                      d="M4.1665 16.25C4.1665 13.2584 6.59163 10.8333 9.58317 10.8333H10.4165C13.408 10.8333 15.8332 13.2584 15.8332 16.25V16.6666C15.8332 17.1269 15.4601 17.5 14.9998 17.5H4.99984C4.5396 17.5 4.1665 17.1269 4.1665 16.6666V16.25Z"
                      stroke="black"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="15"
                      cy="4"
                      r="2.5"
                      fill="#F14155"
                      stroke="white"
                    />
                  </svg>

                  <span className=".1x1:text-xs .1x1:ml-2 ml-2 whitespace-nowrap">
                    <span className=" whitespace-nowrap">
                      {limitStr(userN, 13)}
                    </span>{' '}
                    (1564623440)
                  </span>
                </div>
              ) : (
                <>
                  <div
                    onClick={logIn}
                    className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black"
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8333 2.1665C8.53211 2.1665 6.66663 4.03198 6.66663 6.33317C6.66663 6.79341 7.03972 7.1665 7.49996 7.1665C7.9602 7.1665 8.33329 6.79341 8.33329 6.33317C8.33329 4.95246 9.45258 3.83317 10.8333 3.83317H14.1666C15.5473 3.83317 16.6666 4.95246 16.6666 6.33317V14.6665C16.6666 16.0472 15.5473 17.1665 14.1666 17.1665H10.8333C9.45258 17.1665 8.33329 16.0472 8.33329 14.6665C8.33329 14.2063 7.9602 13.8332 7.49996 13.8332C7.03972 13.8332 6.66663 14.2063 6.66663 14.6665C6.66663 16.9677 8.53211 18.8332 10.8333 18.8332H14.1666C16.4678 18.8332 18.3333 16.9677 18.3333 14.6665V6.33317C18.3333 4.03198 16.4678 2.1665 14.1666 2.1665H10.8333Z"
                        fill="black"
                      />
                      <path
                        d="M2.49996 9.6665C2.03972 9.6665 1.66663 10.0396 1.66663 10.4998C1.66663 10.9601 2.03972 11.3332 2.49996 11.3332H9.40169C9.32751 11.4246 9.25643 11.5134 9.1892 11.5982C8.98462 11.8562 8.81142 12.0828 8.68912 12.2453C8.62792 12.3265 8.57932 12.392 8.54575 12.4374L8.50695 12.4902L8.49655 12.5044L8.49287 12.5094C8.49283 12.5095 8.49245 12.51 9.16663 12.9998L8.49287 12.5094C8.22235 12.8818 8.30447 13.4035 8.67681 13.674C9.04913 13.9445 9.57023 13.862 9.84076 13.4897L9.84312 13.4865L9.85165 13.4748L9.88645 13.4275C9.91724 13.3858 9.96275 13.3246 10.0206 13.2478C10.1364 13.094 10.3009 12.8787 10.4952 12.6337C10.8879 12.1384 11.3852 11.5431 11.8392 11.0891L12.4285 10.4998L11.8392 9.91058C11.3852 9.45659 10.8879 8.86125 10.4952 8.36598C10.3009 8.12102 10.1364 7.90569 10.0206 7.75192C9.96275 7.67511 9.91724 7.61385 9.88645 7.57216L9.85165 7.52485L9.84312 7.51319L9.84117 7.51052C9.57064 7.13822 9.04913 7.05515 8.67681 7.32566C8.30447 7.59618 8.22192 8.11732 8.49245 8.48966L9.16663 7.99984C8.49245 8.48966 8.49241 8.48961 8.49245 8.48966L8.49369 8.49138L8.49655 8.49529L8.50695 8.50952L8.54575 8.56227C8.57932 8.60772 8.62792 8.67313 8.68912 8.75442C8.81142 8.91685 8.98462 9.14346 9.1892 9.40147C9.25643 9.48626 9.32751 9.57503 9.40169 9.6665H2.49996Z"
                        fill="black"
                      />
                    </svg>

                    <span className=".1x1:text-xs .1x1:ml-2 ml-2">Вход</span>
                  </div>
                  <div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 6.3335C12.5 7.71421 11.3807 8.8335 9.99996 8.8335C8.61925 8.8335 7.49996 7.71421 7.49996 6.3335C7.49996 4.95278 8.61925 3.8335 9.99996 3.8335C11.3807 3.8335 12.5 4.95278 12.5 6.3335Z"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M4.16663 16.7502C4.16663 13.7586 6.59175 11.3335 9.58329 11.3335H10.4166C13.4082 11.3335 15.8333 13.7586 15.8333 16.7502V17.1668C15.8333 17.6271 15.4602 18.0002 15 18.0002H4.99996C4.53972 18.0002 4.16663 17.6271 4.16663 17.1668V16.7502Z"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                    </svg>

                    <span className=".1x1:text-xs .1x1:ml-2 ml-2">
                      Регистрация
                    </span>
                  </div>
                </>
              )}
            </div>

            <div
              onClick={handleSetShowLang}
              className="w-16 relative overflow-visible flex cursor-pointer items-center h-full text-13px font-normal font-montserrat text-black-70pe hover:text-black border-x border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1"
            >
              <Image
                className="object-cover rounded-full"
                src={currentLang.src}
              />
              <span className=".1x1:text-xs .1x1:ml-2 ml-2">
                {currentLang.name}
              </span>
            </div>
            <SetLanguage
              setShow={setShowLang}
              show={showLang}
              currentLang={currentLang}
              setCurrentLang={setCurrentLang}
            />
          </div>
        </div>
      </article>

      <SetLocation
        showL={show}
        setShowL={setShow}
        setCurrentCity={setCurrentCity}
        currentCity={currentCity}
      />
    </>
  );
}
