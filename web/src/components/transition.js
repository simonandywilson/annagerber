import React, { useState, useEffect } from "react";
import * as style from "../styles/transition.module.css";
import { motion } from "framer-motion";

const Transition = (props) => {
    const [transition, setTransition] = useState(false);
    const overlay = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    };

    useEffect(() => {
        setTransition(true);
        let countdown = setTimeout(() => setTransition(false), 300);
        return () => clearTimeout(countdown);
    }, [props.version]);

    return (
        <motion.section
            className={style.transition}
            animate={transition ? "open" : "closed"}
            transition={{ duration: 0.25 }}
            initial={{ opacity: 0 }}
            variants={overlay}
        ></motion.section>
    );
};

export default Transition;
