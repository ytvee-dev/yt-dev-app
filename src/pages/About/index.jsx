import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import MediaGallery from "../../components/MediaGallery";
import { mediaCards } from "../../utils/constants";
import { avaImagePath, imageKeys } from "../../utils/appConstants";
import {
    descriptionTextAbout,
    workingExperience,
    linkedWorkingExperience,
    skillsDescription,
} from "../../utils/constants";
import "./style.css";

const About = () => {
    const [currentImage, setCurrentImage] = useState(imageKeys.GREY);

    const avaImageToggle = () => {
        if (currentImage === imageKeys.COLORED) {
            return setCurrentImage(imageKeys.GREY);
        }
        return setCurrentImage(imageKeys.COLORED);
    };

    const AboutBlock = () => {
        return (
            <div className="about-page-description">
                <span className="subtitle about-page-description-title">
                    Обо мне
                </span>
                <span className="text about-page-text about-page-description-text">
                    {descriptionTextAbout}
                </span>
            </div>
        );
    };

    const SkillsBlock = () => {
        return (
            <div className="about-page-skills">
                <span className="subtitle about-page-description-title">
                    Навыки
                </span>
                <ul className="about-page-ul">
                    {skillsDescription.map((item) => (
                        <li
                            key={item}
                            className="text about-page-skills about-page-description-text"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const ExperienceBlock = () => {
        return (
            <div className="about-page-experience">
                <span className="subtitle about-page-description-title">
                    Карьера
                </span>
                <ul className="about-page-ul">
                    {workingExperience.map((item) => (
                        <li
                            key={item.company}
                            className="text about-page-exp about-page-description-text"
                        >
                            <strong>{item.company} {item.years}</strong> / {item.role}
                            <p><strong>Стек:</strong> {item.stack}</p>
                            <p>~ {item.description}</p>
                        </li>
                    ))}
                    <li className="text about-page-exp about-page-description-text">
                        <a
                            className="text-link"
                            href={linkedWorkingExperience.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {linkedWorkingExperience.intro}
                        </a>
                        {linkedWorkingExperience.label}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <DefaultLayout>
            <div className="title about-page-big-title">Y. TYAN</div>
            <div className="about-page-image-container">
                <img
                    className="about-page-image post-img"
                    src={avaImagePath + currentImage + ".png"}
                    alt={currentImage}
                    onClick={avaImageToggle}
                    onMouseLeave={avaImageToggle}
                    onMouseEnter={avaImageToggle}
                />
            </div>
            <div className="about-page-description-container">
                <div className="simple-container">
                    <AboutBlock />
                    <SkillsBlock />
                </div>
                <ExperienceBlock />
                <MediaGallery
                    galleryTitle={"Медиа и проекты с моим участием"}
                    posts={mediaCards}
                />
            </div>
        </DefaultLayout>
    );
};

export default About;
