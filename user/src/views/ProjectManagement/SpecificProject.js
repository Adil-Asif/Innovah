import React from "react";
import "./SpecificProject.scss";

import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import AI_image from "./../../assests/Images/ProjectManagement/AI_project.jpg"
import taskImage from"./../../assests/Images/ProjectManagement/Daco_219372.png";
import Inventory from "./../../assests/Images/ProjectManagement/production.png"
import { Navigate,useNavigate } from "react-router-dom";
const { Content } = Layout;

const SpecificProject = () => {
    let navigate = useNavigate();
    const navigationToBoards=()=>{
        navigate('/projectmanagement/specificproject/workItems')
    }
    const navigationToInventory=()=>{
        navigate('/projectmanagement/specificproject/Inventory')
    }
    return (
        <div className="specificProjectPage">
            <Layout style={{ minHeight: "100vh" }}>
                <Sidebar PageKey="9" />
                <Layout className="site-layout" data-theme="dark">
                    <Header />
                    <Content style={{ margin: '0 16px' }}>
                        <div className="Project-heading">
                            <PageTitle title="Stream.IO" />

                        </div>
                        <div className="project-container">
                       <div className="project-description">
                           <span className="title-of-page">About This Project:</span> <br/>
                           It is video streaming platform where content creators can upload their videos and monetize them. These videos will be available to watch all around the globe based on user watch history and preferences.
                       </div>
                       <div className="project-tracking">
                           <div  className="project-status">
                               <span className="tracking-heading"> Project Status </span> 
                               
                               <div onClick={()=>{navigationToBoards()}} className="tasks">
                              <span className="sidebar-heads"> Boards </span> <br/>
                               <div className="specific-task">
                                <img src={taskImage}  alt=""/>
                              <span className="specific-fields-side">  2 task  created </span>
                                </div>
                                <div className="specific-task">
                                <img src={taskImage} alt=""/>
                                <span className="specific-fields-side">  2 task  completed </span>
                                </div>
                                
                               </div>
                               <div onClick={()=>{navigationToInventory()}} className="tasks">
                               <span className="sidebar-heads"> Inventory </span> <br/>
                               <div className="specific-task">
                                <img src={Inventory} alt=""/>
                                <span className="specific-fields-side">  2 Items Available </span>
                                </div>
                                <div className="specific-task">
                                <img src={Inventory} alt=""/>
                                <span className="specific-fields-side">  3 Items Consumed </span>                                </div>
                               </div>

                           </div> 

                           <div className="members-list">
                               <span className="member-heading"> Members </span> <br/>
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
                               <span className="Service-heading"> Services </span> <br/>
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
