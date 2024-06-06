import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";

import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import NotFound from "../components/errors/NotFound";
import InternalServerError from "../components/errors/InternalServerError";
import mdxComponents from "../components/mdxComponents";

const BASE_URL = import.meta.env.VITE_HOST;

const fetchMdx = async (filename) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/admissions/${filename}`);
    console.log({ response });
    return response.data;
  } catch (error) {
    console.log(error.response);
    if (error.response.status == 404) {
      return "404";
    } else {
      return "500";
    }
  }
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
      {loading ? (
        <div className="min-h-[80vh] w-full flex items-center justify-center text-center">
          <p>Loading...</p>
        </div>
      ) : (
        mdxContent ?(
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
        ):(
          <div className="min-h-[80vh] w-full"/>
        )
      )}
    </>
  );
};

export default SubjectAdmission;
