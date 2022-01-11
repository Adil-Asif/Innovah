
import React from "react";
import "../PageLayout/PageLayout.style.scss";

import { Layout } from "antd";
import Algo from "../../assests/Images/Algo.png";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import LearningResourcesTitle1 from "../../components/LearningResourcesTitle1/LearningResourcesTitle1"
const { Content } = Layout;

const LearningResourcesView = () => {
    return (
        <div>
            <Layout style={{ minHeight: "100vh" }}>
                <Sidebar />
                <Layout className="site-layout" data-theme="dark">
                    <Header />
                    <Content style={{ margin: '0 16px' }}>
                        <PageTitle title="Learning Resources" />
                        <LearningResourcesTitle1 titlename="NotEnrolled" src="../../assests/Images/Algo.png" />
                        <LearningResourcesTitle1 titlename="Enrolled" src="../../assests/Images/Algo.png" />
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        </div>
    );
};

export default LearningResourcesView;
