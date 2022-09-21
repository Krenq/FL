import React from 'react';
import Buyers from '../components/Buyers/Buyers';
import DiscountsSlider from '../components/DiscountsSlider/DiscountsSlider';
import Footer from '../components/Footer/Footer';
import Funds from '../components/Funds/Funds';
import Header from '../components/Header/Header';
import Health from '../components/Health/Health';
import Instrumensts from '../components/Instruments/Instruments';
import Layout from '../components/Layout/Layout';
import Partners from '../components/Partners/Partners';
import Products from '../components/Products/Products';
import Promo from '../components/Promo/Promo';
import SeaAct from '../components/SeaAct/SeaAct';
import SpecialOffers from '../components/SpecialOffers/SpecialOffers';


function Home() {
	return (
		<section className="container-base bg-white">
			<DiscountsSlider />
			<SpecialOffers />
			<Buyers />
			<Products />
			<SeaAct />
			<Promo />
			<Instrumensts />
			<Funds />
			<Partners />
			<Health />
		</section>
	)
}

export default Home;

Home.getLayout = function getLayout(page) {
	return (
		<Layout title="Главная" description="Описание главной страницы">
			<Header />
			{page}
			<Footer />
		</Layout>
	);
};
