import React from "react";
import "./InventoryManagement.style.scss";
import { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import AI_image from "./../../assests/Images/ProjectManagement/AI_project.jpg"
import { Modal, Button } from 'antd';
import { Form, Input } from 'antd';
const { Content } = Layout;

const InventoryManagement = () => {
  








    const [isModalVisible2, setIsModalVisible2] = useState(false);

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
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (

        <div>
            <Layout style={{ minHeight: "100vh" }}>
                <Sidebar PageKey="9" />
                <Layout className="site-layout" data-theme="dark">
                    <Header />
                    <Content style={{ margin: '0 16px' }}>
                        <div className="Project-heading">
                            <PageTitle title="Inventory Management" />
                            <Button type="primary" danger >
                                Delete
                            </Button>
                            <Button type="primary" onClick={showModal2}>
                                + New Item
                            </Button>
                        </div>

                        <Modal title="Add New Resource  " visible={isModalVisible2} onOk={handleOk2} onCancel={handleCancel2}>
                            <Form
                                name="basic"
                                labelCol={{
                                    span: 8,
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
                                    label="Item Name"
                                    name="Item_Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your ITem Name!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Qunatity Of Resource"
                                    name="Resource_Quantity"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Resource Quantity!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Value of Resource"
                                    name="Resource Value"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Enter Task assignee!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Unit of Resource"
                                    name="Resource_unit"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Enter Units of Resource!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item name={['Desc', 'Description of Resource']} required label="Description">
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
                                <span className="work-high-level"> Items Added</span>
                            </div>
                            <div className="work-items">
                                <img src={AI_image} alt="" />
                                <span className="work-high-level"> Items Not Used</span>
                            </div>
                            <div className="work-items">
                                <img src={AI_image} alt="" />
                                <span className="work-high-level"> Items In Use</span>
                            </div>
                            <div className="work-items">
                                <img src={AI_image} alt="" />
                                <span className="work-high-level"> Items Utilised</span>
                            </div>
                        </div>
                        <div className="work-Items-Heading">
                            <ul>
                                <li id="element-1">All Items</li>
                                <li>Not Used</li>
                                <li>In Use</li>
                                <li>Resource Used</li>

                            </ul>

                        </div>
                        <div className="specific-task-heading">
                            <div className="ID-task"> ID</div>
                            <div className="task-name"> Resource Name</div>
                            <div className="type"> Quantity</div>
                            <div className="assigned-to"> Value</div>
                            <div className="added-by"> Added by</div>
                            <div className="status"> status</div>
                        </div>
                        <div className="specific-task-description">
                        <div className="ID-task"> 1</div>
                            <div className="task-name"> Cash</div>
                            <div className="type"> 1</div>
                            <div className="assigned-to"> 2000000</div>
                            <div className="added-by"> hasaan</div>
                            <div className="status"> utilised</div>
                        </div>

                        <div className="specific-task-description">
                        <div className="ID-task"> 1</div>
                            <div className="task-name"> Cash</div>
                            <div className="type"> 1</div>
                            <div className="assigned-to"> 2000000</div>
                            <div className="added-by"> hasaan</div>
                            <div className="status"> utilised</div>
                        </div>

                        <div className="specific-task-description">
                        <div className="ID-task"> 1</div>
                            <div className="task-name"> Cash</div>
                            <div className="type"> 1</div>
                            <div className="assigned-to"> 2000000</div>
                            <div className="added-by"> hasaan</div>
                            <div className="status"> utilised</div>
                        </div>
                      


                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        </div>
    );
};

export default InventoryManagement;
