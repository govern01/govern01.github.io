import SkillBar from './SkillBar'

const SkillList = ({ data }) => {
    return(
        <div>
            <h2>Skills</h2>
            {data.map((skill) => (
                <SkillBar data={skill} key={skill.name}/>
            ))}
        </div>
    );
};

export default SkillList;
