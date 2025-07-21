import React from "react";
import { useDispatch, useSelector } from "react-redux";
import spriteList from "../../assets/Sprites";
import { themes } from "../../domains/Theme";
import { setCurrentTheme } from "../../store/slices/application";
import "./style.css";

const ThemeSwitch = () => {
    const appTheme = useSelector((state) => state.application.currentTheme);
    const dispatch = useDispatch();

    const themeToggle = () => {
        if (appTheme === themes.LIGHT) {
            return dispatch(setCurrentTheme(themes.DARK));
        }

        return dispatch(setCurrentTheme(themes.LIGHT));
    };

    return (
        <div
            className={`toggle-switch ${appTheme}-container`}
            onClick={themeToggle}
        >
            <div className={`toggle ${appTheme}`}></div>
            {spriteList.moon}
            {spriteList.sun}
        </div>
    );
};

export default ThemeSwitch;
