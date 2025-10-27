import React from "react";
import { Helmet } from "react-helmet-async";
import BlogHero from "../Components/Blogs/BlogHero";
import Blogsection from "../Components/Blogs/Blogsection";

const Blogs = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://www.chakradental.in/blogs/#blog",
        url: "https://www.chakradental.in/blogs",
        name: "Top 10 Pediatric Dental Clinics in Coimbatore",
        description:
          "Find the top 10 pediatric dental clinics in Coimbatore offering expert kids’ dental care, gentle treatments, and trusted child-friendly dentists.",
        publisher: {
          "@type": "Organization",
          name: "Chakra Dental Clinic",
          logo: {
            "@type": "ImageObject",
            url: "https://www.chakradental.in/assets/logo-C2h1hfCQ.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.chakradental.in/blogs",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.chakradental.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogs",
            item: "https://www.chakradental.in/blogs",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        {/* Meta */}
        <title>
          Top 10 Pediatric Dental Clinics in Coimbatore | Chakra Dental
        </title>
        <meta
          name="description"
          content="Find the top 10 pediatric dental clinics in Coimbatore offering expert kids’ dental care, gentle treatments, and trusted child-friendly dentists."
        />
        <link rel="canonical" href="https://www.chakradental.in/blogs" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Top 10 Pediatric Dental Clinics in Coimbatore | Chakra Dental"
        />
        <meta
          property="og:description"
          content="Discover Coimbatore’s best pediatric dental clinics providing specialized and gentle dental care for children."
        />
        <meta
          property="og:image"
          content="https://www.chakradental.in/assets/logo-C2h1hfCQ.png"
        />
        <meta property="og:url" content="https://www.chakradental.in/blogs" />
        <meta property="og:site_name" content="Chakra Dental Clinic" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top 10 Pediatric Dental Clinics in Coimbatore | Chakra Dental"
        />
        <meta
          name="twitter:description"
          content="Find the best pediatric dental clinics in Coimbatore with expert and friendly child dentists."
        />
        <meta
          name="twitter:image"
          content="https://www.chakradental.in/assets/logo-C2h1hfCQ.png"
        />

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <BlogHero />
      <Blogsection/>
    </>
  );
};

export default Blogs;
