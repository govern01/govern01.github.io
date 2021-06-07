import React from 'react';
import raw from 'raw.macro';

// Layout
import Main from '../templates/ContentLayout';

// Components
import ReactMarkdown from 'react-markdown';
import EducationList from '../components/pages/resume/EducationList';
import ExperienceList from '../components/pages/resume/ExperienceList';
import SkillList from '../components/pages/resume/SkillList';

// Data
import qualifications from '../data/resume/qualifications.json';
import experiences from '../data/resume/experience.json';
import skills from '../data/resume/skills.json'
const blurb = raw("../data/resume/blurb.md")

const Resume = () => (
    <Main title={"Resume"} description={"Jacob Morris' resume"}>
        <div id="Blurb">
            <ReactMarkdown components={{
                // eslint-disable-next-line
                h1: ({ node, ...props }) => <h1 className='major' {...props} />
            }} children={blurb} />
            {/* TODO link to sections */}
            <ul>
                <li><a href="#Education">Education</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Skills">Skills</a></li>
            </ul>
        </div>
        <EducationList data={qualifications} />
        <ExperienceList data={experiences} />
        <SkillList data={skills} />
    </Main>
);

export default Resume;
