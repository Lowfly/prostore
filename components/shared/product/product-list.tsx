import { Product } from "@/types";
import ProductCard from "./product-card";

interface ProductListProps {
  data: Product[];
  title?: string;
  limit?: number;
}

const ProductList = (props: ProductListProps) => {
  const limitedData = props.limit
    ? props.data.slice(0, props.limit)
    : props.data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{props.title}</h2>
      {props.data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitedData.map((product: Product) => (
            <ProductCard key={product.name} product={product}></ProductCard>
          ))}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
