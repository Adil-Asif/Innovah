import React from "react";
import "./ProfilePage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout, Row, Col } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GlobalIdeas from "../../assests/Images/ProfilePage.svg";
import IdeaInfo from "../../components/IdeaInfo/IdeaInfo";
import IdeaInsight from "../../components/IdeaInsight/IdeaInsight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
const { Content } = Layout;

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px 70px 0px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title="My Profile" />
              </div>
              <img src={GlobalIdeas} alt="My Profile" />
            </div>
            <div className="insights">
              <Row gutter={32}>
                <Col className="gutter-row" span={6}>
                  <ProfileDetails
                    userID="1"
                    userName="Adil Asif"
                    userIndustry="Health"
                    userRole="Innovator"
                    userMobileNumber="090078601"
                    imageUrl={require("../../assests/Images/HomepageImages/Adil.jpg")}
                  />
                </Col>
                <Col className="gutter-row rightSection" span={17}>
                  <Col className="gutter-row ideaDescription" span={23.5}>
                    <IdeaInsight
                      icon={<FontAwesomeIcon icon={faFileLines} />}
                      description="It is video streaming platform where content creators can upload their videos and monetize them. These videos will be available to watch all around the globe based on user watch history and preferences."
                      title="Resume"
                    />
                  </Col>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default ProfilePage;
