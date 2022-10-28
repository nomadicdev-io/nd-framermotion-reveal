import { LoadingStyled } from "../styles/Common.styles";
import { motion } from "framer-motion";

const LoadingScreen = ()=> {

    return (
       <LoadingStyled
        
       >

            <motion.div 
                 initial={{ opacity: 1}}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0}}
                 transition={{ease: [0.23, 0.48, 0.26, 0.94], duration: 1}}
                 className="overlay_"
            ></motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ ease: [0.23, 0.48, 0.26, 0.94], duration: 0.6 }}
            className="logo_"
            >
                <img src="/logo.svg" alt="Logo" />
            </motion.div>
       </LoadingStyled>
    )
}

export default LoadingScreen;