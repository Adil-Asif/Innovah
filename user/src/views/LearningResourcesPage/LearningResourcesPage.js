import React from "react";
import "../LearningResourcesPage/LearningResourcesPage.style.scss";

import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import LearningResourcesItem from "../../components/LearningResource/LearningResource";
import LearningRescources from "../../assests/Images/LearningResources.svg";
const { Content } = Layout;

const LearningResourcesPage = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title="Learning Resources" />
              </div>
              <img src={LearningRescources} alt="Learning Resources" />
            </div>
            <div className="resources">
              <LearningResourcesItem
                title = "Mastering Data Structures and Algorithms using C and C++"
                description = "You may be new to Data Structure or you have already Studied and Implemented Data Structures but still you feel you need to learn more about Data Structure in detail so that it helps you solve challenging problems and used Data Structure efficiently. This 53 hours of course covers each topic in greater details, every topic is covered on Whiteboard which will improve your Problem Solving and Analytical Skills. Every Data Structure is discussed, analysed and implemented with a Practical line-by-line coding."
                imageUrl = {
                  require("../../assests/Images/ResourcesImage/Algorithms.jpg")
                    .default
                }
                className="resourceItem"
                isenrolled={false}
                iscompleted={false}
              />
              <LearningResourcesItem
                title = "React - The Complete Guide (incl Hooks, React Router, Redux)"
                description = "This course will teach you React.js in a practice-oriented way, using all the latest patterns and best practices you need. You will learn all the key fundamentals as well as advanced concepts and related topics to turn you into a React.js developer."
                imageUrl = {
                  require("../../assests/Images/ResourcesImage/React.jpg")
                    .default
                }
                className="resourceItem"
                isenrolled={true}
                iscompleted={true}
              />
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default LearningResourcesPage;
