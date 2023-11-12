import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <section className=" text-center py-4">
        <h1 className="text-3xl font-semibold">Welcome to Tailverse</h1>
      </section>
      <div className="container mx-auto my-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is Tailverse?</h2>
          <p className="mb-4">
            Tailverse is your one-stop destination to create and obtain
            components optimized for Tailwind CSS. We strive to provide a
            comprehensive and versatile library that speeds up your development
            process, allowing you to focus on creating exceptional experiences
            for your users.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            At the core of Tailverse is our mission to make web development
            accessible and efficient for everyone. We believe in the power of
            Tailwind CSS and work diligently to provide you with tools that make
            leveraging this framework even more straightforward.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Tailverse?</h2>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              <strong>Variety of Components:</strong> From user interface
              elements to complete sections, we offer a wide range of
              ready-to-use components.
            </li>
            <li className="mb-2">
              <strong>Optimized for Tailwind CSS:</strong> Each component is
              designed with the best practices of Tailwind CSS in mind, ensuring
              seamless integration with your project.
            </li>
            <li className="mb-2">
              <strong>Constant Updates:</strong> We are committed to continuous
              improvement, regularly adding new components and enhancing
              existing ones.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Join the Tailverse Community
          </h2>
          <p className="mb-4">
            Tailverse is not just a platform; it's a community. Join us to
            discover the magic of effective development, share your experiences,
            and collaborate with other passionate developers.
          </p>
        </section>
        <section className="text-center">
          <p className="mb-4">
            Explore Tailverse today and find out how we can elevate your web
            development with Tailwind CSS to the next level! 🚀
          </p>
          <Link
            href="/"
            className="bg-white text-black px-6 py-3 rounded-full  font-semibold hover:bg-gray-400 transition duration-300"
          >
            Explore
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
