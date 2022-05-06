import { React, useState, useEffect } from "react";
import SignUpHeaderDetails from "../../components/SignupDetailsHeader/SignUpHeader";
import "./SignUp.scss";
import { storage } from "../../services/Firebase/Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";
// import Input from "../../components/Input/Input";
import { Form, Input, Button, Select, Upload, InputNumber, Anchor,Checkbox } from "antd";
import { Layout } from "antd";
const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;
const { Link } = Anchor;
const SignUp = () => {
  let registerAccount = {
    userName: "",
    city: "",
    gender: "",
    profileImage: "",
    ideaIndustry: "",
    mobileNumber: "",
    resume: "",
    role: "",
    isSubmit: false,
  };
  const [accountDetails, setAccountDetails] = useState(registerAccount);

  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

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
            // TODO: Reolve issue returns url on second submit look for solution. Issue with promise
            storage
              .ref("images")
              .child(imageAsFile.name)
              .getDownloadURL()
              .then(async (fireBaseUrl) => {
                if (fireBaseUrl !== "") {
                  // console.log(fireBaseUrl);
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

    if (imageAsFile !== "") {
      handleFireBaseUpload();
    }
  }, [imageAsFile]);

  useEffect(() => {
    if (imageAsUrl.imgUrl !== "") {
      registerAccount.userName = accountDetails.userName;
      registerAccount.city = accountDetails.city;
      registerAccount.gender = accountDetails.gender;
      registerAccount.ideaIndustry = accountDetails.ideaIndustry;
      registerAccount.mobileNumber = accountDetails.mobileNumber;
      registerAccount.resume = accountDetails.resume;
      registerAccount.role = accountDetails.role;
      registerAccount.isSubmit = true;
      registerAccount.profileImage = imageAsUrl.imgUrl;
      setAccountDetails(registerAccount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageAsUrl]);

  useEffect(() => {
    if (accountDetails.isSubmit) {
      console.log(accountDetails);
    }
  }, [accountDetails]);

  const onFinish = (values) => {
    registerAccount = values;
    console.log(values);
    setAccountDetails(registerAccount);
    handleSubmission(registerAccount.profileImage);
  };

  const handleSubmission = (profileImage) => {
    setImageAsFile(profileImage.file);
  };

  return (
    <div className="signUp">
      <Layout style={{ minHeight: "100vh" }}>
        <SignUpHeaderDetails />
        <Layout className="site-layout" data-theme="dark">
          <Content style={{ margin: "0 16px" }}>
            <div className="main-container">
              <div className="details-heading">
                Please Provide the Following Informartion
              </div>

              <div className="getting-input-container">
                <Form layout="horizontal" onFinish={onFinish}>
                  <Form.Item name="userName" label="User name" required>
                    <Input placeholder="Enter User name" required />
                  </Form.Item>
                  <Form.Item required name="city" label="City">
                    <Input placeholder="Enter City" required />
                  </Form.Item>
                  <Form.Item required name="mobileNumber" label="Mobile Number">
                    <InputNumber placeholder="Enter Mobile Number" required />
                  </Form.Item>
                  <Form.Item label="Gender" name="gender" required>
                    <Select
                      allowClear
                      placeholder="Select your gender"
                      required
                    >
                      <Option value="Male" label="Male">
                        Male
                      </Option>
                      <Option value="demo" label="Female">
                        Female
                      </Option>
                      <Option value="Prefer not say" label="Prefer not say">
                        Prefer not say
                      </Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Industry" name="ideaIndustry" required>
                    <Select
                      required
                      allowClear
                      placeholder="Please select the relevant industry of your expertise"
                    >
                      <Option value=" Technology" label="Technology">
                        Technology
                      </Option>
                      <Option value="Health" label="Health">
                        Health
                      </Option>
                      <Option value="Environment" label="Environment">
                        Environment
                      </Option>
                      <Option value="Construction" label="Construction">
                        Construction
                      </Option>
                      <Option value="Tourism" label="Tourism">
                        Tourism
                      </Option>
                      <Option value="Food" label="Food">
                        Food
                      </Option>
                      <Option value="Other" label="Other">
                        Other
                      </Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Role" name="role" required>
                    <Select allowClear placeholder="Select your role" required>
                      <Option value="Trainer" label="Trainer">
                        Trainer
                      </Option>
                      <Option value="Investor" label="Investor">
                        Investor
                      </Option>
                      <Option value="Administrator" label="Administrator">
                        Administrator
                      </Option>
                      <Option value="Mentor" label="Mentor">
                        Mentor
                      </Option>
                      <Option value="Jury" label="Jury">
                        Jury
                      </Option>
                      <Option value="Innovator" label="Innovator">
                        Innovator
                      </Option>
                    </Select>
                  </Form.Item>
                  <Form.Item required label="Resume" name="resume">
                    <TextArea
                      placeholder="Enter your relevant experince in the market in accordance to your role"
                      required
                    />
                  </Form.Item>
                  <Form.Item label="Attach Image" name="profileImage" required>
                    <Upload.Dragger
                      required
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
                          <FontAwesomeIcon icon={faUpload} className="icon" />
                        }
                      >
                        Upload Image
                      </Button>
                    </Upload.Dragger>
                  </Form.Item>

                  <div className="form-instruction">
                    <Form.Item>
                    <Checkbox style={{marginRight:"10px"}} required/>
                      Team Innovah has the right to decline your Account
                      Creation Request If your details do not meet our criteria.{" "}
                      <br />
                      Do you accept the
                      <Anchor affix={false} style={{ display: "inline-block" }}>
                        <Link
                          href="#components-anchor-demo-basic"
                          title="Terms and Conditions"
                        />
                      </Anchor>
                      ?
                    </Form.Item>
                  </div>
                  <Form.Item>
                    <div className="buttons">
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default SignUp;
