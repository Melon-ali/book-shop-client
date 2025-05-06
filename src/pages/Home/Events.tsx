import {
  CalendarOutlined,
  EnvironmentOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { motion } from 'framer-motion'

const events = [
  {
    id: 1,
    title: 'Beyond the content of the book',
    date: 'Every Saturday',
    location: 'Koparion Book Shop',
    image: 'https://gramentheme.com/html/bookle/assets/img/news/09.jpg',
    participants: '20+',
    description:
      'The nationality, political persuasion, education, intellectual interests, personal history,!',
  },
  {
    id: 2,
    title: 'Here are some sample questions',
    date: 'Last Friday Monthly',
    location: 'Koparion Book Shop',
    image: 'https://gramentheme.com/html/bookle/assets/img/news/10.jpg',
    participants: '50+',
    description:
      'What is the central thesis—or main argument—of the book? If the author wanted you to get one main idea from the book.',
  },
  {
    id: 3,
    title: 'Developing a Critical Assessment Strategy',
    date: 'November 21, 2024',
    location: 'Koparion Book Shop',
    image: 'https://gramentheme.com/html/bookle/assets/img/news/11.jpg',
    participants: '15',
    description:
      'There is no definitive methodological approach to writing a book review in the social sciences, although',
  },
  {
    id: 4,
    title: 'There are two general approaches to a book',
    date: 'October 15, 2024',
    location: 'Koparion Book Shop',
    image: 'https://gramentheme.com/html/bookle/assets/img/news/12.jpg',
    participants: '100+',
    description:
      'Presents the content and structure of a book as objectively as possible, describing essential information about a book!',
  },
]

export default function Events() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-gray-900">Our Latest News</h2>
          <p className="mt-4 text-xl text-gray-600">
            Long printed dress with thin adjustable straps. V-neckline and
            wiring under the bust with ruffles at the bottom of the dress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-80">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p
                  title={event.description}
                  className="text-gray-600 mb-4 line-clamp-1"
                >
                  {event.description}
                </p>
                <div className="flex flex-col gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <CalendarOutlined className="mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <EnvironmentOutlined className="mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <TeamOutlined className="mr-2" />
                    {event.participants} participants
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
