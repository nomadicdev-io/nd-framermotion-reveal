import BannerText from "../components/BannerText";
import BannerVideo from "../components/BannerVideo";
import { BannerInnerStyled, BannerStyled } from "../styles/Common.styles";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const Banner = ()=> {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref });

    console.log(scrollYProgress)

    return (
        <BannerStyled ref={ref}>
            <BannerInnerStyled>
                <BannerVideo />
                <BannerText yProgress={scrollYProgress}/>
            </BannerInnerStyled>
        </BannerStyled>
    )
}

export default Banner;