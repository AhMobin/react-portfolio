import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import Footer from "../components/Footer/Footer";

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Service" />
                <Breadcrumb breadcrumb="My Services"/>
                <ServiceSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;