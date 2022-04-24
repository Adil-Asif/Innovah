import React from "react";
import "./GlobalRequestsPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GlobalRequests from "../../assests/Images/PostRequest.svg";
import RequestsItem from "../../components/RequestsItem/RequestsItem";
const { Content } = Layout;

const GlobalRequestsPage = () => {
  return (
    <div className="globalRequestsPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title="Global Requests" />
              </div>
              <img src={GlobalRequests} alt="Global Requests" />
            </div>
            <div className="requestItemsDashboard">
              <div>
                <RequestsItem
                  title="Hiring a UI/UX designer"
                  description="We need a UI/UX designer for our application"
                  likes="9"
                  views="2000"
                  comments="5"
                  isapplicants={true}
                  applicants="2"
                  imageUrl={require("../../assests/Images/IdeasImage/uiux.jpg")}
                  global={true}
                />
              </div>
              <div>
                <RequestsItem
                  title="Hiring a UI/UX designer"
                  description="We need a UI/UX designer for our application"
                  likes="9"
                  views="2000"
                  comments="5"
                  isapplicants={true}
                  applicants="2"
                  imageUrl={require("../../assests/Images/IdeasImage/uiux.jpg")}
                  global={true}
                />
              </div>
              <div>
                <RequestsItem
                  title="Hiring a UI/UX designer"
                  description="We need a UI/UX designer for our application"
                  likes="9"
                  views="2000"
                  comments="5"
                  isapplicants={true}
                  applicants="2"
                  imageUrl={require("../../assests/Images/IdeasImage/uiux.jpg")}
                  global={true}
                />
              </div>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default GlobalRequestsPage;
