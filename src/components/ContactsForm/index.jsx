import React, { useState } from "react";
import { description, cta, links } from "../../utils/constants";
import "./style.css";

const ContactsForm = () => {
    const [isCopied, setIsCopied] = useState(false);

    const copyLink = () => {
        navigator.clipboard
            .writeText(cta.CONTACT_LINK)
            .then(() => setIsCopied(true));
        if (typeof window !== "undefined")
            window.setTimeout(() => setIsCopied(false), 500);
    };

    return (
        <div className="contacts-container">
            <div className="contacts-label">{description.LABEL}</div>
            <div className="contacts-title">{description.TITLE}</div>
            <div className="contacts-description">{description.TEXT}</div>
            <div className="contacts-clickable-block">
                <div className="contacts-clickable-text">
                    <div className={`tooltip ${isCopied && "copied"}`}>
                        Скопировано!
                    </div>
                    {cta.START_DESCRIPTION}
                    <span className="link" onClick={copyLink}>
                        <span className="a-dog">@</span>
                        {cta.CONTACT_LINK.slice(1)}
                    </span>
                    {cta.END_DESCRIPTION}
                </div>
                <a href={links.TELEGRAM} target="_blank" rel="noreferrer">
                    <button className="standard-button">
                        {cta.BUTTON_TEXT}
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ContactsForm;
