import React from "react";
import "./RequestsSubmissionPage.scss";
import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import RequestSubmission from "../../assests/Images/RequestSubmission.svg";
import RequestSubmissionItem from "../../components/RequestSubmissionItem/RequestSubmissionItem";

const { Content } = Layout;

const RequestSubmissionPage = () => {
  return (
    <div className="requestsSubmissionPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title="Request Title" />
              </div>
              <img src={RequestSubmission} alt="Request Submission" />
            </div>
            <div className="requestSubmissionDashboard">
            <RequestSubmissionItem/>
            </div>
            
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default RequestSubmissionPage;
