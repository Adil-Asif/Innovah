import React from "react";
import "./RewardPage.style.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RewardItem from "../../components/RewardItem/RewardItem";
import RewardImage from "../../assests/Images/Rewards.svg";
const { Content } = Layout;

const RewardPage = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div>
                <div className="pageTitle">
                   <PageTitle title="Reward Shop"  /> 
                </div>
                <div className="innovahPoints">
                  Your IP Points: <span className="points">1150</span>
                </div>
              </div>
                <img
                  src={RewardImage}
                  alt="Reward Shop"
                />
            </div>
            <div className="rewardItemContainer">
              <div className="rewardItem">
                <RewardItem
                  listNumber="1"
                  title="Python Bootcamp 2022"
                  description="This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python. The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should be able to master the materials in this course. "
                  points="30"
                />
                <hr />
                <RewardItem
                  listNumber="2"
                  title="Azure Credits"
                  description="Microsoft Azure is a cloud computing service operated by Microsoft for application management via Microsoft-managed data centers."
                  points="250"
                />
                <hr />
                <RewardItem
                  listNumber="3"
                  title="Canva Pro Subscription"
                  description="Canva Pro is a graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content. The app includes templates for users to use."
                  points="150"
                />
                <hr />
                <RewardItem
                  listNumber="4"
                  title="Mentorship with an Expert"
                  description="Mentorship from people who have specific skills and knowledge. Participants in mentor programs share their values and personal goals in a mutually respectful, supportive way which leads to a more enriched life for both. The program will help break down barriers and create opportunities for success."
                  points="500"
                />
              </div>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default RewardPage;
