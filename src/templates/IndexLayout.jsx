import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/layout/Footer";

const Layout = (props) => (
    <HelmetProvider>
        <Helmet titleTemplate='%s | Jacob Morris' defaultTitle="Jacob Morris">
            {props.title && <title>{props.title}</title>}
            <meta name='description' content={props.description} />
        </Helmet>
        <div id='wrapper'>
            <div id='main' style={{paddingBottom: "100vh"}}>
                {props.children}
            </div>
            <Footer />
        </div>
    </HelmetProvider>
);

export default Layout;
