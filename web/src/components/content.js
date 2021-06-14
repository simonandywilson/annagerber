import React from "react";
import PortableText from "@sanity/block-content-to-react";
import Link from "./link";

import * as style from "../styles/content.module.css";

const Content = (props) => {
    const serializers = {
        marks: {
            link: ({ mark, children }) => {
                const { media } = mark;
                const { hyperlinks } = mark;

                return (
                    <Link
                        media={media}
                        link={hyperlinks}
                        setPreviewId={props.setPreviewId}
                        setPreviewActive={props.setPreviewActive}
                    >
                        {children}
                    </Link>
                );
            },
        },
    };

    return (
        <section
            className={style[props.name]}
        >
            <PortableText blocks={props.content} serializers={serializers} />
        </section>
    );
};

export default Content;
