import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ReactPlayer from "react-player";
import * as style from "../styles/preview.module.css";

const Preview = (props) => {
    const { content } = useStaticQuery(getData);

    const mediaType = (content, isMedia) => {
        if (isMedia) {
            if (content.media[0]._type === "img") {
                return (
                    <div
                        key={content._key}
                        className={style.wrapper}
                        style={{
                            display:
                                content.media[0].asset.assetId === props.previewId
                                    ? "block"
                                    : "none",
                        }}
                    >
                        <img src={content.media[0].asset.url} alt="" />
                    </div>
                );
            } else {
                return (
                    <div
                        key={content._key}
                        className={style.wrapper}
                        style={{
                            display:
                                content.media[0].asset.assetId === props.previewId
                                    ? "block"
                                    : "none",
                        }}
                    >
                        <ReactPlayer
                            url={content.media[0].asset.url}
                            autoPlay
                            width="100%"
                            height="100%"
                            playsinline={true}
                            muted={true}
                            controls={false}
                            loop={true}
                            playing={
                                content.media[0].asset.assetId === props.previewId ? true : false
                            }
                        />
                    </div>
                );
            }
        }
    };

    return (
        <div className={style.preview}>
            {content.bio.map((content) => {
                return content.markDefs.map((item) => {
                    const isMedia = item.media && item.media.length ? true : false;
                    return mediaType(item, isMedia);
                });
            })}
            {content.short.map((content) => {
                return content.markDefs.map((item) => {
                    const isMedia = item.media && item.media.length ? true : false;
                    return mediaType(item, isMedia);
                });
            })}
            {content.long.map((content) => {
                return content.markDefs.map((item) => {
                    const isMedia = item.media && item.media.length ? true : false;
                    return mediaType(item, isMedia);
                });
            })}
        </div>
    );
};

export default Preview;

const getData = graphql`
    {
        content: sanityContent {
            bio: _rawBio(resolveReferences: { maxDepth: 10 })
            short: _rawShort(resolveReferences: { maxDepth: 10 })
            long: _rawLong(resolveReferences: { maxDepth: 10 })
        }
    }
`;
