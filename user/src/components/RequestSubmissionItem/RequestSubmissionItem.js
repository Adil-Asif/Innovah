import { React,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RequestSubmissionItem.scss";
import { List, Avatar, Button, message } from "antd";

const RequestSubmissionItem = () => {
  let navigate = useNavigate();
  
  const [mySubmissions, setMySubmissions] = useState([])
  
useEffect(() => {
  
fetchingAllSubmissions()

}, [])



  const fetchingAllSubmissions = async ()=>{
let response = await fetch(`http://localhost:5000/requests/getallyoursubmissions`)
setMySubmissions(await response.json())  
console.log(mySubmissions)

}
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

  const info = async(requestedby,submittedby,requestid) => {
    //data[id].isHired = true;
    message.success("Hired! Details Shared via Email");
    let response = await fetch(
      `http://localhost:5000/requests/sendinghiringmail`,
      {
        // Adding method type
        method: "POST",
    
        // Adding body or contents to send
        body: JSON.stringify(
          {requestedby,submittedby,requestid}
         
        ),
    
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    response = await response.json()
    console.log(response)


    moveToMyRequests();
  };
  return (
    <div className="requestSubmissionItemLayout">
      <div>
        <List
          itemLayout="horizontal"
          dataSource={mySubmissions}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={item.requesttitle}
                description={item.proposal_content}
              />
              <Button
                type="primary"
                shape="round"
                onClick={() => info(item.userid,item.submitted_by,item.submission_id)}
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
