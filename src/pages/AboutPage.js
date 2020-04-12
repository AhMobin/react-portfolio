import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";

class AboutPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>

                <TopNavigation title="About" />
                <Breadcrumb breadcrumb="About Me"/>
                <AboutDescription/>
                <Footer/>

            </Fragment>
        );
    }
}

export default AboutPage;