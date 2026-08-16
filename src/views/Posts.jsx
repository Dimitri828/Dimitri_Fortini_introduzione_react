import { useEffect, useState } from "react";
import { Link } from "react-router";
import Detail from "./Detail";

export default function Posts() {
  const [posts, setPosts] = useState();
  const getPosts = async () => {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await promise.json();
    setPosts(json);
  };
  useEffect(()=>{
      getPosts();

  },[])
  return (
    <>
      <h1 className="text-center margin-top-120"> POSTS</h1>
      <ul className="">
        {posts &&
          posts.map((post) => {
            return <li key={post.id}>{post.body.slice(0,20)+"..."}<Link to={`/posts/${post.id}`}>DETAIL</Link></li>;
          })}
      </ul>
    </>
  );
}


Posts.Detail= Detail