import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Container from "./ui/Container";
import mdxComponents from "./mdxComponents";


const MarkdownContainer = ({ children }) => {
  return (
    <Container>
      <ReactMarkdown components={mdxComponents} remarkPlugins={[remarkGfm]}>
        {children}
      </ReactMarkdown>
    </Container>
  );
};

export default MarkdownContainer;
