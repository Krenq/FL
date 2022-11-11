import { useState } from "react"



import Header from "../components/Header/Header"
import SearchResult from "../components/SearchResult/SearchResult"











import 'swiper/css';


import Footer from "../components/Footer/Footer";
import PhoneNavigation from "../components/PhoneNavigation/PhoneNavigation";
import SectionNavDetail from "../components/SectionNavDetail/SectionNavDetail";
import DescriptionItemDetail from "../components/DescriptionItemDetail/DescriptionItemDetail";
import ActDescription from "../components/ActDescription/ActDescription";
import DetailComments from "../components/DetailComments/DetailComments";
import SeeLastDetails from "../components/SeeLastDetails/SeeLastDetails";

const DetailsCard = () => {
	const [showSearch, setShowSearch] = useState(false)


	return (
		<>
			<Header showSearch={showSearch} setShowSearch={setShowSearch} />


			<section className="container-base relative  ">
				<SearchResult isShow={showSearch} />

				<SectionNavDetail />
				<DescriptionItemDetail />
				<ActDescription />
				<DetailComments />

				<SeeLastDetails />



			</section>
			<Footer />
			<PhoneNavigation />
		</>

	)
}
export default DetailsCard