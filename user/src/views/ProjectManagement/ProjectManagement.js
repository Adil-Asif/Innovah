import React from "react";
import "./ProjectManagement.scss";
import { storage } from "../../services/Firebase/Firebase";
import { useEffect, useState } from "react";
import { Layout, Spin, Button, Modal, Form, Input, Upload, Select } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProjectDashboard from "../../assests/Images/ProjectDashboard.svg";
import PageTitle from "../../components/PageTitle/PageTitle";
import AI_image from "./../../assests/Images/ProjectManagement/AI_project.jpg";
import Stream from "./../../assests/Images/IdeasImage/Stream.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const ProjectManagement = () => {
  const role = "admin";
  let project = {
    projectID: "",
    projectTitle: "",
    projectDescription: "",
    projectImage: "",
    projectMembers: "",
    isSubmitted: false,
  };
  const email = [
    "adil.asif@gmail.com",
    "k180123@nu.edu.pk",
    "k181117@nu.edu.pk",
    "k180376@nu.edu.pk",
    "hasaan.malik@nu.edu.pk",
    "syedabdurraffay@gmail.com",
  ];
  const userRole = "admin";
  const [options, setOptions] = useState(email);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [projectDetails, setProjectDetails] = useState(project);
  const [projectResponse, setProjectResponse] = useState();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
    setIsModalVisible(false);
  }, [projectDetails, form]);

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
      project.projectTitle = projectDetails.projectTitle;
      project.projectDescription = projectDetails.projectDescription;
      project.projectMembers = projectDetails.projectMembers;
      project.projectImage = imageAsUrl.imgUrl;
      project.isSubmitted = true;
      setProjectDetails(project);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageAsUrl]);

  useEffect(() => {
    if (projectDetails.isSubmitted) {
      console.log(projectDetails);
    }
  }, [projectDetails]);

  const onSubmit = (values) => {
    project = values;
    setProjectDetails(project);
    handleSubmission(values.projectImage);
  };
  const handleSubmission = (projectImage) => {
    setImageAsFile(projectImage.file);
  };

  const navigationToSpecificProject = (projectnumber = 1) => {
    navigate(`/projectmanagement/${projectnumber}`);
  };

  let getprojects = async () => {
    let response = await fetch("http://localhost:5000/generalproject/1");
    setProjectResponse(await response.json());
  };
  console.log(projectResponse);
  useEffect(() => {
    getprojects();
  }, []);

  return (
    <div className="projectManagementPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar PageKey="9" />
        <Layout className="site-layout" data-theme="dark">
          <Header />

          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              {role !== "admin" ? (
                <>
                  <div className="Project-heading">
                    <PageTitle title="Your Projects" />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="Project-heading">
                      <PageTitle title="Projects" />
                    </div>
                    <div>
                      <Button
                        type="primary"
                        className="left"
                        style={{ marginRight: "4%", borderRadius: "8px" }}
                        onClick={() => {
                          setIsModalVisible(true);
                        }}
                      >
                        Add Project
                      </Button>
                    </div>
                    <Modal
                      centered
                      title="Add Project"
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
                      className="addProjectForm"
                    >
                      <div className="projectForm">
                        <Form form={form}>
                          <Form.Item
                            name="projectTitle"
                            label="Project Tile"
                            rules={[
                              {
                                required: true,
                                message: "Please enter project title",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Enter Project Title"
                              showCount
                              maxLength={50}
                            />
                          </Form.Item>
                          <Form.Item
                            name="projectDescription"
                            label="Project Description"
                            rules={[
                              {
                                required: true,
                                message: "Please enter project description",
                              },
                            ]}
                          >
                            <TextArea showCount maxLength={3000} />
                          </Form.Item>
                          <Form.Item name="projectMembers" label="Project Tile">
                            <Select
                              mode="multiple"
                              style={{ width: "100%" }}
                              placeholder="select Members"
                              optionLabelProp="label"
                            >
                              {/* TODO: Registered Users Names and Email Addresses required here those who are not admin */}
                              {email.map((emailId) => (
                                <Option value={emailId} label={emailId}>
                                  <div>Name: {emailId}</div>
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>
                          <Form.Item name="projectImage">
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
                  </div>
                </>
              )}

              <img src={ProjectDashboard} alt="Project Dashboard" />
            </div>

            <div className="yourProjects">
              {projectResponse ? (
                projectResponse.map((project) => (
                  <>
                    <div
                      key={project.projectid}
                      onClick={() => {
                        navigationToSpecificProject(project.projectid);
                      }}
                      className="projects"
                    >
                      <div className="projectHeader">
                        <img src={Stream} alt="" />
                        <div className="name-description">
                          <span className="project-name">
                            {" "}
                            {project.projecttitles}{" "}
                          </span>{" "}
                          <br /> {/* {" "} */}
                          {project.description.length > 10 ? (
                            <div className="project-description">
                              {project.description.substring(0, 25)}{" "}
                            </div>
                          ) : (
                            <div className="project-description">
                              {project.description}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="members-list">
                        <div className="member">
                          <img src={AI_image} alt="" />
                        </div>
                        <div className="member">
                          <img src={AI_image} alt="" />
                        </div>
                        <div className="member">
                          <img src={AI_image} alt="" />
                        </div>
                        <div className="member">
                          <img src={AI_image} alt="" />
                        </div>
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <Spin size="large" />
              )}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default ProjectManagement;
