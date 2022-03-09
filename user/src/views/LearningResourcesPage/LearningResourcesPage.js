import React from "react";
import "./LearningResourcesPage.scss";

import { Layout,Spin } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import LearningResourcesItem from "../../components/LearningResource/LearningResource";
import LearningRescources from "../../assests/Images/LearningResources.svg";
import axios from 'axios';
import {useState,useEffect} from 'react';
const { Content } = Layout;

const LearningResourcesPage = () => {
  // var Response;
  var [Response,setResponse]=useState(null);
  useEffect(async ()=>{
    var response =await axios.get('http://localhost:5000/Learn/')
    setResponse(await response)
  },[]);
  // console.log(Response);
  // let getdata = async()=>{
  //   let response =await  axios.get('http://localhost:5000/Learn/');  
  //   setResponse(await response);
  //   console.log(Response);
  // }
  // getdata();
  console.log(Response);
  return (
    
    <div className="learningResourcesPage">
        
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
            {(Response)?<div className="resources">
              <LearningResourcesItem
                // title="Mastering Data Structures and Algorithms using C and C++"
                title={Response.data.title}
                // description="You may be new to Data Structure or you have already Studied and Implemented Data Structures but still you feel you need to learn more about Data Structure in detail so that it helps you solve challenging problems and used Data Structure efficiently. This 53 hours of course covers each topic in greater details, every topic is covered on Whiteboard which will improve your Problem Solving and Analytical Skills. Every Data Structure is discussed, analysed and implemented with a Practical line-by-line coding."
                description={Response.data.desc}
                // imageUrl={require("../../assests/Images/ResourcesImage/Algorithms.jpg")}
                imageUrl={Response.data.pic}
                className="resourceItem"
                // isenrolled={false}
                isenrolled={Response.data.enrolledstatus>0? true: false}
                iscompleted={Response.data.completedstatus>0? true: false}
              />
              <LearningResourcesItem
                title="React - The Complete Guide (incl Hooks, React Router, Redux)"
                description="This course will teach you React.js in a practice-oriented way, using all the latest patterns and best practices you need. You will learn all the key fundamentals as well as advanced concepts and related topics to turn you into a React.js developer."
                imageUrl={require("../../assests/Images/ResourcesImage/React.jpg")}
                className="resourceItem"
                isenrolled={true}
                iscompleted={true}
              />
            </div>:<Spin/>}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default LearningResourcesPage;
