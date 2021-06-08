import React, { useState } from "react";
import * as style from "../styles/home.module.css";
import Preview from "../components/preview";
import Bio from "../components/bio";
import Toggle from "../components/toggle";

// markup
const Home = () => {
    const [version, setVersion] = useState(true);
    const [preview, setPreview] = useState({ active: false, image: null, video: null });
    const toggleVersion = () => setVersion((prevVersion) => !prevVersion)
    return (
        <main className={style.container}>
            <Preview preview={preview} />
            <Bio setPreview={setPreview} />
            <Toggle version={version} toggleVersion={toggleVersion} />
        </main>
    );
};

export default Home;
