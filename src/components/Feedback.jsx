import Heading from "./Heading";
import Section from "./Section";
import { testimonial } from "../constants";
import { Gradient } from "./design/Roadmap";

const Feedback = () => (
  <Section className="overflow-hidden bg-gray-200 py-16" id="feedback">
    <div className="container mx-auto px-6 md:px-12">
      <Heading
        tag="Hear Directly from Our Users: Real Experiences, Real Impact"
        title="Here's What Our Users Say"
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900"
      />

      <div className="flex flex-wrap justify-center gap-8">
        {testimonial.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center p-8 rounded-3xl w-full sm:w-[280px] md:w-[300px] lg:w-[400px] bg-white shadow-xl border border-gray-300 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl opacity-70"></div>
            <img
              src={item.avatar}
              alt={item.title}
              className="relative w-24 h-24 rounded-full mb-6 border-4 border-gray-200 shadow-lg"
            />
            <div className="relative text-xl font-bold text-center text-gray-800 mb-2">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-t-xl"></div>
              {item.title}
            </div>
            <div className="relative text-sm text-gray-600 mb-4">
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-300 to-transparent rounded-t-xl"></div>
              {item.topic}
            </div>
            <div className="relative w-full mb-4 text-center">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Feedback;
