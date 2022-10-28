import { HeaderNavStyled } from "../styles/Common.styles";
import HeaderToggle from "./HeaderToggle"

const HeaderNav = ()=> {
    return (
        <HeaderNavStyled>
            <nav>
                <ul>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <HeaderToggle />
        </HeaderNavStyled>
    )
}

export default HeaderNav;