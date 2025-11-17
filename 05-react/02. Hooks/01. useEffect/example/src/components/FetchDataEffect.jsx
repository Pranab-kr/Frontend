import { useEffect, useState } from "react";
import { HiH2 } from "react-icons/hi2";

const FetchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();

      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>First Post title</h1>

      {posts.length > 0 ? <h2>{posts[0].title}</h2> : <h2>Loading...</h2>}
    </div>
  );
};

export default FetchData;
