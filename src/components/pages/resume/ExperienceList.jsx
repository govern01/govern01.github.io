import Experience from './Experience'

const ExperienceList = ({ data }) => {
    return (
        <div id="experience">
            <h3>Work Experience</h3>
            <div>
                {data.map((experience) => (
                    <Experience data={experience} key={experience.key} />
                ))}
            </div>
        </div>
    );
}

export default ExperienceList;
