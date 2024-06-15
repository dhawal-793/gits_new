export const H1Heading = ({ children }) => {
  return (
    <>
      <h2 className="font-semibold text-xl sm:text-2xl mt-8">{children}</h2>
      <div className="w-full flex items-center gap-5 my-4 md:my-6">
        <div className="w-12 bg-primary h-[3px]" />
        <div className="w-full bg-tertiary/20 h-[1px]" />
      </div>
    </>
  );
};

export const H2Heading = ({ children }) => {
  return (
    <>
      <h2 className="font-semibold text-lg sm:text-xl mt-8">{children}</h2>
      <div className="w-full flex items-center gap-5 my-4 md:my-6">
        <div className="w-12 bg-primary h-[3px]" />
        <div className="w-full bg-tertiary/20 h-[1px]" />
      </div>
    </>
  );
};
export const H3Heading = ({ children }) => {
  return (
    <>
      <h2 className="font-semibold text-base sm:text-lg mt-8 mb-4">{children}</h2>
    </>
  );
};
export const H4Heading = ({ children }) => {
  return (
    <h2 className="font-semibold text-base sm:text-lg  text-gray-600 mt-6 mb-4">
      {children}
    </h2>
  );
};

export const Subheading = ({ children }) => {
  return (
    <h2 className="text-2xl font-semibold text-gray-600 my-3">{children}</h2>
  );
};

export const Paragraph = ({ children }) => {
  return <p className="text-sm mb-3 text-justify">{children}</p>;
};

export const Table = ({ children }) => (
  <div className="overflow-x-auto my-5">
    <table className="min-w-full bg-white border border-gray-200">
      {children}
    </table>
  </div>
);

export const TableRow = ({ children }) => (
  <tr className="bg-white border-b border-gray-200">{children}</tr>
);

export const TableCell = ({ children }) => (
  <td className="px-4 py-2 border border-gray-200 text-sm min-w-max">
    {children}
  </td>
);

export const TableHeader = ({ children }) => (
  <th className="px-4 py-2 border border-gray-200 bg-gray-100 text-sm min-w-max">
    {children}
  </th>
);

export const UnOrderedList = ({ children }) => (
  <ul className="list-disc pl-5 space-y-1 my-5">{children}</ul>
);
export const OrderedList = ({ children }) => (
  <ol className="list-decimal pl-5 space-y-1 my-5">{children}</ol>
);

export const ListItem = ({ children }) => (
  <li className="py-1 text-sm text-justify">{children}</li>
);

export const Link = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-blue-500 hover:text-blue-700 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export const LineBreak = () => <br />;

const mdxComponents = {
  h1: H1Heading,
  h2: H2Heading,
  h3: H3Heading,
  h4: H4Heading,
  p: Paragraph,
  ul: UnOrderedList,
  ol: OrderedList,
  li: ListItem,
  table: Table,
  th: TableHeader,
  tr: TableRow,
  td: TableCell,
  a: Link,
  br: LineBreak,
};

export default mdxComponents;
