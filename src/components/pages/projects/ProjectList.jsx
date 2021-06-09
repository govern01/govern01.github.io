import ProjectCard from './ProjectCard';

const ProjectList = ({ data }) => {
    return(
        <div>
            {data.map((project) => (
                <ProjectCard data={project} key={project.title} />
            ))}
        </div>
    );
}

export default ProjectList;
