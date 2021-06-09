import React from 'react';
import Main from '../templates/ContentLayout';
import ProjectList from '../components/pages/projects/ProjectList';
import projects from '../data/projects.json'

const Projects = () => (
    <Main title={"Projects"} description={"Jacob Morris' projects"}>
        <p>Hello World: This is gonna be a Projects page</p>
        <p>Datas there just need to make a card component and do some thicc map funcs</p>
        <ProjectList data={projects}/>
    </Main>
);

export default Projects;
