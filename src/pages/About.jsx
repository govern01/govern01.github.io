import React from 'react';
import Main from '../templates/ContentLayout';
import raw from 'raw.macro';
import ReactMarkdown from 'react-markdown';

const markdown = raw('../data/About.md')

const About = () => (
    <Main title={"About"} description={"Jacob Morris' About me"}>
        <div>
            <ReactMarkdown components={{
                // eslint-disable-next-line
                h1: ({node, ...props}) => <h1 className='major' {...props} />
            }} children={markdown} />
        </div>
    </Main>
);

export default About;
