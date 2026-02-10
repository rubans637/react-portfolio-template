import React from "react";
import mock10 from '../assets/images/mock10.png';
import mock09 from '../assets/images/mock09.png';
import mock08 from '../assets/images/mock08.png';
import mock05 from '../assets/images/mock05.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>

            <div className="projects-grid">

                <div className="project">
                    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
                        <img src={mock10} className="zoom" alt="Filmate AI" width="100%" />
                    </a>
                    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
                        <h2>Filmate AI</h2>
                    </a>
                    <p>
                        Developed a movie finder app with semantic search and sentiment analysis
                        using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.
                    </p>
                </div>

                <div className="project">
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer">
                        <img src={mock09} className="zoom" alt="High Speed Chase" width="100%" />
                    </a>
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer">
                        <h2>High Speed Chase</h2>
                    </a>
                    <p>
                        Designed, developed, and launched a 3D multiplayer racing game using
                        C# and Unity, published on Itch.io.
                    </p>
                </div>

                <div className="project">
                    <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer">
                        <img src={mock08} className="zoom" alt="Astro Raiders" width="100%" />
                    </a>
                    <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer">
                        <h2>Astro Raiders</h2>
                    </a>
                    <p>
                        Developed and released a 2D shooting game using C# and Unity,
                        available on the Itch.io marketplace.
                    </p>
                </div>

                <div className="project">
                    <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer">
                        <img src={mock05} className="zoom" alt="COVID-19 Case Management" width="100%" />
                    </a>
                    <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer">
                        <h2>COVID-19 Case Management</h2>
                    </a>
                    <p>
                        Built official COVID and vaccination tracking dashboards using
                        JavaScript and Google Sheets API v4 for institutional decision-making.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
