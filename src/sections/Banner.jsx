import BannerText from "../components/BannerText";
import BannerVideo from "../components/BannerVideo";
import { BannerStyled } from "../styles/Common.styles";

const Banner = ()=> {
    return (
        <BannerStyled>
            <BannerVideo />
            <BannerText />
        </BannerStyled>
    )
}

export default Banner;