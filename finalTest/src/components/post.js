import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MediaCard from './mediacard';
import Comments from './comments';
import  Sidebar  from './sidebar';

function Posts() {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    //const commenstToDisplay = '';
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
            setComments(res.data);
        })
    }, [posts, comments])
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
        setPosts(res.data);
    })
    return (
        <div className="container">
          <div className="jumbotron-div col s12">  
            <ul className="collection">  
            <Sidebar />
              {posts.map(post => (
                <div>
                    <li key={post.id}
                    className="collection-item left-align red lighten-3" >                                <MediaCard post={post} />                            </li>                            <div className="jumbotron-div col s12">                                <ul className="collection">                                    {
                    <Comments post={comments} postId={post.id} />}
                     </ul> 
                     </div>
                     </div>
                      ))}
                </ul>
                </div> 
                </div>
                    )}
export default Posts

