import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostDetails = () => {
 const params = useParams();

 console.log(params.id);

 useEffect(() => {
  fetch(`http://localhost:5000/posts/${params.id}`)
   .then((res) => res.json())
   .then((data) => console.log(data));
 }, []);

 return (
  <div className="my-20">
   <h1 className="text-center text-4xl font-semibold w-1/2 mx-auto leading-tight">
    Tips & Procedure To Apply Luxury Beauty Cosmetic Cream
   </h1>
   <div className="mx-auto my-5">
    <p className="text-center">Category</p>
    <p className="text-center">01/02/25</p>
   </div>
   <img
    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt={`${postMessage.title}`}
    width="100%"
    height="600px"
    className="w-[80%] h-full mx-auto"
   />
   <p className="max-w-4xl mx-auto my-3">
    "But I must explain to you how all this mistaken idea of denouncing pleasure
    and praising pain was born and I will give you a complete account of the
    system, and expound the actual teachings of the great explorer of the truth,
    the master-builder of human happiness. No one rejects, dislikes, or avoids
    pleasure itself, because it is pleasure, but because those who do not know
    how to pursue pleasure rationally encounter consequences that are extremely
    painful. Nor again is there anyone who loves or pursues or desires to obtain
    pain of itself, because it is pain, but because occasionally circumstances
    occur in which toil and pain can procure him some great pleasure. To take a
    trivial example, which of us ever undertakes laborious physical exercise,
    except to obtain some advantage from it? But who has any right to find fault
    with a man who chooses to enjoy a pleasure that has no annoying
    consequences, or one who avoids a pain that produces no resultant pleasure?"
   </p>
  </div>
 );
};

export default PostDetails;
