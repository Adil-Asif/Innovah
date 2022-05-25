import { React, useState, useEffect} from "react";

import "./ViewIdeasPage.scss";
import { Layout, Row, Col, Avatar, Form, Input, Button } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import IdeaInfo from "../../components/IdeaInfo/IdeaInfo";
import IdeaInsight from "../../components/IdeaInsight/IdeaInsight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import Remarks from "../../components/Remarks/Remarks";
import axios from 'axios';
const { Content } = Layout;

const ViewIdeasPage = () => {
  // paste the code here 
  // const ideaReview = (values) => {
  //   console.log(values);
  // };
  const [juryFeedback, setJuryFeedback] = useState("");
  const ideaReview = (values) => {
    console.log(values);
    setJuryFeedback(values.comment);
  };
  const ideafunc = async (obj)=>{
    // await axios.get("http://localhost:5000/ideas/myideas")
    //   .then((result)=>{
    //     console.log(result);
    //   })
    await axios.post("http://localhost:5000/ideas/myideas/viewidea",obj)
    .then((result)=>{
        console.log(result);
      })
  }
  useEffect(()=>{
  //TODO: please place the ideaID object in brackets as argument
    ideafunc();
  
  },[])
  const addjuryresponse = async (obj)=>{
    
    await axios.post("http://localhost:5000/ideas/myideas/viewidea/juryresponse",obj)
    .then((result)=>{
        console.log(result);
      })
  }
  useEffect(()=>{
  if(juryFeedback !==""){
  //TODO: place the jury comments as an object along with the ideaid
    addjuryresponse()
  }
  },[juryFeedback])

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
            {/* TODO: Convert it to role for jury and add comment option below */}
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
                    <Row className="feedbackRow">
                      <Remarks
                        name="Adil Asif"
                        description="Scope of idea needs to be re-defined"
                        imageUrl={require("../../assests/Images/HomepageImages/Adil.jpg")}
                      />
                    </Row>

                    <Row>
                      <div className="response">
                        <div className="avatar">
                          <Avatar
                            shape="round"
                            size={50}
                            style={{
                              backgroundColor: "var(--primary-color)",
                              marginLeft: "10px",
                            }}
                          >
                            Jury
                          </Avatar>
                        </div>
                        <div className="responseForm">
                          <Form onFinish={ideaReview}>
                            <div>
                              <Form.Item name="comment">
                                <Input placeholder="Enter Your Response...." />
                              </Form.Item>
                            </div>
                            <div>
                              <Form.Item>
                                <Button
                                  htmlType="submit"
                                  icon={
                                    <FontAwesomeIcon
                                      icon={faSquareCaretRight}
                                      className="icon"
                                      style={{ fontSize: "34px" }}
                                    />
                                  }
                                ></Button>
                              </Form.Item>
                            </div>
                          </Form>
                        </div>
                      </div>
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
