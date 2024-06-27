import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs =await res.json();
  return (
    <>
      <h1 className="text-center text-4xl my-5">Latest Blogs</h1>
      <LatestBlogs blogs={blogs}></LatestBlogs>
    </>
  );
};

export default HomePage;
