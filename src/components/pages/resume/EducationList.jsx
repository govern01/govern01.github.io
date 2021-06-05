import Qualidication from './Qualification';

const EducationList = ({ data }) => {
    return (
        <div id="education">
            <h3>Education</h3>
            <div>
                {data.map((qualification) => (
                    <Qualidication data={qualification} key={qualification.qualification}/>
                ))}
            </div>
        </div>
    );
}

export default EducationList;