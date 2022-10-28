import { BannerTextStyled } from "../styles/Common.styles";
import Container from "./Container";
import { motion, useScroll } from "framer-motion";

const BannerText = ({yProgress})=> {
    return (
        <BannerTextStyled>
            <Container fullheight={true}>
                <div className="content_">
                    <motion.p
                        style={{translateY: yProgress}}
                    >
                        <motion.span
                            initial={{translateY: '100%', originX: 0.5, originY: 0, opacity: 0, scaleY: 1.2}}
                            animate={{translateY: '0%', opacity: 1, transition: {ease: [0.12, 0.23, 0.24, 1], duration: 0.8, delay: 0.3}}}
                        >The earth is what we all have in common.</motion.span>
                    </motion.p>
                    <motion.h1
                        style={{translateY: yProgress}}
                    >
                        <motion.span
                        initial={{translateY: '100%', originX: 0.5, originY: 0, opacity: 0, scaleY: 1}}
                        animate={{translateY: '0%', opacity: 1, transition: {ease: [0.12, 0.23, 0.24, 1], duration: 0.8, delay: 0.6}}}
                        >Land really is the best art. </motion.span>
                    </motion.h1>
                </div>
            </Container>
        </BannerTextStyled>
    )
}

export default BannerText;