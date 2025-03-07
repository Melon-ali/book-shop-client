import {
  useGetAllProductsQuery,
  useGetAuthorsQuery,
} from "@/redux/features/admin/productManagement.api";
import { TProduct, TQueryParams } from "@/types";
import { useState } from "react";
import ProductCard from "../admin/ProductCard";
import { MdCompareArrows } from "react-icons/md";
import {
  Badge,
  Button,
  Drawer,
  Empty,
  Image,
  Input,
  Pagination,
  Select,
  Slider,
  Spin,
  Table,
  Tag,
  Typography,
} from "antd";
import Search from "antd/es/input/Search";
import { categoryOptions } from "@/constants/productConstants";
import { FilterOutlined } from "@ant-design/icons";

const sortOptions = [
  { value: "name", label: "Name (A-Z)" },
  { value: "-name", label: "Name (Z-A)" },
  { value: "-price", label: "Price (High-Low)" },
  { value: "price", label: "Price (Low-High)" },
  { value: "-createdAt", label: "Latest" },
  { value: "-quantity", label: "Availability (High-Low)" },
  { value: "quantity", label: "Availability (Low-High)" },
];
export default function AllProducts() {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [compareItems, setCompareItems] = useState<TProduct[]>([]);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const { data: productsData, isFetching } = useGetAllProductsQuery([
    ...params,
  ]);

  const { data: authorsData } = useGetAuthorsQuery({ skip: !isFetching });

  const authors = authorsData?.data.map((author: string) => ({
    value: author,
    label: author,
  }));

  return (
    <div>
      <h1 className="text-center text-4xl mt-20 mb-10 font-bold">
        All Books
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10 px-10">
        <div />
        <Search
          className="w-full md:w-[450px]"
          placeholder="Search books..."
          enterButton="Search"
          allowClear
          size="large"
          loading={isFetching}
          onSearch={(value) => {
            setParams([{ name: "searchTerm", value }]);
          }}
          onChange={(e) => {
            setParams([{ name: "searchTerm", value: e.target.value }]);
          }}
        />
        <Button
          size="large"
          icon={<FilterOutlined />}
          onClick={() => setOpenDrawer(true)}
        >
          Filters
        </Button>
      </div>

      <Drawer
        title="Filter Products"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        width={320}
      >
        <div className="flex flex-col gap-5">
          {/* category  */}
          <div>
            <Typography.Text strong>Category</Typography.Text>
            <Select
              size="large"
              placeholder="Select Category..."
              className="w-full mt-2"
              options={categoryOptions}
              allowClear
              loading={isFetching}
              onChange={(value) => {
                if (value) {
                  const existingParams = params.filter(
                    (param) => param.name !== "category"
                  );
                  setParams([...existingParams, { name: "category", value }]);
                } else {
                  setParams([]);
                }
              }}
            />
          </div>
          {/* sort by  */}
          <div>
            <Typography.Text strong>Sort By</Typography.Text>
            <Select
              size="large"
              placeholder="Sort By..."
              className="w-full mt-2"
              options={sortOptions}
              allowClear
              loading={isFetching}
              onChange={(value) => {
                if (value) {
                  const existingParams = params.filter(
                    (param) => param.name !== "sort"
                  );
                  setParams([
                    ...existingParams,
                    { name: "sort", value },
                    { name: "page", value: "1" },
                  ]);
                } else {
                  setParams([]);
                }
              }}
            />
          </div>
          {/* price range  */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <Typography.Text strong>Price Range</Typography.Text>
              <Button
                size="small"
                onClick={() => {
                  setPriceRange([0, 10000]);
                  setParams(
                    params.filter(
                      (param) =>
                        param.name !== "minPrice" && param.name !== "maxPrice"
                    )
                  );
                }}
              >
                Clear
              </Button>
            </div>
            <div className="mt-2">
              <Slider
                range
                min={0}
                max={10000}
                step={100}
                value={priceRange}
                tooltip={{
                  formatter: (value) => `${value}`,
                }}
                onChange={(value: number | number[]) => {
                  if (Array.isArray(value) && value.length === 2) {
                    const existingParams = params.filter(
                      (param) =>
                        param.name !== "minPrice" && param.name !== "maxPrice"
                    );
                    setPriceRange(value as [number, number]);
                    setParams([
                      ...existingParams,
                      { name: "minPrice", value: value[0].toString() },
                      { name: "maxPrice", value: value[1].toString() },
                    ]);
                  }
                }}
              />
              <div className="flex justify-between mt-2">
                <Typography.Text type="secondary">${0}</Typography.Text>
                <Typography.Text type="secondary">${10000}+</Typography.Text>
              </div>
              <div className="flex gap-4 mt-4">
                <div>
                  <Typography.Text type="secondary">Min</Typography.Text>
                  <Input
                    size="middle"
                    prefix="$"
                    value={priceRange[0]}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (!isNaN(value)) {
                        setPriceRange([value, priceRange[1]]);
                        const existingParams = params.filter(
                          (param) =>
                            param.name !== "minPrice" &&
                            param.name !== "maxPrice"
                        );
                        setParams([
                          ...existingParams,
                          { name: "minPrice", value: value.toString() },
                          { name: "maxPrice", value: priceRange[1].toString() },
                        ]);
                      }
                    }}
                  />
                </div>
                <div>
                  <Typography.Text type="secondary">Max</Typography.Text>
                  <Input
                    size="middle"
                    prefix="$"
                    value={priceRange[1]}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (!isNaN(value)) {
                        setPriceRange([priceRange[0], value]);
                        setParams([
                          { name: "minPrice", value: priceRange[0].toString() },
                          { name: "maxPrice", value: value.toString() },
                        ]);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* author select  */}
          <div>
            <Typography.Text strong>Author</Typography.Text>
            <Select
              size="large"
              placeholder="Select Author..."
              className="w-full mt-2"
              options={authors}
              allowClear
              loading={isFetching}
              onChange={(value) => {
                if (value) {
                  const existingParams = params.filter(
                    (param) => param.name !== "author"
                  );
                  setParams([...existingParams, { name: "author", value }]);
                } else {
                  setParams([]);
                }
              }}
            />
          </div>
        </div>
      </Drawer>
      {isFetching ? (
        <div className="flex justify-center items-center h-screen">
          <Spin size="large" />
        </div>
      ) : productsData?.data.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            styles={{ image: { height: 200 } }}
            description={
              <Typography.Text type="secondary">
                No Products found.
              </Typography.Text>
            }
          ></Empty>
        </div>
      ) : (
        <>
          <div className="md:flex flex-wrap gap-5 justify-center space-y-4 md:space-y-0 p-4 items-center">
            {productsData?.data?.map((product: TProduct) => (
              <ProductCard
                key={product?._id}
                product={product}
                compareItems={compareItems}
                setCompareItems={setCompareItems}
              />
            ))}
          </div>
          <div className="flex justify-center my-8">
            <Pagination
              current={productsData?.meta?.page}
              total={productsData?.meta?.totalDocuments}
              pageSize={productsData?.meta?.limit}
              onChange={(newPage, pageSize) => {
                const existingParams = params.filter(
                  (param) => param.name !== "page" && param.name !== "limit"
                );
                setParams([
                  ...existingParams,
                  { name: "page", value: newPage.toString() },
                  { name: "limit", value: pageSize.toString() },
                ]);
              }}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} products`
              }
              showSizeChanger={true}
            />
          </div>
        </>
      )}
      {compareItems.length > 0 && (
        <Badge count={compareItems.length} className="fixed bottom-8 right-8">
          <Button
            type="primary"
            shape="circle"
            icon={<MdCompareArrows />}
            onClick={() => setDrawerVisible(true)}
            size="large"
          />
        </Badge>
      )}
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <span>Compare Books</span>
            <Button danger onClick={() => setCompareItems([])}>
              Clear All
            </Button>
          </div>
        }
        placement="right"
        width={720}
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      >
        <Table
          dataSource={compareItems.map((item) => ({ ...item, key: item._id }))}
          style={{ overflow: "auto" }}
          columns={[
            {
              title: "Image",
              dataIndex: "image",
              render: (image) => <Image src={image} width={100} />,
            },
            {
              title: "Name",
              dataIndex: "name",
              render: (text) => (
                <Typography.Text strong>{text}</Typography.Text>
              ),
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (price) => <Tag color="green">${price}</Tag>,
            },
            {
              title: "Author",
              dataIndex: "author",
            },
            {
              title: "Category",
              dataIndex: "category",
            },
            {
              title: "Actions",
              render: (_, record) => (
                <Button
                  danger
                  onClick={() =>
                    setCompareItems((items) =>
                      items.filter((item) => item._id !== record._id)
                    )
                  }
                >
                  Remove
                </Button>
              ),
            },
          ]}
        />
      </Drawer>
    </div>
  );
}
