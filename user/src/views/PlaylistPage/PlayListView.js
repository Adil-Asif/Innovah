import React from "react";
import "../PageLayout/PageLayout.style.scss";

import { Layout } from "antd";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";

import PlayListPage from "../../components/PlayListPage/PlayListPage";
const { Content } = Layout;

const PLayListView = () => {
    return (
        <div>
            <Layout style={{ minHeight: "100vh" }}>
                <Sidebar />
                <Layout className="site-layout" data-theme="dark">
                    <Header />
                    <Content style={{ margin: '0 16px' }}>
                        <PageTitle title="Playlist Name" />
                        <PlayListPage titlename="NotEnrolled" />
                        <PlayListPage titlename="Enrolled" />
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        </div>
    );
};

export default PLayListView;
