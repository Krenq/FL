/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{html,js}',
	],
	theme: {
		container: {
			padding: {
				DEFAULT: 'full',
				sm: 'full',
				lg: 'full',
				xl: 'full',
			},
		},
		screens: {
			sm: '360px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
			overBar: '1750px',
			'2xl': '1920px',
			'.2x10': { max: '1900px' },
			'.2x50': { max: '1850px' },
			'.6x2': { max: '1680px' },
			'.6x3': { max: '1600px' },
			'.5x1': { max: '1536px' },
			'.5x01': { max: '1500px' },
			'.4x1': { max: '1470px' },
			'.4x11': { max: '1460px' },
			'.4x2': { max: '1450px' },
			'.3x1': { max: '1400px' },
			'.2x01': { max: '1350px' },
			'.2x1': { max: '1300px' },
			'.2x1.0': { max: '1250px' },
			'.1x1': { max: '1200px' },
			'.1x01': { max: '1150px' },
			'..5x1': { max: '1100px' },
			'..5x01': { max: '1050px' },
			'..5x2': { max: '1000px' },
			'..5x2min': { min: '1000px' },
			'..5x3': { max: '950px' },
			'..5x03': { max: '900px' },
			'..5x3min': { min: '950px' },
			'..5x4': { max: '850px' },
			'..5x4min': { min: '850px' },
			'..5x5': { max: '800px' },
			'..5x5.2': { max: '780px' },
			'..6x1': { max: '750px' },
			'..6x2': { max: '700px' },
			'..6x3': { max: '650px' },
			'..6x03': { max: '600px' },
			'..6x03min': { min: '600px' },
			'..6x4': { max: '550px' },
			'..6x04': { max: '530px' },
			'..6x5': { max: '500px' },
			'..6x6': { max: '450px' },
			'..7x11': { max: '430px' },
			'..7x1': { max: '400px' },
			'..7x001': { max: '360px' },
			'..7x59': { max: '359px' },
			'..7x002': { max: '355px' },
			'..7x01': { max: '350px' },
			'..7x230': { max: '330px' },
			'..7x2': { max: '320px' },
		},
		colors: {
			white: {
				DEFAULT: '#FFFFFF',
				'70pe': 'rgba(255, 255, 255, 0.7)',
				'80pe': 'rgba(255, 255, 255, 0.8)',
				'60pe': 'rgba(255, 255, 255, 0.6)',
				'30pe': 'rgba(255, 255, 255, 0.3)',
				BG_FILTER: '#FCFDFB',
			},
			black: {
				DEFAULT: '#000000',
				'70pe': 'rgba(0, 0, 0, 0.7)',
				'80pe': 'rgba(0, 0, 0, 0.8)',
				'20pe': 'rgba(0, 0, 0, 0.2)'
			},
			gray: {
				DEFAULT: '#DBDCDA',
				linear:
					'linear-gradient(180deg, #F6F9F8 0%, rgba(246, 249, 248, 0.3) 100%)',
				100: '#FCFDFB',
				light: '#F7F8F6',
				light2: '#EDEEEC',
				platinum: '#E8E9E7',
				'quick-silver': '#828584',
				smart: '#d1d1d1',
				border: '#DCE0DF',
				light3: '#A6A2A2',
				deNum: '#949792'
			},
			primary: {
				DEFAULT: '#337202',
				hover: '#1F5201',
				active: '#3E7E0B',
				border: 'rgba(51, 114, 2, 0.5)',
				searchBG: 'rgba(51, 114, 2, 0.05)'
			},
			green: {
				'05pe': 'rgba(51, 114, 2, 0.05)',
				'50pe': 'rgba(51, 114, 2, 0.5)',
				hov: '#1F5201',
			},
			disable: '#DBDCDA',
			stroke: '#DBDCDA',
			link: '#1877F2',
			input: {
				disable: '#DBDCDA',
				filled: '#F7F8F6',
				typing: '#EDEEEC',
				'error-bg': '#FDF4F5',
				error: 'rgba(223, 24, 11, 0.2)',
			},
			nude: {
				1: '#FAF7F2',
				2: '#FEEFDF',
				3: '#EDD2B4',
			},
			label: {
				pink: '#E7929C',
				'pink-2': '#F14155',
				radial:
					'radial-gradient(59.52% 59.52% at 50% 50%, #DCFFE9 0%, #F3F3F3 100%)',
				bg: '#EFF5F0',
				green: '#C5C1AB',
				orange: '#FF7F37',
				yellow: '#FFFDC2',
				
			},
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
			'noto-sans': ['Noto Sans', 'sans-serif'],
			lora: ['Lora', 'serif'],
		},
		extend: {
			spacing: {
				'3px': '3px',
				'5px': '5px',
				'6px': '6px',
				'7px': '7px',
				'9px': '9px',
				'10px': '10px',
				'13px': '13px',
				'14px': '14px',
				'15px': '15px',
				'17px': '17px',
				'18px': '18px',
				'19px': '19px',
				'22px': '22px',
				'23px': '23px',
				'25px': '25px',
				'26px': '26px',
				'27px': '27px',
				'29px': '29px',
				'30px': '30px',
				'34px': '34px',
				'38px': '38px',
				'41px': '41px',
				'42px': '42px',
				'43px': '42.5px',
				'47px': '47px',
				'50px': '50px',
				'52px': '52px',
				'60px': '60px',
				'68px': '68px',
				'69px': '69px',
				'70px': '70px',
				'72px': '72px',
				'76px': '76px',
				'77px': '77px',
				'80px': '80px',
				'83px': '83px',
				'82px': '82px',
				'86px': '86px',
				'90px': '90px',
				'92px': '92px',
				'94px': '94px',
				'100px': '100px',
				'104px': '104px',
				'109px': '109px',
				'110px': '110px',
				'120px': '120px',
				'129px': '129px',
				'130px': '130px',
				'132px': '132px',
				'133px': '133px',
				'135px': '135px',
				'150px': '150px',
				'154px': '154px',
				'159px': '159px',
				'164px': '164px',
				'172px': '172px',
				'176px': '176px',
				'180px': '180px',
				'187px': '187px',
				'204px': '204px',
				'218px': '218px',
				'222px': '222px',
				'237px': '237px',
				'238px': '238px',
				'246px': '246px',
				'250px': '250px',
				'272px': '272px',
				'276px': '276px',
				'278px': '278px',
				'280px': '280px',
				'300px': '300px',
				'305px': '305px',
				'310px': '310px',
				'317px': '317px',
				'330px': '330px',
				'380px': '380px',
				'384px': '384px',
				'388px': '388px',
				'400px': '400px',
				'410px': '410px',
				'428px': '428px',
				'440px': '440px',
				'460px': '460px',
				'475px': '475px',
				'710px': '710px',
				'717px': '717px',
				'727px': '727px',
				'760px': '760px',
				'768px': '768px',
				'800px': '800px',
				'874px': '874px',
				'910px': '910px',
				'1100px': '1100px',
				'1816px': '1816px',
				'4.2%': '4.2%',
				'4.5%': '4.5%',
				'5%': '5%',
				'20%': '20%',
				'22%': '22%',
				'29.3%': '29.3%',
				'30%': '30%',
				'32%': '32%',
				'34%': '34%',
				'35%': '35%',
				'36%': '36%',
				'39.5%': '39.5%',
				'40%': '40%',
				'43%': '43%',
				'44%': '44%',
				'46%': '46%',
				'48.5%': '48.5%',
				'50%': '50%',
				'57.5%': '57.5%',
				'60%': '60%',
				'64%': '64%',
				'65%': '65%',
				'76%': '76%',
				'91.7%': '91.7%',
			},
			fontSize: {
				'0': '0px',
				'7px': '7px',
				'8px': '8px',
				'9px': '9px',
				'10px': '10px',
				'11px': '11px',
				'12px': '12px',
				'13px': '13px',
				'16px': '16px',
				'18px': '18px',
				'22px': '22px',
				'26px': '26px',
				'32px': '32px',
				'52px': '52px',
				'5vw': '1.8vw',
			},
			backgroundImage: {
				trava: "url('../images/templates/discbg.jpg')",
				firImg: "url('../images/templates/1forBuyres.jpg')",
				secImg: "url('../images/templates/2forBuyres.jpg')",
				thrImg: "url('../images/templates/3forBuyers.jpg')",
			},
			maxWidth: {
				'180px': '180px',
				'228px': '228px',
				'252px': '252px',
				'278px': '278px',
				'350px': '350px',
				'450px': '450px',
				'475px': '475px',
				'1460px': '1460px',
				'1505px': '1505px',
				'1600px': '1600px',
				'1760px': '1760px',
				'15.65%': '15.65%',
			},
			maxHeight: {
				'21px': '21px',
				'159px': '159px',
				'228px': '228px',
				'262px': '262px',
				'305px': '305px',
				'586px': '586px',
				'727px': '727px',
				'760px': '760px',
				'768px': '768px',
				'1100px': '1100px',
			},
			minHeight: {
				'42px': '42px',
				'159px': '159px',
				'250px': '250px',
				'317px': '317px',
				'330px': '330px',
			},
			minWidth: {
				'176px': '176px',
				'180px': '180px',
				'310px': '310px',
				'475px': '475px',
			},
			borderRadius: {
				'32px': '32px',
				'56px': '56px',
			},
			borderWidth: {
				'0.5px': '0.5px',
				'1.5px': '1.5px',
				'3.5px': '3.5px',
			},
			lineHeight: {
				'100%': '100%',
				'120%': '120%',
				'130%': '130%',
				'140%': '140%',
				'150%': '150%',
				'170%': '170%',
			},
			zIndex: {
				100: '100',
			},
			letterSpacing: {
				'1px': '1px',
				'2px': '2px',
				
			  }
		},
	},
	variants: {
		extend: {
			display: ['group-focus'],
		},
	},
};
