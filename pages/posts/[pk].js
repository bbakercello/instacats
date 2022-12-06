import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "../../components/NavigationBar";
import Image from "next/image";
export async function getServerSideProps(context) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  // Pass post data to the page via props
  return { props: { value: context.query } };
}

export default function Details(props) {
  const [data, setData] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `http://catstagram.lofty.codes/api/posts/${props.value.pk}`
      );
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const loaded = () => {
    const comments = data.comments;
    console.log(comments);
    if(comments != undefined){
    return (
      <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 pb-8">
        <NavigationBar />
        <div className="flex flex-col justify-center h-screen m-40">
          <div className="flex self-center justify-center w-full m-4">
            <Image
              className="rounded-lg shadow-lg border-solid border-2 border-slate-900"
              alt="hello"
              width="600"
              height="80"
              src={`http://catstagram.lofty.codes/media/${data.image}`}
            ></Image>
          </div>
          <div className="flex flex-col mt-6 justify-center bg-teal-600 rounded-lg w-100 border-solid border-2 border-slate-900">
            {comments.map((comment) => (
              <div key={comment.pk} className="flex justify-center self-center">
                <p className="text-lg break-all p-2 self-center">
                  {comment.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );};
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return data ? loaded() : loading();
}
