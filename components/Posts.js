import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Posts = (props) => {
    const posts = props.posts
    console.log(posts)
  return (
    <main className="flex justify-center bg-gradient-to-b from-slate-500 via-purple-500 to-slate-500">
      <div className="flex flex-col ">
        {posts.map((post, index) => {
          {
            return (
              <div
                key={index}
                className="self-center text-sky-100 p-6 m-6 rounded-lg bg-teal-500"
              >
                <Link
                  href={{
                    pathname: `/posts/${post.pk}`,
                    query: {
                      data: [post.comments, post.image, post.name],
                    },
                  }}
                >
                  <div className="flex justify-center">
                    <Image
                      className="rounded-lg"
                      alt="hello"
                      width="600"
                      height="80"
                      src={`http://catstagram.lofty.codes/media/${post.image}`}
                    ></Image>
                  </div>
                  <p>{post.timestamp_updated}</p>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </main>
  );
}

export default Posts