import React from 'react';
import Buyers from '../components/Buyers/Buyers';
import Clubs from '../components/Clubs/Clubs';
import ConfirmLocationModalWindow from '../components/ConfirmLocationModalWindow/ConfirmLocationModalWIndow';
import DiscountsSlider from '../components/DiscountsSlider/DiscountsSlider';
import Footer from '../components/Footer/Footer';
import Funds from '../components/Funds/Funds';
import Header from '../components/Header/Header';
import Health from '../components/Health/Health';
import Instrumensts from '../components/Instruments/Instruments';
import Layout from '../components/Layout/Layout';
import News from '../components/News/News';
import Partners from '../components/Partners/Partners';
import PhoneNavigation from '../components/PhoneNavigation/PhoneNavigation';
import Products from '../components/Products/Products';
import Promo from '../components/Promo/Promo';
import SeaAct from '../components/SeaAct/SeaAct';
import SpecialOffers from '../components/SpecialOffers/SpecialOffers';
import Stories from '../components/Stories/Stories';
import Support from '../components/Support/Support';
import Trands from '../components/Trands/Trands';


function Home() {


	return (
		<section className="container-base relative bg-white">
			<ConfirmLocationModalWindow />
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
			<News />
			<Stories />
			<Clubs />
			<Trands />
			<Support />
			<PhoneNavigation />
		</section>
	);
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
