import React from "react";


const Portfolio = ({projects}) => {


    return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {projects.map((project) => (
            <div key={project.name} className="card m-3" style={{width: "900px"}}>
                <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">

                    </div>
                </div>
                </div>
            </div>
        ))}
    </div>
    );
}

export default Portfolio;