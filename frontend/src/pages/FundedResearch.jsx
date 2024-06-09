import { useEffect, useState } from "react";

import { fetchMdx } from "../lib/fetch-mdx";

import Title from "../components/ui/Title";
import MarkdownContainer from "../components/MarkdownContainer";
import NotFound from "../components/errors/NotFound";
import InternalServerError from "../components/errors/InternalServerError";

const FundedResearch = () => {
  const [mdxContent, setMdxContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const data = await fetchMdx("rnd/funded-research");
        console.log(data);
        if (data == "404") {
          setMdxContent("404");
          setLoading(false);
          return;
        }
        if (data == "500") {
          setMdxContent("500");
          setLoading(false);
          return;
        }
        setMdxContent(data.content);
      } catch (error) {
        console.error("Error fetching MDX content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (mdxContent == "404") {
    return <NotFound />;
  }
  if (mdxContent == "500") {
    return <InternalServerError />;
  }

  return (
    <>
      <Title title="funded research" />
      {loading ? (
        <div className="min-h-[80vh] w-full flex items-center justify-center text-center">
          <p>Loading...</p>
        </div>
      ) : mdxContent ? (
        <>
          <MarkdownContainer>{mdxContent}</MarkdownContainer>
        </>
      ) : (
        <div className="min-h-[80vh] w-full" />
      )}
    </>
  );
};

export default FundedResearch;
