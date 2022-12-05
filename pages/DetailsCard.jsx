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
import LeftComment from "../components/LeftComment/LeftComment";
import { useRef } from "react";

const DetailsCard = () => {
	const [showSearch, setShowSearch] = useState(false)
	const [show, setShow] = useState(false),
		description = useRef(null)

	const setShowL = () => setShow(!show)

	return (
		<>
			<Header showSearch={showSearch} setShowSearch={setShowSearch} />
			<section className="container-base relative  ">
				<SearchResult isShow={showSearch} />
				<SectionNavDetail />
				<DescriptionItemDetail description={description} />
				<ActDescription />
				<DetailComments refF={description} setShowL={setShowL} />
				<SeeLastDetails />

			</section>
			<LeftComment show={show} setShow={setShowL} />
			<Footer />
			<PhoneNavigation />
		</>

	)
}
export default DetailsCard