import { React, useState, useEffect } from "react";
import "./LectureVideoPage.scss";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Spin } from "antd";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import lecture from "../../assests/Images/lecture.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
const { Content } = Layout;

const LectureVideoPage = () => {
  // var [Response, setResponse] = useState(null);
  // useEffect(() => {
  //   const responseFunction = async () => {
  //     var response = await axios.get(
  //       "http://localhost:5000/Learn/playlist/video"
  //     );
  //     setResponse(await response);
  //   };
  //   responseFunction();
  // }, []);
  // console.log(Response);
  let navigate = useNavigate();
  const movetoplaylist = () => {
    navigate("/learningresources/playlist");
  };
  return (
    <div className="lectureVideoPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              {/* {Response ? ( */}
              <div className="pageTitle">
                {/* <PageTitle title={Response.data.videotitle} /> */}
                <PageTitle title="Video Title" />
              </div>
              {/* ) : (
                <Spin />
              )} */}
              <img src={lecture} alt="Lecture" />
            </div>

            {/* {Response ? ( */}
            <div className="viewLecture">
              <Button onClick={movetoplaylist}>Back to plalist</Button>
              <div className="Video">
                {/* TODO: Entire iframe will be entered by user not the url */}
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/_WncuhSJZyA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  // style={{borderRadius: "16px"}}
                ></iframe>
              </div>
            </div>
            {/* ) : (
              <Spin />
            )} */}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default LectureVideoPage;
