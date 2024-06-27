import { Blog } from "@/types";
import React from "react";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h2>This is latest blogs</h2>
      <div className="grid grid-cols-2 gap-5 my-4">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5 my-4">
        {blogs.slice(2, 6).map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;

/* {blogs}:{blogs: Blog[]}
2nd blogs is same as 1st blog 
Blog is type and [] is because blogs is an array of objects 
*/
