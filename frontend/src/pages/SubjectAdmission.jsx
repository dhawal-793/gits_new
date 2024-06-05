import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";

import Container from "../components/ui/Container";
import Title from "../components/ui/Title";

import mdxComponents from "../components/mdxComponents";

const BASE_URL = import.meta.env.VITE_HOST;

const fetchMdx = async (filename) => {
  const response = await axios.get(`${BASE_URL}/api/admissions/${filename}`);
  if (response.status == 200) {
    return response.data;
  } else throw new Error("Network response was not ok");
};

const SubjectAdmission = () => {
  const { department } = useParams();

  const [mdxTitle, setMdxTitle] = useState("");
  const [mdxContent, setMdxContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const data = await fetchMdx(`${department}`);
        console.log(data);
        setMdxContent(data.content);
        setMdxTitle(data.title);
      } catch (error) {
        console.error("Error fetching MDX content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <>
      {loading ? (
        <div className="py-10 text-center">Loading...</div>
      ) : mdxContent ? (
        <>
          <Title title={mdxTitle} />
          <Container>
            <div className="container mx-auto p-4">
              <ReactMarkdown
                components={mdxComponents}
                remarkPlugins={[remarkGfm]}
              >
                {mdxContent}
              </ReactMarkdown>
            </div>
          </Container>
        </>
      ) : (
        <div className="py-10 text-center text-red-500 text-xl">Something went wrong</div>
      )}
    </>
  );
};

export default SubjectAdmission;
