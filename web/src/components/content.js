import React, {useState, useEffect} from "react";
import PortableText from "@sanity/block-content-to-react";
import Link from "./link";
import { motion } from "framer-motion";
import * as style from "../styles/content.module.css";

const Content = (props) => {
    const [transition, setTransition] = useState(false);
    const serializers = {
        marks: {
            link: ({ mark, children }) => {
                const { media } = mark;
                const { hyperlinks } = mark;

                return (
                    <Link media={media} link={hyperlinks} setPreview={props.setPreview}>
                        {children}
                    </Link>
                );
            },
        },
    };

    useEffect(() => {
        setTransition(true);
        let countdown = setTimeout(() => setTransition(false), 300);
        return () => clearTimeout(countdown);
    }, [props.version]);
    
    const fade = {
        open: { opacity: 1 },
        closed: { opacity: 0, duration: 0 },
    };
    return (
        <motion.section
            className={style[props.name]}
            animate={!transition ? "open" : "closed"}
            initial={"open"}
            variants={fade}
        >
            <PortableText blocks={props.content} serializers={serializers} />
        </motion.section>
    );
};

export default Content;