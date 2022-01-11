import SignUpHeaderDetails from "../../components/SignupDetailsHeader/SignUpHeader";
import "./SignUp.style.scss";
import CustomFooter from "../../components/Footer/Footer";
import React, { useState } from 'react';
// import Input from "../../components/Input/Input";
import { Form, Input, Button,Select, Radio,Upload,message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { InfoCircleOutlined } from '@ant-design/icons';
const SignUp = ()=>{

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
  
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
      setRequiredMarkType(requiredMarkValue);
    };
    return(
        <>
     <SignUpHeaderDetails/>

     <div className="main-container">
         <div className="details-heading">
         Please Provide the Following Informartion
         </div>
<div className="getting-input-container">
<Form
      form={form}
      layout="horizontal"
      initialValues={{
        requiredMarkValue: requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      
      <Form.Item label="Uername" required >
         
        <div style={{marginLeft:"100px"}} className="setting-input-size">
        <Input placeholder="input placeholder" />
        </div>
       
      </Form.Item>
      <Form.Item required
        label="City"  
      >
          
        <div style={{marginLeft:"130px"}} className="setting-input-size">
        <Input placeholder="input placeholder" />
        </div>
      </Form.Item>
      <Form.Item required
        label="Mobile Number"  
      >
        <div style={{marginLeft:"55px"}} className="setting-input-size">
        <Input placeholder="input placeholder" />
        </div>
      </Form.Item>
      <Form.Item required
        label="Country"  
      >
        <div style={{marginLeft:"103px"}} className="setting-input-size">
        <Input placeholder="input placeholder" />
        </div>
      </Form.Item>
      
      <Form.Item label="Gender" required>
      <div style={{marginLeft:"106px"}} className="setting-input-size">
        
        
        <Select>
          <Select.Option value="demo">Male</Select.Option>
          <Select.Option value="demo">Female</Select.Option>
          <Select.Option value="demo">Prefer not say</Select.Option>
        </Select>
        </div>
      </Form.Item>
      <Form.Item label="Industry" required>
      <div style={{marginLeft:"100px"}} className="setting-input-size">
        
        <Select>
          <Select.Option value="demo">Machine Learning</Select.Option>
          <Select.Option value="demo">Web Development</Select.Option>
          <Select.Option value="demo">Freelancing</Select.Option>
          <Select.Option value="demo">Training</Select.Option>
        </Select>
     </div>
      </Form.Item>
      <Form.Item label="Role" required>
      <div style={{marginLeft:"121px"}} className="setting-input-size">
      
        <Select>
          <Select.Option value="demo">Trainer</Select.Option>
          <Select.Option value="demo">Investor</Select.Option>
          <Select.Option value="demo">administrator</Select.Option>
          <Select.Option value="demo">Mentor</Select.Option>
          <Select.Option value="demo">Innovator</Select.Option>
        </Select>
     </div>
      </Form.Item>
      <Form.Item required
        label="Resume"  
      >
         <div style={{marginLeft:"100px"}} className="setting-input-size">
        <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  </div>
              </Form.Item>
              <Form.Item required
        label="Profile Photo"  
      >
        <div style={{marginLeft:"67px"}} className="setting-input-size">
        <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  </div>
              </Form.Item>
              <div className="form-instruction">
              Team Innovah has the right to decline your Account Creation Request If your details do not meet our criteria. <br/> 
Do you accept the Terms and Conditions ?
</div>
      <Form.Item>
          <div className="buttons">
        <Button type="primary">I Accept</Button> 
        <Button>I Don't Accept</Button>
      
      </div>
      </Form.Item>
    </Form>


</div>
     </div>
     <div className="fixing-footer">
     <CustomFooter/>
     </div>
        </>
    )
}

export default SignUp;