import React, { useState, useEffect, Fragment } from "react";
import axios
 from "axios";
const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('/api/v1/users.json')
        .then(resp => {
            setUsers(resp.data.data)
        })
        .catch(resp => console.log(resp))
    }, [users.length])

    const list = users.map( item => {
        return(<li key={item.attributes.username}>{item.attributes.username}</li>)
    })

    return (
        <Fragment>
    <div>This is the Users#index view </div>
    <ul>{list}</ul>
    </Fragment>
    )
}

export default Users