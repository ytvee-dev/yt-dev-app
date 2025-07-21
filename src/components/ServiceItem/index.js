import React from "react";
import { serviceMeta } from "../../utils/constants";
import "./style.css";

const ServiceItem = () => {
    return (
        <div className="service-container">
            {serviceMeta.map((item) => (
                <div key={item.id} className="service-item">
                    <div className="title service-title">
                        <img src={item.imageMobilePath} />
                        {item.title}
                    </div>
                    <div className="subtitle service-sub-title">
                        {item.subTitle}
                    </div>
                    <div className="text service-text-content">
                        {item.description}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceItem;
