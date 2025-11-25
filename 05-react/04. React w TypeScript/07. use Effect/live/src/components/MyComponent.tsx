import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const MyComponent = () => {
  const [data, setData] = useState<Post | null>(null);

  useEffect(() => {
    const myFetch = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    myFetch();
  }, []);

  return (
    <div>
      {data ? (
        <>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          <p>Post ID: {data.id}</p>
          <p>User ID: {data.userId}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default MyComponent;
