import { Rate } from "antd";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "James",
    role: "Mountain Writing Enthusiast",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "it will be important for your readers to know this. Keep in mind, though, that declarative statements in the chapters introducing the research problem.!",
  },
  {
    id: 2,
    name: "Michael",
    role: "Professional Author",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    text: "Most critical book reviews examine a topic in relation to prior research. A good strategy for identifying this prior research is to examine sources the author(s) cite",
  },
  {
    id: 3,
    name: "David",
    role: "Author Writing",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "he Writing Center. University of North Carolina; Hartley, James. Reading and Writing Book Reviews Across the Disciplines. Journal of the American Society!",
  },
];

export default function Testimonial() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Riders Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover why cyclists choose Pedal Paradise for their biking journey
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-6"
            >
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4">
                <Rate disabled defaultValue={testimonial.rating} />
              </div>
              <p className="mt-4 text-gray-600 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
