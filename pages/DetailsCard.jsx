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
import ViewPhoto from "../components/ViewPhoto/ViewPhoto";

const DetailsCard = () => {
	const [showSearch, setShowSearch] = useState(false)
	const [show, setShow] = useState(false),
		[view, setShowView] = useState(false),
		[isFullView, setIsFullView] = useState(false),
		[isFullViewVideo, setIsFullViewVideo] = useState(false),
		description = useRef(null)

	const setShowL = () => setShow(!show),
		close = () => {
			setShowView(!view)
			setIsFullView(false)
			setIsFullViewVideo(false)
		},
		setF = () => {
			setShowView(!view)
			setIsFullView(!isFullView)
		},
		setVideo = () => {
			setIsFullViewVideo(!isFullViewVideo)
			setShowView(!view)
		}

	return (
		<>
			<Header showSearch={showSearch} setShowSearch={setShowSearch} />
			<section className="container-base relative  ">
				<SearchResult isShow={showSearch} />
				<SectionNavDetail />
				<DescriptionItemDetail close={close} isShow={view} description={description} />
				<ActDescription />
				<DetailComments setVideo={setVideo} refF={description} close={setF} setShowL={setShowL} />
				<SeeLastDetails />

			</section>
			<ViewPhoto isFullViewVideo={isFullViewVideo} isFullView={isFullView} close={close} isShow={view} />
			<LeftComment show={show} setShow={setShowL} />
			<Footer />
			<PhoneNavigation />
		</>

	)
}
export default DetailsCard