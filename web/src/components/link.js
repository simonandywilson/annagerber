import React from "react";
import * as style from "../styles/link.module.css";

const Link = (props) => {
    const mediaType = props.media && props.media.length ? props.media[0]._type : null;
    const link = props.link && props.link.length ? props.link[0].link : null;
    const linkType = props.link && props.link.length ? props.link[0].type : null;
    const child = props.children;
    const id = props.media && props.media.length ? props.media[0].asset.assetId : null;

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
                        onMouseEnter={(e) => {
                            e.preventDefault();
                            props.setPreviewId(id);
                            props.setPreviewActive(true);
                        }}
                        onMouseLeave={(e) => {
                            e.preventDefault();
                            props.setPreviewId(null);
                            props.setPreviewActive(false);
                        }}
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
                        onMouseEnter={(e) => {
                            e.preventDefault();
                            props.setPreviewId(id);
                            props.setPreviewActive(true);
                        }}
                        onMouseLeave={(e) => {
                            e.preventDefault();
                            props.setPreviewId(null);
                            props.setPreviewActive(false);
                        }}
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
                        onMouseEnter={(e) => {
                            e.preventDefault();
                            props.setPreviewId(id);
                            props.setPreviewActive(true);
                        }}
                        onMouseLeave={(e) => {
                            e.preventDefault();
                            props.setPreviewId(null);
                            props.setPreviewActive(false);
                        }}
                    >
                        {child}
                    </a>
                );
            default:
                return (
                    <span
                        className={style.standard}
                        onMouseEnter={(e) => {
                            e.preventDefault();
                            props.setPreviewId(id);
                            props.setPreviewActive(true);
                        }}
                        onMouseLeave={(e) => {
                            e.preventDefault();
                            props.setPreviewId(null);
                            props.setPreviewActive(false);
                        }}
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
