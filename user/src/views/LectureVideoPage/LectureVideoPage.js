import React from "react";
import "./LectureVideoPage.scss";

import { Layout, Button } from "antd";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import lecture from "../../assests/Images/lecture.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
const { Content } = Layout;

const LectureVideoPage = () => {
  return (
  <div className="lectureVideoPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title="Introduction to Algorithms" />
              </div>
              <img src={lecture} alt="Lecture" />
            </div>

            <div className="viewLecture">
              <div className="Video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0IAPZzGSbME"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="videoiframe"
                ></iframe>
              </div>
              <div className="moreLectures">
                <Button type="primary" shape="round">
                  <FontAwesomeIcon icon={faAngleDoubleLeft} className="icon" />
                  Back
                </Button>
                <Button type="primary" shape="round" style={{marginLeft: "325px"}}>
                  Next
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="icon" />
                </Button>
              </div>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default LectureVideoPage;
