import React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import "./style.css";

const DefaultLayout = ({ children }) => {
    return (
        <div className={`container`}>
            <AppHeader />
            <div className="default-layout">{children}</div>
            <AppFooter />
        </div>
    );
};

export default DefaultLayout;
