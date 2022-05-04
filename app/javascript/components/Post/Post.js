import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";

const Post = (props) => {
    const [post, setPost] = useState({})
    const [loaded, setLoaded] = useState(false)
    
    useEffect(()=>{
        const id = props.match.params.id
        const url = `/api/v1/posts/${id}`

        axios.get(url)
        .then( resp => {
            setPost(resp.data)
            setLoaded(true)
        })
        .catch( resp => console.log(resp))
    }, [])

    return (
        <div className="wrapper">
            <div className="column">
                {
                loaded &&
                <Header
                    attributes = {post.data.attributes}
                />
                }
            </div>
        </div>
    )
}

export default Post