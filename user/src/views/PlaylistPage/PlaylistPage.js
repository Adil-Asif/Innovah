import React from "react";
import "./PlaylistPage.scss";

import { Layout,Spin } from "antd";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import Playlist from "../../assests/Images/Playlist.svg";
import PlaylistItem from "../../components/Playlist/PlaylistItem";
import axios from 'axios';
import {useState,useEffect} from 'react';
const { Content } = Layout;

const PLayListPage = () => {
  var [Response,setResponse]=useState(null);
  useEffect(async ()=>{
    var response =await axios.get('http://localhost:5000/Learn/playlist')
    setResponse(await response)
  },[]);
  
  return (
    <div className="playListPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              {Response?<div className="pageTitle">
                <PageTitle title={Response.data.playlistname} />
              </div>:<Spin/>}
              <img src={Playlist} alt="Playlist" />
            </div>
            {(Response)?<div className="lectures">
              <div className="lectureItem">
                <PlaylistItem
                  title={Response.data.title}
                  description={Response.data.desc}
                  className="lectureItem"
                  iscompleted={Response.data.status>0? true: false}
                />
              </div>
              <hr />
              <PlaylistItem
                title="Characteristics of Algorithm"
                description=" Algorithms are very important to the way computers process information, because a computer program is basically an algorithm that tells computer what specific tasks to perform in what specific order to accomplish a specific task. The same problem can be solved with different methods. So, for solving the same problem, different algorithms can be designed. In these algorithms, number of steps, time and efforts may vary more or less."
                className="lectureItem"
                iscompleted={false}
              />
            </div>:<Spin/>}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default PLayListPage;
