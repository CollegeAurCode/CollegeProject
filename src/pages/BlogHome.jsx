import React from "react";
// import Header from "../components/Common/Navbar";
import BlogContent from "../components/core/Blog/BlogContent";
import Pagination from "../components/core/Blog/Pagination";

const Home = () => {
  return (
    <div className="w-full h-full ">
      {/* <Header /> */}
      <div className="flex flex-col justify-center items-center ">
        <BlogContent />
      </div>

      <Pagination />
    </div>
  );
};

export default Home;
