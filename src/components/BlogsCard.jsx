/* eslint-disable react/prop-types */
const BlogsCard = ({ title, description, url }) => {
  return (
    <div className=" max-w-sm flex-grow rounded-lg shadow-sm m-4 bg-gray-100">
      <div className="p-2 m-5">
        <h2 className="text-xl font-bold text-gray-800 py-2"> {title}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="py-4">
          <button className="text-center text-white bg-slate-800 rounded-full px-7 py-2">
            <a href={url}>Read more</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
