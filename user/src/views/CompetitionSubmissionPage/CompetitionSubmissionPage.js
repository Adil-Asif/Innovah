import React from "react";
import "./CompetitionSubmissionPage.scss";
import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import Competition from "../../assests/Images/competition.svg";
import { useParams } from "react-router-dom";
import CompetitionSubmissionItem from "../../components/CompetitionSubmissionItem/CompetitionSubmissionItem";

const { Content } = Layout;

const CompetitionSubmissionPage = () => {
  let params = useParams();
  console.log(params.competittion_name);

  return (
    <div className="competitionSubmissionPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title={((params.competittion_name).toUpperCase()).replace("_", " ")} />
              </div>
              <img src={Competition} alt="CompetitionImage" />
            </div>
            <div className="competitionSubmissionDashboard">
              {/* <CompetitionSubmissionItem requestID ={params}/> */}
              <CompetitionSubmissionItem competition = {params.competittion_name} />
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default CompetitionSubmissionPage;
