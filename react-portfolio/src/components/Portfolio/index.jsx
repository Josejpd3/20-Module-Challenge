import React from "react";
import './portfolio.css';


const Portfolio = ({projects}) => {


    return (
        <div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            {projects.map((project) => (
                <div key={project.name} className="card m-3" style={{width: "900px"}}>
                    <div className="row g-0">
                    <div className="col-md-4 project-image-container">
                        <a href={project.deployed}><img src={project.imgPath} className="project-img img-fluid rounded-start" alt={project.name}/></a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <div className="proj-desc">
                            <div className="card-title"><h5>{project.name}</h5><span><a href={project.deployed}>Live</a><a href={project.repo}>Github</a></span></div>
                            <p className="card-text">{project.desc}</p>
                        </div>
                        <span className="project-tech">
                            <p>Technologies Used:</p>
                            {project.tech.map((technologies) => (
                                <span key={technologies.name} className="project-logo"><img src={technologies.path} alt={technologies.name} title={technologies.name}/>{technologies.name}</span>
                            ))}
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Portfolio;