import React, { useState } from "react";
import { graphql } from "gatsby";
import * as style from "../styles/home.module.css";
import Preview from "../components/preview";
import Content from "../components/content";
import Toggle from "../components/toggle";

// markup
const Home = ({ data }) => {
    const content = data.sanityContent;
    const [version, setVersion] = useState(true);
    const [preview, setPreview] = useState({ active: false, image: null, video: null });
    const toggleVersion = () => setVersion((prevVersion) => !prevVersion);
    return (
        <main className={style.container}>
            <Preview preview={preview} />
            <Content name={"bio"} content={content.bio} setPreview={setPreview} />
            <Toggle version={version} toggleVersion={toggleVersion} />
            {version && <Content name={"long"} content={content.long} setPreview={setPreview} />}
            {!version && <Content name={"short"} content={content.short} setPreview={setPreview} />}
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
