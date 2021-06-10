import React, {useState} from "react";
import * as style from "../styles/toggle.module.css";

const Toggle = (props) => {
    const [italic, setItalic] = useState(false)
    return (
        <div onClick={props.toggleVersion} role="presentation">
            {props.version ? (
                <div className={style.toggle}>
                    [
                    <span
                        onMouseEnter={() => setItalic(true)}
                        onMouseLeave={() => setItalic(false)}
                        onClick={() => setItalic(false)}
                        style={{
                            fontFamily: italic
                                ? "untitled_serif_regular_italic"
                                : "untitled_serif_regular",
                            letterSpacing: italic ? "0.42px" : "0px",
                        }}
                    >
                        Short Version
                    </span>
                    ]
                </div>
            ) : (
                <div className={style.toggle}>
                    [
                    <span
                        onMouseEnter={() => setItalic(true)}
                        onMouseLeave={() => setItalic(false)}
                        onClick={() => setItalic(false)}
                        className={style.italic}
                        style={{
                            fontFamily: italic
                                ? "untitled_serif_regular_italic"
                                : "untitled_serif_regular",
                            letterSpacing: italic ? "0.42px" : "0px",
                        }}
                    >
                        Long Version
                    </span>
                    ]
                </div>
            )}
        </div>
    );
};

export default Toggle;
