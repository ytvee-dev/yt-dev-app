import React from "react";
import { Link } from "react-router-dom";
import { getDateName } from "../GalleryItem/meta";
import "./style.css";

const BigPost = ({ date, title, description, link, children }) => {
    return (
        <div className="big-post-container">
            <Link to={link} className={`nav-item-link`}>
                <div className="big-post-image-container">{children}</div>
                <div className="subtitle big-post-date-container">
                    {getDateName(date)}
                </div>
                <div className="title big-post-title-container">{title}</div>
            </Link>
            <div className="text big-post-description-container">
                {description}
            </div>
        </div>
    );
};

export default BigPost;
