import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function MediaCard(props) {
  const { post } = props;
  return (
    <Card sx={{ maxWidth: 1000 ,backgroundColor:"cyan"}}>    {" "}
      <CardMedia
        sx={{ height: 50 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title={post.name}
      /> 
       <CardContent> 
        <Typography gutterBottom variant="h5" component="div">
        {post.title}
        </Typography> 
        <Typography variant="body2" color="text.secondary"> 
        {post.body}
        </Typography>
        </CardContent> 
       
        </Card>  );
		}