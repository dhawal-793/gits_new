import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Container from "./ui/Container";
import mdxComponents from "./mdxComponents";


const MarkdownContainer = ({ children }) => {
  return (
    <Container>
      <div className="container mx-auto p-4">
        <ReactMarkdown components={mdxComponents} remarkPlugins={[remarkGfm]}>
          {children}
        </ReactMarkdown>
      </div>
    </Container>
  );
};

export default MarkdownContainer;
