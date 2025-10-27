import bgImg from "../../assets/Home/2.jpg"; 

const BlogHero = () => {
  return (
    <section className="relative w-full h-[50vh]">
      <img
        src={bgImg}
        alt="Contact Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Blogs</h1>
      </div>
    </section>
  );
};

export default BlogHero;
