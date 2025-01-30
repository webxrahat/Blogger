import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostDetails = () => {
 //  const params = useParams();
 const [posts, setPosts] = useState([]);
 useEffect(() => {
  fetch("posts.json")
   .then((res) => {
    if (!res.ok) {
     throw new Error("Failed to fetch data");
    }
    return res.json();
   })
   .then((data) => setPosts(data))
   .catch((error) => console.error("Error fetching JSON:", error));
 }, []);

 console.log(posts);

 return <div>PostDetails</div>;
};

export default PostDetails;
