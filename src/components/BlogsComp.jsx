import React from "react";
import blogs1 from "../assets/blogs/blogs1.png";
import blog2 from "../assets/blogs/blog2.png";
import blog3 from "../assets/blogs/blog3.png";
import BlogCard from "./BlogCard";

const BlogsData = [
  {
    id: 1,
    image: blogs1,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The",
    author: "Someone",
    date: "April 22, 2022",
    aosDelay: "100",
  },
  {
    id: 2,
    image: blog2,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The",
    author: "Someone",
    date: "April 22, 2022",
    aosDelay: "300",
  },
  {
    id: 3,
    image: blog3,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The",
    author: "Someone",
    date: "April 22, 2022",
    aosDelay: "600",
  },
];
const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 py-10 dark:bg-gray-900 dark:text-white pb-14">
        <div className="container ">
          <h1
            data-aos="fade-up"
            className=" my-8 text-3xl font-semibold border-l-8 py-2 pl-2 border-primary/50"
          >
            Our Blogs
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
          <div className="text-center">
            <button data-aos="fade-up" className="btn-primary">
              View All Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsComp;
