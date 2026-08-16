import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const getPost = async () => {
    const promise = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    const json = await promise.json();
    setPost(json);
    
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      {post && (
        <>
          <h1 className="margin-top-120">TITLE: {post.title}</h1>
          <p>MESSAGE:{post.body}</p>
        </>
      )}
    </>
  );
}
