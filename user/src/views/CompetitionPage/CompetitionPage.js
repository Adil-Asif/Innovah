import React from "react";
import "./CompetitionPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout, Button,Spin } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Competition from "../../assests/Images/competition.svg";
import InnovahCup from "../../assests/Images/InnovahCup.svg";
import hackathon from "../../assests/Images/hackathon.svg";
import defend from "../../assests/Images/defend.svg";
import { useState,useEffect } from "react";
const { Content } = Layout;

const CompetitionPage = () => {

  // const convertBlobToBase64 = async (blob) => { // blob data
  //   return await blobToBase64(blob);
  // }
  
  // const blobToBase64 = blob => new Promise((resolve, reject) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(blob);
  //   reader.onload = () => resolve(reader.result);
  //   reader.onerror = error => reject(error);
  // })


  // const [competitions, setCompetitions] = useState("")
  // useEffect(() => {

  //   const getCompetitions=async()=>{
  //  let response = await fetch("http://localhost:5000/competitions/")
  //  response =await response.json()
  //  console.log(response)
  // setCompetitions(response)
  
  

  // //  console.log(await convertBlobToBase64((response[0].startdate.data)))

  //   }
  //   getCompetitions()
    
  // }, [])
  
  return (
    <div className="competitionPage">
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
            {/* {(competitions) ? */}
            <div className="ideaItemsDashboard">
              <div className="competition">
                <div className="left">
                  <div className="image">
                    <img src={hackathon} alt="Hackathon" />
                  </div>
                  <div className="information">
                    {/* <div className="title">{competitions[0].competitionname}</div> */}
                    <div className="description">
                    {/* {competitions[0].description} */}
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
                    {/* <div className="title">{competitions[1].competitionname}</div> */}
                    <div className="description">
                    {/* {competitions[1].description} */}
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
                    {/* <div className="title">{competitions[2].competitionname}</div> */}
                    <div className="description">
                    {/* {competitions[2].description} */}
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
            </div> : <Spin size="large"/>}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default CompetitionPage;
