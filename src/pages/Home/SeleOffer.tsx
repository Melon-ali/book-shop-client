import bgImage from '../../assets/images/offer.webp'
import { motion } from 'framer-motion'

const offers = [
  {
    id: 1,
    image: 'https://htmldemo.net/koparion/koparion/img/banner/8.jpg',
  },
  {
    id: 2,
    image: 'https://htmldemo.net/koparion/koparion/img/banner/9.jpg',
  },
]

const SeleOffer = () => {
  return (
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
          className="text-center mb-12 w-full h-32 bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="w-96 text-white font-bold p-4">
            <h2 className="text-xl">
              G. Meyer Books & Spiritual Traveler
            </h2>
            <h1 className="text-2xl ml-18"> Press Sale up to 30% off</h1>
          </div>
          <div></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-xl overflow-hidden"
            >
              <div className="relative h-80">
                <img src={offer.image} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SeleOffer
