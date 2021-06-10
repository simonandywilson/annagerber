import React from "react";
import * as style from "../styles/link.module.css";

const Link = (props) => {
    const media = props.media && props.media.length ? props.media[0].asset : null;
    const mediaType = props.media && props.media.length ? props.media[0]._type : null;
    const link = props.link && props.link.length ? props.link[0].link : null;
    const linkType = props.link && props.link.length ? props.link[0].type : null;
    const child = props.children;

    const hyperlink = () => {
        switch (linkType) {
            case "external":
                return (
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className={style.link}
                        style={{ textDecoration: mediaType ? "underline" : "none" }}
                        onMouseEnter={() =>
                            props.setPreview({
                                active: true,
                                image: mediaType === "img" ? media.id : null,
                                video: mediaType === "vid" ? media.url : null,
                            })
                        }
                        onMouseLeave={() =>
                            props.setPreview({ active: false, image: null, video: null })
                        }
                    >
                        {child}
                    </a>
                );
            case "email":
                return (
                    <a
                        href={"mailto:" + link}
                        className={style.link}
                        style={{ textDecoration: mediaType ? "underline" : "none" }}
                        onMouseEnter={() =>
                            props.setPreview({
                                active: true,
                                image: mediaType === "img" ? media.id : null,
                                video: mediaType === "vid" ? media.url : null,
                            })
                        }
                        onMouseLeave={() =>
                            props.setPreview({ active: false, image: null, video: null })
                        }
                    >
                        {child}
                    </a>
                );
            case "phone":
                return (
                    <a
                        href={"tel:" + link}
                        className={style.link}
                        style={{ textDecoration: mediaType ? "underline" : "none" }}
                        onMouseEnter={() =>
                            props.setPreview({
                                active: true,
                                image: mediaType === "img" ? media.id : null,
                                video: mediaType === "vid" ? media.url : null,
                            })
                        }
                        onMouseLeave={() =>
                            props.setPreview({ active: false, image: null, video: null })
                        }
                    >
                        {child}
                    </a>
                );
            default:
                return (
                    <span
                        className={style.standard}
                        onMouseEnter={() =>
                            props.setPreview({
                                active: true,
                                image: mediaType === "img" ? media.id : null,
                                video: mediaType === "vid" ? media.url : null,
                            })
                        }
                        onMouseLeave={() =>
                            props.setPreview({ active: false, image: null, video: null })
                        }
                        role="presentation"
                    >
                        {child}
                    </span>
                );
        }
    };
    return hyperlink();
};

export default Link;
