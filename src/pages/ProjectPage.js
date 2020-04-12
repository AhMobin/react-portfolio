import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";


class ProjectPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Service" />
                <Breadcrumb breadcrumb="All Projects"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectPage;