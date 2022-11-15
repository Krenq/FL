import Image from 'next/image'
import freshBg from '../../images/templates/FreshImg.jpg'
import DiscSubItem from './DiscSubItem'

const DiscountSliderFresh = () => {
	return (
		<>
			<section className="w-full ..5x2:hidden h-800px discSlider">
				<div className="flex h-full ..5x2:flex-col">
					<div className="discountImgWrap w-50%  h-full ..5x2:bg-trava ..5x2:bg-no-repeat ..5x2:bg-cover relative flex justify-center">


						<div className='absolute left-1/2 ability w-60% top-80px '>
							<p className='font-montserrat font-medium text-26px text-center text-primary'>NEW</p>
							<p className='font-montserrat italic text-52px tracking-tighter font-medium'>CЕРИЯ «FRESH CLICK»</p>
							<p className='font-montserrat text-22px leading-140% text-black-70pe text-center my-6'>Шампунь, маска, сыворотка, бальзам, пенка, лосьон</p>
							<p className='font-montserrat mb-2 text-gray-quick-silver text-center'>Эффекты:</p>
							<div className='flex flex-wrap justify-center'>
								<DiscSubItem title='против перхоти' />
								<DiscSubItem title='против седины' />
								<DiscSubItem title='против выпадения' />
								<DiscSubItem title='еще эффект' />
								<DiscSubItem title='еще эффект' />
								<DiscSubItem title='еще эффект' />
								<DiscSubItem title='еще эффект' />
								<DiscSubItem title='еще эффект' />

							</div>
						</div>
					</div>
					<div className="discountImgWrap cartI cartinka w-50% h-full ">
						<Image
							className=" object-cover "
							src={freshBg}

							alt="discountImg"
							quality={100}
						/>
					</div>
				</div>
			</section>


		</>
	)
}
export default DiscountSliderFresh