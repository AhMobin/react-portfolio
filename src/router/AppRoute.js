import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import CoursePage from "../pages/CoursePage";
import ProjectPage from "../pages/ProjectPage";
import ContactPage from "../pages/ContactPage";
import PolicyPage from "../pages/PolicyPage";
import TermsConditionPage from "../pages/TermsConditionPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/service" component={ServicePage} />
                    <Route exact path="/course" component={CoursePage} />
                    <Route exact path="/projects" component={ProjectPage} />
                    <Route exact path="/contact" component={ContactPage} />

                    {/*<Route exact path="/refund-policy" component={PolicyPage} />*/}
                    <Route exact path="/terms-and-conditions" component={TermsConditionPage} />
                    <Route exact path="/privacy-policy" component={PrivacyPage} />

                    <Route exact path="/project-details" component={ProjectDetailsPage}/>

                    <Route exact path="/course-details" component={CourseDetailsPage}/>

                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;