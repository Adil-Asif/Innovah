import React from "react";
import "./PlaylistPage.scss";
import { storage } from "../../services/Firebase/Firebase";
import { Layout, Spin, Button, Modal, Form, Input, Upload } from "antd";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import playlist from "../../assests/Images/Playlist.svg";
import playlistItem from "../../components/Playlist/PlaylistItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
const { Content } = Layout;
const { TextArea } = Input;

const PLayListPage = () => {
  let video = {
    videoID: "",
    videoTitle: "",
    videoDescription: "",
    videoiframe: "",
    iscompleted: false,
    isSubmitted: false,
  };

  const userRole = "trainer";
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoDetails, setvideoDetails] = useState(video);

  const [form] = Form.useForm();

  useEffect(() => {
    if (videoDetails.isSubmitted) {
      console.log(videoDetails);
    }
  }, [videoDetails]);

  const onSubmit = (values) => {
    video = values;
    setIsModalVisible(false);
    video.isSubmitted = true;
    setvideoDetails(video);
  };

  var [Response, setResponse] = useState(null);
  useEffect(() => {
    const responseFunction = async () => {
      var response = await axios.get("http://localhost:5000/Learn/video");
      setResponse(await response);
    };
    responseFunction();
  }, []);

  return (
    <div className="playListPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              {/* {Response?*/}
              <div>
                <div className="pageTitle">
                  <PageTitle title="abc" />
                </div>
                {userRole === "trainer" ? (
                  <>
                    <div>
                      {" "}
                      <Button
                        type="primary"
                        className="left"
                        style={{ marginRight: "4%", borderRadius: "8px" }}
                        onClick={() => {
                          setIsModalVisible(true);
                        }}
                      >
                        Add Video
                      </Button>
                    </div>
                    <Modal
                      centered
                      title="Add Video"
                      visible={isModalVisible}
                      okText="Submit"
                      cancelText="Cancel"
                      onCancel={() => {
                        setIsModalVisible(false);
                      }}
                      onOk={() => {
                        form
                          .validateFields()
                          .then((values) => {
                            form.resetFields();
                            onSubmit(values);
                          })
                          .catch((info) => {
                            console.log("Validate Failed:", info);
                          });
                      }}
                      className="addVideoForm"
                    >
                      <div className="videoForm">
                        <Form form={form}>
                          <div>
                            <h3>Instructions</h3>
                            <ul>
                              <li>Video Title</li>
                              <li>Brief description about the video</li>
                              <li>Upload the video on youtube</li>
                              <li>
                                Submit the iframe pf the video in this form
                              </li>
                              <li>
                                Monthly remuneration till project completion
                              </li>
                            </ul>
                          </div>
                          <Form.Item
                            name="videoTitle"
                            label="Video Tile"
                            rules={[
                              {
                                required: true,
                                message: "Please enter video title",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Enter Video Title"
                              showCount
                              maxLength={50}
                            />
                          </Form.Item>
                          <Form.Item
                            name="videoDescription"
                            label="Video Description"
                            rules={[
                              {
                                required: true,
                                message: "Please enter video description",
                              },
                            ]}
                          >
                            <TextArea showCount maxLength={3000} />
                          </Form.Item>
                          <Form.Item
                            name="videoiframe"
                            label="Video iframe"
                            rules={[
                              {
                                required: true,
                                message: "Please enter video iframe",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Enter Video iframe"
                              showCount
                              maxLength={50}
                            />
                          </Form.Item>
                        </Form>
                      </div>
                    </Modal>
                  </>
                ) : (
                  <></>
                )}
              </div>
              {/* :<Spin/>} */}
              <img src={playlist} alt="video" />
            </div>
            {Response ? (
              <div className="lectures">
                <div className="lectureItem">
                  <playlistItem
                    title={Response.data.title}
                    description={Response.data.desc}
                    className="lectureItem"
                    iscompleted={Response.data.status > 0 ? true : false}
                  />
                </div>
                <hr />
                <playlistItem
                  title="Characteristics of Algorithm"
                  description=" Algorithms are very important to the way computers process information, because a computer program is basically an algorithm that tells computer what specific tasks to perform in what specific order to accomplish a specific task. The same problem can be solved with different methods. So, for solving the same problem, different algorithms can be designed. In these algorithms, number of steps, time and efforts may vary more or less."
                  className="lectureItem"
                  iscompleted={false}
                />
              </div>
            ) : (
              <></>
            )}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default PLayListPage;
