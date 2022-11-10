import { useState } from "react"
import BurgerMenu from "../components/BurgerMenu/BurgerMenu"
import MenuPhone from "../components/MenuPhone/MenuPhone"
import PhoneNavigation from "../components/PhoneNavigation/PhoneNavigation"
import previewBurger from '../images/templates/previewBurger.jpg'
const Menu = () => {
	const [showBurger, setShowBurger] = useState(false)
	const close = () => setShowBurger(false)
	return (
		<>

			<BurgerMenu showBurger={showBurger} close={close} setShowBurger={setShowBurger} src={previewBurger} title={'Категории'} />

			< MenuPhone showMenu={true} showBurger={showBurger} setShowBurger={setShowBurger} />
			<PhoneNavigation />

		</>

	)
}
export default Menu