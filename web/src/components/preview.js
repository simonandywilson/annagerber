import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import ReactPlayer from "react-player";
import * as style from "../styles/preview.module.css";

const Preview = (props) => {
    const sanityConfig = { projectId: "7na0qgn7", dataset: "production" };
    const imageAssetId = props.preview.image;
    const imageData = getGatsbyImageData(imageAssetId, { layout: "FULL_WIDTH" }, sanityConfig);

    return (
        <div className={style.preview}>
            <div className={style.wrapper} style={{ opacity: props.preview.active ? "1" : "0" }}>
                {props.preview.image && (
                    <GatsbyImage image={imageData} alt="" imgStyle={{ objectFit: "contain" }} />
                )}
                {props.preview.video && (
                    <ReactPlayer
                        url={props.preview.video}
                        width="100%"
                        height="100%"
                        playsinline={true}
                        muted={true}
                        autoplay={true}
                        controls={false}
                        loop={true}
                        playing={true}
                    />
                )}
            </div>
        </div>
    );
};

export default Preview;
