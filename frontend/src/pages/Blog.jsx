import { useEffect, useState } from "react";
import axios from "axios";

import InternalServerError from "../components/errors/InternalServerError";
import NotFound from "../components/errors/NotFound";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import BlogCard from "../components/BlogCard";

const BASE_URL = import.meta.env.VITE_HOST;

const Blog = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/api/blogs`);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status == 404) {
          setData("404");
        } else {
          setData("500");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (data == "404") {
    return <NotFound />;
  }
  if (data == "500") {
    return <InternalServerError />;
  }

  return (
    <>
      <Title title="Blog" />
      <Container>
        {loading ? (
          <div className="min-h-[80vh] w-full flex items-center justify-center text-center">
            <p>Loading...</p>
          </div>
        ) : data ? (
          <BlogList data={data} />
        ) : (
          <div className="min-h-[80vh] w-full" />
        )}
      </Container>
    </>
  );
};

export default Blog;

const BlogList = ({ data }) => {
  return (
    <div className="my-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8  sm:px-24 md:px-0">
      {data?.map((blogItem) => {
        return <BlogCard key={blogItem.title} {...blogItem} />;
      })}
    </div>
  );
};
