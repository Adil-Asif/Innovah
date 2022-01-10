import React from "react";
import "./ConnectionsPage.style.scss";
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
const ConnectionsPage = () =>{
    return (
        <div>
            <div className="Viewprofileblock">
                <div className="profile1">
                    <div className="profile1greyblock">

                    </div>
                    <p className="profile1name">Name: Bob</p>
                    <p className="profile1email">Email: Bob@gmail.com</p>
                    <p className="profile1industry">Industry: Artificial Intelligience</p>
                    <Button type="primary" shape="round" className="viewprofilebtn">
                        View Profile
                    </Button>
                </div>
                <div className="profile2">
                    <div className="profile2greyblock">

                    </div>
                    <p className="profile2name">Name: Lacy</p>
                    <p className="profile2email">Email: Lacy@gmail.com</p>
                    <p className="profile2industry">Industry: Artificial Intelligience</p>
                    <Button type="primary" shape="round" className="viewprofilebtn">
                        View Profile
                    </Button>
                </div>
                <div className="profile3">
                    <div className="profile3greyblock">

                    </div>
                    <p className="profile3name">Name: Gracy</p>
                    <p className="profile3email">Email: Gracy@gmail.com</p>
                    <p className="profile3industry">Industry: Deep Learning</p>
                    <Button type="primary" shape="round" className="viewprofile3btn">
                        View Profile
                    </Button>
                </div>
                <div className="profile4">
                    <div className="profile4greyblock">

                    </div>
                    <p className="profile4name">Name: Ali</p>
                    <p className="profile4email">Email: Ali@gmail.com</p>
                    <p className="profile4industry">Industry: Deep Learning</p>
                    <Button type="primary" shape="round" className="viewprofile3btn">
                        View Profile
                    </Button>
                </div>

            </div>
            <div className="addfriendblock">
                <p className="heading"><strong>People You May Know</strong></p>
                <hr className="horizontalrow"></hr>
                <div className="profile1">
                    <div className="profile1greyblock">

                    </div>
                    <p className="profile1name">Name: Alex</p>
                    <p className="profile1email">Email: Alex@gmail.com</p>
                    <p className="profile1industry">Industry: Artificial Intelligience</p>
                    <Button type="primary" shape="round" className="addbtn">
                        Add Friend
                    </Button>
                </div>
                <div className="profile2">
                    <div className="profile2greyblock">

                    </div>
                    <p className="profile2name">Name: Fred</p>
                    <p className="profile2email">Email: Fred@gmail.com</p>
                    <p className="profile2industry">Industry: Artificial Intelligience</p>
                    <Button type="primary" shape="round" className="addbtn">
                        Add Friend
                    </Button>
                </div>
                <div className="profile3">
                    <div className="profile3greyblock">

                    </div>
                    <p className="profile3name">Name: Tracy</p>
                    <p className="profile3email">Email: Tracy@gmail.com</p>
                    <p className="profile3industry">Industry: Deep Learning</p>
                    <Button type="primary" shape="round" className="addbtn">
                        Add Friend
                    </Button>
                </div>
                <div className="profile4">
                    <div className="profile4greyblock">

                    </div>
                    <p className="profile4name">Name: Han</p>
                    <p className="profile4email">Email: Han@gmail.com</p>
                    <p className="profile4industry">Industry: Deep Learning</p>
                    <Button type="primary" shape="round" className="addbtn">
                        Add Friend
                    </Button>
                </div>


            </div>

        </div>

    )

}
export default ConnectionsPage;