import React from 'react'
import axios from "axios";

export async function getServerSideProps(context) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  // Pass post data to the page via props
  return { props: { value: context.query } };
}

export default function Details(props){
  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `http://catstagram.lofty.codes/api/posts/${props.value.pk}`
      );
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  fetchPosts()
  return(
    <div>
      hello
    </div>
  )
}