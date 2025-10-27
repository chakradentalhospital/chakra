import React from "react";
import { Helmet } from "react-helmet-async";
import BlogHero from "./BlogHero";
import bgImg from "../../assets/About/a1.jpg";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>
          Top 10 Pediatric Dental Clinics in Coimbatore | Chakra Dental
        </title>
        <meta
          name="description"
          content="Explore the top 10 pediatric dental clinics in Coimbatore offering expert care, gentle treatments, and trusted child-friendly dentists."
        />
        <link rel="canonical" href="https://www.chakradental.in/blog/blog-1" />
      </Helmet>
      <section className="relative w-full h-[80vh]">
        <img
          src={bgImg}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Blog Details</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 leading-relaxed text-gray-800">
        <h1 className="text-4xl font-bold text-[#650E45] mb-10 text-center">
          Top 10 Pediatric Dental Clinics in Coimbatore
        </h1>

        {/* 1 */}
        <article className="mb-12">
          <h2 className="text-2xl font-semibold text-[#650E45] mb-2">
            1. Chakra Dental Hospital
          </h2>
          <p className="mb-1">
            <strong>Location:</strong> R.S. Puram, Coimbatore
          </p>
          <p className="mb-4">
            <strong>Website:</strong>{" "}
            <a
              href="https://www.chakradental.in"
              target="_blank"
              rel="noreferrer"
              className="text-[#650E45] underline hover:text-[#4e0b37]"
            >
              www.chakradental.in
            </a>
          </p>
          <p className="mb-4">
            Chakra Dental Hospital tops our list as one of Coimbatore’s leading
            pediatric and family dental clinics. Led by Dr. Santosh
            Chakravarthy, the clinic is renowned for its gentle and preventive
            approach toward children’s dentistry.
          </p>
          <p className="mb-4">
            The clinic features a bright, cheerful interior and a caring team
            that ensures children feel relaxed throughout the visit. From
            routine cleanings, fluoride treatments, and cavity fillings to habit
            correction and orthodontic assessments, Chakra Dental provides
            comprehensive care for kids of all ages.
          </p>
          <p className="mb-4">
            Their motto — “Creating happy smiles that last a lifetime” —
            perfectly sums up their philosophy. Parents also appreciate their
            transparency in pricing and flexible appointment scheduling.
          </p>
          <p className="font-semibold text-[#650E45] mb-2">
            ⭐ Why Choose Chakra Dental:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Specialized pediatric dental team</li>
            <li>Child-friendly environment</li>
            <li>Advanced sterilization and painless techniques</li>
            <li>Excellent reviews and parental trust</li>
          </ul>
        </article>

        {/* 2 */}
        <article className="mb-12">
          <h2 className="text-2xl font-semibold text-[#650E45] mb-2">
            2. We Little
          </h2>
          <p className="mb-1">
            <strong>Location:</strong> Avinashi Road, Coimbatore
          </p>
          <p>
            Founded by Dr. Shifa Shameem, We Little is a pioneer in holistic
            pediatric dentistry in South India. The clinic blends modern dental
            care with child psychology principles, ensuring every visit is
            comfortable. They specialize in tongue-tie releases, preventive
            dentistry, and growth-based orthodontics for children.
          </p>
        </article>

        {/* 3 */}
        <article className="mb-12">
          <h2 className="text-2xl font-semibold text-[#650E45] mb-2">
            3. GUGU Dental Clinic
          </h2>
          <p className="mb-1">
            <strong>Location:</strong> Saibaba Colony
          </p>
          <p>
            With a playful interior and an empathetic dental team, GUGU Dental
            Clinic is a hit among kids. The clinic offers complete pediatric
            services — from fluoride therapy to space maintainers and
            interceptive orthodontics. Their “Kids Zone” helps children feel at
            ease before treatment begins.
          </p>
        </article>

        {/* 4 */}
        <article className="mb-12">
          <h2 className="text-2xl font-semibold text-[#650E45] mb-2">
            4. Dr Ruchi’s Multispeciality Dental Care
          </h2>
          <p className="mb-1">
            <strong>Location:</strong> R.S. Puram
          </p>
          <p>
            Dr Ruchi’s clinic combines gentle care with advanced dental
            technology. Parents love its friendly atmosphere and play area
            designed especially for children. The team provides specialized
            services such as laser cavity treatment, sealants, and fluoride
            varnish applications.
          </p>
        </article>

        {/* 5 */}
        <article className="mb-12">
          <h2 className="text-2xl font-semibold text-[#650E45] mb-2">
            5. Little Krishna Kids Dental Care
          </h2>
          <p className="mb-1">
            <strong>Location:</strong> Saravanampatti
          </p>
          <p>
            Little Krishna Kids Dental Care focuses exclusively on children’s
            oral health. Known for its warm staff and patient-friendly approach,
            the clinic emphasizes early detection, preventive check-ups, and
            nutritional counseling to maintain cavity-free smiles.
          </p>
        </article>

        {/* 6 */}
        <article className="mb-12">
          <h2 className="text-2xl font-semibold text-[#650E45] mb-2">
            6. The Crown Kids Dental Care
          </h2>
          <p className="mb-1">
            <strong>Location:</strong> Trichy Road
          </p>
          <p>
            This specialized pediatric division offers dental care for children
            from infancy to adolescence. Their team is trained to manage anxious
            kids using behavioral guidance, sedation dentistry, and minimally
            invasive procedures.
          </p>
        </article>

        {/* 7 */}
        <article className="mb-12">
          <h2 className="text-2xl font-semibold text-[#650E45] mb-2">
            7. Chandra’s Little Smiles
          </h2>
          <p className="mb-1">
            <strong>Location:</strong> Thadagam Road, R.S. Puram
          </p>
          <p>
            Chandra’s Little Smiles provides a complete range of pediatric and
            preventive services. Their clinic design is bright and welcoming,
            helping children feel comfortable. They focus on habit correction
            (thumb-sucking, bottle-feeding) and long-term dental hygiene for
            kids.
          </p>
        </article>

        {/* 8 */}
        <article className="mb-12">
          <h2 className="text-2xl font-semibold text-[#650E45] mb-2">
            8. Arasu Dental Clinic
          </h2>
          <p className="mb-1">
            <strong>Location:</strong> Ramanathapuram
          </p>
          <p>
            Arasu Dental Clinic offers a full spectrum of pediatric dental
            services with a focus on preventive care. Their modern setup and
            friendly staff make it a great choice for families. Services include
            fluoride treatments, fillings, and pediatric orthodontic
            consultation.
          </p>
        </article>

        {/* 9 */}
        <article className="mb-12">
          <h2 className="text-2xl font-semibold text-[#650E45] mb-2">
            9. Sri Sakthi Dental Clinic
          </h2>
          <p className="mb-1">
            <strong>Location:</strong> Avinashi Road
          </p>
          <p>
            Sri Sakthi Dental Clinic combines experience with compassion. Their
            team believes in early intervention and regular check-ups to prevent
            cavities and misalignment. They provide painless pediatric dentistry
            using modern tools and technology.
          </p>
        </article>

        {/* 10 */}
        <article>
          <h2 className="text-2xl font-semibold text-[#650E45] mb-2">
            10. Spaark Dental Clinic
          </h2>
          <p className="mb-1">
            <strong>Location:</strong> Kalapatti Main Road
          </p>
          <p>
            Spaark Dental Clinic is well-known for its comprehensive dental care
            for both adults and kids. Their pediatric section ensures gentle
            cleaning, scaling, and cavity management for young children. The
            clinic’s warm staff and relaxed environment make dental visits easy
            for little ones.
          </p>
        </article>
      </section>
    </>
  );
};

export default Blog;
