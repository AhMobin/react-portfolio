import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import TermsConditions from "../components/TermsConditions/TermsConditions";
import Footer from "../components/Footer/Footer";

class TermsConditionPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms And Condition" />
                <Breadcrumb breadcrumb="Terms And Condition"/>
                <TermsConditions/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsConditionPage;