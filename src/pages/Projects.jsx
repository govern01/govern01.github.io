import React from 'react';
import Main from '../templates/ContentLayout';
import ProjectList from '../components/pages/projects/ProjectList';
import projects from '../data/projects.json'

const Projects = () => (
    <Main title={"Projects"} description={"Jacob Morris' projects"}>
        <h1 className="major">Projects</h1>
        <p>
            Below are a selection of the projects that I am proud of!
            <br />
            Until I get good photos for each project, I'm going to have to use photos of dogs.
        </p>
        <ProjectList data={projects}/>
    </Main>
);

export default Projects;
