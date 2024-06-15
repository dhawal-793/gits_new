import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import InternalServerError from "../components/errors/InternalServerError";
import NotFound from "../components/errors/NotFound";
import Title from "../components/ui/Title";
import Heading from "../components/ui/Heading";
import Container from "../components/ui/Container";
import MarkdownContainer from "../components/MarkdownContainer";

import { fetchMdx } from "../lib/fetch-mdx";

const BlogIdPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [metadata, setMetadata] = useState({});
  const [mdxContent, setMdxContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const data = await fetchMdx(`blogs/${slug}`);
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
        setMetadata({
          title: data.title,
          image: data.image,
          url: data.url,
        });
        setMdxContent(data.content);
      } catch (error) {
        console.error("Error fetching MDX content:", error);
        setMdxContent("500");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [slug]);

  if (mdxContent == "404") {
    return <NotFound />;
  }
  if (mdxContent == "500") {
    return <InternalServerError />;
  }

  return (
    <>
      <Title title="Blog" />
      <div className="w-full bg-tertiary/30 text-white">
        <Container>
          <button
            onClick={() => navigate('/blog')}
            className="space-x-2 hover:text-secondary font-semibold duration-300 transition-all"
          >
            <span className="fa-solid fa-chevron-left" />
            <span>Blogs</span>
          </button>
        </Container>
      </div>
      <Container>
        {loading ? (
          <div className="min-h-[80vh] w-full flex items-center justify-center text-center">
            <p>Loading...</p>
          </div>
        ) : mdxContent ? (
          <>
            {metadata.title && (
              <div>
                <Heading>{metadata.title}</Heading>
              </div>
            )}
            {metadata.image && (
              <div className="mb-5">
                <img src={`${metadata.image}`} className="w-full" />
              </div>
            )}
            <MarkdownContainer>
              {mdxContent}
            </MarkdownContainer>
          </>
        ) : (
          <div className="min-h-[80vh] w-full" />
        )}
      </Container>
    </>
  );
};

export default BlogIdPage;
