import Head from "next/head";
import Image from "next/image";
import NavigationBar from "../components/NavigationBar";
import fetchPosts from "./api/posts";
import Link from "next/link";
const callAPI = fetchPosts;

export async function getServerSideProps() {
  // Call the callAPI function
  const data = await callAPI();

  // Pass the data as props to the component
  return { props: { data } };
}
console.log(process.env.AUTH0_SECRET)

export default function Home(props) {
  const posts = props.data.slice(0, 10);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar/>
      <main>
        {posts.map((post, index) => {
          {
            return (
              <div key={index} className="text-sky-100 p-2">
                <Link href={{
                  pathname:`/posts/${post.pk}`,query: {
                                  data: [
                                    post.comments,
                                    post.image,
                                    post.name
                                  ],
                                },
                              }}>
                  <p>{post.name}</p>
                  <Image
                    alt="hello"
                    width="40"
                    height="40"
                    src={`http://catstagram.lofty.codes/media/${post.image}`}
                  ></Image>
                </Link>
              </div>
            );
          }
        })}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
