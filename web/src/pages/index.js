import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import * as style from "../styles/home.module.css";
import Seo from "../components/seo";
import Transition from "../components/transition";
import Preview from "../components/preview";
import Content from "../components/content";
import Toggle from "../components/toggle";

// markup
const Home = ({ data }) => {
    const content = data.sanityContent;
    const hasWindow = typeof window !== "undefined";
    const [version, setVersion] = useState(false);
    const [previewId, setPreviewId] = useState(null);
    const [previewActive, setPreviewActive] = useState(false);
    const toggleVersion = () => setVersion((prevVersion) => !prevVersion);

    // Hide preview on scroll
    useEffect(() => {
        if (hasWindow) {
            const changePreview = () => {
                setPreviewId(null); setPreviewActive(false);
            };
            window.addEventListener("scroll", changePreview);
            return () => window.removeEventListener("scroll", changePreview);
        }
    }, [previewActive, previewId, hasWindow]);
    return (
        <>
            <Seo />
            <main
                className={style.container}
                onClick={(e) => {
                    if (e.target.tagName !== "SPAN") {
                        setPreviewId(null);
                        setPreviewActive(false);
                    }
                }}
                role="presentation"
            >
                <Transition version={version} />
                <Preview previewId={previewId} previewActive={previewActive} />
                <Content
                    name={"bio"}
                    content={content.bio}
                    setPreviewId={setPreviewId}
                    previewId={previewId}
                    setPreviewActive={setPreviewActive}
                    previewActive={previewActive}
                />
                {/* <Toggle version={version} toggleVersion={toggleVersion} /> */}
                {version && (
                    <Content
                        name={"long"}
                        content={content.long}
                        setPreviewId={setPreviewId}
                        previewId={previewId}
                        setPreviewActive={setPreviewActive}
                        previewActive={previewActive}
                        version={version}
                    />
                )}
                {!version && (
                    <Content
                        name={"short"}
                        content={content.short}
                        setPreviewId={setPreviewId}
                        previewId={previewId}
                        setPreviewActive={setPreviewActive}
                        previewActive={previewActive}
                        version={version}
                    />
                )}
            </main>
        </>
    );
};

export default Home;

export const query = graphql`
    query {
        sanityContent {
            bio: _rawBio(resolveReferences: { maxDepth: 10 })
            short: _rawShort(resolveReferences: { maxDepth: 10 })
            long: _rawLong(resolveReferences: { maxDepth: 10 })
        }
    }
`;
