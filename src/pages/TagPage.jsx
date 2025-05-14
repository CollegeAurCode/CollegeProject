import React from "react";
// import Header from "../components/core/Blog/Header";
import { useLocation, useNavigate } from "react-router-dom";
import BlogContent from "../components/core/Blog/BlogContent";
import Pagination from "../components/core/Blog/Pagination";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div >
      {/* <Header /> */}
      <div className="flex mx-auto max-w-[1050px] w-11/12 items-center mt-5 gap-10">
        <button
          onClick={() => navigation(-1)}
          className="border-[2px] border-gray-300  py-2 px-6 rounded-md text-base  text-blue-100   "
        >
          Back
        </button>
        <h2 className=" text-2xl leading-relaxed text-blue-100 ">
          Blogs tagged <span className="text-3xl font-bold ml-3 text-blue-100"> #{tag}</span>
        </h2>
      </div>
      <BlogContent />
      <Pagination />
    </div>
  );
};

export default TagPage;
