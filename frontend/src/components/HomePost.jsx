import React, { useState, useEffect } from "react";

const HomePost = () => {
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

 return (
  <div>
   <p>{posts.length}</p>
  </div>
 );
};

export default HomePost;
