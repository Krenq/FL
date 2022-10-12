
import Image from "next/image"
import DropBusiness from "../DropBusiness/DropBusiness"
import DropBuyers from "../DropBuyers/DropBuyers"
import DropCompany from "../DropCompany/DropCompany"
import DropLoal from "../DropLoal/DropLoal"


const DropDownItem = ({ title, show, setShow }) => {
	switch (title) {
		case ('О компании'):
			return <DropCompany show={show} setShow={setShow} />
		case ('Бизнес-возможности'):
			return <DropBusiness show={show} setShow={setShow} />
		case ('Покупателям'):
			return <DropBuyers show={show} setShow={setShow} />
		case ('Программа лояльности'):
			return <DropLoal show={show} setShow={setShow} />
		default:
			return
	}
}
export default DropDownItem