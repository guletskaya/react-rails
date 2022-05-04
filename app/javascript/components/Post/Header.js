import React from "react";

const Header = (props) => {

const {title, description, user_id} = props.attributes

    return(
        <div className="wrapper">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>Created by: {user_id}</h3>
        </div>
    )
}

export default Header