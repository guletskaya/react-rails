import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Post from "./Post";
import styled from "styled-components";

const Home = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`

const Posts = () => {
    
    
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('/api/v1/posts.json')
        .then(resp => {
            setPosts(resp.data.data)
        })
        .catch(resp => console.log(resp))
    }, [posts.length])

    const grid = posts.map( item => {
        return(
        <Post
         key={item.attributes.title}
         attributes={item.attributes}
         id={item.id}
         />
         )
    })

    return (
    <Home>
        <div className="header"> 
        <h1>Posts</h1>
        </div>
        <Grid>
            {grid}
        </Grid>
    </Home>
    )
}

export default Posts