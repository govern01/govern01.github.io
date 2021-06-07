import SkillBar from './SkillBar'

const SkillList = ({ data }) => {
    return(
        <div id="Skills">
            <h2>Skills</h2>
            {data.sort((a, b) => b.level - a.level).map((skill) => (
                <SkillBar data={skill} key={skill.name}/>
            ))}
        </div>
    );
};

export default SkillList;
