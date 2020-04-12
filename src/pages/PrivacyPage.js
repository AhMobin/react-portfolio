import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import PrivacyPolicy from "../components/RefundPolicy/RefundPolicy";
import Footer from "../components/Footer/Footer";

class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy Policy" />
                <Breadcrumb breadcrumb="Privacy Policy" />
                <PrivacyPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;