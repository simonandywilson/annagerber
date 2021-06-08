import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import PortableText from "@sanity/block-content-to-react";
import * as style from "../styles/content.module.css"

const Bio = (props) => {
    const { sanityBio: {bio} } = useStaticQuery(getData);
    const serializers = {
        marks: {
            link: ({ mark, children }) => {
                const { photo } = mark;
                return (
                    <span
                        onMouseEnter={() =>
                            props.setPreview({ active: true, image: photo.asset.id, video: null })
                        }
                        onMouseLeave={() =>
                            props.setPreview({ active: false, image: null, video: null })
                        }
                        className={style.link}
                        role="presentation"
                    >
                        {children}
                        <span className={style.underline}></span>
                    </span>
                );
            },
        },
    };
    return (
        <section className={style.container}>
            <PortableText blocks={bio} serializers={serializers} />
        </section>
    );
}

export default Bio

const getData = graphql`
    {
        sanityBio {
            bio:_rawBio(resolveReferences: { maxDepth: 10 })
        }
    }
`;