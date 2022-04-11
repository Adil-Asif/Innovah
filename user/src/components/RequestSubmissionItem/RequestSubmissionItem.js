import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./RequestSubmissionItem.scss";
import { List, Avatar, Button, message } from "antd";

const RequestSubmissionItem = () => {
  let navigate = useNavigate();
  const moveToMyRequests = () => {
    navigate("/myrequests");
  };
  let data = [
    {
      id: 0,
      title: "Ant Design Title 1",
      isHired: false,
    },
    {
      id: 1,
      title: "Ant Design Title 2",
      isHired: false,
    },
    {
      id: 2,
      title: "Ant Design Title 3",
      isHired: false,
    },
    {
      id: 3,
      title: "Ant Design Title 4",
      isHired: false,
    },
  ];

  const info = (id) => {
    data[id].isHired = true;
    message.success("Hired! Details Shared via Email");
    moveToMyRequests();
  };
  return (
    <div className="requestSubmissionItemLayout">
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <Button
                type="primary"
                shape="round"
                onClick={() => info(item.id)}
              >
                Hire Me
              </Button>
            </List.Item>
          )}
        />
      </div>
      <div></div>
    </div>
  );
};
export default RequestSubmissionItem;
