import React from "react"

import "./PageTitle.style.scss"

const PageTitle = (props) => {
    return(
        <div>
            <div id={'title'}>
                <div id={'heading1'}>
                    <strong>
                        {props.title}
                    </strong>

                </div>
                
            </div>

        </div>
    )
}
export default PageTitle;