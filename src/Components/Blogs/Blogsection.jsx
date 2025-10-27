import React from "react";
import { Link } from "react-router-dom";
import blogImg from "../../assets/Home/5.jpg"; // your image path

const BlogSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#650E45]">
        Our Latest Blog
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1].map((id) => (
          <div
            key={id}
            className="relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <img
              src={blogImg}
              alt={`Blog ${id}`}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute top-4 left-4 bg-[#650E45] text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
              Oct 25, 2025
            </div>

            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#650E45] mb-2 group-hover:text-[#4e0b37] transition-colors duration-200">
                  Top 10 Pediatric Dental Clinics in Coimbatore
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  Discover the most trusted pediatric dental clinics in Coimbatore
                  offering gentle, child-friendly care with expert doctors and modern
                  facilities ensuring healthy smiles for kids...
                </p>
              </div>

              <Link
                to={`/blogs/blog-${id}`}
                className="inline-block mt-5 text-white bg-[#650E45] hover:bg-[#4e0b37] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 self-start"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
