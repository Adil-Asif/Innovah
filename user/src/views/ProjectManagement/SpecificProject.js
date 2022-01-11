import React from "react";
import "./SpecificProject.style.scss";

import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import AI_image from "./../../assests/Images/ProjectManagement/AI_project.jpg"
const { Content } = Layout;

const SpecificProject = () => {
    return (
        <div>
            <Layout style={{ minHeight: "100vh" }}>
                <Sidebar PageKey="9" />
                <Layout className="site-layout" data-theme="dark">
                    <Header />
                    <Content style={{ margin: '0 16px' }}>
                        <div className="Project-heading">
                            <PageTitle title="Project Name" />

                        </div>
                        <div className="project-container">
                       <div className="project-description">
                           <span className="title-of-page">About This Project:</span> <br/>
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur harum, aperiam corrupti a eum accusamus minima ducimus blanditiis
                            ab minus asperiores molestiae enim, tempore veniam necessitatibus, rerum ex provident modi?
                       </div>
                       <div className="project-tracking">
                           <div className="project-status">
                               Project Status
                               
                               <div className="tasks">
                               Boards <br/>
                               <div className="specific-task">
                                <img src={AI_image} alt=""/>
                                2 task  created
                                </div>
                                <div className="specific-task">
                                <img src={AI_image} alt=""/>
                                2 task created
                                </div>
                                
                               </div>
                               <div className="tasks">
                               Inventory <br/>
                               <div className="specific-task">
                                <img src={AI_image} alt=""/>
                                 2 task  created
                                </div>
                                <div className="specific-task">
                                <img src={AI_image} alt=""/>
                                 2 task created
                                </div>
                               </div>

                           </div> 

                           <div className="members-list">
                               <span className="member-heading"> Member </span> <br/>
                            <div className="member-images">
                                <img src={AI_image} alt="" srcset=""/>
                            </div>
                            <div className="member-images">
                                <img src={AI_image} alt="" srcset=""/>
                            </div>
                            <div className="member-images">
                                <img src={AI_image} alt="" srcset=""/>
                            </div>
                            <div className="member-images">
                                <img src={AI_image} alt="" srcset=""/>
                            </div>
                           </div>

                           <div className="Services-list">
                               <span className="Service-heading"> Service </span> <br/>
                            <div className="Service-images">
                                <img src={AI_image} alt="" srcset=""/>
                            </div>
                            <div className="Service-images">
                                <img src={AI_image} alt="" srcset=""/>
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

export default SpecificProject;
