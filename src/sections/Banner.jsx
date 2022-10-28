import BannerText from "../components/BannerText";
import BannerVideo from "../components/BannerVideo";
import { BannerStyled } from "../styles/Common.styles";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const Banner = ()=> {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref });

    console.log(scrollYProgress)

    return (
        <BannerStyled ref={ref}>
            <BannerVideo />
            <BannerText yProgress={scrollYProgress}/>
        </BannerStyled>
    )
}

export default Banner;