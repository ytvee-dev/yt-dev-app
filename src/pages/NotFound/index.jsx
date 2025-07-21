import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../router/meta";
import "./style.css";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <span className="not-found-title">404 PAGE NOT FOUND</span>
            <Link to={paths.HOME.path} className="not-found-link">
                {"Перейти на главную"}
            </Link>
        </div>
    );
};

export default NotFound;
