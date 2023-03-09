import { useEffect, useState } from "react";
import axios from "axios";
import  Sidebar  from './sidebar';
import  Accordion  from './Accordion';


const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts" 
  });
  const client1 = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/comments" 
  });
  
const App = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
       client.get('?_limit=10').then((response) => {
          setPosts(response.data);
       });
    }, []);
    useEffect(() => {
        client1.get('?_limit=10').then((response) => {
            setComments(response.data);
        });
     }, []);
 
    return (
        <div className="app" align="center">
            <Sidebar />
        <h2>All Posts 📫</h2>
        
        {posts.map((post) => {
           return (
               <>
              <div className="post-card" key={post.id}>
                 <h2 className="post-title">{post.title}</h2>
                 <p className="post-body">{post.body}</p>
              </div>
              {comments.map((comments)=>{return(
                <>
                </>
              );})}
              <Accordion>
             
        <div label='Alligator Mississippiensis'>
          <p>
            <strong>Common Name:</strong> American Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Texas to North Carolina, US
          </p>
          <p>
            <strong>Endangered Status:</strong> Currently Not Endangered
          </p>
        </div>
        <div label='Alligator Sinensis'>
          <p>
            <strong>Common Name:</strong> Chinese Alligator
          </p>
          <p>
            <strong>Distribution:</strong> Eastern China
          </p>
          <p>
            <strong>Endangered Status:</strong> Critically Endangered
          </p>
        </div> 

      </Accordion>
              </> 
           );
        })}
       
      </div>
    );
 };
 
 export default App;