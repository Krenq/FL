import Image from 'next/image';
import React, { useState } from 'react';
import * as icons from '../../images/constsIcons';
import SetLanguage from '../SetLanguage/SetLanguage';
import SetLocation from '../SetLocation/SetLocation';


import odnokl from '../../images/templates/odnoklassniki.jpg'
import tiktok from '../../images/templates/tik-tok.svg'

import ru from '../../images/Icons/flag.png';
export default function SectionOverNavBar() {
	const [show, setShow] = useState(false),
		[showLang, setShowLang] = useState(false),
		[currentLang, setCurrentLang] = useState({ name: 'RU', src: ru }),
		[currentCity, setCurrentCity] = useState(false);

	const handleSetShow = () => setShow(!show),
		handleSetShowLang = () => setShowLang(!showLang);
	return (
		<>
			<article className=" ..5x2:hidden h-8 px-20 bg-white border-b border-gray-quick-silver border-opacity-50 .2x1:px-1">
				<div className="max-w-screen-overBar h-full mx-auto flex flex-row justify-between items-center ">
					<div className="flex flex-row justify-center items-center">
						<div
							onClick={handleSetShow}
							className="flex cursor-pointer hover:text-black transition-colors justify-center items-center mr-5 text-13px font-normal font-montserrat text-gray-quick-silver"
						>
							<Image src={icons.ICON_LOCATION} width={10} height={14} />
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
							<Image src={icons.ICON_PHONE} width={10} height={16} />
							<span className=".1x1:text-xs ml-2">8-800-700-70-95</span>
						</div>
						<div className=" flex flex-row justify-between items-center ml-2">
							<div className=" flex flex-row justify-between items-center mr-2 cursor-pointer">
								{/* <Image src={icons.ICON_VK} width={18} height={11} /> */}
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.9051 12.7539H17.8918L17.954 12.6733C18.1888 12.3689 18.7567 11.5547 19.299 10.684C19.5701 10.2487 19.8344 9.80002 20.0474 9.39434C20.2608 8.98768 20.4208 8.62767 20.4856 8.36873V8.36774L20.4872 8.3624L20.4873 8.36179L20.4877 8.36079C20.6263 7.89315 20.4988 7.59577 20.3719 7.43021C20.1794 7.18065 19.8706 7.05 19.4406 7.05H17.6012C17.0049 7.05 16.5563 7.34269 16.3281 7.87858C16.3281 7.87874 16.328 7.87889 16.328 7.87904L16.2819 7.85947L17.9051 12.7539ZM17.9051 12.7539C17.8939 12.7726 17.8829 12.7917 17.8738 12.8089L17.8602 12.8348L17.8761 12.8593C17.8979 12.8931 17.9556 12.9564 18.0347 13.039C18.1048 13.1124 18.1952 13.2046 18.3002 13.3117C18.316 13.3278 18.3322 13.3444 18.3487 13.3612C18.6004 13.618 18.9258 13.9514 19.2592 14.317C19.5928 14.6827 19.9337 15.0798 20.2167 15.4639C20.5001 15.8486 20.7226 16.2167 20.8227 16.5248C20.9745 17.033 20.8351 17.3538 20.6977 17.5341C20.5552 17.7207 20.2662 17.95 19.6992 17.95H17.8598C17.3766 17.95 17.0593 17.7754 16.7068 17.4456C16.5352 17.285 16.3563 17.0886 16.146 16.8577L16.1244 16.834C15.9052 16.5933 15.6527 16.3173 15.3425 16.0101L15.3418 16.0095C14.5396 15.2444 14.1441 15.044 13.967 14.995L13.9074 14.9785L13.9038 15.0403C13.8918 15.2427 13.8947 15.573 13.8976 15.9145L13.8976 15.915C13.8717 15.9812 13.8652 16.0619 13.8663 16.1475C13.8672 16.2259 13.8747 16.3138 13.8824 16.4053C13.8837 16.4197 13.8849 16.4341 13.8861 16.4486C13.9042 16.6654 13.919 16.9024 13.8623 17.1237C13.8063 17.3422 13.6803 17.5463 13.4119 17.6973C13.1412 17.8497 12.7222 17.95 12.0776 17.95C9.2572 17.95 7.00084 15.8603 5.4455 13.5684C4.66879 12.4239 4.06936 11.2325 3.66421 10.2338C3.46164 9.73453 3.30784 9.28392 3.20476 8.91194C3.10135 8.53878 3.05 8.24827 3.05 8.06773C3.05 7.74534 3.15709 7.49312 3.34934 7.32096C3.5423 7.14814 3.82696 7.05073 4.19141 7.05073H6.03085C6.44671 7.05073 6.72326 7.17605 6.92056 7.36509C7.11959 7.5558 7.24234 7.81542 7.34178 8.09241L17.9051 12.7539ZM6.03083 8.05073H6.03085C6.03395 8.05073 6.03703 8.05073 6.04011 8.05072C6.11242 8.05062 6.17802 8.05053 6.23245 8.10836C6.25806 8.13557 6.27921 8.17326 6.30083 8.22177C6.32267 8.2708 6.34683 8.33526 6.37689 8.41897L6.37708 8.41951L6.37708 8.41951C6.74192 9.47365 7.33369 10.7808 7.98309 11.8236C8.30787 12.3451 8.64588 12.7985 8.97577 13.1209C9.30748 13.445 9.62257 13.6285 9.90183 13.6285C10.1182 13.6285 10.2766 13.5742 10.3935 13.4909C10.5108 13.4074 10.5901 13.2919 10.6438 13.1637C10.7519 12.9052 10.7525 12.6034 10.7525 12.4318C10.7525 12.4318 10.7525 12.4318 10.7525 12.4318L10.7517 9.71838C10.7029 8.83514 10.3762 8.3979 10.1611 8.1314L10.0953 8.04988L10.2001 8.05L12.8221 8.05293L12.8664 8.05298L12.8717 8.09698L12.872 8.10009L12.872 8.10132L12.8721 8.10273L12.8721 8.10522L12.8721 8.11256L12.8721 8.13896L12.8719 8.23712L12.8707 8.5889C12.8697 8.88232 12.8685 9.27991 12.8679 9.69974C12.8668 10.5399 12.8683 11.4677 12.8795 11.8289L12.8796 11.8305C12.8795 12.3351 13.0831 12.7112 13.4231 12.8164C13.7657 12.9224 14.2796 12.7651 14.9258 12.1237C16.2905 10.6121 17.2358 8.34998 17.2739 8.25767L17.2741 8.25719C17.3027 8.18988 17.3335 8.13372 17.3876 8.09736C17.4416 8.06112 17.5104 8.05 17.6012 8.05H19.4406H19.4481H19.5179L19.4963 8.11344L6.03083 8.05073ZM6.03083 8.05073C5.56988 8.05099 5.20133 8.05088 4.91588 8.0508C4.80003 8.05076 4.69786 8.05073 4.60876 8.05073C4.45447 8.05073 4.3393 8.05082 4.2601 8.05115C4.18269 8.05146 4.13647 8.05197 4.12344 8.05313L4.07388 8.05755L4.07806 8.10713C4.10849 8.46858 4.32665 9.20114 4.70727 10.0927C5.0887 10.9861 5.6356 12.0445 6.32758 13.059C7.70916 15.0845 9.67994 16.95 12.0776 16.95C12.577 16.95 12.7748 16.8986 12.8498 16.8696L12.8857 16.8558L12.8815 16.8175C12.8809 16.8127 12.8802 16.807 12.879 16.802L12.879 16.8019C12.8789 16.8015 12.8785 16.8 12.8778 16.7978M6.03083 8.05073L12.8778 16.7978M12.8778 16.7978L12.8779 16.7973C12.8782 16.7331 12.8792 16.5296 12.8773 15.9348L12.8773 15.9345C12.8767 15.8698 12.8758 15.806 12.875 15.7432C12.8722 15.538 12.8695 15.3428 12.876 15.1607C12.8845 14.923 12.9086 14.7123 12.9665 14.5371C13.0241 14.3629 13.1146 14.2256 13.2554 14.1311C13.3968 14.0362 13.5945 13.9807 13.873 13.9807C14.4376 13.9807 15.0687 14.3534 16.0617 15.3013C16.4523 15.6878 16.7396 16.0042 16.9658 16.2535C17.0589 16.356 17.1417 16.4471 17.217 16.5271C17.3455 16.6634 17.4538 16.7687 17.5546 16.8397C17.6564 16.9114 17.7537 16.9507 17.8598 16.9507H17.8599C18.5744 16.9492 19.014 16.9503 19.2913 16.951C19.3511 16.9512 19.4034 16.9513 19.4492 16.9514C19.7052 16.9518 19.7641 16.9509 19.8206 16.9421L19.8731 16.9338L19.8617 16.8819C19.8204 16.695 19.6759 16.445 19.4817 16.172C19.2861 15.897 19.0351 15.5921 18.7737 15.2939C18.2611 14.7089 17.7057 14.1465 17.4434 13.8809L17.4283 13.8656C17.4283 13.8656 17.4283 13.8656 17.4283 13.8656C17.2644 13.6989 17.1524 13.5803 17.11 13.5303C16.8782 13.2341 16.8145 12.9863 16.8337 12.7684C16.8533 12.548 16.9581 12.3508 17.0797 12.1559C17.0879 12.1434 17.0951 12.1326 17.1027 12.1226L17.1034 12.1217C17.3818 11.7398 17.9363 10.9349 18.4423 10.129C18.6954 9.7261 18.9366 9.32233 19.1254 8.9707C19.3127 8.6217 19.451 8.31904 19.4951 8.11888C19.4952 8.11834 19.4953 8.11781 19.4954 8.11727L12.8778 16.7978ZM16.0966 15.2654C15.104 14.3179 14.4597 13.9307 13.873 13.9307C12.8004 13.9307 12.8113 14.735 12.825 15.7447C12.8258 15.8074 12.8267 15.8708 12.8273 15.9349L16.0966 15.2654ZM19.7628 16.898C19.7632 16.8998 19.7636 16.9017 19.764 16.9034L19.8128 16.8927L19.8051 16.8433C19.8034 16.8435 19.8018 16.8438 19.8001 16.844C19.582 16.1176 17.9254 14.4402 17.4077 13.9159L17.3926 13.9007L19.7628 16.898Z" fill="#B0B1AF" stroke="white" stroke-width="0.1" />
								</svg>

							</div>
							<div className=" flex flex-row justify-between items-center mr-2 cursor-pointer">
								{/* <Image src={icons.ICON_TELEGRAM} width={14} height={12} /> */}
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.24119 11.8271L8.65894 13.4983C8.79113 13.5622 8.94719 13.5577 9.07356 13.4851L12.1157 11.7499L10.2743 13.3508C10.1806 13.4325 10.127 13.5491 10.127 13.6719V17.5714C10.127 17.9828 10.6622 18.1559 10.9132 17.8291L12.3906 15.9019L16.0441 17.9434C16.3004 18.0879 16.6288 17.9428 16.6882 17.6554L18.9669 6.51406C19.035 6.17925 18.6955 5.90614 18.3799 6.0307L5.2773 11.0443C4.92557 11.1791 4.90286 11.6619 5.24119 11.8271ZM17.9536 7.11398L15.951 16.9052L12.489 14.9706C12.3003 14.8649 12.0575 14.9118 11.9235 15.0855L11.0005 16.2893V13.8645L15.9801 9.53593C16.3743 9.1937 15.9213 8.58521 15.4711 8.8446L8.8383 12.6281L6.5136 11.4917L17.9536 7.11398Z" fill="#B0B1AF" />
								</svg>

							</div>
							<div className=" flex flex-row justify-between items-center mr-2 cursor-pointer">
								<Image src={odnokl} width={24} height={24} />

							</div>
							<div className=" flex flex-row justify-between items-center mr-2 cursor-pointer">
								<Image src={tiktok} width={24} height={24} />
							</div>
						</div>
					</div>

					<div className=" .1x1:ml-0 text-13px font-normal .1x1:text-xs font-montserrat text-gray-quick-silver ml-10">
						Бесплатная доставка от Р 2.500 +
					</div>

					<div className="relative flex flex-row items-center h-full">
						<div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black">
							<Image src={icons.ICON_HEART} width={18} height={15} />
							<span className=".1x1:text-xs .1x1:ml-2 ml-2">Избранное</span>
						</div>
						<div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black">
							<Image src={icons.ICON_DOOR} width={18} height={17} />
							<span className=".1x1:text-xs .1x1:ml-2 ml-2">Вход</span>
						</div>
						<div className="flex items-center h-full text-13px font-normal font-montserrat text-black-70pe border-l border-gray-quick-silver px-2 border-opacity-50 ..5x1:px-1 cursor-pointer hover:text-black">
							<Image src={icons.ICON_HUMAN} width={14} height={16} />
							<span className=".1x1:text-xs .1x1:ml-2 ml-2">Регистрация</span>
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
