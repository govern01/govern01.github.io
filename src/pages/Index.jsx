import React from 'react';
import IndexNavbar from '../components/pages/IndexNavbar';
import Layout from '../templates/IndexLayout';

const Index = () => (
    <Layout title="Index" description={"Jacob Morris' personal website. Melbourne based "
    + "game designer and developer. Eager to learn anything about game development."}>
        <IndexNavbar />
    </Layout>
);

export default Index;
