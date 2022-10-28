import { motion } from "framer-motion";
import { HeaderStyled } from "../styles/Common.styles";
import HeaderImage from "./HeaderImage";
import HeaderNav from "./HeaderNav";
import HeaderToggle from "./HeaderToggle";

const Header = ()=> {
    return (
        <HeaderStyled>
            <motion.div 
            initial={{opacity: 0, translateY: '-100%'}}
            animate={{opacity: 1, translateY: 0, ease: [0.23, 0.48, 0.26, 0.94]}}
            transition={{duration: 1}}
            className="header_inner">
                <HeaderImage />
                <HeaderNav />
            </motion.div>
        </HeaderStyled>
    )
}

export default Header;