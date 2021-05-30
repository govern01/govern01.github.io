import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Main = (props) => (
    <HelmetProvider>
        <Helmet titleTemplate='%s | Jacob Morris' defaultTitle="Jacob Morris">
            {props.title && <title>{props.title}</title>}
            <meta name='description' content={props.description} />
        </Helmet>
        <div id='wrapper'>
            <Navbar />
            <div id='main'>
                {props.children}
            </div>
            <Footer />
        </div>
    </HelmetProvider>
);

export default Main;
