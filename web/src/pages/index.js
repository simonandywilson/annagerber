import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import * as style from "../styles/home.module.css";
import Transition from "../components/transition"
import Preview from "../components/preview";
import Content from "../components/content";
import Toggle from "../components/toggle";

// markup
const Home = ({ data }) => {
    const content = data.sanityContent;
    const hasWindow = typeof window !== "undefined";
    const [version, setVersion] = useState(true);
    const [preview, setPreview] = useState({ active: false, id: null });
    const toggleVersion = () => setVersion((prevVersion) => !prevVersion);

    // Hide preview on scroll
    useEffect(() => {
        if (hasWindow) {
            const changePreview = () => setPreview({ active: false, id: null });
            window.addEventListener("scroll", changePreview);
            return () => window.removeEventListener("scroll", changePreview);
        }
    }, [preview, hasWindow]);
    return (
        <main className={style.container}>
            <Transition version={version} />
            <Preview preview={preview} />
            <Content name={"bio"} content={content.bio} setPreview={setPreview}/>
            <Toggle version={version} toggleVersion={toggleVersion} />
            {version && (
                <Content
                    name={"long"}
                    content={content.long}
                    setPreview={setPreview}
                    version={version}
                />
            )}
            {!version && (
                <Content
                    name={"short"}
                    content={content.short}
                    setPreview={setPreview}
                    version={version}
                />
            )}
        </main>
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
