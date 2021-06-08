import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import * as style from "../styles/preview.module.css";

const Preview = (props) => {
    const sanityConfig = { projectId: "7na0qgn7", dataset: "production" };
    const imageAssetId = props.preview.image;
    const imageData = getGatsbyImageData(imageAssetId, { layout: "FULL_WIDTH" }, sanityConfig);

    return (
        <div className={style.preview}>
            <div className={style.wrapper} style={{ opacity: props.preview.active ? "1" : "0" }}>
                {props.preview.image && (
                    <GatsbyImage
                        image={imageData}
                        alt=""
                        imgStyle={{ objectFit: "contain" }}
                    />
                )}
            </div>
        </div>
    );
};

export default Preview;
