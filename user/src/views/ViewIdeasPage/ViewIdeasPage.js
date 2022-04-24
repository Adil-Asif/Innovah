import React from "react";
import "./ViewIdeasPage.scss";
import { Layout, Row, Col } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import IdeaInfo from "../../components/IdeaInfo/IdeaInfo";
import IdeaInsight from "../../components/IdeaInsight/IdeaInsight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faEye,
  faComment,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import Remarks from "../../components/Remarks/Remarks";
const { Content } = Layout;

const ViewIdeasPage = () => {
  return (
    <div className="viewIdeasPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="insights">
              <Row gutter={32}>
                <Col className="gutter-row" span={6}>
                  <IdeaInfo
                    ideaName="Stream.io"
                    ideaAuthor="Adil Asif"
                    ideaStatus="Approved"
                    ideaVisibility="Private"
                    imageUrl={require("../../assests/Images/IdeasImage/Stream.jpg")}
                  />
                </Col>
                <Col className="gutter-row rightSection" span={16}>
                  <Row gutter={32}>
                    <Col className="gutter-row ideaDescription" span={20}>
                      <IdeaInsight
                        icon={<FontAwesomeIcon icon={faFileLines} />}
                        description="It is video streaming platform where content creators can upload their videos and monetize them. These videos will be available to watch all around the globe based on user watch history and preferences."
                        title="Description"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className="feedback">
              <Row gutter={32}>
                <Col className="gutter-row" span={20}>
                  <div className="title">Jury Remarks</div>

                  <div className="comments">
                    <Row className="feedbackRow">
                      <Remarks
                        name="Adil Asif"
                        description="Scope of idea needs to be re-defined"
                        imageUrl={require("../../assests/Images/HomepageImages/Adil.jpg")}
                      />
                    </Row>
                    <Row>
                      <Remarks
                        name="Adil Asif"
                        description="Scope of idea needs to be re-defined"
                        imageUrl={require("../../assests/Images/HomepageImages/Adil.jpg")}
                      />
                    </Row>
                  </div>
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

export default ViewIdeasPage;
