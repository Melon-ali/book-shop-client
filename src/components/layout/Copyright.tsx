import methods from '../../assets/icons/methods.png'

export default function Copyright() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">&copy; TailCommerce - All_Right_Reserved</p>
        <div>
          <img
            src={methods}
            alt="methods"
            className="h-5"
            width={250}
            height={20}
          />
        </div>
      </div>
    </div>
  )
}
