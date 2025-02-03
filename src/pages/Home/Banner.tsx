// import { Carousel, ConfigProvider } from 'antd'
import { Link } from 'react-router-dom'
import bgImage from '../../assets/images/5.webp'
import banner from '../../assets/images/hero-book.png'
import { Button } from 'antd'
// fromer motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../../../variants'

export default function Banner() {
  // const contentStyle: React.CSSProperties = {
  //   display: 'block',
  //   margin: '0 auto',
  // }

  // const images = [
  //   'https://htmldemo.net/koparion/koparion/img/slider/5.jpg',
  //   'https://htmldemo.net/koparion/koparion/img/slider/6.jpg',
  //   'https://htmldemo.net/koparion/koparion/img/slider/8.jpg',
  //   'https://htmldemo.net/koparion/koparion/img/slider/1.jpg',
  //   'https://htmldemo.net/koparion/koparion/img/slider/14.jpg',
  //   'https://htmldemo.net/koparion/koparion/img/slider/15.jpg',
  // ]

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-white ml-2 mt-24"
        >
          <h1 className="text-5xl font-bold">
            Expand Your Mind <br />
            Reading a Book
          </h1>
          <p className="capitalize my-4">
            Sed ac arcu sed felis vulputate molestie. Nullam at urna in velit
            finibus vestibulum euismod a <br /> urna. Sed quis aliquam leo. Duis
            iaculis lorem mauris, et convallis dui efficitur{' '}
          </p>
          <Link to={'all-products'}>
            <Button type="primary">Shop Now</Button>
          </Link>
        </motion.div>

        <img
          className="w-1/2 sm:w-0 max-sm:w-0 md:w-0 lg:w-1/2 xl:w-1/2 "
          src={banner}
          alt="Book Hero"
        />
      </div>
    </div>
  )
}
