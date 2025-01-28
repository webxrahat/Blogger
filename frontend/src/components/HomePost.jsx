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
  <div className="grid grid-cols-2 gap-6">
   {posts.map((post, indx) => (
    <div key={indx}>
     <img
      src={post.photo}
      alt={`${post.title}`}
      className="w-96 rounded-t-lg"
     />
     <p>{post.category}</p>
     <h2>{post.title}</h2>
    </div>
   ))}
  </div>
 );
};

export default HomePost;
