import { useGetAllProductsQuery } from "@/redux/features/admin/productManagement.api";
import { TProduct } from "@/types";
import ProductCard from "../admin/ProductCard";
import { Button, Spin } from "antd";
import { Link } from "react-router-dom";

export default function Featured() {
  const { data: productsData, isFetching } = useGetAllProductsQuery(undefined);
  const featuredProducts = productsData?.data?.slice(0, 4);
  return (
    <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <h1 className="text-center text-4xl mt-10 mb-10 font-bold">
        Featured Books
      </h1>
      {isFetching ? (
        <div className="flex justify-center items-center h-screen">
          <Spin size="large" />
        </div>
      ) : (
        <div className="md:flex flex-wrap gap-5 justify-center space-y-4 md:space-y-0 p-4 items-center">
          {featuredProducts?.map((product: TProduct) => (
            <ProductCard key={product?._id} product={product} management={true} />
          ))}
        </div>
      )}
      <Link to={"all-products"} className="flex justify-center mt-10">
      <Button type="primary">View All</Button>
      </Link>
    </div>
  );
}
