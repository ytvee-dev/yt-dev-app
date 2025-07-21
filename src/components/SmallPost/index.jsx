import React from "react";
import { Link } from "react-router-dom";
import { getDateName } from "../GalleryItem/meta";
import "./style.css";

const SmallPost = ({ date, title, description, link, children }) => {
    return (
        <div className="small-post-container">
            <div className="small-post-image-container">
                <Link to={link} className={`nav-item-link`}>
                    {children}
                </Link>
            </div>
            <div className="small-post-info">
                <Link to={link} className={`nav-item-link`}>
                    <div className="subtitle small-post-date-container">
                        {getDateName(date)}
                    </div>
                    <div className="title small-post-title-container">
                        {title}
                    </div>
                </Link>
                <div className="text small-post-description-container">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default SmallPost;
