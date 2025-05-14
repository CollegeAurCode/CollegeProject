import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { baseUrl } from "../baseUrl";
// import Header from "../components/core/Blog/Header";
import Spinner from "../components/core/Blog/Spinner";
import BlogDetails from "./BlogDetails";

const BlogPage = () => {
  const [currentBlog, setCurrentBlog] = useState(null);
  const { loading, setLoading } = useContext(AppContext);
  const [relatedBlog, setRelatedBlog] = useState([]);

  const location = useLocation();
  const navigation = useNavigate();

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log(`Fetching data from: ${url}`);
    try {
      const result = await fetch(url);
      const data = await result.json();
      setCurrentBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);
    } catch (error) {
      console.log(error);
      setCurrentBlog(null);
      setRelatedBlog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div >
      {/* <Header /> */}
      <div className="flex mx-auto max-w-[1100px] w-11/12 items-center mt-2  gap-10">
        <button
          onClick={() => navigation(-1)}
          className="border-[2px] border-gray-300  py-2 px-6 rounded-md text-base  mt-8
          bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold border-white bg-yellow-5"
        >
          Back
        </button>
      </div>
      {loading ? (
        <p>
          <Spinner />
        </p>
      ) : currentBlog ? (
        <div>
          <BlogDetails post={currentBlog} />
          <h2 className="flex flex-col justify-center text-center text-5xl leading-relaxed  font-bold mt-5
          bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text">
            Related Blogs
          </h2>
          {relatedBlog.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <p className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">No Blog Found</p>
      )}
    </div>
  );
};

export default BlogPage;
