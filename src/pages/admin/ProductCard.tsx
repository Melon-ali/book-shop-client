/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Tag } from 'antd'
import { TProduct } from '@/types'
import { useNavigate } from 'react-router-dom'
import star from '../../assets/star.svg'
import { motion } from 'framer-motion'

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
  const { name, image, price, _id, category, author, quantity } = product

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
      
      <div className="space-y-3">
        <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
          <img className="max-w-[144px]" src={image} />
        </div>
        <div className="space-y-3 px-5 pb-2">
          <h4 className="text-lg font-bold lg:text-xl">{name}</h4>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-xs lg:text-sm">
                By : <span>{author}</span>
              </p>
              <div className="flex justify-between items-center mb-2">
                <Tag color="green" className="">
                  {category}
                </Tag>

                <Tag color={quantity > 0 ? 'success' : 'error'}>
                  {quantity > 0 ? 'In Stock' : 'Out of Stock'}
                </Tag>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold lg:text-xl">$ {price}</h4>
            <div className="flex items-center space-x-1">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs lg:text-sm">
            <Button type="primary" onClick={() => navigate(`/product/${_id}`)}>
              View Details
            </Button>
            {!management && (
              <Button
                className="ml-5"
                onClick={() => handleAddToCompare(product)}
              >
                Compare
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
