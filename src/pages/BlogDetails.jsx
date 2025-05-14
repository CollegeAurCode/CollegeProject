import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="mt-6  flex-col flex mx-auto   max-w-[1100px]">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-3xl text-white mb-2">
          {" "}
          {post.title}
        </span>
      </NavLink>
      <p className="text-md text-white">
        by{" "}
        <span className="text-blue-200 italic font-bold "> {post.author} </span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold text-yellow-200  underline">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-white text-sm mb-2 ">
        Posted on <span> {post.date}</span>
      </p>
      <p className="text-xl mb-3 font-normal text-white  font-Lato ">{post.content}</p>
      <div className="text-blue-50  italic">
        {post.tags.map((tag, index) => {
          return (
            <NavLink key={index} to={`/tag/${tag.replaceAll(" ", "-")}`}>
              <span>{` #${tag}`}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BlogDetails;
