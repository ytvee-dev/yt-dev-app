import React from "react";
import { socialLinks } from "../../utils/constants";
import "./style.css";

const AppFooter = () => {
    const getCurrentYear = () => {
        const year = new Date().getFullYear();
        return year;
    };

    return (
        <footer className="footer-container">
            <div className="footer-links-container">
                <span className="footer-links">{`© ${getCurrentYear()}`}</span>
                {socialLinks.map((link) => (
                    <div className="footer-links" key={link.link}>
                        <a href={link.link} target="_blank" rel="noreferrer">
                            {link.label}
                        </a>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default AppFooter;
