import { useEffect, useState } from "react";
import axios from "axios";
import  Sidebar  from './sidebar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/photos" 
  });
  
const App = () => {
    const [product, setProduct] = useState([]);
 
    useEffect(() => {
       client.get('?_limit=10').then((response) => {
        setProduct(response.data);
       });
    }, []);
 
    return (
        <div className="app">
            <Sidebar />
        <h1 align="center">Product Cart</h1>
        
        {product.map((post) => {
           return (
               <>
              <div className="post-card" key={post.id} align="center">
                 <h2 className="post-title">{post.title}</h2>
                 {/* <img src={post.url} alt="..." height={200} width={300}></img> */}
                 <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
           
            <ImageListItem key={post.id}>
          <img
            src={`${post.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${post.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={post.thumbnailUrl}
            loading="lazy"
          />
        </ImageListItem>
      
    </ImageList>
              </div>
             
              </> 
           );
        })}
       
      </div>
    );
 };
 
 export default App;