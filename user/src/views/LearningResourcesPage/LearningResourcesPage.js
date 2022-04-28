import { React, useEffect, useState } from "react";
import "./LearningResourcesPage.scss";
import { storage } from "../../services/Firebase/Firebase";
import { Layout, Spin, Button, Modal, Form, Input, Upload } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import LearningResourcesItem from "../../components/LearningResource/LearningResource";
import LearningRescources from "../../assests/Images/LearningResources.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const { Content } = Layout;
const { TextArea } = Input;

const LearningResourcesPage = () => {
  let playlist = {
    playlistID: "",
    playlistTitle: "",
    playlistDescription: "",
    playlistImage: "",
    isSubmitted: false,
  };

  const userRole = "trainer";
  const [isModalVisible, setIsModalVisible] = useState(false);
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [playlistDetails, setPlaylistDetails] = useState(playlist);

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
    setIsModalVisible(false);
  }, [playlistDetails, form]);

  useEffect(() => {
    const handleFireBaseUpload = () => {
      console.log("start of upload");
      // async magic goes here...
      console.log(imageAsFile);
      if (imageAsFile === "") {
        console.error(
          `not an image, the image file is a ${typeof imageAsFile}`
        );
      }

      if (imageAsFile !== undefined) {
        const uploadTask = storage
          .ref(`/images/${imageAsFile.name}`)
          .put(imageAsFile);
        //initiates the firebase side uploading
        uploadTask.on(
          "state_changed",
          (snapShot) => {
            //takes a snap shot of the process as it is happening
            console.log(snapShot);
          },
          (err) => {
            //catches the errors
            console.log(err);
          },
          () => {
            // gets the functions from storage refences the image storage in firebase by the children
            // gets the download url then sets the image from firebase as the value for the imgUrl key:
            storage
              .ref("images")
              .child(imageAsFile.name)
              .getDownloadURL()
              .then(async (fireBaseUrl) => {
                if (fireBaseUrl !== "") {
                  setImageAsUrl((prevObject) => ({
                    ...prevObject,
                    imgUrl: fireBaseUrl,
                  }));
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        );
      }
    };
    const funct = () => {
      if (imageAsFile !== "") {
        handleFireBaseUpload();
      }
    };
    funct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageAsFile]);

  useEffect(() => {
    if (imageAsUrl.imgUrl !== "") {
      playlist.playlistTitle = playlistDetails.playlistTitle;
      playlist.playlistDescription = playlistDetails.playlistDescription;
      playlist.playlistImage = imageAsUrl.imgUrl;
      playlist.isSubmitted = true;
      setPlaylistDetails(playlist);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageAsUrl]);

  useEffect(() => {
    if (playlistDetails.isSubmitted) {
      console.log(playlistDetails);
    }
  }, [playlistDetails]);

  const onSubmit = (values) => {
    playlist  = values;
    setPlaylistDetails(playlist);
    handleSubmission(values.playlistImage);
  };
  const handleSubmission = (playlistImage) => {
    setImageAsFile(playlistImage.file);
  };

  // var Response;
  // var [Response, setResponse] = useState(null);
  // useEffect(() => {
  //   const responseFunction = async () => {
  //     var response = await axios.get("http://localhost:5000/Learn/");
  //     setResponse(await response);
  //   };
  //   responseFunction();
  // }, []);
  // console.log(Response);
  // let getdata = async () => {
  //   let response = await axios.get("http://localhost:5000/Learn/");
  //   setResponse(await response);
  //   console.log(Response);
  // };
  // getdata();
  // console.log(Response);
  return (
    <div className="learningResourcesPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div>
                <div className="pageTitle">
                  <PageTitle title="Learning Resources" />
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
                        Add Playlist
                      </Button>
                    </div>
                    <Modal
                      centered
                      title="Add Playlist"
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
                      className="addPlaylistForm"
                    >
                      <div className="playlistForm">
                        <Form form={form}>
                          <Form.Item
                            name="playlistTitle"
                            label="Playlist Tile"
                            rules={[
                              {
                                required: true,
                                message: "Please enter playlist title",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Enter Playlist Title"
                              showCount
                              maxLength={50}
                            />
                          </Form.Item>
                          <Form.Item
                            name="playlistDescription"
                            label="Playlist Description"
                            rules={[
                              {
                                required: true,
                                message: "Please enter playlist description",
                              },
                            ]}
                          >
                            <TextArea showCount maxLength={3000} />
                          </Form.Item>
                          <Form.Item name="playlistImage">
                            <Upload.Dragger
                              listType="picture"
                              accept=".png,.jpg"
                              defaultFileList={""}
                              beforeUpload={(file) => {
                                console.log({ file });
                                return false;
                              }}
                              action={"localhost:3000/"}
                            >
                              <Button
                                icon={
                                  <FontAwesomeIcon
                                    icon={faUpload}
                                    className="icon"
                                  />
                                }
                              >
                                Upload Image
                              </Button>
                            </Upload.Dragger>
                          </Form.Item>
                        </Form>
                      </div>
                    </Modal>
                  </>
                ) : (
                  <></>
                )}
              </div>

              <img src={LearningRescources} alt="Learning Resources" />
            </div>
            {/* {Response ? ( */}
              <div className="resources">
                <LearningResourcesItem
                  title="Mastering Data Structures and Algorithms using C and C++"
                  // title={Response.data.title}
                  description="You may be new to Data Structure or you have already Studied and Implemented Data Structures but still you feel you need to learn more about Data Structure in detail so that it helps you solve challenging problems and used Data Structure efficiently. This 53 hours of course covers each topic in greater details, every topic is covered on Whiteboard which will improve your Problem Solving and Analytical Skills. Every Data Structure is discussed, analysed and implemented with a Practical line-by-line coding."
                  // description={Response.data.desc}
                  imageUrl={require("../../assests/Images/ResourcesImage/Algorithms.jpg")}
                  // imageUrl={Response.data.pic}
                  className="resourceItem"
                  isenrolled={false}
                  iscompleted = {false}
                  // isenrolled={Response.data.enrolledstatus > 0 ? true : false}
                  // iscompleted={Response.data.completedstatus > 0 ? true : false}
                />
                <LearningResourcesItem
                  title="React - The Complete Guide (incl Hooks, React Router, Redux)"
                  description="This course will teach you React.js in a practice-oriented way, using all the latest patterns and best practices you need. You will learn all the key fundamentals as well as advanced concepts and related topics to turn you into a React.js developer."
                  imageUrl={require("../../assests/Images/ResourcesImage/React.jpg")}
                  className="resourceItem"
                  isenrolled={true}
                  iscompleted={true}
                />
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

export default LearningResourcesPage;
