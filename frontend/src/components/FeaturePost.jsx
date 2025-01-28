import React, { useEffect, useState } from "react";

const FeaturePost = () => {
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
 //  console.log(posts);
 return (
  <div className="grid grid-cols-1 gap-6 mt-10 ml-5">
   <p className="bg-blue-500 px-5 py-2 w-32 text-white rounded-full">
    Feature Post
   </p>
   {posts.map((post, idx) => (
    <div key={idx} className="flex">
     <img src={post.photo} alt="photo" className="w-28 rounded-xl" />
     <div className="ml-3">
      <p>Date</p>
      <h4 className="text-lg font-semibold">{post.title}</h4>
     </div>
    </div>
   ))}
  </div>
 );
};

export default FeaturePost;
