import Heading from "./Heading";
import Button from "./Button";
import Section from "./Section";
import { blogs } from "../constants";
import { Gradient } from "./design/Roadmap";

const Blog = () => (
  <Section className="overflow-hidden bg-gray-200 py-16" id="blogs">
    <div className="container mx-auto px-6 md:px-12">
      <Heading
        tag="Dive into Insights: Discover, Learn, and Grow with Our Latest Articles"
        title="Our Blogs 👇"
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900"
      />

      <div className="flex flex-wrap justify-center gap-8">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center p-8 rounded-3xl w-full sm:w-[280px] md:w-[300px] lg:w-[400px] bg-white shadow-xl border border-gray-300 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl opacity-70"></div>
            <div className="relative text-xl font-bold text-center text-gray-800 mb-2">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-t-xl"></div>
              {item.title}
            </div>
            <div className="relative text-sm text-gray-600 my-4">
              <div className="absolute inset-x-0 bottom-0 h-0.5 "></div>
              {item.text}
            </div>
            <div className="relative flex justify-center mt-4">
              <Button href={item.link}>Read more</Button>
            </div>
          </div>
        ))}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Blog;
