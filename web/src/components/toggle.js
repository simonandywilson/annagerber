import React from "react";
import * as style from "../styles/toggle.module.css";

const Toggle = (props) => {
    return (
        <div onClick={props.toggleVersion}>
            {props.version ? (
                <div className={style.toggle}>
                    [<span className={style.italic}>Short Version</span>]
                </div>
            ) : (
                <div className={style.toggle}>
                    [<span className={style.italic}>Long Version</span>]
                </div>
            )}
        </div>
    );
};

export default Toggle;
