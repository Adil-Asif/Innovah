import React from "react";
import "./ViewRequestsPage.style.scss";
import { Layout, Row, Col, Empty } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RequestInfo from "../../components/RequestInfo/RequestInfo";
import IdeaInsight from "../../components/IdeaInsight/IdeaInsight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faEye,
  faComment,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
const { Content } = Layout;

const ViewIdeasPage = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="insights">
              <Row gutter={32}>
                <Col className="gutter-row" span={6}>
                  <RequestInfo
                    ideaName="Stream.io"
                    ideaAuthor="Adil Asif"
                    imageUrl={
                      require("../../assests/Images/IdeasImage/mentor.png")
                        .default
                    }
                  />
                </Col>
                <Col className="gutter-row rightSection" span={16}>
                  <Row gutter={32}>
                    <Col className="gutter-row" span={6}>
                      <IdeaInsight
                        icon={<FontAwesomeIcon icon={faThumbsUp} />}
                        description="2"
                        title="Likes"
                      />
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <IdeaInsight
                        icon={<FontAwesomeIcon icon={faEye} />}
                        description="10"
                        title="Views"
                      />
                    </Col>

                    <Col className="gutter-row" span={6}>
                      <IdeaInsight
                        icon={<FontAwesomeIcon icon={faComment} />}
                        description="0"
                        title="Comments"
                      />
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <IdeaInsight
                        icon={<FontAwesomeIcon icon={faComment} />}
                        description="0"
                        title="Applicants"
                      />
                    </Col>

                    <Col className="gutter-row ideaDescription" span={25}>
                      <IdeaInsight
                        icon={<FontAwesomeIcon icon={faFileLines} />}
                        description="We are a group of 5 people working on an idea related to health care industry. We need a mentor who can help us out with improvising our idea and helping us with our project"
                        title="Description"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className="feedback">
              <Row gutter={32}>
                <Col className="gutter-row" span={24}>
                  <div className="title">Comments</div>
                  <div className="comments">
                    <Empty
                      image={
                        require("../../assests/Images/comments.svg").default
                      }
                      imageStyle={{
                        height: 60,
                      }}
                      description={<span>No Comments</span>}
                    ></Empty>
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
