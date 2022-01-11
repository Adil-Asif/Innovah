import React from "react";
import "./CompetitionPage.style.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout, Button } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Competition from "../../assests/Images/competition.svg";
import InnovahCup from "../../assests/Images/InnovahCup.svg";
import hackathon from "../../assests/Images/hackathon.svg";
import defend from "../../assests/Images/defend.svg";
const { Content } = Layout;

const CompetitionPage = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title="Competitions" />
              </div>
              <img src={Competition} alt="Competitions" />
            </div>
            <div className="ideaItemsDashboard">
              <div className="competition">
                <div className="left">
                  <div className="image">
                    <img src={hackathon} alt="Hackathon" />
                  </div>
                  <div className="information">
                    <div className="title">Idea Hack</div>
                    <div className="description">
                      There is no question that hackathons have taken the world
                      by storm, spurring the development of everyday products
                      and moving millions of dollars. And with the rise of
                      hackathons, team Innovah has decided to arrange a
                      hackathon know as Idea Hack.Idea Hack is an event designed
                      to use technology, primarily coding, to accomplish an
                      objective.
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="difficultyLevel">
                    <div className="difficultyTitle">Low</div>
                    <div
                      style={{
                        width: "150px",
                        border: "1px solid var(--textbox-border)",
                        borderRadius: "16px",
                      }}
                    >
                      <span
                        style={{
                          Width: "25px",
                          padding: "2px 37px",
                          backgroundColor: "yellow",
                          borderTopLeftRadius: "16px",
                          borderBottomLeftRadius: "16px",
                        }}
                      ></span>
                    </div>
                    <div className="difficultyTitle">High</div>
                  </div>
                  <div>
                    <Button
                      type="primary"
                      className="left"
                      shape="round"
                      style={{
                        width: "100%"
                      }}
                    >
                      Participate
                    </Button>
                  </div>
                </div>
              </div>
              <div className="competition" style={{marginTop:"40px"}}>
                <div className="left">
                  <div className="image">
                    <img src={InnovahCup} alt="Innovah Cup" />
                  </div>
                  <div className="information">
                    <div className="title">Innovah Cup</div>
                    <div className="description">
                    Innovah Cup is an annual competition sponsored and hosted by Innovah Corp. which brings together student developers worldwide to help resolve some of the world's toughest challenges. 
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="difficultyLevel">
                    <div className="difficultyTitle">Low</div>
                    <div
                      style={{
                        width: "150px",
                        border: "1px solid var(--textbox-border)",
                        borderRadius: "16px",
                      }}
                    >
                      <span
                        style={{
                          Width: "25px",
                          padding: "4px 75px",
                          backgroundColor: "red",
                          borderRadius: "16px"
                        }}
                      ></span>
                    </div>
                    <div className="difficultyTitle">High</div>
                  </div>
                  <div>
                    <Button
                      type="primary"
                      className="left"
                      shape="round"
                      style={{
                        width: "100%"
                      }}
                    >
                      Participate
                    </Button>
                  </div>
                </div>
              </div>
              <div className="competition" style={{marginTop:"40px"}}>
                <div className="left">
                  <div className="image">
                    <img src={defend} alt="Proposal Defence" />
                  </div>
                  <div className="information">
                    <div className="title">Proposal Defence</div>
                    <div className="description">
                    The competition aims to assure that the plan candidate has proposed for a product  is complete and provide value to the industry. 
                    Candidates will work closely on this proposal to ensure that they present a unique product. The winners of this competition will get direct mentorship from team Innovah</div>
                  </div>
                </div>
                <div className="right">
                  <div className="difficultyLevel">
                    <div className="difficultyTitle">Low</div>
                    <div
                      style={{
                        width: "150px",
                        border: "1px solid var(--textbox-border)",
                        borderRadius: "16px",
                      }}
                    >
                      <span
                        style={{
                          Width: "25px",
                          padding: "4px 30px",
                          backgroundColor: "green",
                          borderTopLeftRadius: "16px",
                          borderBottomLeftRadius: "16px"
                        }}
                      ></span>
                    </div>
                    <div className="difficultyTitle">High</div>
                  </div>
                  <div>
                    <Button
                      type="primary"
                      className="left"
                      shape="round"
                      style={{
                        width: "100%"
                      }}
                    >
                      Participate
                    </Button>
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

export default CompetitionPage;
