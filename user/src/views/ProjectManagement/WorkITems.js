import React,{useState,useEffect} from "react";
import "./WorkItems.scss";
import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import AI_image from "./../../assests/Images/ProjectManagement/AI_project.jpg";
import { Modal, Button,Spin } from "antd";
import { Form, Input, Checkbox } from "antd";
import {useParams} from 'react-router-dom'
const { Content } = Layout;

const WorkItems = () => {
  const [entrySucess,setEntrySucess]=useState(false)
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [fetchBoardItems, setFetchBoardItems] = useState([])
  let params = useParams()
  console.log(params.projectid)
  const fetchBoards = async()=>{
    let response = await fetch(`http://localhost:5000/projectboards/getboard/${params.projectid}`)
    setFetchBoardItems(await response.json())
    setFetchBoardItems ((fetchBoardItems)=>{
      return fetchBoardItems.sort((a,b)=>{ 
    
        return a.boardid - b.boardid})
    })
  }

  useEffect(() => {
    fetchBoards()
  
  }, [entrySucess])
 


  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  const onFinish = (values) => {
    fetch(`http://localhost:5000/projectboards/${params.projectid}/addnewtask`, {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
       ...values,
       projectid:params.projectid
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
setEntrySucess(true)
    console.log("Success:", values);
    setIsModalVisible2(false)
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
            <div className="Project-heading">
              <PageTitle title="Tasks Status" />
              <Button type="primary" danger>
                Delete
              </Button>
              <Button type="primary" onClick={showModal2}>
                + New Task
              </Button>
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
                  name={ "taskdescription"}
                  required
                  label="Description"
                >
                  <Input.TextArea />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 10,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
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
            <div className="work-Items-Heading">
              <ul>
                <li id="element-1">All Tasks</li>
                <li>To Do</li>
                <li>Doing</li>
                <li>Completed</li>
              </ul>
            </div>
            <div className="specific-task-heading">
              <div className="ID-task"> ID</div>
              <div className="task-name"> Task Name</div>
              <div className="type"> Type</div>
              <div className="assigned-to"> Assigned To</div>
              <div className="status"> Status</div>
            </div>
            { fetchBoardItems ?
            fetchBoardItems.map((board,index)=>(
            <div className="specific-task-description">
              <div className="ID-task"> {board.boardid}</div>
              <div className="task-name">{board.taskname}</div>
              <div className="type"> {board.tasktype}</div>
              <div className="assigned-to"> {board.assignedto}</div>
              <div className="status">{board.taskstatus}</div>
            </div>)) : <Spin size="middle"/>}
            
                     </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default WorkItems;
