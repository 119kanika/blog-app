import BlogsCard from "./BlogsCard";
import { useEffect, useState } from "react";

const DisplayBlogs = () => {
  const newApiKey = "130b4e17f3354e69a1b0d4b0ed7cdf88";

  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        `https://newsapi.org/v2/everything?q=general&apiKey=${newApiKey}`
      );
      const data = await resp.json();
      setArticle(data?.articles);
      console.log("News data: ", data?.articles[2]);
    };

    fetchData();
  }, []);

  return (
    <div className=" mt-20 px-10">
      <h1 className="text-2xl font-bold mb-5">Latest Blogs</h1>
      <div className=" w-screen-sm flex justify-between flex-wrap">
        {article &&
          article.map((item) => {
            if (item.source.id != null)
              return (
                <BlogsCard
                  key={item?.url}
                  title={item?.title}
                  description={item?.description}
                  url={item?.url}
                />
              );
          })}
      </div>
    </div>
  );
};

export default DisplayBlogs;
