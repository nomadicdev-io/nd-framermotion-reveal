import { motion } from "framer-motion";
import { HeaderToggleStyled } from "../styles/Common.styles";

const HeaderToggle = ()=> {
    return (
        <HeaderToggleStyled
            as={motion.button}
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
        >

            <span></span>
            <span></span>
            <span></span>

        </HeaderToggleStyled>
    )
}

export default HeaderToggle;