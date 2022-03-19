import React, { useState } from "react";
import "./Modals_Sign.scss";
import { Modal, Button, Form,Checkbox,Input,Alert } from "antd";
// import Input from "../Input/Input";

const LoginModals = (props) => {
  console.log(props);
  let currentTitle = props.title +" to Innovah"
  const [isModalVisible, setIsModalVisible] = useState("");
  const [emailInput, setEmail] = useState(false);
  const [passwordInput, setPassword] = useState("");
  const [typeOfLogin,setTypeOfLogin] = useState(props.typeOfLogin)

  
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  const onFinish = (values) => {
    console.log('Success:', values);
    setIsModalVisible(false)
  };

  const onFinishFailed = (errorInfo) => {
    setIsModalVisible(false)

    console.log('Failed:', errorInfo);
  };

  const onFinishSignUp= (values) => {
    setIsModalVisible(false)

    if (values.password ===values.rePassword){
console.log("sucess")
    }
    else{
      onFinishFailed("Passwords donot match")
    }
    console.log('Success:', values);
  };
  const onFinishSignUpFailed= (errorInfo) => {
    console.log('Failed:', errorInfo);
   
  };


  return (
    <div className="signInLayout">

        <Button type="primary" onClick={() => setIsModalVisible(true)}>
        {props.title}
      </Button>

      {typeOfLogin ?
      <Modal
        title= {currentTitle}
        centered
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        {/* <Form
          name="basic"
          labelCol={{
            span: 4,
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
         
          label="Emai:"
            name="emailInput"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              type="email"
              id="email"
              label="Email Address"
              parentCallback={handleEmailInput}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input
              type="password"
              id="password"
              label="Password"
              //pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])"
              parentCallback={handlePasswordInput}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button id="Submit_button" type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        </Form> */}
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
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        
      </Modal> : <Modal
        title= {currentTitle}
        centered
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
       <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinishSignUp}
      onFinishFailed={onFinishSignUpFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Re-Enter Password"
        name="rePassword"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

     

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      
      </Modal> }

      
    </div>
  );
};

export default LoginModals;
