import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Title from "../components/ui/Title";
import NotFound from "../components/errors/NotFound";
import InternalServerError from "../components/errors/InternalServerError";
import MarkdownContainer from "../components/MarkdownContainer";

import { fetchMdx } from "../lib/fetch-mdx";

const SubjectAdmission = () => {
  const { department } = useParams();

  const [mdxTitle, setMdxTitle] = useState("");
  const [mdxContent, setMdxContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const data = await fetchMdx(`admissions/${department}`);
        // console.log(data);
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
        setMdxTitle(data.title);
      } catch (error) {
        console.error("Error fetching MDX content:", error);
        setMdxContent("500");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [department]);

  if (mdxContent == "404") {
    return <NotFound />;
  }
  if (mdxContent == "500") {
    return <InternalServerError />;
  }

  return (
    <>
      {loading ? (
        <div className="min-h-[80vh] w-full flex items-center justify-center text-center">
          <p>Loading...</p>
        </div>
      ) : mdxContent ? (
        <>
          <Title title={mdxTitle} />
          <MarkdownContainer>{mdxContent}</MarkdownContainer>
        </>
      ) : (
        <div className="min-h-[80vh] w-full" />
      )}
    </>
  );
};

export default SubjectAdmission;
