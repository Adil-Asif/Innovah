import React, { useState, useEffect } from "react";
import "./WorkItems.scss";
import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import AI_image from "./../../assests/Images/ProjectManagement/AI_project.jpg";
import { Modal, Button, Spin, Form, Input, Select } from "antd";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCheck } from "@fortawesome/free-solid-svg-icons";
const { Content } = Layout;
const { Option } = Select;

const WorkItems = () => {
  const [taskID, setTaskID] = useState("");
  const [isEdit, setISEdit] = useState(false);
  const [entrySucess, setEntrySucess] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [fetchBoardItems, setFetchBoardItems] = useState([]);
  const [taskStatus, setTaskStatus] = useState("");
  const [form] = Form.useForm();

  let params = useParams();
  console.log(params.projectid);
  const fetchBoards = async () => {
    let response = await fetch(
      `http://localhost:5000/projectboards/getboard/${params.projectid}`
    );
    setFetchBoardItems(await response.json());
    setFetchBoardItems((fetchBoardItems) => {
      return fetchBoardItems.sort((a, b) => {
        return a.boardid - b.boardid;
      });
    });
  };

  const updateStatus = (values) => {
    console.log(values);
    setTaskStatus(values.taskstatus);
    setISEdit(false);
  };

  useEffect(() => {
    fetchBoards();
  }, [entrySucess]);

  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  useEffect(() => {
    console.log(taskStatus);
  }, [taskStatus]);

  const onFinish = (values) => {
    fetch(
      `http://localhost:5000/projectboards/${params.projectid}/addnewtask`,
      {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
          ...values,
          projectid: params.projectid,
        }),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    setEntrySucess(true);
    console.log("Success:", values);
    setIsModalVisible2(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="workItemsPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar PageKey="9" />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div>
                <div className="Project-heading">
                  <PageTitle title="Tasks Status" />
                </div>
                <div>
                  <Button
                    type="primary"
                    style={{ marginRight: "4%", borderRadius: "8px" }}
                    onClick={showModal2}
                    className="newtaskbtn"
                  >
                    + New Task
                  </Button>
                </div>
              </div>
            </div>
            <Modal
              title="Add New Task"
              visible={isModalVisible2}
              onOk={handleOk2}
              onCancel={handleCancel2}
            >
              <Form
                name="basic"
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Task Name"
                  name="taskname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Task_Name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Type Of Task"
                  name="tasktype"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Task Type!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Assigned to"
                  name="assignedto"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Task assignee!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={"taskdescription"}
                  required
                  label="Description"
                >
                  <Input.TextArea />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form>
            </Modal>

            <div className="total-work-items">
              <div className="work-items">
                <img src={AI_image} alt="" />
                <span className="work-high-level"> Tasks created</span>
              </div>
              <div className="work-items">
                <img src={AI_image} alt="" />
                <span className="work-high-level"> Tasks To Do</span>
              </div>
              <div className="work-items">
                <img src={AI_image} alt="" />
                <span className="work-high-level"> Tasks Doing</span>
              </div>
              <div className="work-items">
                <img src={AI_image} alt="" />
                <span className="work-high-level"> Tasks Completed</span>
              </div>
            </div>
            <div className="specific-task-heading">
              <div className="ID-task"> ID</div>
              <div className="task-name"> Task Name</div>
              <div className="type"> Type</div>
              <div className="assigned-to"> Assigned To</div>
              <div className="status"> Status</div>
              <div className="edit"> Edit</div>
            </div>

            {fetchBoardItems ? (
              fetchBoardItems.map((board, index) => (
                <div className="specific-task-description">
                  <div className="ID-task"> {board.boardid}</div>
                  <div className="task-name">{board.taskname}</div>
                  <div className="type"> {board.tasktype}</div>
                  <div className="assigned-to"> {board.assignedto}</div>
                  {!isEdit ? (
                    <>
                      <div className="status">{board.taskstatus}</div>
                      <div className="editButton">
                        <Button
                          type="primary"
                          shape="round"
                          className="editbtn"
                          onClick={() => {
                            setISEdit(true);
                            setTaskID(board.boardid);
                          }}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                      </div>
                    </>
                  ) : taskID === board.boardid ? (
                    <>
                      {/* TODO: Handle form and rendering in map */}

                      <Form
                        onFinish={updateStatus}
                        onFinishFailed={onFinishFailed}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="status">
                          <Form.Item
                            name="taskstatus"
                            style={{ marginBottom: "0px" }}
                            className ="update"
                          >
                            <Select
                              placeholder="Select task status"
                              defaultValue={board.taskstatus}
                            >
                              <Option value="created">Created</Option>
                              <Option value="todo">To Do</Option>
                              <Option value="doing">Doing</Option>
                              <Option value="completed">Completed</Option>
                            </Select>
                          </Form.Item>
                        </div>
                        <div
                          className="editButton"
                          style={{ marginLeft: "95px"}}
                        >
                          <Form.Item style={{ marginBottom: "0px" }}>
                            <Button
                              type="primary"
                              shape="round"
                              className="editbtn"
                              htmlType="submit"
                            >
                              <FontAwesomeIcon icon={faCheck} />
                            </Button>
                          </Form.Item>
                        </div>
                      </Form>
                    </>
                  ) : (
                    <>
                      <div className="status">{board.taskstatus}</div>
                      <div className="editButton">
                        <Button
                          type="primary"
                          shape="round"
                          className="editbtn"
                          onClick={() => {
                            setISEdit(true);
                            setTaskID(board.boardid);
                          }}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              ))
            ) : (
              <Spin size="middle" />
            )}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default WorkItems;
