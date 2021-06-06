import React from 'react';
import Main from '../templates/ContentLayout';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import EducationList from '../components/pages/resume/EducationList';
import qualifications from '../data/resume/Qualifications.json';
import ExperienceList from '../components/pages/resume/ExperienceList';
import experiences from '../data/resume/Experience.json';
import SkillList from '../components/pages/resume/SkillList';
import skills from '../data/resume/Skills.json'

const blurb = raw("../data/resume/Blurb.md")

const Resume = () => (
    <Main description={"Jacob Morris' resume"}>
        <ReactMarkdown components={{
            // eslint-disable-next-line
            h1: ({ node, ...props }) => <h1 className='major' {...props} />
        }} children={blurb} />
        {/* TODO link to sections */}
        <EducationList data={qualifications} />
        <ExperienceList data={experiences} />
        <SkillList data={skills} />
    </Main>
);

export default Resume;
