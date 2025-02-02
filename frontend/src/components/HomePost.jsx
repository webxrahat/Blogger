import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const HomePost = () => {
 const [posts, setPosts] = useState([]);
 useEffect(() => {
  fetch("http://localhost:5000/posts")
   .then((res) => {
    if (!res.ok) {
     throw new Error("Failed to fetch data");
    }
    return res.json();
   })
   .then((data) => setPosts(data))
   .catch((error) => console.error("Error fetching JSON:", error));
 }, []);
 //  console.log(posts);

 return (
  <div className="grid grid-cols-2 gap-10">
   {posts.map((post, indx) => (
    <div key={indx}>
     <img
      src={post.photo}
      alt={`${post.title}`}
      className="w-96 rounded-t-lg h-52"
     />
     <button className="font-semibold mt-2 underline">#{post.category}</button>
     <Link to={`/post/:${post.id}`}>
      <h2 className="font-semibold text-lg mt-2">{post.title}</h2>
     </Link>
    </div>
   ))}
  </div>
 );
};

export default HomePost;
