import React from "react";
import "../PageLayout/PageLayout.style.scss";

import { Layout } from "antd";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./PlaylistPage.style.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import Playlist from "../../assests/Images/Playlist.svg";
import PlaylistItem from "../../components/Playlist/PlaylistItem";
const { Content } = Layout;

const PLayListPage = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title="Mastering Data Structures and Algorithms using C and C++" />
              </div>
              <img src={Playlist} alt="Playlist" />
            </div>
            <div className="lectures">
              <div className="lectureItem">
                <PlaylistItem
                  title="Introduction to Algorithms"
                  description="Introduction to Algorithms. Introduction to course. Why we write Algorithm.Who writes Algorithm? When Algorithms are written? Differences between Algorithms and Programs"
                  className="lectureItem"
                  iscompleted={true}
                />
              </div>
              <hr />
              <PlaylistItem
                title="Characteristics of Algorithm"
                description=" Algorithms are very important to the way computers process information, because a computer program is basically an algorithm that tells computer what specific tasks to perform in what specific order to accomplish a specific task. The same problem can be solved with different methods. So, for solving the same problem, different algorithms can be designed. In these algorithms, number of steps, time and efforts may vary more or less."
                className="lectureItem"
                iscompleted={false}
              />
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default PLayListPage;
