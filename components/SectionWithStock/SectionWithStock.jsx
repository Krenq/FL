import Image from 'next/image';
import React from 'react';
import { useState, useEffect } from 'react';
import { useTimerHook } from '../../hooks/useTimerHook';
import * as icons from '../../images/constsIcons';

export default function SectionWithStock() {
	const [time, setTime] = useState({
		days: '00',
		hours: '00',
		minutes: '00',
		seconds: '00'
	})


	useEffect(() => {
		setInterval(() => {
			const timeLocal = useTimerHook('Thu Oct 30 2022 17:43:29 GMT+0300 (Москва, стандартное время)') // Пример присылаемой даты с бека
			setTime(timeLocal)
		}, 1000)
	}, [])


	return (
		<article className="flex flex-row justify-center items-center bg-primary-hover min-h-42px text-white font-noto-sans text-sm font-medium ..6x5:justify-arround ..6x5:p-2 ..7x01:justify-start">
			<div className='flex items-center ..6x5:flex-col ..6x5:items-start '>
				<p className='..6x5:text-11px ..6x5:pl-14px'>Кешбэк-марафон</p>
				<div className="timer bg-white px-2 text-primary border-2 border-primary font-normal text-lg font-montserrat mx-3 ..6x5:font-noto-sans ..6x5:text-sm">
					{time.days}d : {time.hours}h : {time.minutes}m : {time.seconds}s
				</div>
			</div>
			<div className="flex flex-row items-center border-b border-b-white ..6x5:mt-4">
				<button className="font-montserrat font-medium text-13px">
					Учавствовать
				</button>
				<div className="ml-1">
					<Image src={icons.ICON_ARROW_RIGHT} width={13} height={8} />
				</div>
			</div>
		</article>
	);
}
