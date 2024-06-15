import { Link, useNavigate } from "react-router-dom";

const BlogCard = ({ image, title, meta_description, url }) => {
  const navigate = useNavigate();
  console.log(image);
  return (
    <div
      onClick={() => navigate(`/blogs/${url}`)}
      className="max-w-96 mx-auto w-full rounded-lg p-3 border hover:border-prim shadow-xl hover:shadow-tertiary/40 scale-[0.99] hover:scale-100 duration-500 transition-all flex flex-col justify-between gap-5"
    >
      <div className="flex items-start flex-col cursor-pointer ">
        <img
          src={image}
          alt={title}
          className="aspect-video object-cover object-center rounded-lg"
        />
        <h2 className="mb-3 mt-5 text-xl font-semibold">{title}</h2>
        <p className="text-justify text-xs line-clamp-5">{meta_description}</p>
      </div>
      <Link
        to={`/blogs/${url}`}
        className="inline-block mr-auto px-8 py-2 text-white bg-secondary font-semibold rounded-md hover:opacity-100 opacity-90"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
