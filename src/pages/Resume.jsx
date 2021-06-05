import React from 'react';
import Main from '../templates/ContentLayout';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import EducationList from '../components/pages/resume/EducationList';
import qualifications from '../data/resume/Qualifications.json';

const blurb = raw("../data/resume/Blurb.md")

const Resume = () => (
    <Main description={"Jacob Morris' resume"}>
        <ReactMarkdown components={{
            h1: ({ node, ...props }) => <h1 className='major' {...props} />
        }} children={blurb} />
        {/* TODO link to sections */}
        <EducationList data={qualifications} />
    </Main>
);

export default Resume;
