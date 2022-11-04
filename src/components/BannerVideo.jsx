import { BannerVideoStyled } from "../styles/Common.styles";
import { motion } from "framer-motion";

const BannerVideo = ()=> {

    const mainAnim = {
        initial: {},
        animate: {
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    }

    const videoAnim = {
        initial: {translateY: '100%'},
        animate: {
            translateY: '0%',
            transition: {ease: [0.12, 0.23, 0.24, 1], duration: 1, delay: 0.8}
        }
    }

    return (   
        <BannerVideoStyled>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={mainAnim}
            className="inner_">

                <motion.div 
                    variants={videoAnim}
                    className="video_"
                >
                    <video loop muted autoPlay={true} playsInline>
                        <source src="/banner-video.mp4" type="video/mp4"/>
                    </video>
               </motion.div>

            </motion.div>
        </BannerVideoStyled>
    )
}

export default BannerVideo;