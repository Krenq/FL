import React from 'react';
import { useRef } from 'react';
import Anchor from '../components/Anchor/Anchor';
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
	const discount = useRef(null),
		special = useRef(null),
		buyers = useRef(null),
		products = useRef(null),
		sea = useRef(null),
		promo = useRef(null),
		Instruments = useRef(null),
		funds = useRef(null),
		partners = useRef(null),
		health = useRef(null),
		news = useRef(null),
		stories = useRef(null),
		clubs = useRef(null),
		trands = useRef(null),
		support = useRef(null)

	return (
		<section className="container-base relative bg-white">
			<ConfirmLocationModalWindow />
			<DiscountsSlider refL={discount} />
			<SpecialOffers refL={special} />
			<Buyers refL={buyers} />
			<Products refL={products} />
			<SeaAct refL={sea} />
			<Promo refL={promo} />
			<Instrumensts refL={Instruments} />
			<Funds refL={funds} />
			<Partners refL={partners} />
			<Health refL={health} />
			<News refL={news} />
			<Stories refL={stories} />
			<Clubs refL={clubs} />
			<Trands refL={trands} />
			<Support refL={support} />
			<PhoneNavigation />
			<Anchor elements={[
				discount,
				special,
				buyers,
				products,
				sea,
				promo,
				Instruments,
				funds,
				partners,
				health,
				news,
				stories,
				clubs,
				trands,
				support
			]} />
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
