import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import RefundPolicy from "../components/RefundPolicy/RefundPolicy";
import Footer from "../components/Footer/Footer";

class PolicyPage extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund Policy" />
                <Breadcrumb breadcrumb="Refund Policy" />
                <RefundPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PolicyPage;