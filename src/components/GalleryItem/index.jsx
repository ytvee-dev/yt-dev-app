import React from "react";
import { Link } from "react-router-dom";
import spriteList from "../../assets/Sprites";
import { cutText, getDateName } from "./meta";
import "./style.css";

const getLinkedContent = (isPost, postTitle, link, children) => {
    if (!isPost) {
        return (
            <a href={link} target="_blank" rel="noreferrer">
                <div className="item-image-container">
                    {children && children}
                </div>
                <div className="title item-title-container">
                    {postTitle}
                    <div className="svg-container">{spriteList.arrowLink}</div>
                </div>
            </a>
        );
    }

    return (
        <Link to={link}>
            <div className="item-post-image-container">
                {children && children}
            </div>
            <div className="title item-title-container">
                {postTitle}
                <div className="svg-container">{spriteList.arrowLink}</div>
            </div>
        </Link>
    );
};

const GalleryItem = ({
    postTitle,
    subtitle = "",
    description,
    link,
    date = null,
    children = null,
    isPost = false,
}) => {
    return (
        <div className="gallery-item-container">
            {getLinkedContent(isPost, postTitle, link, children)}
            <div className="text item-description-container">
                {cutText(description)}
            </div>
            <div className="subtitle item-date-container">
                {date && "Дата: " + getDateName(date)}
                {subtitle && subtitle}
            </div>
        </div>
    );
};

export default GalleryItem;
