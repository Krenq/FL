
const Clubs = () => {
	return (
		<section className="relative bg-nude-2 mt-16 .1x1:mt-14">

			<p className="text-3xl font-medium pt-32 .1x1:pt-20 text-center ..6x04:text-2xl">Программа лояльности</p>
			<p className="text-4xl italic mt-2 fort-medium text-center ..6x5:text-3xl">ВСТУПАЙ В КЛУБ</p>
			<p className="text-xl text-center mt-4 pb-48 .1x1:pb-42 ..6x04:text-lg">Покупай любимые продукты, зарабатывай DeCoins, оплачивай <br /> ими следующие заказы!
			</p>
			<div className="..6x2:w-full ..6x2:flex ..6x2:justify-center absolute left-1/2 ability z-10 bottom-20">
				<button className="mr-4 border-2 py-3 px-6 text-white bg-primary border-primary transition-all hover:bg-white hover:text-primary">Вступить в клуб</button>
				<button className="mr-4 border-2 py-3 px-6 text-primary bg-white border-primary transition-all hover:bg-primary hover:text-white">Подробнее</button>
			</div>
		</section>
	)
}
export default Clubs