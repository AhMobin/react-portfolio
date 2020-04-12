import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";


class CoursePage extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>

                <TopNavigation title="Course"/>
                <Breadcrumb breadcrumb="All Courses"/>
                <AllCourses/>
                <Footer/>

            </Fragment>
        );
    }
}

export default CoursePage;