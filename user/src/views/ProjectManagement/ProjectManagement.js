import React from "react";
import "./ProjectManagement.scss";

import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import AI_image from "./../../assests/Images/ProjectManagement/AI_project.jpg";
import Stream from "./../../assests/Images/IdeasImage/Stream.jpg";

import { useNavigate } from "react-router-dom";
const { Content } = Layout;

const ProjectManagement = () => {
  const navigate = useNavigate();
  const navigationToSpecificProject = () => {
    navigate("/projectmanagement/specificproject");
  };
  return (
    <div className="projectManagementPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar PageKey="9" />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="Project-heading">
              <PageTitle title="Your Projects" />
            </div>
            <div className="your-projects">
              <div
                onClick={() => {
                  navigationToSpecificProject();
                }}
                className="projects"
              >
                <img src={Stream} alt="" />
                <div className="name-description">
                  <span className="project-name"> Stream.Io </span> <br />{" "}
                  <div className="project-description">
                    {" "}
                    Online Straming platform
                  </div>
                </div>
                <div className="members-list">
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                </div>
              </div>
              <div className="projects">
                <img src={AI_image} alt="" />
                <div className="name-description">
                  <span className="project-name"> Name </span> <br />{" "}
                  <span className="project-description"> Description </span>
                </div>
                <div className="members-list">
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                </div>
              </div>
              <div className="projects">
                <img src={AI_image} alt="" />
                <div className="name-description">
                  <span className="project-name"> Name </span> <br />{" "}
                  <span className="project-description"> Description </span>
                </div>
                <div className="members-list">
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                </div>
              </div>
              <div className="projects">
                <img src={AI_image} alt="" />
                <div className="name-description">
                  <span className="project-name"> Name </span> <br />{" "}
                  <span className="project-description"> Description </span>
                </div>

                <div className="members-list">
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                  <div className="member">
                    <img src={AI_image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default ProjectManagement;
