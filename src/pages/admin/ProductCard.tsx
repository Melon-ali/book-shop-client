/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge, Button, Card, Image, Tag, Typography } from 'antd'
import { TProduct } from '@/types'
import { useNavigate } from 'react-router-dom'
import star from '../../assets/star.svg'
import { motion } from 'framer-motion'

const { Title } = Typography

type ProductCardProps = {
  product: TProduct
  management?: boolean
  compareItems?: TProduct[]
  setCompareItems?: React.Dispatch<React.SetStateAction<TProduct[]>>
}

const ProductCard = ({
  product,
  management,
  compareItems,
  setCompareItems,
}: ProductCardProps) => {
  const navigate = useNavigate()
  const {
    name,
    price,
    image,
    description,
    _id,
    category,
    brand,
    quantity,
  } = product

  const handleAddToCompare = (product: TProduct) => {
    if (compareItems && compareItems.length < 3) {
      setCompareItems?.([...compareItems, product])
    }
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className=" rounded-2xl shadow-xl"
    >
      <Badge>
        <Card
          hoverable
          className="w-full sm:w-[300px] overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          cover={
            <Image
              alt={name}
              src={image}
              className="w-full h-full object-cover"
            />
          }
        >
          <Title title={name} className="line-clamp-1" level={4}>
            {name}
          </Title>
          <div className="flex justify-between items-center mb-2">
            <Tag color="green" className="">
              {category}
            </Tag>
            
            <Tag color={quantity > 0 ? 'success' : 'error'}>
              {quantity > 0 ? 'In Stock' : 'Out of Stock'}
            </Tag>
          </div>
          <p
            title={description}
            className="text-gray-600 text-sm line-clamp-2 mb-4"
          >
            {description}
          </p>
          <div className="flex tems-center justify-between">
          <Tag color="blue" className="">
              By:
              {brand.toLocaleUpperCase()}
            </Tag>
            <div className="flex mr-2 items-center space-x-1">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Button type="primary" onClick={() => navigate(`/product/${_id}`)}>
              View Details
            </Button>

            {!management && (
              <Button className='ml-5' onClick={() => handleAddToCompare(product)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                Buy Now
              </Button>
              
            )}
            
          </div>
        </Card>
      </Badge>
    </motion.div>
  )
}

export default ProductCard
